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

interface Color {
  black: string;
  white: string;
  rose: {
    value: string;
    hex: string;
  };
  pink: {
    value: string;
    hex: string;
  };
  fuchsia: {
    value: string;
    hex: string;
  };
  purple: {
    value: string;
    hex: string;
  };
  violet: {
    value: string;
    hex: string;
  };
  indigo: {
    value: string;
    hex: string;
  };
  blue: {
    value: string;
    hex: string;
  };
  lightBlue: {
    value: string;
    hex: string;
  };
  cyan: {
    value: string;
    hex: string;
  };
  teal: {
    value: string;
    hex: string;
  };
  emerald: {
    value: string;
    hex: string;
  };
  green: {
    value: string;
    hex: string;
  };
  lime: {
    value: string;
    hex: string;
  };
  yellow: {
    value: string;
    hex: string;
  };
  amber: {
    value: string;
    hex: string;
  };
  orange: {
    value: string;
    hex: string;
  };
  red: {
    value: string;
    hex: string;
  };
  warmGray: {
    value: string;
    hex: string;
  };
  trueGray: {
    value: string;
    hex: string;
  };
  gray: {
    value: string;
    hex: string;
  };
  coolGray: {
    value: string;
    hex: string;
  };
  blueGray: {
    value: string;
    hex: string;
  };
}

type Space = string[];

interface FontFamily {
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

type FontSize = string[];

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
