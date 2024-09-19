import * as S from './Button.styled'

export const Button = () => {
  return (
    <S.Container>
      <S.TextContainer>
        <strong>Marcar consulta</strong>
      </S.TextContainer>
      <S.ButtonContainer>
        <img src='/icons/whatsapp_icon.svg' />
      </S.ButtonContainer>
    </S.Container>
  )
}
