import * as S from './Topic.styled'
import { TTopic } from './Topic.types'

export const Topic: React.FC<TTopic> = ({
  title,
  variant = 'normal',
  fontSize
}) => {
  return (
    <S.Container $variant={variant} $fontSize={fontSize}>
      {title}
    </S.Container>
  )
}
