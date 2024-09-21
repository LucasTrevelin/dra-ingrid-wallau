import styled from 'styled-components'
import { TStyledPill } from './Pill.types'
import { devices } from '../../helpers/breakpoints.helpers'

export const Container = styled.div<TStyledPill>`
  width: ${({ $width }) => ($width ? $width : '90%')};
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ $backgroundColor }) => $backgroundColor};
  color: ${({ $color }) => $color};
  font-size: 1.25rem;
  border-radius: ${({ $borderRadius }) =>
    $borderRadius ? $borderRadius : '1.25rem'};
  padding: 1rem 1.5rem;
  column-gap: 0.5rem;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border: 2px solid ${({ theme }) => theme.colors.primary};
  min-width: ${({ $minWidth }) => $minWidth};
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};

  @media screen and (${devices.sm}) {
    width: ${({ $minWidth }) => !$minWidth && '274px'};
    font-size: 1rem;
  }
`
