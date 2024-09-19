import styled from 'styled-components'
import { TStyledPill } from './Pill.types'

export const Container = styled.div<TStyledPill>`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $color }) => $color};
  font-size: 20px;
  border-radius: 20px;
  padding: 1rem;
  column-gap: 0.5rem;
`
