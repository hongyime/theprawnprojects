# STATE

**Updated:** 2026-08-09 SGT
**By:** codex / machine: desktop
**Branch:** `molt/state-continuity`
**Ended because:** ready for cross-harness proof with committed handoff

---

## Task

Use `theprawnprojects` as the first active repo proving MOLT Layer 0: committed
plain-text state under `.agents/` that survives harness switches.

## Status

`ready-for-review`

## Done so far

- Seeded `.agents/STATE.md` in this repo only.
- Central `sourcerepo` branch `molt/state-continuity` now preserves `.agents/`
  through sync while keeping `.claude/` local-only.
- `.gitignore` now allows `.agents/STATE.md`, `.agents/JOURNAL.md`, and
  `.agents/handoffs/**` to be tracked while broad dot-directory cleanup remains.
- Added a committed handoff under `.agents/handoffs/` so the seeded repo can be
  resumed by another harness without depending only on source-repo state.

## Next steps

1. Open a different CLI from the discovered harness list.
2. Ask it to resume from `X:\01 REPOSITORIES\_shell\PROGRESS.md`.
3. Verify it reads this file and understands the current branch/state.
4. Ask it to read `.agents/handoffs/2026-08-09-molt-proof-seed.md`.
5. If successful, push/open PRs for the MOLT branches.

Exact Phase 3 proof prompt to paste into a different CLI:

```text
resume from X:\01 REPOSITORIES\_shell\PROGRESS.md
```

## Decisions made

- Seed only one active repo to avoid noisy empty state files across all repos.
- Keep secrets and personal details out of `.agents/`.

## Gotchas

- Windows/PowerShell environment; bash has fork issues on this machine.
- `.agents/STATE.md` is intended to be committed and may be public.
- `_shell/PROGRESS.md` is outside a Git repo and exists only on this machine
  unless copied or otherwise synced.
- Local Git config previously had credential-bearing remote URL entries; they
  were removed, leaving only `remote.origin.url`.

## Files in play

- `.agents/STATE.md`
- `.agents/handoffs/2026-08-09-molt-proof-seed.md`
- `X:\01 REPOSITORIES\_shell\PROGRESS.md`
- `X:\01 REPOSITORIES\sourcerepo\AGENTS.md`

## Open questions for the human

- Which alternate harness should be used for the Phase 3 proof?

<!-- MOLT_AUTO_START -->
## Auto State

- Updated: 2026-08-09 23:23:22 +08:00
- Machine: PRAWN-E14
- Harness: codex
- Event: harden-test
- Branch: main
- HEAD: 81bed72
- Dirty files: 0
- Resume hint: Read .agents/STATE.md, then the latest file in .agents/handoffs/ if present.
<!-- MOLT_AUTO_END -->
