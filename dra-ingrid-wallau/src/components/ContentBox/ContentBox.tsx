import * as S from './ContentBox.styled'

import { TContentBox } from './ContentBox.types'

export const ContentBox: React.FC<TContentBox> = ({
  variant,
  children,
  maxWidth,
  aspectRatio
}) => {
  return (
    <S.Container
      $maxWidth={maxWidth}
      $variant={variant}
      $aspectRatio={aspectRatio}
    >
      {children}
    </S.Container>
  )
}
