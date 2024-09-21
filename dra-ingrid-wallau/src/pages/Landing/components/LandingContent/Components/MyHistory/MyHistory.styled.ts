import styled from 'styled-components'
import { TStyledPoemImage, TStyledPoemText } from './MyHistory.types'
import { motion } from 'framer-motion'
import { devices } from '../../../../../../helpers/breakpoints.helpers'

export const Centralizer = styled.div`
  display: flex;
  grid-template-columns: 2fr, 1fr;
  grid-gap: 6rem;
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
  margin: 0;
`

export const Image = styled.img`
  aspect-ratio: 0.74/1;
  width: 400px;
  border: 3px solid ${({ theme }) => theme.colors.black};
`

export const TextPoemContainer = styled.p<TStyledPoemText>`
  text-align: ${({ $alignment }) => $alignment};
  font-size: ${({ $isSignature }) => ($isSignature ? '1.5rem' : '1.25rem')};
  font-weight: 400;
  line-height: 40px;
  margin: 0;
  position: relative;
`

export const PoemImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  position: relative;
  height: fit-content;
  width: fit-content;
`

export const PoemImage = styled(motion.img)<TStyledPoemImage>`
  position: absolute;
  top: ${({ $position }) => $position?.top};
  bottom: ${({ $position }) => $position?.bottom};
  right: ${({ $position }) => $position?.right};
  left: ${({ $position }) => $position?.left};
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};
  width: ${({ $width }) => $width};
  border-radius: 50px;
  @media screen and (${devices.hideFigures}) {
    visibility: hidden;
  }
`

export const ImageFilter = styled(motion.div)<TStyledPoemImage>`
  position: absolute;
  top: ${({ $position }) => $position?.top};
  bottom: ${({ $position }) => $position?.bottom};
  right: ${({ $position }) => $position?.right};
  left: ${({ $position }) => $position?.left};
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};
  width: ${({ $width }) => $width};
  border-radius: 50px;
  z-index: 2;
  opacity: 60%;
  background-color: ${({ theme }) => theme.colors.imageFilter};

  @media screen and (${devices.hideFigures}) {
    visibility: hidden;
  }
`
