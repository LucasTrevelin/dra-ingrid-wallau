import { Pill } from '../../../../../../../../components/Pill'
import { theme } from '../../../../../../../../global.styled'
import { pathologiesList, pathologiesMinimalList } from './Cards.constants'

import * as S from './Cards.styled'
import { TCards } from './Cards.types'

export const Cards: React.FC<TCards> = ({ isExpanded }) => {
  const pathologiesToBeExhibited: string[] = isExpanded
    ? pathologiesList
    : pathologiesMinimalList

  return (
    <S.Container>
      {pathologiesToBeExhibited.map((pathology) => (
        <Pill
          backgroundColor={theme.colors.cardGradient}
          color={theme.colors.white}
          borderRadius={'3.125rem'}
          width={'min-content'}
          minWidth={'200px'}
          key={`card-${pathology}`}
        >
          {pathology}
        </Pill>
      ))}
    </S.Container>
  )
}
