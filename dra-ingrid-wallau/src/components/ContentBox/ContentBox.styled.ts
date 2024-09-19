import styled from 'styled-components'
import { TStyledVariant } from './ContentBox.types'

export const Container = styled.article<TStyledVariant>`
  background-color: ${({ $variant, theme }) =>
    $variant === 'filled' ? theme.colors.white : theme.colors.primary};
  color: ${({ $variant, theme }) =>
    $variant === 'filled' ? theme.colors.primary : theme.colors.white};
  padding: ${({ $hasFooterItem }) => ($hasFooterItem ? '2rem 0 0 0' : '2rem')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 20px;
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio ?? 1 / 1};
  row-gap: 1.5rem;
`
