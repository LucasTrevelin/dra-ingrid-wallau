import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: min-content;
  column-gap: 3rem;
  row-gap: 3rem;
  flex-wrap: wrap;
  padding-top: 9.5rem; /* Adjust according to the desired space */
  margin-top: -9.5rem; /* This counteracts the padding */

  h1,
  p {
    text-align: left;
    margin: 0;
  }
  p {
    font-size: 20px;
  }
`

export const TextContent = styled.div`
  max-width: 400px;
`

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  row-gap: 1rem;
`

export const Image = styled.img`
  aspect-ratio: 1.21/1;
  height: 400px;
  opacity: 0.8;
  border-radius: 20px;
`
