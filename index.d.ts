interface Primitives {
  color: Color;
  space: Space;
  fontFamily: FontFamily;
  fontSettings: FontSettings;
  fontSize: FontSize;
  fontWeight: FontWeight;
  lineHeight: LineHeight;
  breakpoint: Breakpoint;
  shadow: Shadow;
  borderRadius: BorderRadius;
}

interface ColorValue {
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
}

interface ColorValueBlue {
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
  "ifixit": string;
}

interface Color {
  black: string;
  white: string;
  rose: ColorValue;
  pink: ColorValue;
  fuchsia: ColorValue;
  purple: ColorValue;
  violet: ColorValue;
  indigo: ColorValue;
  blue: ColorValueBlue;
  lightBlue: ColorValue;
  cyan: ColorValue;
  teal: ColorValue;
  emerald: ColorValue;
  green: ColorValue;
  lime: ColorValue;
  yellow: ColorValue;
  amber: ColorValue;
  orange: ColorValue;
  red: ColorValue;
  warmGray: ColorValue;
  trueGray: ColorValue;
  gray: ColorValue;
  coolGray: ColorValue;
  blueGray: ColorValue;
}

type Space = string[];

interface FontFamily {
  arialBlack: string;
  inter: string;
  lato: string;
  mono: string;
  monoSystem: string;
  sansSystem: string;
  serifSystem: string;
}

interface FontSettings {
  inter: string;
}

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
}

interface FontWeight {
  normal: number;
  semiBold: number;
  bold: number;
}

interface LineHeight {
  none: number;
  tight: number;
  normal: number;
  loose: number;
}

interface Breakpoint {
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

type Shadow = string[];

interface BorderRadius {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  pill: string;
}

export declare const color: Color;
export declare const space: Space;
export declare const fontFamily: FontFamily;
export declare const fontSettings: FontSettings;
export declare const fontSize: FontSize;
export declare const fontWeight: FontWeight;
export declare const lineHeight: LineHeight;
export declare const breakpoint: Breakpoint;
export declare const shadow: Shadow;
export declare const borderRadius: BorderRadius;
declare const primitives: Primitives;
export default primitives;
