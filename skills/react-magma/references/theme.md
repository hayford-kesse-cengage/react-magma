# React Magma Theme Reference

The `magma` object is the default theme. Access it via `ThemeContext` or import directly.

```tsx
import { magma, ThemeContext } from 'react-magma-dom';
```

## ThemeInterface Shape

```ts
interface ThemeInterface {
  bodyFont: string;              // '"Work Sans",Helvetica,sans-serif'
  bodyExpressiveFont: string;    // '"Work Sans",Helvetica,sans-serif'
  bodyNarrativeFont: string;     // "'Noto Serif',Times New Roman,serif"
  headingFont: string;           // '"Work Sans",Helvetica,sans-serif'
  headingExpressiveFont: string; // '"Work Sans",Helvetica,sans-serif'
  headingNarrativeFont: string;  // "'Noto Serif',Times New Roman,serif"
  borderRadius: string;          // '8px'
  borderRadiusSmall: string;     // '4px'
  direction: string;             // 'ltr'
  spacingMultiplier: number;     // 8
  colors: Colors;
  breakpoints: Breakpoints;
  spaceScale: SpacingScale;
  iconSizes: IconSizes;
  typeScale: TypeScale;
  typographyVisualStyles: TypographyVisualStyles;
  typographyExpressiveVisualStyles: TypographyVisualStylesExpressive;
  typographyNarrativeVisualStyles: TypographyVisualStyles;
  appBar: AppBar;
  combobox: { menu: { maxHeight: string } };
  drawer: Drawer;
  dropdown: { content: { maxHeight: string } };
  modal: Modal;
  select: { menu: { maxHeight: string } };
  tabs: Tabs;
  tooltip: Tooltip;
  transitions: ThemeTransitions;
  iterableColors: string[];
  chartColors: string[];
  chartColorsInverse: string[];
}
```

## Color Palette

All colors are on `magma.colors`. Each scale has a base alias (e.g., `primary` → `primary500`).

### Primary
| Token | Hex |
|-------|-----|
| `primary100` | `#E8E9F8` |
| `primary200` | `#BABDE9` |
| `primary300` | `#8B91DA` |
| `primary400` | `#5D65CB` |
| `primary` / `primary500` | `#3942B0` |
| `primary600` | `#292F7C` |
| `primary700` | `#1A1E51` |

### Secondary
| Token | Hex |
|-------|-----|
| `secondary` / `secondary500` | `#FEE449` |
| `secondary600` | `#FEDA0D` |
| `secondary700` | `#ECC901` |

### Tertiary
| Token | Hex |
|-------|-----|
| `tertiary` / `tertiary500` | `#CDDEFF` |
| `tertiary600` | `#A2C1FF` |
| `tertiary700` | `#79A5FF` |

### Neutral
| Token | Hex | Note |
|-------|-----|------|
| `neutral100` | `#FFFFFF` | white |
| `neutral200` | `#F5F5F5` | |
| `neutral300` | `#D4D4D4` | |
| `neutral400` | `#8D8D8D` | |
| `neutral` / `neutral500` | `#707070` | |
| `neutral600` | `#5A5A5A` | |
| `neutral700` | `#454545` | |
| `neutral800` | `#2D2D2D` | |
| `neutral900` | `#000000` | black |

### Info
| Token | Hex |
|-------|-----|
| `info100` | `#E8F5FC` |
| `info200` | `#A6DEFF` |
| `info300` | `#2FB3FF` |
| `info400` | `#009AF3` |
| `info` / `info500` | `#0074B7` |
| `info600` | `#005F96` |
| `info700` | `#004A75` |

### Danger
| Token | Hex |
|-------|-----|
| `danger100` | `#FDEFEE` |
| `danger200` | `#FAAEB0` |
| `danger300` | `#E8716D` |
| `danger400` | `#E24943` |
| `danger` / `danger500` | `#D32821` |
| `danger600` | `#A91F1A` |
| `danger700` | `#7F1714` |

### Warning
| Token | Hex |
|-------|-----|
| `warning100` | `#FCEEE5` |
| `warning200` | `#F6CDB2` |
| `warning300` | `#E98B4C` |
| `warning400` | `#E06A1C` |
| `warning` / `warning500` | `#AD5115` |
| `warning600` | `#8D4311` |
| `warning700` | `#6E340E` |

### Success
| Token | Hex |
|-------|-----|
| `success100` | `#E3FAEA` |
| `success200` | `#ACF0C1` |
| `success300` | `#3EDD6E` |
| `success400` | `#21B94E` |
| `success` / `success500` | `#178037` |
| `success600` | `#136A2D` |
| `success700` | `#0F5323` |

