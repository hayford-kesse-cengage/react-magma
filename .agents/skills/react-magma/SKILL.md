---
name: react-magma
description: "Provides component APIs and usage patterns for React Magma (react-magma-dom) — Cengage's accessible React component library. Activates when working with react-magma-dom components, theming, i18n, or any project with react-magma-dom in its dependencies."
user-invocable: false
---

# React Magma — Agent Instructions

React Magma is Cengage's open-source, accessibility-first React component library. It provides 60+ WCAG 2.1 AA-compliant components with built-in theming, internationalization (i18n), and responsive design. All components are TypeScript-first and use Emotion for styling. The primary package is `react-magma-dom`.

**Package ecosystem:**

| Package | Purpose |
|---------|---------|
| `react-magma-dom` | Core component library (all components, enums, hooks, theming, i18n) |
| `react-magma-icons` | SVG icon components |
| `@react-magma/charts` | Data visualization (bar, line, area, pie, donut charts) |
| `@react-magma/dropzone` | Drag-and-drop file upload |

Peer dependencies: `react >= 16.8`, `react-dom >= 16.8`, `@emotion/react`, `@emotion/styled`.

---

## Critical Rules

### RULE: Wrap root in ThemeContext.Provider + GlobalStyles

Every app must include this at the root. Without it, components will not render correctly.

```tsx
import { ThemeContext, magma, GlobalStyles } from 'react-magma-dom';

function App({ children }) {
  return (
    <ThemeContext.Provider value={magma}>
      <GlobalStyles />
      {children}
    </ThemeContext.Provider>
  );
}
```

### RULE: Import everything from 'react-magma-dom'

All components, enums, hooks, theme objects, and utilities come from a single entry point. Never import from internal paths.

```tsx
// CORRECT
import { Button, ButtonColor, Input, Select, magma, styled } from 'react-magma-dom';

// WRONG — never import from internal paths
import { Button } from 'react-magma-dom/components/Button';
```

### RULE: Use enum values, not string literals

React Magma uses TypeScript enums for all configuration props. Always import and use the enum.

```tsx
// CORRECT
import { Button, ButtonColor, ButtonVariant } from 'react-magma-dom';
<Button color={ButtonColor.primary} variant={ButtonVariant.solid}>Save</Button>

// WRONG — string literals will not type-check
<Button color="primary" variant="solid">Save</Button>
```

### RULE: Use isInverse for dark mode, not custom themes

Dark/inverse mode is built in. Pass `isInverse` to container components. Do not create a separate dark theme.

```tsx
// CORRECT
<Card isInverse>
  <CardBody>
    <Heading isInverse level={2}>Dark Section</Heading>
  </CardBody>
</Card>

// WRONG — do not create a custom dark theme
const darkTheme = { ...magma, colors: { ...magma.colors, background: '#000' } };
```

### RULE: Use compound components correctly

Table, Tabs, Dropdown, Accordion, Popover, and Stepper use compound component patterns. Always use the full component tree.

**Table** — `Table > TableHead/TableBody > TableRow > TableHeaderCell/TableCell`
**Tabs** — `TabsContainer > Tabs > Tab` + `TabPanelsContainer > TabPanel`
**Dropdown** — `Dropdown > DropdownButton + DropdownContent > DropdownMenuItem`
**Accordion** — `Accordion > AccordionItem > AccordionButton + AccordionPanel`
**Popover** — `Popover > PopoverTrigger + PopoverContent`
**Stepper** — `Stepper > Step`

### RULE: Dropzone, Charts, and Icons are separate packages

These are NOT included in `react-magma-dom`. Import from their own packages.

```tsx
// Icons
import { InfoIcon, CheckIcon } from 'react-magma-icons';

// Dropzone
import { Dropzone } from '@react-magma/dropzone';

// Charts
import { BarChart } from '@react-magma/charts';
```

### RULE: Use Emotion styled for custom styling

React Magma re-exports Emotion's `styled` from `react-magma-dom`. Use it for custom styled components. Access theme values from `props.theme`.

