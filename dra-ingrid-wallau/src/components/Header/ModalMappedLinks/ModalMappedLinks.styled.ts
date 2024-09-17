import styled from 'styled-components'
import { motion } from 'framer-motion'

export const LinksWrapper = styled(motion.dialog)`
  && {
    padding: 0.8rem 0;
  }
  width: min-content;
  display: none;
  flex-direction: column;
  align-items: center;
  margin: 0;
  position: fixed;
  top: 3.5rem;
  left: 30%;
  text-align: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
  right: 0.5rem;
  z-index: 9999;
  border-radius: 10px;
  border: 0;
  outline: 0;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
