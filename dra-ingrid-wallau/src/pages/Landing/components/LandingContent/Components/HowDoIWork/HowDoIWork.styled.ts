import styled from 'styled-components'
import { devices } from '../../../../../../helpers/breakpoints.helpers'
import { motion } from 'framer-motion'

export const Centralizer = styled.div`
  display: flex;
  grid-gap: 6rem;
  align-items: center;
  @media screen and (${devices.lg}) {
    flex-wrap: wrap-reverse;
    grid-gap: 2rem;
  }
`

export const IdAnchor = styled.span`
  padding-top: 12rem;
  margin-top: -12rem;
`

export const TextContainer = styled(motion.p)`
  text-align: left;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 2.5rem;
  max-height: 300px;
  overflow-y: auto;

  @media screen and (${devices.sm}) {
    font-size: 1.125rem;
    line-height: 1.625rem;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const Image = styled(motion.img)`
  border-radius: 200px;
  opacity: 80%;
  aspect-ratio: 1.43/1;
  width: 400px;

  @media screen and (${devices.sm}) {
    width: 250px;
  }
`
