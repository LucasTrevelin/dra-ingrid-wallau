import * as S from './LandingContent.styled'
import { Presentation } from './Components/Presentation'
import { Pathologies } from './Components/Presentation/Pathologies/Pathologies'
import { Section } from '../../../../components/Section'

export const LandingContent: React.FC = () => {
  return (
    <S.Container>
      <Section>
        <Presentation />
      </Section>
      <Section>
        <Pathologies />
      </Section>
    </S.Container>
  )
}
