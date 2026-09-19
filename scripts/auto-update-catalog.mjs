/**
 * Fetches all Vercel projects for the team and regenerates data/projects.json.
 *
 * Usage:
 *   VERCEL_TOKEN=<token> VERCEL_TEAM_ID=<teamId> node scripts/auto-update-catalog.mjs
 *
 * Environment variables:
 *   VERCEL_TOKEN   — required; a Vercel API token with read access to projects
 *   VERCEL_TEAM_ID — optional; defaults to the hardcoded team slug
 */

import { writeFile } from 'node:fs/promises';
import { createCatalog } from './catalog.mjs';

const VERCEL_TOKEN = process.env.VERCEL_TOKEN;
const VERCEL_TEAM_ID = process.env.VERCEL_TEAM_ID ?? 'team_ARK7HKobyCMp0PCArQTLxbz6';

if (!VERCEL_TOKEN) {
  throw new Error('VERCEL_TOKEN environment variable is required');
}

async function fetchAllProjects() {
  const projects = [];
  let from;

  do {
    const url = new URL('https://api.vercel.com/v9/projects');
    url.searchParams.set('teamId', VERCEL_TEAM_ID);
    url.searchParams.set('limit', '100');
    if (from !== undefined) url.searchParams.set('from', String(from));

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 30_000);
    let resp;
    try {
      resp = await fetch(url.toString(), {
        headers: { Authorization: `Bearer ${VERCEL_TOKEN}` },
        signal: controller.signal,
      });
    } finally {
      clearTimeout(timer);
    }

    if (!resp.ok) {
      const body = await resp.text().catch(() => '');
      throw new Error(`Vercel API ${resp.status}: ${body}`);
    }

    const data = await resp.json();
    projects.push(...(data.projects ?? []));
    from = data.pagination?.next;
  } while (from !== undefined);

  return projects;
}

const rawProjects = await fetchAllProjects();
const checkedAt = new Date().toISOString();

// Transform to the shape createCatalog expects
const source = {
  checkedAt,
  projects: rawProjects.map((project) => {
    // Use targets.production for stable production aliases, not latestDeployments[0]
    // which may be a branch/PR deployment rather than the production one.
    const prod = project.targets?.production ?? null;
    return {
      name: project.name,
      ready: prod?.readyState ?? null,
      domains: Array.isArray(prod?.alias) ? prod.alias : [],
      framework: project.framework ?? null,
    };
  }),
};

const catalog = createCatalog(source);
await writeFile(
  new URL('../data/projects.json', import.meta.url),
  JSON.stringify(catalog, null, 2) + '\n',
);

console.log(`✓ ${catalog.projects.length} projects written — ${checkedAt}`);
