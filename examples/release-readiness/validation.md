# Validation record

Validated July 29, 2026, on macOS with Google Chrome.

## Repository example

| Check | Result |
| --- | --- |
| Desktop rendering | Passed at 1440 × 1000 for all three stages and all three wireframe directions |
| Mobile rendering | Passed at 390 × 844 with reduced motion enabled |
| Horizontal overflow | None at the page level in any tested stage or direction |
| Console and page errors | None |
| Self-containment | No external scripts, styles, images, fonts, APIs, or services |
| Semantic checks | No duplicate IDs, missing ARIA references, or unnamed buttons |
| Automated accessibility | No WCAG A or AA violations in the tested desktop and mobile views |

The Guided gate wireframe was also tested as a click-through flow. Back, rerun, continue, and return actions work with pointer, `Enter`, and `Space`; each transition updates the current step and evidence, then moves focus to the new step heading.

Invalid wireframe `?v=` values fall back to the Decision first direction. In the prototype, the skip link switches from Activity to Overview before it focuses the release checks.

The prototype was tested in its blocked, dialog, loading, save-error, ready, production-boundary, empty-notes, and add-note states. The test covered:

- disabled release gating;
- form validation and preserved input after an error;
- retry from error to ready;
- failed rerun from ready back to blocked;
- focus restoration after dialogs;
- `Tab`, `Shift+Tab`, `Enter`, `Space`, arrow-key, and `Escape` behavior;
- overview and activity navigation;
- empty notes and add-note recovery;
- reduced-motion behavior;
- safe rendering of reviewer-entered text.

The screenshots in this directory were captured from the validated source. The prototype screenshots show the reached ready state rather than the initial blocked state.

## Clean skill invocations

Each skill was invoked in an isolated agent context with the product brief embedded in the prompt. The agents were instructed not to inspect the repository examples or screenshots, and all generated files were written outside the repository.

| Skill | Result |
| --- | --- |
| `html` | Routed a structural review request to `html-wireframe` by reading the sibling skill, then completed the artifact without inspecting repository examples |
| `html-wireframe` | Produced three distinct structural directions and passed wide and narrow rendering checks |
| `html-prototype`, mockup mode | Produced a static release-control mockup with no dead controls and passed wide, narrow, reduced-motion, overflow, console, and contrast checks |
| `html-prototype`, prototype mode | Produced a working blocked-to-ready flow with passing and failing reruns, loading, validation, dialog focus containment, keyboard support, mobile layout, and a production boundary |
| `html-plan` | Preserved the four checks, owner, evidence, blocker, sequence, and readiness gate in a responsive HTML plan |
| `html-diagram` | Produced a responsive release-gate process diagram with failed and passing branches that stop at the production-request boundary |

The first clean mockup run exposed inherited dark text on a dark decision surface. The skill was updated to require computed foreground and background checks on every distinct surface. A fresh invocation then passed, with a lowest measured contrast ratio of 4.58:1.

## Packaging

- All five skills pass the platform skill validator.
- Only `html` allows implicit invocation. The four direct-invocation specialists remain independently usable.
- The repository passes strict Vercel, Claude, and Codex skill-format validation.
- Every JSON manifest parses.
- Claude Code's native marketplace validator passes.
- The current `skills` CLI discovers all five entries.
- A clean local install copied all five skills and the shared `html` references into temporary Claude Code and Codex project directories.
- `git diff --check` passes.
