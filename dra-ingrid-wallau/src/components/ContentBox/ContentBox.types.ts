import { PropsWithChildren } from 'react'
import { CSSProperties } from 'styled-components'

export type TContentBox = PropsWithChildren<{
  variant: TBoxVariant
  maxWidth?: CSSProperties['maxWidth']
  aspectRatio?: CSSProperties['aspectRatio']
  hasFooterItem?: boolean
}>

type TBoxVariant = 'inverted' | 'filled'

export type TStyledVariant = {
  $variant: TBoxVariant
  $maxWidth?: TContentBox['maxWidth']
  $aspectRatio?: TContentBox['aspectRatio']
  $hasFooterItem?: boolean
}
