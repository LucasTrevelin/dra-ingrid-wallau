import { useRef } from 'react'
import { ContentBox } from '../../../../../../components/ContentBox'
import { Topic } from '../../../../../../components/Topic'
import { LateralPadding } from '../Pathologies/Pathologies.styled'
import { InsideTopics } from './Components/insideTopics'
import { disordersObjects } from './Disorders.constants'
import * as S from './Disorders.styled'

export const Disorders: React.FC = () => {
  const scrollRef = useRef(null)
  return (
    <ContentBox variant='filled' aspectRatio={'auto'} hasFooterItem>
      <LateralPadding>
        <Topic>Quais os Transtornos Psiquiátricos atendidos?</Topic>
      </LateralPadding>
      <S.Container id='Transtornos atendidos'>
        <S.ImageContainer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ root: scrollRef, once: true }}
          transition={{ ease: 'linear', delay: 0.5 }}
        >
          <S.Image
            src='/images/disorders_photo_2.jpg'
            alt='disorder-treatment-photo'
            viewport={{ root: scrollRef, once: true }}
            transition={{ ease: 'linear', delay: 0.5 }}
          />
          <S.ImageBanner
            $variant='right'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ root: scrollRef, once: true }}
            transition={{ ease: 'linear', delay: 0.5 }}
          />
          <S.ImageBanner
            $variant='bottom'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ root: scrollRef, once: true }}
            transition={{ ease: 'linear', delay: 0.5 }}
          />
          <S.TextContainer>
            <S.TextTitle
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ root: scrollRef, once: true }}
              transition={{ ease: 'linear', delay: 0.5 }}
            >
              Transtornos
            </S.TextTitle>
            <InsideTopics contentTopics={disordersObjects} />
          </S.TextContainer>
        </S.ImageContainer>
        <S.SmallTextContainer>
          <S.TextTitle
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ root: scrollRef, once: true }}
            transition={{ ease: 'linear', delay: 0.5 }}
          >
            Transtornos
          </S.TextTitle>
          <InsideTopics contentTopics={disordersObjects} />
        </S.SmallTextContainer>
      </S.Container>
    </ContentBox>
  )
}
