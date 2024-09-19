import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 1rem;
`

export const LateralPadding = styled.div`
  padding: 0 2rem;
`

export const ExpandButton = styled.button`
  width: 100%;
  border-radius: 0 0 1.25rem 1.25rem;
  background-color: ${({ theme }) => theme.colors.gray};
  margin-top: 2rem;
`
