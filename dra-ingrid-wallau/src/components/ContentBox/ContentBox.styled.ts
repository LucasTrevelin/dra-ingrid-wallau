import styled from 'styled-components'
import { TStyledVariant } from './ContentBox.types'
import { devices } from '../../helpers/breakpoints.helpers'
import { motion } from 'framer-motion'

export const Container = styled(motion.article)<TStyledVariant>`
  background-color: ${({ $variant, theme }) => {
    if ($variant === 'filled') return theme.colors.white
    if ($variant === 'poem') return theme.colors.backgroundPoem
    return theme.colors.primary
  }};
  color: ${({ $variant, theme }) =>
    $variant === 'filled' ? theme.colors.primary : theme.colors.white};
  padding: ${({ $hasFooterItem }) => ($hasFooterItem ? '2rem 0 0 0' : '2rem')};
  display: flex;
  flex-direction: column;
  justify-content: ${({ $variant }) =>
    $variant !== 'poem' ? 'space-between' : 'flex-start'};
  border-radius: 20px;
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio ?? 1 / 1};
  row-gap: 1.5rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  font-family: ${({ $variant }) => $variant === 'poem' && 'Podkova'};

  @media screen and (${devices.sm}) {
    padding: ${({ $hasFooterItem }) =>
      $hasFooterItem ? '1rem 0 0 0' : '1rem'};
  }
`
