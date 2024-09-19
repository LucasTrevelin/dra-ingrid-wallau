import { Container } from './Pill.styled'
import { TPillProps } from './Pill.types'

export const Pill: React.FC<TPillProps> = ({ color, children }) => {
  return <Container $color={color}>{children}</Container>
}
