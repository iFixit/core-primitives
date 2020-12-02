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
  blue: string;
  green: string;
  yellow: string;
  red: string;
  white: string;
  black: string;
  blueLight4: string;
  blueLight3: string;
  blueLight2: string;
  blueLight1: string;
  blueDark1: string;
  blueDark2: string;
  blueDark3: string;
  blueDark4: string;
  greenLight4: string;
  greenLight3: string;
  greenLight2: string;
  greenLight1: string;
  greenDark1: string;
  greenDark2: string;
  greenDark3: string;
  greenDark4: string;
  yellowLight4: string;
  yellowLight3: string;
  yellowLight2: string;
  yellowLight1: string;
  yellowDark1: string;
  yellowDark2: string;
  yellowDark3: string;
  yellowDark4: string;
  redLight4: string;
  redLight3: string;
  redLight2: string;
  redLight1: string;
  redDark1: string;
  redDark2: string;
  redDark3: string;
  redDark4: string;
  gray1: string;
  gray2: string;
  gray3: string;
  gray4: string;
  gray5: string;
  gray6: string;
  gray7: string;
  gray8: string;
}

type Space = string[];

interface FontFamily {
  inter: string;
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
