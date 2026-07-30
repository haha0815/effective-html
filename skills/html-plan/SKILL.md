---
name: html-plan
description: Legacy compatibility command for users who explicitly invoke html-plan. Use when the user types html-plan; complete the request as a pragmatic self-contained HTML plan, but use the html skill for new natural-language plan requests.
---

# HTML Plan (legacy alias)

This command remains temporarily so existing workflows do not break. Complete the user's request; do not stop merely to tell them the command moved.

If the `html` skill is installed, invoke it for this request and follow its Document guidance with high fidelity to the user's material. Otherwise:

- Preserve the user's scope, ordering, commitments, and terminology unless they ask for broader synthesis.
- Improve grammar and structure without inflating the plan into a strategy document.
- Match the user's or project's visual language; do not apply a default house style.
- Use hierarchy, grouping, status, ownership, dependencies, and sequence only where the plan actually contains them.
- Keep the design workmanlike unless the brief earns more treatment.
- Deliver one responsive, accessible, self-contained HTML file and verify it at wide and narrow viewports.

After completing the artifact, mention that future requests can use `$html`.
