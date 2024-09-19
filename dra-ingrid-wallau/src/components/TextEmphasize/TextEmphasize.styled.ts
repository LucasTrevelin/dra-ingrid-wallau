import styled from 'styled-components'
import { TStyledEmphasizeOptions } from './TextEmphasize.types'

export const Container = styled.span<TStyledEmphasizeOptions>`
  color: ${({ $color }) => $color};
  font-size: ${({ $size }) => !!$size && `${$size}rem`};
`
