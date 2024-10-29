import { encodedMessages } from '../../../../../../../../../helpers/encodedMessages'
import * as S from './Button.styled'

export const Button = () => {
  return (
    <S.Container>
      <S.TextContainer>
        <strong>Marcar consulta</strong>
      </S.TextContainer>
      <S.Link
        target='_blank'
        href={`https://wa.me/+5561990229494?text=${encodedMessages.whatsapp}`}
      >
        <S.ButtonContainer>
          <img src='/icons/whatsapp_icon.svg' />
        </S.ButtonContainer>
      </S.Link>
    </S.Container>
  )
}
