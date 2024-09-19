import { PropsWithChildren } from 'react'
import { CSSProperties } from 'styled-components'

export type TPillProps = PropsWithChildren<{
  color: CSSProperties['color']
}>

export type TStyledPill = {
  $color: TPillProps['color']
}
