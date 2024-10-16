import styled from 'styled-components'
import { devices } from '../../../../../../helpers/breakpoints.helpers'
import { motion } from 'framer-motion'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: min-content;
  column-gap: 3rem;
  row-gap: 3rem;
  flex-wrap: wrap-reverse;
  padding-top: 9.5rem; /* Adjust according to the desired space */
  margin-top: -9.5rem; /* This counteracts the padding */

  h1,
  p {
    text-align: left;
    margin: 0;
  }
  p {
    font-size: 1.25rem;
    @media screen and (${devices.sm}) {
      font-size: 0.875rem;
    }
  }
`

export const TextContent = styled.div`
  max-width: 25rem;
`

export const ImageAndInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  row-gap: 1rem;
`

export const Image = styled(motion.img)`
  aspect-ratio: 1;
  height: 25rem;
  opacity: 0.8;
  border-radius: 1.25rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

  @media screen and (${devices.sm}) {
    height: 274px;
  }
`
