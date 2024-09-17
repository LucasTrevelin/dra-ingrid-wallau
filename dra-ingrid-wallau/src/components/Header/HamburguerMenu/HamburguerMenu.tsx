import * as S from './HamburguerMenu.styled'
import { THamburguerMenu } from './HamburguerMenu.types'

export const HamburguerMenu: React.FC<THamburguerMenu> = ({
  children,
  onClick
}) => {
  return (
    <S.Container onClick={onClick}>
      <S.Image src='/assets/images/hamburguer-menu.jpg' alt='hamburguer-menu' />
      {children}
    </S.Container>
  )
}
