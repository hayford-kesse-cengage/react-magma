# React Magma Component Reference

Complete component catalog with enum values and sub-components. Every export comes from `react-magma-dom` unless noted otherwise.

## Form Components

### Input
Single-line text input.
- **Enums:** `InputSize` (large, medium), `InputType` (text, number, email, password, search, tel, url, file), `InputIconPosition` (left, right, top)
- **Sub-components:** `InputMessage`

### Textarea
Multi-line text input with optional auto-resize.

### Select
Accessible dropdown select with search/filter, single and multi-select modes. Renders a custom listbox (not native `<select>`).
- **Enums:** `SelectStateChangeTypes`, `MultipleSelectionStateChangeTypes`

### NativeSelect
Browser-native `<select>` element with Magma styling.

### Combobox
Autocomplete/typeahead input with dropdown suggestions.
- **Enums:** `ComboboxStateChangeTypes`

### Checkbox
Checkbox input with label.
- **Enums:** `CheckboxTextPosition` (left, right)

### IndeterminateCheckbox
Parent checkbox that manages a group of child checkboxes.
- **Enums:** `IndeterminateCheckboxStatus`

### Radio / RadioGroup
Radio button group for single selection.
- **Enums:** `RadioTextPosition` (left, right)

### Toggle
On/off toggle switch.
- **Enums:** `ToggleTextPosition` (left, right)

### DatePicker
Calendar date picker with keyboard navigation.
- **Utilities:** `inDateRange`, `getDateFromString`

### DateTimePicker
Combined date and time picker.

### TimePicker
Time-only picker input.

### PasswordInput
Password input with show/hide toggle.

### Search
Search input with clear button and search icon.

### CharacterCounter
Displays remaining character count for text inputs.

### Form
Form wrapper component with submit handling. Accepts `header`, `description`, and `actions` props.

### FormGroup
Groups related form fields with shared label and error state.

### FormFieldContainer
Container for form fields with consistent spacing and layout.

## Interactive Components

### Button
Primary action button.
- **Enums:**
  - `ButtonColor` — primary, secondary, subtle, danger, success, marketing
  - `ButtonVariant` — solid, link
  - `ButtonShape` — fill, leftCap, rightCap, round
  - `ButtonSize` — small, medium, large
  - `ButtonTextTransform` — none, uppercase
  - `ButtonType` — button, submit, reset

### AIButton
AI-styled action button with sparkle icon.
- **Enums:** `AIButtonShape`, `AIButtonSize`, `AIButtonTextTransform`, `AIButtonType`, `AIButtonVariant`

### IconButton
Button that displays an icon with optional text.
- **Enums:** `ButtonIconPosition` (left, right). Inherits Button enums.

### ButtonGroup
Groups multiple buttons with consistent spacing.
- **Enums:** `ButtonGroupAlignment` (left, center, right, apart, fill), `ButtonGroupOrientation` (horizontal, vertical)

### ToggleButton
Button that toggles between pressed/unpressed states.

### ToggleButtonGroup
Group of toggle buttons with single or multi-select behavior.

### Hyperlink
Styled anchor link.
- **Enums:** `HyperlinkIconPosition`

### Tag
Label/chip component for categorization.
- **Enums:** `TagColor` (default, primary, lowContrast, highContrast), `TagSize` (medium, small)
- Supports deletable and clickable variants.

## Layout and Structure

### AppBar
Top application bar/header.
- **Enums:** `AppBarPosition`

### Container
Max-width content container for page layout.

### Card
Content card with optional heading and actions.
- **Enums:** `CardAlignment` (center, left, right), `CardCalloutType` (danger, primary, success, warning, info)
- **Sub-components:** `CardBody`, `CardHeading`

### Grid / GridItem
CSS Grid layout component.
- **Enums:** `GridDisplay`, `GridJustifyItems`, `GridJustifyContent`, `GridAlignItems`, `GridAlignContent`, `GridAutoFlow`
- **Sub-components:** `GridItem` (with `GridItemJustifySelf`, `GridItemAlignSelf`)

### Flex
Flexbox layout component.
- **Enums:** `FlexDirection` (row, rowReverse, column, columnReverse), `FlexJustify`, `FlexAlignItems`, `FlexAlignContent`, `FlexBehavior` (container, item, both), `FlexWrap`

### Spacer
Adds consistent spacing between elements.
- **Enums:** `SpacerAxis`

### HideAtBreakpoint
Conditionally hides content at specified breakpoints.
- **Enums:** `HideAtBreakpointDisplayType`, `BreakpointScreenSize`

### BreakpointsContainer / Breakpoint
Renders different content at different breakpoints.
- **Enums:** `BreakpointScreenSize`

### EmptyState
Placeholder UI for empty content areas.

## Navigation

### Tabs (Compound)
Tabbed content navigation.
- **Enums:** `TabsAlignment` (center, left, right), `TabsBorderPosition` (bottom, left, right, top), `TabsIconPosition` (bottom, left, right, top), `TabsOrientation` (horizontal, vertical), `TabsTextTransform` (uppercase, none)
- **Sub-components:** `Tab`, `TabPanel`, `TabsContainer`, `TabPanelsContainer`, `CustomTab`, `TabsScrollSpyContainer`, `TabScrollSpyPanel`

### NavTabs / NavTab
Navigation-style tabs for routing.

### Breadcrumb / BreadcrumbItem
Breadcrumb navigation trail.

### Pagination
Page navigation for lists/tables.
- **Enums:** `PageButtonSize` (medium, large), `PaginationType` (classic, simple)

