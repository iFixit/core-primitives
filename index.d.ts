interface Primitives {
  color: Color
  space: string[]
  fontSize: string[]
  fontWeight: FontWeight
  lineHeight: LineHeight
  breakpoint: Breakpoint
  shadow: string[]
}
interface Color {
  blue: string
  green: string
  yellow: string
  red: string
  white: string
  black: string
  blueLight4: string
  blueLight3: string
  blueLight2: string
  blueLight1: string
  blueDark1: string
  blueDark2: string
  blueDark3: string
  blueDark4: string
  greenLight4: string
  greenLight3: string
  greenLight2: string
  greenLight1: string
  greenDark1: string
  greenDark2: string
  greenDark3: string
  greenDark4: string
  yellowLight4: string
  yellowLight3: string
  yellowLight2: string
  yellowLight1: string
  yellowDark1: string
  yellowDark2: string
  yellowDark3: string
  yellowDark4: string
  redLight4: string
  redLight3: string
  redLight2: string
  redLight1: string
  redDark1: string
  redDark2: string
  redDark3: string
  redDark4: string
  gray1: string
  gray2: string
  gray3: string
  gray4: string
  gray5: string
  gray6: string
  gray7: string
  gray8: string
}
interface FontWeight {
  normal: number
  bold: number
}
interface LineHeight {
  none: number
  tight: number
  normal: number
  loose: number
}
interface Breakpoint {
  sm: string
  md: string
  lg: string
  xl: string
}
declare const primitives: Primitives
export default primitives
