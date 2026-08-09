# STATE

**Updated:** 2026-08-09 SGT
**By:** codex / machine: desktop
**Branch:** `molt/state-continuity`
**Ended because:** in progress

---

## Task

Use `theprawnprojects` as the first active repo proving MOLT Layer 0: committed
plain-text state under `.agents/` that survives harness switches.

## Status

`in-progress`

## Done so far

- Seeded `.agents/STATE.md` in this repo only.
- Central `sourcerepo` branch `molt/state-continuity` now preserves `.agents/`
  through sync while keeping `.claude/` local-only.

## Next steps

1. Open a different CLI from the discovered harness list.
2. Ask it to resume from `X:\01 REPOSITORIES\_shell\PROGRESS.md`.
3. Verify it reads this file and understands the current branch/state.

## Decisions made

- Seed only one active repo to avoid noisy empty state files across all repos.
- Keep secrets and personal details out of `.agents/`.

## Gotchas

- Windows/PowerShell environment; bash has fork issues on this machine.
- `.agents/STATE.md` is intended to be committed and may be public.

## Files in play

- `.agents/STATE.md`
- `X:\01 REPOSITORIES\_shell\PROGRESS.md`
- `X:\01 REPOSITORIES\sourcerepo\AGENTS.md`

## Open questions for the human

- Which alternate harness should be used for the Phase 3 proof?