### Stepper (Compound)
Multi-step progress indicator.
- **Enums:** `StepperLayout` (showLabels, hideLabels, summaryView), `StepperOrientation` (horizontal, vertical)
- **Sub-components:** `Step`, `ResponsiveStepperContainer`

### SkipLink / SkipLinkContent
Accessibility skip navigation link.

## Feedback and Status

### Alert
Inline alert message.
- **Enums:** `AlertVariant` (info, success, warning, danger)

### Banner
Full-width notification banner (info, warning, danger, success).

### Toast / ToastsContainer
Temporary notification popup. Wrap your app with `ToastsContainer` to enable toast notifications.

### Badge
Small status indicator label.
- **Enums:** `BadgeColor` (danger, primary, secondary, success, light), `BadgeVariant` (counter, label)

### Spinner
Loading spinner animation.

### LoadingIndicator
Loading state indicator with different visual types.
- **Enums:** `LoadingIndicatorType` (progressbar, spinner)

### ProgressBar
Horizontal progress bar.
- **Enums:** `ProgressBarColor` (danger, primary, success)

### ProgressRing
Circular progress indicator.

## Overlays

### Modal
Dialog/modal overlay.
- **Enums:** `ModalSize` (small, medium, large)

### Drawer
Slide-in panel from screen edge.
- **Enums:** `DrawerPosition` (top, bottom, left, right)

### Dropdown (Compound)
Action menu dropdown.
- **Enums:** `DropdownAlignment` (start, end), `DropdownDropDirection` (down, left, right, up)
- **Sub-components:** `DropdownButton`, `DropdownContent`, `DropdownMenuItem`, `DropdownMenuGroup`, `DropdownMenuNavItem`, `DropdownHeader`, `DropdownDivider`, `DropdownSplitButton`, `DropdownExpandableMenuGroup`, `DropdownExpandableMenuItem`, `DropdownExpandableMenuButton`, `DropdownExpandableMenuPanel`, `DropdownExpandableMenuListItem`

### Popover (Compound)
Content popover triggered by click or hover.
- **Enums:** `PopoverPosition` (bottom, top), `PopoverAlignment` (center, start, end)
- **Sub-components:** `PopoverTrigger`, `PopoverContent`, `PopoverHeader`, `PopoverFooter`

### Tooltip
Hover/focus tooltip.
- **Enums:** `TooltipPosition` (bottom, left, right, top) (aliased as `EnumTooltipPosition`)

## Data Display

### Table (Compound)
Data table with sorting and pagination.
- **Enums:** `TableDensity` (compact, loose, normal), `TableCellAlign` (center, inherit, justify, left, right), `TableSortDirection` (ascending, descending, none), `TableRowColor` (danger, info, success, warning), `TableHeaderCellScope` (col, colgroup, row, rowgroup)
- **Sub-components:** `TableHead`, `TableBody`, `TableRow`, `TableHeaderCell`, `TableCell`, `TablePagination`

### Datagrid
Advanced data grid with built-in sorting, filtering, and pagination.

### TreeView
Hierarchical tree structure.
- **Enums:** `TreeViewSelectable` (single, multi, off), `TreeNodeType` (branch, leaf)

### Accordion (Compound)
Expandable content sections.
- **Enums:** `AccordionIconPosition` (left, none, right)
- **Sub-components:** `AccordionItem`, `AccordionButton`, `AccordionPanel`

### List / ListItem
Ordered and unordered lists with optional icons.

### BlockQuote
Styled blockquote for quoted content.

### DefinitionList / DefinitionListItem
Definition list for term-description pairs.
- **Enums:** `DefinitionListType`

## Typography

### Heading
Semantic heading component (h1-h6).
- **Enums:** `TypographyVisualStyle`, `TypographyColor`, `TypographyContextVariant`

### Paragraph
Paragraph text component.
- **Enums:** `TypographyVisualStyle`, `TypographyColor`, `TypographyContextVariant`

### Label
Form field label component.
- **Enums:** `LabelPosition`

## Utilities

### VisuallyHidden
Hides content visually while keeping it accessible to screen readers.

### Announce
ARIA live region for dynamic announcements to screen readers.

### Transition
CSS transition wrapper for enter/exit animations.

### GlobalStyles
Global CSS reset and base styles. Must be included once at app root.

### InverseContext / useIsInverse
Context and hook to detect or set dark/inverse mode within component trees.

## Hooks

| Hook | Description |
|------|-------------|
| `useMediaQuery` | Detect media query matches |
| `useDeviceDetect` | Detect device type (mobile, tablet, desktop) |
| `useDataPagination` | Manage paginated data state |
| `useDescendants` | Track descendant components |
| `useGenerateId` | Generate unique IDs for accessibility |
| `usePagination` | Pagination state management |
| `useFocusLock` | Trap focus within a container |
| `useForceUpdate` | Force component re-render |

## Separate Packages

| Package | Description |
|---------|-------------|
| `react-magma-icons` | SVG icon components. Import icons individually: `import { InfoIcon } from 'react-magma-icons'` |
| `@react-magma/charts` | Chart components (bar, line, area, pie, donut). Built on Recharts. |
| `@react-magma/dropzone` | Drag-and-drop file upload. NOT in `react-magma-dom`. |

## Styled Utility

React Magma re-exports Emotion's `styled` for custom styling:

```tsx
import { styled } from 'react-magma-dom';

const CustomWrapper = styled.div`
  padding: ${props => props.theme.spaceScale.spacing05};
`;
```
