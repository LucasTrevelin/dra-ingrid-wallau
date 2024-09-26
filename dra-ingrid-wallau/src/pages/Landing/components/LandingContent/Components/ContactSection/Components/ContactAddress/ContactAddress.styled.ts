import { motion } from 'framer-motion'
import styled from 'styled-components'
import { devices } from '../../../../../../../../helpers/breakpoints.helpers'

export const CardContainer = styled(motion.article)`
  background-color: ${({ theme }) => theme.colors.white};
  aspect-ratio: 2 / 1;
  width: fit-content;
  border-radius: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 0.8rem;
  padding: 0.5rem 1.5rem;
  line-height: 24px;
  align-items: center;
  flex-wrap: wrap;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`
export const ContactCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 1rem;

  @media screen and (${devices.sm}) {
    row-gap: 0.5rem;
  }
`

export const Image = styled.img`
  aspect-ratio: 4.17/1;
  width: 15rem;
  @media screen and (${devices.sm}) {
    width: 11rem;
  }
`

export const InformationParagraph = styled.p`
  margin: 0;
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  row-gap: 2rem;
  flex-wrap: wrap;
  column-gap: 2rem;

  @media screen and (${devices.sm}) {
    column-gap: 0.5rem;
  }
`

export const IconTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 0.5rem;

  @media screen and (${devices.sm}) {
    font-size: 0.8rem;
  }

  svg {
    width: 1.25rem;
    @media screen and (${devices.sm}) {
      width: 1rem;
      margin: 0;
    }
  }
`
