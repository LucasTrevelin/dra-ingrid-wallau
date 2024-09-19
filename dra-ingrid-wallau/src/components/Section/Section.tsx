import { PropsWithChildren } from 'react'
import { Container } from './Section.styled'

export const Section: React.FC<PropsWithChildren> = ({ children }) => {
  return <Container>{children}</Container>
}
