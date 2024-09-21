import * as S from './Topic.styled'
import { TTopic } from './Topic.types'

export const Topic: React.FC<TTopic> = ({
  children,
  variant = 'normal',
  fontSize,
  color
}) => {
  return (
    <S.Container $variant={variant} $fontSize={fontSize} $color={color}>
      {children}
    </S.Container>
  )
}
