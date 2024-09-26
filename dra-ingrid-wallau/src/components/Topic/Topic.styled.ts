import styled from 'styled-components'
import { TStyledVariant } from './Topic.types'
import { devices } from '../../helpers/breakpoints.helpers'
import { motion } from 'framer-motion'

export const Container = styled(motion.h1)<TStyledVariant>`
  color: ${({ $variant, theme, $color }) => {
    if ($color) return $color
    if ($variant === 'normal') return theme.colors.primary
    return theme.colors.orangeLighter
  }};
  font-size: ${({ $fontSize }) => ($fontSize ? $fontSize : '2.5rem')};
  margin: 2rem 0;
  text-align: left;
  line-height: 2.5rem;

  @media screen and (${devices.sm}) {
    font-size: 1.5rem;
    line-height: 1.625rem;
  }
`
