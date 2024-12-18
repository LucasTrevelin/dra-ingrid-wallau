import styled from 'styled-components'
import { TStyledPoemImage, TStyledPoemText } from './MyHistory.types'
import { motion } from 'framer-motion'
import { devices } from '../../../../../../helpers/breakpoints.helpers'

export const Centralizer = styled.div`
  display: flex;
  grid-template-columns: 2fr, 1fr;
  grid-gap: 6rem;

  @media screen and (${devices.myHistory}) {
    flex-direction: column;
    align-items: center;
  }

  @media screen and (${devices.sm}) {
    grid-gap: 3rem;
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
  margin: 0;
  max-height: 37rem;
  overflow-y: auto;
  padding-right: 0.8rem;

  @media screen and (${devices.sm}) {
    font-size: 1.125rem;
    line-height: 1.625rem;
  }
`

export const Image = styled(motion.img)`
  width: 400px;
  border: 3px solid ${({ theme }) => theme.colors.black};
  border-radius: 5px;
  @media screen and (${devices.sm}) {
    width: 200px;
  }
`

export const PoemAuthorFrame = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (${devices.sm}) {
    justify-content: center;
  }
`

export const PoemAuthorImage = styled(motion.img)`
  aspect-ratio: 0.61;
  width: 200px;
  border-radius: 20px;
  display: none;
  @media screen and (${devices.sm}) {
    display: block;
    width: 200px;
  }
  border: 5px solid white;
`

export const TextPoemContainer = styled(motion.p)<TStyledPoemText>`
  text-align: ${({ $alignment }) => $alignment};
  font-size: ${({ $isSignature }) => ($isSignature ? '1.25rem' : '1.125rem')};
  font-weight: 400;
  line-height: 2.125rem;
  margin: 0;
  position: relative;

  @media screen and (${devices.disordersbreak2}) {
    position: unset;
  }
  @media screen and (${devices.sm}) {
    font-size: ${({ $isSignature }) => ($isSignature ? '1.125rem' : '1rem')};
    line-height: 1.25rem;
  }
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
  @media screen and (${devices.smallPoemFigures}) {
    width: 200px;
  }
  @media screen and (${devices.disordersbreak2}) {
    display: none;
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
  z-index: 1;
  opacity: 60%;
  background-color: ${({ theme }) => theme.colors.imageFilter};

  @media screen and (${devices.smallPoemFigures}) {
    width: 200px;
  }
  @media screen and (${devices.disordersbreak2}) {
    display: none;
  }
`
