import { useState } from 'react'
import { headerLinks, headerMenuLinks } from './Header.constants'
import * as S from './Header.styled'
import { MappedLinks } from './MappedLinks/MappedLinks'
import { ModalMappedLinks } from './ModalMappedLinks'
import { HamburguerMenu } from './HamburguerMenu'
export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openMenu = () => setIsMenuOpen(!isMenuOpen)
  return (
    <>
      <S.Container>
        <S.ImageContainer>
          <S.Image src='/images/logo_preto.png' alt='header-logo' />
          <S.SmallScreenImage src='/images/logo_preto.png' alt='header-logo' />
        </S.ImageContainer>
        <MappedLinks mappedLinks={headerLinks} />
        <HamburguerMenu onClick={openMenu} />
      </S.Container>
      <ModalMappedLinks
        mappedLinks={headerMenuLinks}
        isOpen={isMenuOpen}
        additionalAction={openMenu}
      />
    </>
  )
}
