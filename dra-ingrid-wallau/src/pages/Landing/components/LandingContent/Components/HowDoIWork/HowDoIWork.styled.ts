import styled from 'styled-components'
import { devices } from '../../../../../../helpers/breakpoints.helpers'

export const Centralizer = styled.div`
  display: flex;
  grid-template-columns: 2fr, 1fr;
  grid-gap: 6rem;
  align-items: center;
  flex-wrap: wrap;
`

export const IdAnchor = styled.span`
  padding-top: 12rem;
  margin-top: -12rem;
`

export const TextContainer = styled.p`
  text-align: left;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 40px;
`

export const Image = styled.img`
  border-radius: 200px;
  opacity: 80%;
  aspect-ratio: 1.6/1;
  width: 400px;

  @media screen and (${devices.sm}) {
    width: 250px;
  }
`
