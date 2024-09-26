import { PropsWithChildren } from 'react'
import { CSSProperties } from 'styled-components'

export type TPillProps = PropsWithChildren<{
  backgroundColor: CSSProperties['backgroundColor']
  color?: CSSProperties['color']
  borderRadius?: CSSProperties['borderRadius']
  width?: CSSProperties['width']
  minWidth?: CSSProperties['minWidth']
  aspectRatio?: CSSProperties['aspectRatio']
  animationFrom: 'left' | 'right' | 'up' | 'down'
}>

export type TStyledPill = {
  $backgroundColor: TPillProps['backgroundColor']
  $color?: CSSProperties['color']
  $borderRadius?: TPillProps['borderRadius']
  $width?: TPillProps['width']
  $minWidth?: TPillProps['minWidth']
  $aspectRatio?: TPillProps['aspectRatio']
}
