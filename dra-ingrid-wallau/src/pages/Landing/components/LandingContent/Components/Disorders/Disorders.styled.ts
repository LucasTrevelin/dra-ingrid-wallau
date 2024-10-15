import styled, { css } from 'styled-components'
import { StyledImageProps } from './Disorders.type'
import { devices } from '../../../../../../helpers/breakpoints.helpers'
import { motion } from 'framer-motion'

const rightBanner = css`
  right: -1.5rem;
  top: 0;
  height: 100%;
  width: 1rem;
  background-color: ${({ theme }) => theme.colors.backgroundDarker};
  border-radius: 0 1.25rem 1.25rem 0;
  z-index: 4;

  @media screen and (${devices.sm}) {
    right: -1rem;
  }
`

const bottomBanner = css`
  bottom: 0;
  width: calc(100% + 1.5rem);
  right: -1.5rem;
  height: 1rem;
  background-color: ${({ theme }) => theme.colors.grayFill};
  border-radius: 0 0 1.25rem 1.25rem;
  z-index: 5;
  opacity: 0.8;
  @media screen and (${devices.sm}) {
    right: -1rem;
    width: calc(100% + 1rem);
  }
`

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20rem;
  margin-top: -20rem;
  width: 100%;
`

export const ImageContainer = styled(motion.div)`
  position: relative;
  width: 65%;
  right: 0;
  aspect-ratio: 0.67/1;
  margin-bottom: 4rem;
  background-color: ${({ theme }) => theme.colors.white};
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
  opacity: 0.6;

  @media screen and (${devices.disordersbreak2}) {
    opacity: 1;
  }
`

export const ImageBanner = styled(motion.div)<StyledImageProps>`
  position: absolute;
  width: 100%;
  ${({ $variant }) => ($variant === 'right' ? rightBanner : bottomBanner)}
`

export const TextTitle = styled(motion.h3)`
  font-size: 2rem;
  padding: 2rem 0;

  @media screen and (${devices.disordersbreak2}) {
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
  left: 2rem;
  top: 0;
  z-index: 5;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;

  @media screen and (${devices.md}) {
    display: none;
  }
`

export const SmallTextContainer = styled.div`
  padding: 1rem;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;

  @media screen and (${devices.md}) {
    display: flex;
  }
`
