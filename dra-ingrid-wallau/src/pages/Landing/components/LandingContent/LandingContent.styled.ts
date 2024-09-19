import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled.main`
  width: 80%;
  margin-top: 8rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const RegularTitleSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin: 4rem 0;
`
