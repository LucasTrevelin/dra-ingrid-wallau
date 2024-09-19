import * as S from './LandingContent.styled'
import { Presentation } from './Components/Presentation'
import { Pathologies } from './Components/Pathologies/Pathologies'
import { Section } from '../../../../components/Section'
import { Disorders } from './Components/Disorders'

export const LandingContent: React.FC = () => {
  return (
    <S.Container>
      <Section>
        <Presentation />
      </Section>
      <Section>
        <Pathologies />
      </Section>
      <Section>
        <Disorders />
      </Section>
    </S.Container>
  )
}