```tsx
import { styled } from 'react-magma-dom';

const CustomCard = styled.div`
  padding: ${props => props.theme.spaceScale.spacing06};
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.colors.neutral700};
`;
```

### RULE: Don't add redundant ARIA attributes

Accessibility is built into every component. Do not add `role`, `aria-label`, or other ARIA attributes that the component already provides. Only add ARIA when you have custom semantics beyond what the component offers (e.g., `aria-label` on Tabs for navigation context).

### RULE: Use colors semantically

Colors have meaning. `danger` = destructive actions and errors only. `success` = positive confirmation. `warning` = caution. `info` = neutral informational feedback. Don't use `ButtonColor.danger` for a "Save" button. Never use color as the only way to communicate meaning — always pair with text or icons.

### RULE: Use spaceScale tokens, not arbitrary pixel values

Always use theme spacing tokens (`spaceScale.spacing01` through `spacing14`) for padding, margin, and gap. Never use arbitrary values like `13px` or `15px`. Use the `Spacer` component between form fields instead of margin hacks.

### RULE: Don't skip heading levels

Heading levels (h1–h6) must be sequential for screen reader navigation. If you need a different visual size, use the `visualStyle` prop: `<Heading level={2} visualStyle={TypographyVisualStyle.headingSmall}>`.

### RULE: Choose the right feedback component

- `Toast` — transient success/info messages (auto-dismisses)
- `Alert` — inline contextual feedback (stays visible near related content)
- `Banner` — page-level announcements (full-width, high visibility)
- `Modal` — confirmations and critical decisions (blocks interaction)
- `Drawer` — secondary content or settings panels (slides in, preserves page context)

### RULE: Every form field must have a label

Always provide `labelText` on form inputs. Never use placeholder text as a substitute for labels. Group related fields with `FormGroup` when you have more than 5 fields.

---

## Component Quick Reference

| Component | Key Enums | Sub-components |
|-----------|-----------|----------------|
| **Button** | `ButtonColor` (primary, secondary, subtle, danger), `ButtonVariant` (solid, link), `ButtonSize` (small, medium, large), `ButtonType` (button, submit, reset) | — |
| **Input** | `InputSize` (large, medium), `InputType` (text, number, email, password, search, tel, url) | `InputMessage` |
| **Select** | `SelectStateChangeTypes`, `MultipleSelectionStateChangeTypes` | — |
| **Combobox** | `ComboboxStateChangeTypes` | — |
| **Checkbox** | `CheckboxTextPosition` (left, right) | — |
| **Radio** | `RadioTextPosition` (left, right) | `RadioGroup` |
| **Toggle** | `ToggleTextPosition` (left, right) | — |
| **Table** | `TableDensity`, `TableCellAlign`, `TableSortDirection`, `TableRowColor`, `TableHeaderCellScope` | `TableHead`, `TableBody`, `TableRow`, `TableHeaderCell`, `TableCell`, `TablePagination` |
| **Tabs** | `TabsAlignment`, `TabsBorderPosition`, `TabsIconPosition`, `TabsOrientation`, `TabsTextTransform` | `Tab`, `TabPanel`, `TabsContainer`, `TabPanelsContainer`, `CustomTab` |
| **Dropdown** | `DropdownAlignment`, `DropdownDropDirection` | `DropdownButton`, `DropdownContent`, `DropdownMenuItem`, `DropdownMenuGroup`, `DropdownHeader`, `DropdownDivider`, `DropdownSplitButton` |
| **Accordion** | `AccordionIconPosition` (left, none, right) | `AccordionItem`, `AccordionButton`, `AccordionPanel` |
| **Modal** | `ModalSize` | — |
| **Drawer** | `DrawerPosition` (top, bottom, left, right) | — |
| **Popover** | `PopoverPosition`, `PopoverAlignment` | `PopoverTrigger`, `PopoverContent`, `PopoverHeader`, `PopoverFooter` |
| **Tooltip** | `TooltipPosition` | — |
| **Alert** | `AlertVariant` | — |
| **Badge** | `BadgeColor`, `BadgeVariant` | — |
| **Card** | `CardAlignment`, `CardCalloutType` | `CardBody`, `CardHeading` |
| **Tag** | `TagColor` (default, primary, lowContrast, highContrast), `TagSize` (medium, small) | — |
| **Heading** | `TypographyVisualStyle`, `TypographyColor`, `TypographyContextVariant` | — |
| **Paragraph** | `TypographyVisualStyle`, `TypographyColor`, `TypographyContextVariant` | — |
| **Stepper** | `StepperLayout`, `StepperOrientation` | `Step`, `ResponsiveStepperContainer` |
| **Pagination** | `PageButtonSize`, `PaginationType` | — |
| **Grid** | `GridDisplay`, `GridJustifyContent`, `GridAlignItems`, `GridAutoFlow` | `GridItem` |
| **Flex** | `FlexDirection`, `FlexJustify`, `FlexAlignItems`, `FlexAlignContent`, `FlexBehavior` (container, item, both), `FlexWrap` | — |
| **TreeView** | `TreeViewSelectable`, `TreeNodeType` | `TreeItem` |
| **Toast** | — | `ToastsContainer` |
| **LoadingIndicator** | `LoadingIndicatorType` | — |
| **ProgressBar** | `ProgressBarColor` | — |

