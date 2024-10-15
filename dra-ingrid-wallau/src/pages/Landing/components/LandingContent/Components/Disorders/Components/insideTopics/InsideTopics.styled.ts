import styled from 'styled-components'
import { devices } from '../../../../../../../../helpers/breakpoints.helpers'
import { motion } from 'framer-motion'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  max-width: 380px;

  & > ul {
    font-family: 'Poppins', 'Helvetica Neue', sans-serif;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 900;
    font-size: 1.125rem;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${({ theme }) => theme.colors.grayHighlight};
    list-style-type: circle;
    text-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

    @media screen and (${devices.disordersbreak2}) {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors.black};
      -webkit-text-stroke-color: none;
      -webkit-text-stroke-width: 0;
      font-weight: 400;
    }

    @media screen and (${devices.lg}) {
    }

    & > li::marker {
      color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      font-weight: 900;
    }
  }
`

export const TopicContainer = styled(motion.div)`
  display: flex;
  width: 100%;
  align-items: center;
  & > span {
    font-size: 1rem;
    padding: 0.5rem 0;
    margin: 0.25rem 0;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.grayHighlight};

    @media screen and (${devices.lg}) {
      font-size: 1rem;
    }
  }
`
