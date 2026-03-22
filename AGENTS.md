# React Magma

React Magma is Cengage's open-source, accessibility-first React component library. Monorepo managed with Lerna + Nx.

## Packages

| Package | Path | Description |
|---------|------|-------------|
| `react-magma-dom` | `packages/react-magma-dom` | Core component library (60+ components, enums, hooks, theming, i18n) |
| `@react-magma/charts` | `packages/charts` | Data visualization (bar, line, area, pie, donut) |
| `@react-magma/dropzone` | `packages/dropzone` | Drag-and-drop file upload |
| `react-magma-icons` | (separate repo) | SVG icon components |

## Commands

```bash
npm install          # Install all dependencies
npm run build        # Build all packages (Lerna)
npm run test         # Run tests (Jest)
npm run lint         # Lint all packages
```

## Project Structure

```
react-magma/
├── packages/
│   ├── react-magma-dom/     # Core library
│   │   └── src/
│   │       ├── components/  # All components
│   │       ├── theme/       # Theme system (magma.ts, GlobalStyles)
│   │       ├── i18n/        # Internationalization
│   │       └── index.ts     # Single entry point — all public exports
│   ├── charts/              # @react-magma/charts
│   └── dropzone/            # @react-magma/dropzone
├── website/
│   ├── react-magma-docs/    # Docs site (Gatsby)
│   └── react-magma-landing/ # Landing page
├── skills/react-magma/      # AI skill (component APIs, patterns, best practices)
└── .agents/skills/          # Codex skill discovery
```

## React Magma Component Knowledge

For component APIs, enum values, theming, code patterns, and design best practices, see the **react-magma skill** in `.agents/skills/react-magma/`.

Key entry points:
- [SKILL.md](.agents/skills/react-magma/SKILL.md) — Critical rules and quick references
- [Component catalog](.agents/skills/react-magma/references/components.md) — All components with enums
- [Theme reference](.agents/skills/react-magma/references/theme.md) — Color palette, spacing, typography
- [Code patterns](.agents/skills/react-magma/references/patterns.md) — Compound component examples
- [Design best practices](.agents/skills/react-magma/references/best-practices.md) — Color semantics, layout, accessibility

## Documentation

- **Docs site:** https://react-magma.cengage.com
- **LLM index:** https://react-magma.cengage.com/llms.txt
- **GitHub:** https://github.com/cengage/react-magma
