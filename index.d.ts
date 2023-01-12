interface Primitives {
  color: Color;
  space: Space;
  fontFamily: FontFamily;
  fontSettings: FontSettings;
  fontSize: FontSize;
  fontWeight: FontWeight;
  lineHeight: LineHeight;
  breakpoint: Breakpoint;
  minBreakpoint: MinBreakpoint;
  shadow: Shadow;
  borderRadius: BorderRadius;
  transition: Transition;
}

type ColorValue = {
  "50": string;
  "100": string;
  "200": string;
  "300": string;
  "400": string;
  "500": string;
  "600": string;
  "700": string;
  "800": string;
  "900": string;
};

type BreakpointValue = {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
};

interface ColorValueBlue extends ColorValue {
  ifixit: string;
}

interface ColorValueRed extends ColorValue {
  dozuki: string;
}

interface Color {
  black: string;
  white: string;
  whiteAlpha: ColorValue;
  blackAlpha: ColorValue;
  brand: Omit<ColorValue, "50">;
  warmGray: ColorValue;
  trueGray: ColorValue;
  coolGray: ColorValue;
  blueGray: ColorValue;
  rose: ColorValue;
  pink: ColorValue;
  fuchsia: ColorValue;
  purple: ColorValue;
  violet: ColorValue;
  indigo: ColorValue;
  blue: ColorValueBlue & { "ifixit": string; };
  lightBlue: ColorValue;
  cyan: ColorValue;
  teal: ColorValue;
  emerald: ColorValue;
  green: ColorValue;
  lime: ColorValue;
  yellow: ColorValue;
  amber: ColorValue;
  orange: ColorValue;
  red: ColorValueRed;
  gray: ColorValue;
}

type Space = string[];

type FontFamily = {
  arialBlack: string;
  inter: string;
  lato: string;
  mono: string;
  monoSystem: string;
  sansSystem: string;
  serifSystem: string;
};

type FontSettings = {
  inter: string;
};

type FontSize = {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
  "3xl": string;
  "4xl": string;
  "5xl": string;
  "6xl": string;
  "7xl": string;
  "8xl": string;
  "9xl": string;
};

type FontWeight = {
  normal: number;
  semiBold: number;
  bold: number;
};

type LineHeight = {
  none: number;
  tight: number;
  normal: number;
  loose: number;
};

type Breakpoint = BreakpointValue;

type MinBreakpoint = BreakpointValue;

type Shadow = string[];

type BorderRadius = {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  pill: string;
};

type Transition = {
  "100": string;
  "150": string;
  "200": string;
  "250": string;
  "300": string;
  default: string;
};

export declare const color: Color;
export declare const space: Space;
export declare const fontFamily: FontFamily;
export declare const fontSettings: FontSettings;
export declare const fontSize: FontSize;
export declare const fontWeight: FontWeight;
export declare const lineHeight: LineHeight;
export declare const breakpoint: Breakpoint;
export declare const minBreakpoint: MinBreakpoint;
export declare const shadow: Shadow;
export declare const borderRadius: BorderRadius;
export declare const transition: Transition;
export declare const primitives: Primitives;
export default primitives;
