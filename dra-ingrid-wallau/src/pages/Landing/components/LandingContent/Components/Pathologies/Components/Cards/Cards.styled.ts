import styled from 'styled-components'
import { devices } from '../../../../../../../../helpers/breakpoints.helpers'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 260px));
  gap: 2rem;
  width: 100%;
  justify-content: center;

  @media screen and (${devices.sm}) {
    display: none;
  }
`

export const SmallContainer = styled.div`
  display: none;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @media screen and (${devices.sm}) {
    display: flex;
  }
`
