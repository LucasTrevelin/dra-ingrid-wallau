import styled from 'styled-components'
import { TStyledVariant } from './Topic.types'

export const Container = styled.h1<TStyledVariant>`
  color: ${({ $variant, theme }) =>
    $variant === 'normal' ? theme.colors.primary : theme.colors.orangeLighter};
  font-size: ${({ $fontSize }) => ($fontSize ? $fontSize : '2.5rem')};
  margin: 2rem 0;
  text-align: left;
  line-height: 2.5rem;
`
