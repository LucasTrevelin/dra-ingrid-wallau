import { useRef } from 'react'
import { Container } from './Pill.styled'
import { TPillProps } from './Pill.types'

export const Pill: React.FC<TPillProps> = ({
  backgroundColor,
  children,
  borderRadius,
  width,
  minWidth,
  color,
  aspectRatio,
  animationFrom
}) => {
  const scrollRef = useRef(null)

  const animationProps: Record<TPillProps['animationFrom'], object> = {
    left: { opacity: 0, x: -30 },
    right: { opacity: 0, x: 30 },
    up: { opacity: 0, y: -30 },
    down: { opacity: 0, y: 30 }
  }

  return (
    <Container
      $backgroundColor={backgroundColor}
      $borderRadius={borderRadius}
      $width={width}
      $color={color}
      $minWidth={minWidth}
      $aspectRatio={aspectRatio}
      initial={animationProps[animationFrom]}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ root: scrollRef, once: true }}
      transition={{ ease: 'linear', delay: 0.4 }}
    >
      {children}
    </Container>
  )
}
