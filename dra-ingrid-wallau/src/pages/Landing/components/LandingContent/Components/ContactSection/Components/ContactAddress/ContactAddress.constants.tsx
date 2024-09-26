import * as S from './ContactAddress.styled'
import { Mail, Phone } from 'lucide-react'
import { theme } from '../../../../../../../../global.styled'

export const ContentBody = (
  <S.ContactCardContainer>
    <S.Image src='/images/logo-contact.png' />
    <S.InfoContainer>
      <S.InformationParagraph>
        <S.IconTextContainer>
          <strong>CRM-DF:</strong>24232
        </S.IconTextContainer>
      </S.InformationParagraph>
    </S.InfoContainer>
    <S.IconTextContainer>
      <S.InformationParagraph>
        <strong>RQE Psiquiatria:</strong> 20450
      </S.InformationParagraph>
      <S.InformationParagraph>
        <strong>RQE Psicogeriatria:</strong> 22194
      </S.InformationParagraph>
    </S.IconTextContainer>
    <S.InfoContainer>
      <S.IconTextContainer>
        <Mail color={theme.colors.primary} />
        <S.InformationParagraph>
          <em>camilaadour@gmail.com</em>
        </S.InformationParagraph>
      </S.IconTextContainer>
      <S.IconTextContainer>
        <Phone color={theme.colors.primary} />
        <S.InformationParagraph>(61) 8107-0150</S.InformationParagraph>
      </S.IconTextContainer>
    </S.InfoContainer>
  </S.ContactCardContainer>
)
