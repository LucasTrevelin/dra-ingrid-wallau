export type TTextEmphasize = {
  options: TEmphasizeOptions
}

export type TEmphasizeOptions = {
  color: string
  size?: number
}

export type TStyledEmphasizeOptions = {
  $color: TEmphasizeOptions['color']
  $size: TEmphasizeOptions['size']
}
