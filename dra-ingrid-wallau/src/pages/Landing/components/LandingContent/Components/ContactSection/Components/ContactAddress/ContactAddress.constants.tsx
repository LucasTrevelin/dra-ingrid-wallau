import * as S from './ContactAddress.styled'
import { Mail, Phone } from 'lucide-react'
import { theme } from '../../../../../../../../global.styled'

export const ContentBody = (
  <S.ContactCardContainer>
    <S.Image src='/images/logo-contact.png' />
    <S.InfoContainer>
      <S.InformationParagraph>
        <strong>CRM-DF:</strong>24232
      </S.InformationParagraph>
    </S.InfoContainer>
    <S.IconTextContainer>
      <S.InformationParagraph>
        <strong>RQE Psiquiatria:</strong> (20450)
      </S.InformationParagraph>
      <S.InformationParagraph>
        <strong>RQE Psicogeriatria:</strong> (22194)
      </S.InformationParagraph>
    </S.IconTextContainer>
    <S.InfoContainer>
      <S.IconTextContainer>
        <Mail size={'20px'} color={theme.colors.primary} />
        <S.InformationParagraph>
          <em>camilaadour@gmail.com</em>
        </S.InformationParagraph>
      </S.IconTextContainer>
      <S.IconTextContainer>
        <Phone size={'20px'} color={theme.colors.primary} />
        <S.InformationParagraph>(21) 97616-2422</S.InformationParagraph>
      </S.IconTextContainer>
    </S.InfoContainer>
  </S.ContactCardContainer>
)
