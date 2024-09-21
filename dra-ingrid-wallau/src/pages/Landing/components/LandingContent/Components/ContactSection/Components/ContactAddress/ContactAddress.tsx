import { useRef } from 'react'
import { ContentBody } from './ContactAddress.constants'
import * as S from './ContactAddress.styled'

export const ContactAddress: React.FC = () => {
  const scrollRef = useRef(null)
  return (
    <S.CardContainer
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ root: scrollRef, once: true }}
      transition={{ ease: 'linear', delay: 0.3 }}
    >
      {ContentBody}
    </S.CardContainer>
  )
}
