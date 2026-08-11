# STATE

**Updated:** 2026-08-11 SGT
**By:** codex / machine: desktop
**Branch:** `wrapup/final`
**Ended because:** waiting for cold different-CLI MOLT proof

---

## Task

Prove MOLT Layer 0 still works in a real downstream repo after the SHELL/MOLT
wrap-up work: committed `.agents/STATE.md` plus a committed handoff must give a
fresh CLI enough context to continue without relying on local Codex memory.

## Status

`in-progress`

## Done so far

- Verified `.agents/STATE.md` is not ignored with `git check-ignore -v`.
- Confirmed `.agents/STATE.md` and `.agents/handoffs/2026-08-09-molt-proof-seed.md`
  are already tracked by Git.
- Created branch `wrapup/final` from `main`.
- Generated a new handoff:
  `.agents/handoffs/2026-08-11-075711-molt-wrapup-proof.md`.
- Updated this state file for a cold resume proof.

## Next steps

1. In a different CLI, cold-start in `X:\01 REPOSITORIES\theprawnprojects`.
2. Say only: `continue`.
3. Verify the CLI reads this file and the new handoff before acting.
4. It should report the current task, branch, and next safe action.

## Decisions made

- Use `theprawnprojects` as the single proof repo to avoid noisy empty state
  files across every repository.
- Keep durable handoff state in `.agents/`, not `.claude/`, because `.claude/`
  remains local-only and is not a cross-harness continuity layer.
- Use `wrapup/final` for this proof to respect the no-commits-to-main rule.

## Gotchas

- Windows/PowerShell environment; bash is unreliable on this machine.
- `.agents/` files are committed and may be public, so do not place secrets,
  private credentials, or personal details here.
- The fresh CLI may not have any local memory-tool context. Trust this file and
  the committed handoff, then verify with Git.

## Files in play

- `.agents/STATE.md` - durable current snapshot for the next CLI.
- `.agents/handoffs/2026-08-11-075711-molt-wrapup-proof.md` - detailed proof
  handoff for the next CLI.
- `.agents/handoffs/2026-08-09-molt-proof-seed.md` - prior proof handoff.

## Open questions for the human

- Which CLI will be used for the cold resume proof?
