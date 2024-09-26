import styled from 'styled-components'
import { TSpecialLinksProps } from './Link.types'
import { devices } from '../../../helpers/breakpoints.helpers'

export const LinkContainer = styled.div<TSpecialLinksProps>`
  padding: 0.5rem 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  :hover {
    cursor: pointer;
  }

  @media screen and (${devices.sm}) {
    align-items: flex-start;
    justify-content: flex-start;
    padding-left: 2rem;
    height: fit-content;
  }
`

export const NavLink = styled.a<TSpecialLinksProps>`
  white-space: nowrap;
  scroll-behavior: smooth;
  color: inherit;
  text-decoration: none;
  font-weight: ${({ $variant }) => $variant === 'selected' && 600};
  color: ${({ $variant, theme }) =>
    $variant === 'selected' && theme.colors.orangeLight};

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.orangeLight};
    text-decoration-color: ${({ theme }) => theme.colors.orangeLight};
    scale: 1.05;
    transition: all 0.2s ease-in-out;
  }

  @media screen and (${devices.sm}) {
    color: ${({ theme }) => theme.colors.white};
  }
`
