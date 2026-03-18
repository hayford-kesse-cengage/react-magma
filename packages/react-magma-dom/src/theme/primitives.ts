/**
 * Design Token Primitives
 *
 * Raw color values named by hue, not by role. The semantic tier
 * (e.g. "primary", "danger") maps to these primitives — so if
 * the indigo color changes, only the semantic mapping updates.
 *
 * Existing values are preserved from magma.ts.
 * Shades marked "generated" were algorithmically interpolated
 * to complete each 100–900 scale.
 */

// ── Absolute ──────────────────────────────────────────────────

export const white = '#FFFFFF' as const;
export const black = '#000000' as const;

// ── Indigo ────────────────────────────────────────────────────

export const indigo100 = '#E8E9F8' as const;
export const indigo200 = '#BABDE9' as const;
export const indigo300 = '#8B91DA' as const;
export const indigo400 = '#5D65CB' as const;
export const indigo500 = '#3942B0' as const;
export const indigo600 = '#292F7C' as const;
export const indigo700 = '#1A1E51' as const;
export const indigo800 = '#101335' as const; // generated
export const indigo900 = '#0A0C1F' as const; // generated

// ── Yellow ────────────────────────────────────────────────────

export const yellow100 = '#FFFDE6' as const; // generated
export const yellow200 = '#FFF8C4' as const; // generated
export const yellow300 = '#FFF19D' as const; // generated
export const yellow400 = '#FEEB71' as const; // generated
export const yellow500 = '#FEE449' as const;
export const yellow600 = '#FEDA0D' as const;
export const yellow700 = '#ECC901' as const;
export const yellow800 = '#C4A701' as const; // generated
export const yellow900 = '#9C8501' as const; // generated

// ── Sky ───────────────────────────────────────────────────────

export const sky100 = '#F5F8FF' as const; // generated
export const sky200 = '#EBF1FF' as const; // generated
export const sky300 = '#E1EAFF' as const; // generated
export const sky400 = '#D7E4FF' as const; // generated
export const sky500 = '#CDDEFF' as const;
export const sky600 = '#A2C1FF' as const;
export const sky700 = '#79A5FF' as const;
export const sky800 = '#5089FF' as const; // generated
export const sky900 = '#276DFF' as const; // generated

// ── Gray ──────────────────────────────────────────────────────

export const gray50 = '#FAFAFA' as const;
export const gray100 = '#F5F5F5' as const;
export const gray200 = '#D4D4D4' as const;
export const gray300 = '#B0B0B0' as const; // generated
export const gray400 = '#8D8D8D' as const;
export const gray500 = '#707070' as const;
export const gray600 = '#5A5A5A' as const;
export const gray700 = '#454545' as const;
export const gray800 = '#2D2D2D' as const;
export const gray900 = '#1A1A1A' as const; // generated
export const gray950 = '#0D0D0D' as const;

// ── Blue ──────────────────────────────────────────────────────

export const blue100 = '#E8F5FC' as const;
export const blue200 = '#A6DEFF' as const;
export const blue300 = '#2FB3FF' as const;
export const blue400 = '#009AF3' as const;
export const blue500 = '#0074B7' as const;
export const blue600 = '#005F96' as const;
export const blue700 = '#004A75' as const;
export const blue800 = '#003A5B' as const; // generated
export const blue900 = '#002D47' as const; // generated

// ── Red ───────────────────────────────────────────────────────

export const red100 = '#FDEFEE' as const;
export const red200 = '#FAAEB0' as const;
export const red300 = '#E8716D' as const;
export const red400 = '#E24943' as const;
export const red500 = '#D32821' as const;
export const red600 = '#A91F1A' as const;
export const red700 = '#7F1714' as const;
export const red800 = '#5F110F' as const; // generated
export const red900 = '#470D0C' as const; // generated

// ── Orange ────────────────────────────────────────────────────

export const orange100 = '#FCEEE5' as const;
export const orange200 = '#F6CDB2' as const;
export const orange300 = '#E98B4C' as const;
export const orange400 = '#E06A1C' as const;
export const orange500 = '#AD5115' as const;
export const orange600 = '#8D4311' as const;
export const orange700 = '#6E340E' as const;
export const orange800 = '#56290B' as const; // generated
export const orange900 = '#432009' as const; // generated

// ── Green ─────────────────────────────────────────────────────

export const green100 = '#E3FAEA' as const;
export const green200 = '#ACF0C1' as const;
export const green300 = '#3EDD6E' as const;
export const green400 = '#21B94E' as const;
export const green500 = '#178037' as const;
export const green600 = '#136A2D' as const;
export const green700 = '#0F5323' as const;
export const green800 = '#0C411B' as const; // generated
export const green900 = '#093315' as const; // generated

// ── Grouped export for theme construction ─────────────────────

export const primitives = {
  white,
  black,

  indigo100,
  indigo200,
  indigo300,
  indigo400,
  indigo500,
  indigo600,
  indigo700,
  indigo800,
  indigo900,

  yellow100,
  yellow200,
  yellow300,
  yellow400,
  yellow500,
  yellow600,
  yellow700,
  yellow800,
  yellow900,

  sky100,
  sky200,
  sky300,
  sky400,
  sky500,
  sky600,
  sky700,
  sky800,
  sky900,

  gray50,
  gray100,
  gray200,
  gray300,
  gray400,
  gray500,
  gray600,
  gray700,
  gray800,
  gray900,
  gray950,

  blue100,
  blue200,
  blue300,
  blue400,
  blue500,
  blue600,
  blue700,
  blue800,
  blue900,

  red100,
  red200,
  red300,
  red400,
  red500,
  red600,
  red700,
  red800,
  red900,

  orange100,
  orange200,
  orange300,
  orange400,
  orange500,
  orange600,
  orange700,
  orange800,
  orange900,

  green100,
  green200,
  green300,
  green400,
  green500,
  green600,
  green700,
  green800,
  green900,
} as const;

export type Primitives = typeof primitives;
