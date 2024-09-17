import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`
