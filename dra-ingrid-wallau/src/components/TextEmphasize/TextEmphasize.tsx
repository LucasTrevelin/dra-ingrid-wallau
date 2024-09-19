import { PropsWithChildren } from 'react'
import { Container } from './TextEmphasize.styled'
import { TTextEmphasize } from './TextEmphasize.types'

export const TextEmphasize: React.FC<PropsWithChildren<TTextEmphasize>> = ({
  children,
  options
}) => {
  const { color, size } = options

  return (
    <Container $color={color} $size={size}>
      {children}
    </Container>
  )
}
