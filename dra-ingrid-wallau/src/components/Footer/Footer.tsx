import * as S from './Footer.styled'

export const Footer = () => {
  return (
    <S.Container>
      <S.FooterCentralizer>
        <S.Image src='/images/logo_branco.png' alt='footer-logo' />
        <S.SocialMediaContainer>
          <S.Title>Redes Sociais</S.Title>
          <S.SocialMediaButtonContainer>
            <S.SocialMediaButton $orientation='right'>
              <S.SocialMediaIcon
                src='/icons/whatsapp-icon-white.png'
                alt='whatsapp-icon'
              />
            </S.SocialMediaButton>
            <S.SocialMediaButton $orientation='left'>
              <S.SocialMediaIcon
                src='/icons/instagram-icon-white.png'
                alt='instagram-icon'
              />
            </S.SocialMediaButton>
          </S.SocialMediaButtonContainer>
        </S.SocialMediaContainer>
      </S.FooterCentralizer>
    </S.Container>
  )
}
