# React Magma Design Best Practices

Design guidance distilled from React Magma's design system documentation. These are recommendations, not hard rules — defer to project-specific conventions when they exist.

## Core Design Principles

React Magma is built for educational software. Every decision should:

1. **Anticipate Needs** — Don't overburden users with options. Assume what they need and when.
2. **Tolerate Mistakes** — Prevent errors and make recovery as easy as making the mistake.
3. **Inspire Confidence** — Clear messaging and reliable outcomes at every step.
4. **Cultivate Focus** — Minimize distractions. Never override the user's primary experience.
5. **Preserve Simplicity** — Common tasks should be fast and self-explanatory.
6. **Encourage Mobility** — Ensure the experience works across all devices.

## Color Usage

Colors have semantic meaning. Don't use them arbitrarily.

| Color Scale | Use For | Don't Use For |
|-------------|---------|---------------|
| **Primary** (indigo) | Primary actions, text links, active states | Backgrounds, decorative elements |
| **Secondary** (yellow) | Important CTAs on purchase/marketing pages | General buttons or status |
| **Danger** (red) | Destructive actions, error states, error messages | Non-destructive buttons like "Save" or "Submit" |
| **Warning** (orange) | Warnings, impeded progress, caution states | Errors (use danger) or info (use info) |
| **Success** (green) | Successful completion, positive confirmation | Primary actions or links |
| **Info** (blue) | Neutral informational feedback, focus states | Warnings or errors |
| **Neutral** (gray) | Typography, borders, backgrounds, disabled states | Status indicators (use semantic colors) |

**Accessibility rules:**
- 4.5:1 contrast ratio minimum for normal text
- 3:1 contrast ratio minimum for large text (18px+) and non-text UI elements
- Never use color as the only way to communicate meaning — pair with icons, text, or patterns

## Typography

### Choosing a Type Set

- **Productive** (default) — Task-focused UIs, dashboards, forms, admin interfaces. Use this unless you have a specific reason not to.
- **Expressive** — Marketing pages, landing pages, editorial content. Larger, more dynamic headings.
- **Narrative** — Long-form reading (textbooks, articles). Uses Noto Serif.

### Heading Hierarchy

- Don't skip heading levels (e.g., h1 → h4). Screen readers use heading levels for navigation.
- Use `level` prop for semantic level and `visualStyle` to override visual size when needed:

```tsx
// Modal title: semantically h1, visually smaller
<Heading level={1} visualStyle={TypographyVisualStyle.headingSmall}>
  Confirm Delete
</Heading>
```

- Be consistent — if page titles use `headingLarge`, use it on every page.

### Text Color

- Keep text neutral-colored by default. Only add color when it reinforces meaning.
- Use `neutral700` or `neutral800` for primary text, not `neutral900` (pure black).
- Use `neutral500` for secondary/subdued text.
- If you remove the color, the meaning should still be clear.

### Font Weight

- Prefer using font weight for emphasis over increasing font size.
- Bold at the same size has more visual emphasis than lighter weight at a larger size.
- Use italic only for specific emphasis: titles, technical terms, captions — not for general styling.

## Spacing

React Magma uses an 8px grid system. Always use `spaceScale` tokens.

```tsx
// Prefer theme tokens
padding: ${props => props.theme.spaceScale.spacing05}; // 16px

// Avoid arbitrary values
padding: 13px;  // Not on the scale
padding: 15px;  // Not on the scale
```

### Using Spacing to Show Relationships

- **Closer = related.** Elements that belong together should have less space between them than unrelated elements.
- **More space = more importance.** Extra surrounding space draws attention to an element.
- **White space is intentional.** Don't fill every gap — breathing room prevents cognitive overload.

### Spacing Guidelines

- Use `Spacer` component between form fields, not margin hacks.
- Use `spaceScale.spacing05` (16px) as a comfortable default gap between form fields.
- Use `spaceScale.spacing06` (24px) or `spaceScale.spacing08` (32px) between sections.
- Don't use percentage-based padding/margin inside components — use the scale.
- Percentages are fine for layout division (50/50 splits, thirds).

## Layout

### When to Use Which Layout Component

| Need | Use | Not |
|------|-----|-----|
| Equal-width columns, grid alignment | `Grid` | `Flex` with manual widths |
| Single row/column of items with flexible sizing | `Flex` | `Grid` for simple stacking |
| Max-width centered content | `Container` | Custom `max-width` div |
| Space between two elements | `Spacer` | Empty `div` with margin |
| Hide content at certain screen sizes | `HideAtBreakpoint` | CSS media queries manually |
| Different content at different sizes | `BreakpointsContainer` | Multiple hidden/shown divs |

