import { Topic } from '../../../../../../components/Topic'
import { theme } from '../../../../../../global.styled'
import { ContactAddress } from './Components/ContactAddress'
import * as S from './ContactSection.styled'

export const ContactSection = () => {
  return (
    <S.ContactSection id='Contato'>
      <Topic color={theme.colors.orangeLight}>Contato</Topic>
      <S.Centralizer>
        <ContactAddress />
      </S.Centralizer>
    </S.ContactSection>
  )
}
