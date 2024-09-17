import styled from 'styled-components'

export const LinksWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  column-gap: 0.5rem;
  text-align: center;
  padding: 0 2rem;
  flex: 1;
  :hover {
    transition: all 0.3s ease-in-out;
    text-decoration: underline;
  }
`
