---
name: html-diagram
description: Legacy compatibility command for users who explicitly invoke html-diagram. Use when the user types html-diagram; complete the request as a self-contained HTML diagram, but use the html skill for new natural-language diagram and architecture requests.
---

# HTML Diagram (legacy alias)

This command remains temporarily so existing workflows do not break. Complete the user's request; do not stop merely to tell them the command moved.

If the `html` skill is installed, invoke it for this request and follow its Diagram guidance. Otherwise:

- Match the user's or project's visual language; do not apply a default house style.
- Decide whether the subject calls for a topology, sequence, process, state, hierarchy, timeline, matrix, or quantitative view.
- Choose HTML/CSS, SVG, Canvas, or WebGL according to the information rather than forcing every diagram into SVG.
- Keep labels, grouping, connectors, direction, and hierarchy legible before adding interaction.
- Add sequencing, filtering, path tracing, pan/zoom, or animation only when each helps the user answer a real question.
- Make overlays dismissible, controls keyboard-accessible, and motion respectful of `prefers-reduced-motion`.
- Deliver one self-contained HTML file and verify it at wide and narrow viewports.

After completing the artifact, mention that future requests can use `$html`.
