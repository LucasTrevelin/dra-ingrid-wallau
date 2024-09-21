import styled from 'styled-components'
import { TStyledSocialMediaButton } from './Footer.types'
import { devices } from '../../helpers/breakpoints.helpers'

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
`

export const FooterCentralizer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 80%;

  @media screen and (${devices.sm}) {
    /*width: 100%;*/
  }
`

export const Image = styled.img`
  aspect-ratio: 1;
  width: 200px;
`

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 2rem;
`

export const Title = styled.h3`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.white};
`
export const SocialMediaButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SocialMediaButton = styled.button<TStyledSocialMediaButton>`
  background-color: ${({ theme }) => theme.colors.backgroundDarker};
  border-radius: ${({ $orientation }) =>
    $orientation === 'right'
      ? '0.625rem 0 0 0.625rem'
      : '0  0.625rem 0.625rem 0'};
  border: 1px solid ${({ theme }) => theme.colors.white};

  &:hover {
    filter: brightness(1.1);
    scale: 1.05;
    transition: all 0.2s ease-in-out;
  }
`

export const SocialMediaIcon = styled.img`
  aspect-ratio: 1;
  width: 35px;
`
