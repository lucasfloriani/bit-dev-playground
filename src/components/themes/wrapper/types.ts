export type ColorProp = {
  type: string,
  position: number,
}

export type CubicBeziers = {
  accelerate: string
  decelerate: string
  standard: string
}

export type Palettes = {
  primary: string[]
  error: string[]
  alert: string[]
  success: string[]
  grayscale: string[]
  gradient: string[]
}

export type Fonts = {
  primary: string
  secondary: string
}

export type Shadows = {
  none: string
  extraSmall: string
  small: string
  medium: string
  large: string
  extraLarge: string
}

export type Sizes = {
  extraLarge: string
  large: string
  medium: string
  normal: string
  small: string
  extraSmall: string
}

export type FontWeight = {
  thin: number
  light: number
  regular: number
  medium: number
  semiBold: number
  bold: number
  ultra: number
}

export type MediaValues = {
  huge: string
  large: string
  medium: string
  small: string
  extraSmall: string
}

export type Theme = {
  cubicBezier: CubicBeziers
  palette: Palettes
  fonts: Fonts
  shadows: Shadows
  sizes: Sizes
  fontWeight: FontWeight
  mediaValues: MediaValues
}