---

## Theming Quick Reference

The `magma` theme object (`ThemeInterface`) provides:

- **`colors`** — Color scales: `primary100`–`700`, `secondary500`–`700`, `tertiary500`–`700`, `neutral100`–`900`, `info/danger/warning/success` (100–700). Semantic: `focus`, `focusInverse`, `border`, `borderInverse`.
- **`spaceScale`** — `spacing01` (2px) through `spacing14` (160px). Use for all padding/margin/gap values.
- **`breakpoints`** — `xs` (0), `small` (600), `medium` (768), `large` (1024), `xl` (1200).
- **`typeScale`** — `size01` (12px) through `size16` (72px). Each has `fontSize`, `lineHeight`, optional `letterSpacing`.
- **`typographyVisualStyles`** — Responsive styles: `headingXLarge`–`heading2XSmall`, `bodyLarge`–`bodyXSmall`. Each has `mobile`/`desktop` sizes and `fontWeight`.
- **`borderRadius`** — `8px` (default), `borderRadiusSmall` — `4px`.
- **`iconSizes`** — `xSmall` (16), `small` (20), `medium` (24), `large` (32), `xLarge` (54).
- **Fonts** — `bodyFont`: "Work Sans", `bodyNarrativeFont`: "Noto Serif".

---

## I18n Quick Reference

Override UI strings via `I18nContext`:

```tsx
import { I18nContext, defaultI18n } from 'react-magma-dom';

const customI18n = {
  ...defaultI18n,
  locale: 'es',
  pagination: {
    ...defaultI18n.pagination,
    nextButtonLabel: 'Siguiente',
    previousButtonLabel: 'Anterior',
  },
};

<I18nContext.Provider value={customI18n}>
  {children}
</I18nContext.Provider>
```

`defaultI18n` covers: alert, breadcrumb, combobox, datePicker, dropdown, input, modal, pagination, password, search, select, stepper, table, tabs, tag, timePicker, and more.

---

## Documentation

- **Docs site:** https://react-magma.cengage.com
- **LLM index:** https://react-magma.cengage.com/llms.txt
- **GitHub:** https://github.com/cengage/react-magma

---

## Detailed References

For full enum values, theme hex codes, and compound component code examples, see:

- [Component catalog](references/components.md) — Every component with all enums and sub-components
- [Theme reference](references/theme.md) — Full color palette, spacing scale, type scale, breakpoints
- [Code patterns](references/patterns.md) — Compound component examples (Table, Tabs, Dropdown, Form, Accordion, etc.)
- [Design best practices](references/best-practices.md) — Color semantics, typography, spacing, layout, component selection, accessibility
