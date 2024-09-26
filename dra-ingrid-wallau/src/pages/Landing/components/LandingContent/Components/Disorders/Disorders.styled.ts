import styled, { css } from 'styled-components'
import { StyledImageProps } from './Disorders.type'
import { devices } from '../../../../../../helpers/breakpoints.helpers'
import { motion } from 'framer-motion'

const rightBanner = css`
  right: 0;
  top: 0;
  height: 100%;
  width: 2.5rem;
  background-color: ${({ theme }) => theme.colors.backgroundDarker};
  border-radius: 0 1.25rem 1.25rem 0;
  z-index: 4;

  @media screen and (${devices.sm}) {
    width: 1rem;
  }
`

const bottomBanner = css`
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  background-color: ${({ theme }) => theme.colors.grayFill};
  border-radius: 0 0 1.25rem 1.25rem;
  z-index: 5;
  opacity: 0.8;
  @media screen and (${devices.sm}) {
    height: 1rem;
  }
`

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20rem;
  margin-top: -20rem;
`

export const ImageContainer = styled(motion.div)`
  position: relative;
  width: 60%;
  aspect-ratio: 0.67/1;
  margin-bottom: 4rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 1.25rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

  @media screen and (${devices.sm}) {
    margin-bottom: 2rem;
  }
`

export const Image = styled(motion.img)`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  border-radius: 1.25rem;
  opacity: 0.8;
`

export const ImageBanner = styled(motion.div)<StyledImageProps>`
  position: absolute;
  ${({ $variant }) => ($variant === 'right' ? rightBanner : bottomBanner)}
`

export const TextTitle = styled(motion.h3)`
  font-size: 2rem;
  padding: 2rem 0;

  @media screen and (${devices.lg}) {
    font-size: 1rem;
    padding: 0.5rem 0;
    margin: 0.25rem 0;
  }

  @media screen and (${devices.disordersbreak1}) {
    font-size: 1.25rem;
    padding: 1rem 0;
    margin: 0.5rem 0;
  }
`

export const TextContainer = styled.div`
  position: absolute;
  right: 2.5rem;
  top: 0;
  z-index: 5;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;

  @media screen and (${devices.disordersbreak2}) {
    display: none;
  }
`

export const SmallTextContainer = styled.div`
  padding: 1rem;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;

  @media screen and (${devices.disordersbreak2}) {
    display: flex;
  }
`