### Responsive Design

- Every layout must work from mobile (375px) to desktop (1200px+).
- Content max-width should not exceed 1600px.
- At small breakpoints: reduce columns, stack elements vertically, convert sidebars to drawers.
- Use the built-in breakpoints — don't invent custom ones:
  - `xs`: 0, `small`: 600px, `medium`: 768px, `large`: 1024px, `xl`: 1200px

### Column Grids

| Viewport | Columns | Gutters/Margins |
|----------|---------|-----------------|
| 0 – 375px | 4 | 16px |
| 376 – 600px | 6 | 16px |
| 601 – 768px | 6 | 24px |
| 769px+ | 12 | 24px |

## Choosing the Right Component

### Feedback Components

| Scenario | Use | Why |
|----------|-----|-----|
| Transient success/info message | `Toast` | Auto-dismisses, doesn't block workflow |
| Inline contextual feedback | `Alert` | Stays visible near the relevant content |
| Page-level announcement | `Banner` | Full-width, high visibility |
| Form field error | `Input` with `errorMessage` prop | Directly associated with the field |
| Loading state | `LoadingIndicator` or `Spinner` | Built-in accessible announcements |
| Empty content area | `EmptyState` | Provides guidance on next steps |

### Overlay Components

| Scenario | Use | Why |
|----------|-----|-----|
| Confirmation or critical decision | `Modal` | Blocks interaction, demands attention |
| Secondary content or settings panel | `Drawer` | Slides in without losing page context |
| Quick actions on an element | `Dropdown` | Appears near the trigger |
| Extra info on hover/focus | `Tooltip` | Lightweight, no interaction needed |
| Rich content on click | `Popover` | Supports headers, footers, interactive content |

### Selection Components

| Scenario | Use | Why |
|----------|-----|-----|
| Choose from a predefined list (< 7 items) | `RadioGroup` | All options visible at once |
| Choose from a long list | `Select` | Searchable, scrollable dropdown |
| Type-ahead/autocomplete | `Combobox` | Filters as user types |
| Native browser select behavior | `NativeSelect` | Mobile-friendly, OS-native UX |
| On/off setting | `Toggle` | Clear binary state |
| Multiple selections from a short list | `Checkbox` group in `FormGroup` | All options visible |
| Multiple selections from a long list | Multi `Select` | Searchable, manageable |

## Form Design

### Structure

- Group related fields with `FormGroup` — don't present more than 5-7 ungrouped fields.
- Use `Form` wrapper with `header` and `description` props for self-documenting forms.
- Put primary action on the right, secondary (cancel) on the left in `ButtonGroup`.
- Use `ButtonType.submit` on the primary action, not `ButtonType.button`.

### Validation

- Show errors inline on the field, not in a separate summary (unless also showing a summary at top).
- Use `errorMessage` prop on form fields — don't build custom error display.
- Validate on blur or submit, not on every keystroke (avoids frustrating users mid-input).

### Labels

- Every form field must have a label — use `labelText` prop.
- Don't use placeholder text as a substitute for labels.
- Place labels above inputs (default) for best scannability.

## Accessibility Reminders

React Magma handles most accessibility automatically. Your job is to not break it:

- **Don't remove focus outlines.** The focus ring is essential for keyboard users.
- **Don't override `role` or `aria-*` attributes** that components set automatically.
- **Do provide `labelText`** on every form field and `aria-label` on icon-only buttons.
- **Do use `VisuallyHidden`** for content that screen readers need but sighted users don't.
- **Do use `Announce`** for dynamic content changes that screen readers should know about.
- **Do test keyboard navigation** — all interactive elements must be reachable via Tab and operable via Enter/Space.
- **Do use semantic heading levels** — the visual style can differ from the semantic level via `visualStyle` prop.

## Dark Mode / Inverse

- Use `isInverse` prop on container components — don't create custom dark themes.
- When a parent has `isInverse`, child components automatically adapt. You don't need `isInverse` on every child.
- Use `InverseContext` and `useIsInverse` hook when building custom components that need to respond to inverse mode.
- Design for both light and dark — test all custom styled components in both modes.
- Use `focusInverse` and `borderInverse` theme tokens in inverse contexts.
