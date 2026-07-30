# Effective HTML

One adaptive skill for creating self-contained HTML artifacts: reports, plans, explainers, landing pages, presentations, prototypes, dashboards, tools, diagrams, and data visualizations.

`$html` is opinionated about care, clarity, accessibility, and verification. It is deliberately not opinionated about one palette, typography stack, layout, or diagram style. It follows the user's direction first, then the project's existing design language, then the subject itself.

https://github.com/user-attachments/assets/24306977-7f30-44c9-9bff-55f901d557b0

_The diagram above was made by Fable 5. It demonstrates capability, not a visual template that every artifact should copy._

[Watch the example](https://x.com/backnotprop/status/2065479594023829619?s=20)

<p align="center">
  <a href="https://github.com/backnotprop/plannotator">
    <img src="./star-plannotator.svg" width="340" alt="Like this? Star Plannotator">
  </a>
</p>
<p align="center">
Render and annotate your HTML with <a href="https://github.com/backnotprop/plannotator">Plannotator</a> (optional).
</p>

## Install

```bash
npx skills add plannotator/effective-html
```

List the available entries:

```bash
npx skills add plannotator/effective-html --list
```

Install only the canonical skill:

```bash
npx skills add plannotator/effective-html --skill html
```

Then ask naturally for an HTML artifact or invoke `$html` directly.

### As a Claude Code plugin

```text
/plugin marketplace add plannotator/effective-html
/plugin install plannotator-effective-html@effective-html
```

### As a Codex plugin

```bash
codex plugin marketplace add plannotator/effective-html
codex plugin add plannotator-effective-html@effective-html
```

## How `$html` works

The skill first determines the audience, purpose, form, visual register, fidelity to the input, and useful interaction. It then loads only the guidance needed for the artifact:

- Documents and presentations
- Interfaces and tools
- Diagrams, architecture, and sequences
- Charts and data
- Creative direction when the user or project has not already supplied one

The references teach techniques and decision-making, not a house style.

## Migration from the old commands

`html-diagram` and `html-plan` remain as temporary compatibility commands so existing installations and prompts continue to work. They are no longer separate design systems. New work should use `$html`; the aliases will remain through the `0.2.x` transition and may be removed in a later major release.

## Repository shape

```text
skills/
├── html/
│   ├── SKILL.md
│   ├── agents/openai.yaml
│   └── references/
│       ├── creative-direction.md
│       ├── documents-and-presentations.md
│       ├── interfaces.md
│       ├── diagrams.md
│       └── charts-and-data.md
├── html-diagram/   # temporary compatibility alias
└── html-plan/      # temporary compatibility alias
```

This project was inspired by Thariq Shihipar's [The unreasonable effectiveness of HTML](https://thariqs.github.io/html-effectiveness). The original example gallery is no longer bundled or used as a default visual identity.

<br/>
<p align="center">
  <a href="https://github.com/plannotator/tot">
    <img src="./use-tot.svg" width="300" alt="Share your HTML with tot">
  </a>
</p>
<p align="center">
Create instant share links for your HTML files with <a href="https://github.com/plannotator/tot">tot</a> (optional).
</p>
