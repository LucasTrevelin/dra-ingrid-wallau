import styled, { css } from 'styled-components'
import { devices } from '../../../../../../../../../helpers/breakpoints.helpers'

const roundStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2.5rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.greenWhatsApp};
  padding: 1rem;

  @media screen and (${devices.sm}) {
    height: 2rem;
    padding: 0.4rem;
    font-size: 0.875rem;
    border-radius: 1.5rem;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TextContainer = styled.div`
  ${roundStyle}
`

export const ButtonContainer = styled.button`
  ${roundStyle}
  outline: 0;
  cursor: pointer;
  aspect-ratio: 1/1;
  height: 3.5rem;

  @media screen and (${devices.sm}) {
    height: 2.8rem;

    & > img {
      scale: 0.8;
    }
  }

  &:hover {
    filter: brightness(1.1);
    scale: 1.05;
    transition: all 0.2s ease-in-out;
  }
`

export const Link = styled.a`
  color: inherit;
  text-decoration: none;
`
