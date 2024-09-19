import styled, { css } from 'styled-components'

const rightBanner = css`
  right: 0;
  top: 0;
  height: 100%;
  width: 2.5rem;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 0 1.25rem 1.25rem 0;
  z-index: 4;
`

const bottomBanner = css`
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  background-color: ${({ theme }) => theme.colors.grayFill};
  border-radius: 0 0 1.25rem 1.25rem;
  z-index: 5;
`

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20rem;
  margin-top: -20rem;
`

export const ImageContainer = styled.div`
  position: relative;
  width: 60%;
  aspect-ratio: 0.67/1;
  margin-bottom: 4rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 1.25rem;
`

export const Image = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  border-radius: 1.25rem;
  opacity: 0.8;
`

export const ImageBanner = styled.div<{ $variant: 'right' | 'bottom' }>`
  position: absolute;
  opacity: 0.8;
  ${({ $variant }) => ($variant === 'right' ? rightBanner : bottomBanner)}
  opacity: 0.8;
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
`

export const TextTitle = styled.h3`
  font-size: 2rem;
  padding: 2rem 0;
`
