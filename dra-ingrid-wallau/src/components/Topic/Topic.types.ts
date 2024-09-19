import { CSSProperties } from 'styled-components'

export type TTopic = {
  title: string
  variant?: TTopicVariant
  fontSize?: CSSProperties['fontSize']
}

type TTopicVariant = 'normal' | 'highlighted'

export type TStyledVariant = {
  $variant: TTopicVariant
  $fontSize?: TTopic['fontSize']
}
