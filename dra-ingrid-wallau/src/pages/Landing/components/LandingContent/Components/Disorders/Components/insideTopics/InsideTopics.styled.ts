import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 380px;

  & > ul {
    font-family: 'Poppins', 'Helvetica Neue', sans-serif;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 900;
    font-size: 1.125rem;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${({ theme }) => theme.colors.grayHighlight};
    list-style-type: circle;
    text-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

    & > li::marker {
      color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      font-weight: 900;
    }
  }
`

export const TopicContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  & > span {
    font-size: 1.25rem;
    line-height: 1.625rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.grayHighlight};
  }
`
