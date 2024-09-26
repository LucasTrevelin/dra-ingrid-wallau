import styled from 'styled-components'
import { devices } from '../../helpers/breakpoints.helpers'

export const Container = styled.header`
  width: 100%;
  overflow: hidden;
  height: 8.5rem;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 30;

  @media screen and (${devices.sm}) {
    width: 100%;
  }
`

export const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
  margin-left: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media screen and (${devices.sm}) {
    justify-content: space-between;
  }
`

export const Image = styled.img`
  aspect-ratio: 1;
  width: 200px;
  margin-left: 2rem;
  border-radius: 10px;
  @media screen and (${devices.sm}) {
    display: none;
  }
`

export const SmallScreenImage = styled.img`
  aspect-ratio: 1;
  width: 136px;
  display: none;
  @media screen and (${devices.sm}) {
    display: flex;
  }
  :hover {
    transition: all 0.3s ease-in-out;
    text-decoration: underline;
  }
`
