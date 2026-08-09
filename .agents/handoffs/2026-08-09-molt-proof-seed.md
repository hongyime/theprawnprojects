# MOLT Proof Seed

Created: 2026-08-09 SGT
Project: theprawnprojects
Branch: `molt/state-continuity`
Status: seeded active repo for cross-harness proof

## Current State Summary

This repository is the single active downstream repo seeded for MOLT Layer 0.
It has a committed `.agents/STATE.md`, and its ignore rules allow state,
journal, and handoff files to be tracked without opening up the whole broad
dot-directory surface.

## Important Context

The source-of-truth MOLT implementation lives in `sourcerepo` on branch
`molt/state-continuity`. This repo is intentionally minimal: it exists to prove
that an ordinary active repo can carry durable state without committing private
harness databases or generated skills.

## Immediate Next Steps

Use this repo only for the Phase 3 continuity proof. A cold alternate CLI should
read `X:\01 REPOSITORIES\_shell\PROGRESS.md`, then confirm that this repo is on
`molt/state-continuity` and that `.agents/STATE.md` plus this handoff are present.

## Architecture Overview

The downstream repo carries only local state needed for continuity. Global
rules, central sync behavior, and harness pointers remain in `sourcerepo`, so
future active repos can opt in by adding state when there is actual work to
preserve.

## Critical Files

- `.agents/STATE.md`
- `.agents/handoffs/2026-08-09-molt-proof-seed.md`
- `.gitignore`

## Files Modified

The MOLT branch has the seeded state file and ignore-rule changes already
committed. The current extra work is this handoff and the state update that
mentions it.

## Decisions Made

Only one downstream repo was seeded to avoid noisy empty state files across the
estate. State files are public-safe and must not include secrets or personal
details.

## Assumptions Made

The proof succeeds only when a different harness can resume from the progress
file and independently identify the current repo state. A same-session check is
not enough because the point is harness continuity.

## Potential Gotchas

Do not start broad SHELL remediation from this repo during the proof. Do not
commit generated skill folders. If an alternate CLI cannot read this state, fix
Layer 0 before continuing to later phases.
