import styled from 'styled-components'

export const Container = styled.button`
  outline: none;
  border: 0;
  width: fit-content;
  background-color: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1.18/1;
  margin-right: 2rem;
  position: relative;
`

export const Image = styled.img`
  aspect-ratio: 1.18/1;
  width: 30px;
  display: none;
  backdrop-filter: blur(5px);

  -webkit-backdrop-filter: blur(5px);
  :hover {
    transition: all 0.3s ease-in-out;
    text-decoration: underline;
  }
`
