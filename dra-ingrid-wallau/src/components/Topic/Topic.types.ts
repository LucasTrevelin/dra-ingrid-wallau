import { PropsWithChildren } from 'react'
import { CSSProperties } from 'styled-components'

export type TTopic = PropsWithChildren<{
  variant?: TTopicVariant
  fontSize?: CSSProperties['fontSize']
  color?: CSSProperties['color']
}>

type TTopicVariant = 'normal' | 'highlighted'

export type TStyledVariant = {
  $variant: TTopicVariant
  $fontSize?: TTopic['fontSize']
  $color?: TTopic['color']
}
