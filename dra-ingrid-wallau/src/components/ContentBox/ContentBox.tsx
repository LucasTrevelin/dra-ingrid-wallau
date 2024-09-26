import { useRef } from 'react'
import * as S from './ContentBox.styled'

import { TContentBox } from './ContentBox.types'

export const ContentBox: React.FC<TContentBox> = ({
  variant,
  children,
  maxWidth,
  aspectRatio,
  hasFooterItem,
  id
}) => {
  const scrollRef = useRef(null)
  return (
    <S.Container
      $maxWidth={maxWidth}
      $variant={variant}
      $aspectRatio={aspectRatio}
      $hasFooterItem={hasFooterItem}
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ root: scrollRef, once: true }}
      transition={{ ease: 'linear', delay: 0.4 }}
    >
      {children}
    </S.Container>
  )
}
