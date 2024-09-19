import styled from 'styled-components'
import { TSpecialLinksProps } from './Link.types'

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
    color: ${({ $variant, theme }) =>
      $variant === 'selected' && theme.colors.orangeLight};
    text-decoration-color: ${({ $variant, theme }) =>
      $variant === 'selected' && theme.colors.orangeLight};
  }
`
