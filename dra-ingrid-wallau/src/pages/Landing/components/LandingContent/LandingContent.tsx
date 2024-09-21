import * as S from './LandingContent.styled'
import { Presentation } from './Components/Presentation'
import { Pathologies } from './Components/Pathologies/Pathologies'
import { Section } from '../../../../components/Section'
import { Disorders } from './Components/Disorders'
import { HowDoIWork } from './Components/HowDoIWork'
import { MyHistory } from './Components/MyHistory'
import { ContactSection } from './Components/ContactSection'

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
      <Section>
        <HowDoIWork />
      </Section>
      <Section>
        <MyHistory />
      </Section>
      <Section>
        <ContactSection />
      </Section>
    </S.Container>
  )
}
