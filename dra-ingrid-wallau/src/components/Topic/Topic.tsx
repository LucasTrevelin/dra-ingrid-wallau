import { useRef } from 'react'
import * as S from './Topic.styled'
import { TTopic } from './Topic.types'

export const Topic: React.FC<TTopic> = ({
  children,
  variant = 'normal',
  fontSize,
  color
}) => {
  const scrollRef = useRef(null)
  return (
    <S.Container
      $variant={variant}
      $fontSize={fontSize}
      $color={color}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ root: scrollRef, once: true }}
      transition={{ ease: 'linear', delay: 0.5 }}
    >
      {children}
    </S.Container>
  )
}
