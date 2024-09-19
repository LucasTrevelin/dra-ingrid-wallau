import { ContentBox } from '../../../../../../components/ContentBox/ContentBox'
import { Topic } from '../../../../../../components/Topic'
import { LateralPadding } from '../Pathologies/Pathologies.styled'
import { InsideTopics } from './Components/insideTopics'
import { disordersObjects } from './Disorders.constants'
import * as S from './Disorders.styled'

export const Disorders: React.FC = () => {
  return (
    <ContentBox variant='filled' aspectRatio={'auto'} hasFooterItem>
      <LateralPadding>
        <Topic title='Quais as patologias abordadas nas consultas?' />
      </LateralPadding>
      <S.Container id='Transtornos atendidos'>
        <S.ImageContainer>
          <S.Image
            src='/images/disorders_photo.jpg'
            alt='disorder-treatment-photo'
          />
          <S.ImageBanner $variant='right' />
          <S.ImageBanner $variant='bottom' />
          <S.TextContainer>
            <S.TextTitle>Transtornos</S.TextTitle>
            <InsideTopics contentTopics={disordersObjects} />
          </S.TextContainer>
        </S.ImageContainer>
      </S.Container>
    </ContentBox>
  )
}