### Semantic Aliases
| Token | Value |
|-------|-------|
| `focus` | `#0074B7` (info500) |
| `focusInverse` | `#A6DEFF` (info200) |
| `border` | `#D4D4D4` (neutral300) |
| `borderInverse` | `rgba(255,255,255,0.25)` |

## Spacing Scale

Access via `magma.spaceScale`.

| Token | Value |
|-------|-------|
| `spacing01` | `2px` |
| `spacing02` | `4px` |
| `spacing03` | `8px` |
| `spacing04` | `12px` |
| `spacing05` | `16px` |
| `spacing06` | `24px` |
| `spacing07` | `28px` |
| `spacing08` | `32px` |
| `spacing09` | `40px` |
| `spacing10` | `48px` |
| `spacing11` | `56px` |
| `spacing12` | `64px` |
| `spacing13` | `96px` |
| `spacing14` | `160px` |

## Breakpoints

Access via `magma.breakpoints`. Values are in pixels.

| Token | Value |
|-------|-------|
| `xs` | `0` |
| `small` | `600` |
| `medium` | `768` |
| `large` | `1024` |
| `xl` | `1200` |

## Type Scale

Access via `magma.typeScale`. Each size has `fontSize`, `lineHeight`, and optional `letterSpacing`.

| Token | fontSize | lineHeight | letterSpacing |
|-------|----------|------------|---------------|
| `size01` | `12px` | `16px` | `.32px` |
| `size02` | `14px` | `20px` | `.16px` |
| `size03` | `16px` | `24px` | `.32px` |
| `size04` | `18px` | `24px` | — |
| `size05` | `20px` | `32px` | — |
| `size06` | `24px` | `32px` | — |
| `size07` | `28px` | `40px` | — |
| `size08` | `32px` | `40px` | — |
| `size09` | `36px` | `48px` | — |
| `size10` | `42px` | `48px` | — |
| `size11` | `48px` | `64px` | — |
| `size12` | `52px` | `64px` | — |
| `size13` | `54px` | `64px` | — |
| `size14` | `60px` | `72px` | — |
| `size15` | `64px` | `84px` | — |
| `size16` | `72px` | `84px` | — |

## Typography Visual Styles (Productive)

Access via `magma.typographyVisualStyles`. Each style has `mobile` and `desktop` `TypeScaleSize` and optional `fontWeight`.

| Style | Mobile | Desktop | Weight |
|-------|--------|---------|--------|
| `headingXLarge` | size07 (28px) | size09 (36px) | 600 |
| `headingLarge` | size06 (24px) | size07 (28px) | 600 |
| `headingMedium` | size05 (20px) | size06 (24px) | 600 |
| `headingSmall` | size04 (18px) | size05 (20px) | 600 |
| `headingXSmall` | size04 (18px) | size04 (18px) | 600 |
| `heading2XSmall` | size01 (12px) | size01 (12px) | 700 |
| `bodyLarge` | size04 (18px) | size05 (20px) | — |
| `bodyMedium` | size03 (16px) | size03 (16px) | — |
| `bodySmall` | size02 (14px) | size02 (14px) | — |
| `bodyXSmall` | size01 (12px) | size01 (12px) | — |

## Icon Sizes

Access via `magma.iconSizes`. Values are in pixels.

| Token | Value |
|-------|-------|
| `xSmall` | `16` |
| `small` | `20` |
| `medium` | `24` |
| `large` | `32` |
| `xLarge` | `54` |

## Modal Widths

| Size | Width |
|------|-------|
| `small` | `300px` |
| `medium` | `600px` |
| `large` | `900px` |

## Custom Themes

Create a custom theme by spreading the `magma` object and overriding values:

```tsx
import { magma, ThemeContext, GlobalStyles } from 'react-magma-dom';

const customTheme = {
  ...magma,
  colors: {
    ...magma.colors,
    primary: '#custom-color',
  },
};

<ThemeContext.Provider value={customTheme}>
  <GlobalStyles />
  {children}
</ThemeContext.Provider>
```

## Using Theme in Styled Components

```tsx
import { styled } from 'react-magma-dom';

const StyledDiv = styled.div`
  color: ${props => props.theme.colors.primary};
  padding: ${props => props.theme.spaceScale.spacing05};
  font-size: ${props => props.theme.typeScale.size03.fontSize};
  border-radius: ${props => props.theme.borderRadius};
`;
```
