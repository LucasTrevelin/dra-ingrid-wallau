import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  overflow-x: hidden;
  height: 5.25rem;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 30;
`

export const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
  margin-left: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const Image = styled.img`
  aspect-ratio: 2.94/1;
  width: 200px;
  margin-left: 2rem;
  border-radius: 10px;
`

export const SmallScreenImage = styled.img`
  aspect-ratio: 1.18/1;
  width: 30px;
  display: none;
  backdrop-filter: blur(5px);
  margin-right: 2rem;
  -webkit-backdrop-filter: blur(5px);
  :hover {
    transition: all 0.3s ease-in-out;
    text-decoration: underline;
  }
`
