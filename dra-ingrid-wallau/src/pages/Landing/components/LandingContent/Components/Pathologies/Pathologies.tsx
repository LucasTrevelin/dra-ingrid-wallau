import { useState } from 'react'
import { ContentBox } from '../../../../../../components/ContentBox/ContentBox'
import { Topic } from '../../../../../../components/Topic'
import { Cards } from './Components/Cards'

import * as S from './Pathologies.styled'
export const Pathologies = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const expandableOnClick = () => setIsExpanded(!isExpanded)

  return (
    <ContentBox variant='filled' aspectRatio={'auto'} hasFooterItem>
      <S.Container id='Patologias tratadas'>
        <S.LateralPadding>
          <Topic title='Quais as patologias abordadas nas consultas?' />
        </S.LateralPadding>
        <S.LateralPadding>
          <Cards isExpanded={isExpanded} />
        </S.LateralPadding>
        <S.ExpandButton onClick={expandableOnClick}>
          {isExpanded ? 'Clique para ver menos' : 'Clique para ver mais'}
        </S.ExpandButton>
      </S.Container>
    </ContentBox>
  )
}
