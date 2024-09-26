import { encodedMessages } from '../../helpers/encodedMessages'
import * as S from './Footer.styled'

export const Footer = () => {
  return (
    <S.Container>
      <S.FooterCentralizer>
        <S.Image src='/images/logo_branco.png' alt='footer-logo' />
        <S.SmallScreenImage src='/images/logo_branco.png' alt='footer-logo' />
        <S.SocialMediaContainer>
          <S.Title>Redes Sociais</S.Title>
          <S.SocialMediaButtonContainer>
            <S.Link
              target='_blank'
              href={`https://wa.me/+556181070150?text=${encodedMessages.whatsapp}`}
            >
              <S.SocialMediaButton $orientation='right'>
                <S.SocialMediaIcon
                  src='/icons/whatsapp-icon-white.png'
                  alt='whatsapp-icon'
                />
              </S.SocialMediaButton>
            </S.Link>
            <S.Link
              target='_blank'
              href='https://www.instagram.com/psiquiatraingridwallau?igsh=MWVwY2JsdWdqcXViZg=='
            >
              <S.SocialMediaButton $orientation='left'>
                <S.SocialMediaIcon
                  src='/icons/instagram-icon-white.png'
                  alt='instagram-icon'
                />
              </S.SocialMediaButton>
            </S.Link>
          </S.SocialMediaButtonContainer>
        </S.SocialMediaContainer>
      </S.FooterCentralizer>
    </S.Container>
  )
}
