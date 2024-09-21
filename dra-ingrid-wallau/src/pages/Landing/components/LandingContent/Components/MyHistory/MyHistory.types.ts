import { CSSProperties } from 'styled-components'

export type TStyledPoemText = {
  $alignment: CSSProperties['textAlign']
  $isSignature?: boolean
}

export type TStyledPoemImage = {
  $position?: {
    top?: CSSProperties['height']
    bottom?: CSSProperties['height']
    right?: CSSProperties['height']
    left?: CSSProperties['height']
  }
  $aspectRatio: CSSProperties['aspectRatio']
  $width: CSSProperties['width']
}
