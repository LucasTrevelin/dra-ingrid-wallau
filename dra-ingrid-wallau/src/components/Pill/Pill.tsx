import { Container } from './Pill.styled'
import { TPillProps } from './Pill.types'

export const Pill: React.FC<TPillProps> = ({
  backgroundColor,
  children,
  borderRadius,
  width,
  minWidth,
  color,
  aspectRatio
}) => {
  return (
    <Container
      $backgroundColor={backgroundColor}
      $borderRadius={borderRadius}
      $width={width}
      $color={color}
      $minWidth={minWidth}
      $aspectRatio={aspectRatio}
    >
      {children}
    </Container>
  )
}
