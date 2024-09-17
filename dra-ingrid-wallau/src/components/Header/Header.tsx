import { useState } from 'react'
import { headerLinks, headerMenuLinks } from './Header.constants'
import * as S from './Header.styled'
import { MappedLinks } from './MappedLinks/MappedLinks'
import { ModalMappedLinks } from './ModalMappedLinks'
export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openMenu = () => setIsMenuOpen(!isMenuOpen)
  return (
    <>
      <S.Container>
        <S.ImageContainer>
          <h3>LOGO</h3>
          <MappedLinks mappedLinks={headerLinks} />
        </S.ImageContainer>
      </S.Container>
      <ModalMappedLinks
        mappedLinks={headerMenuLinks}
        isOpen={isMenuOpen}
        additionalAction={openMenu}
      />
    </>
  )
}
