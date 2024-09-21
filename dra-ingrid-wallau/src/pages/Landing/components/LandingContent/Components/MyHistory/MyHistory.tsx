import { ContentBox } from '../../../../../../components/ContentBox'
import { TextEmphasize } from '../../../../../../components/TextEmphasize'
import { Topic } from '../../../../../../components/Topic'
import { theme } from '../../../../../../global.styled'
import * as S from './MyHistory.styled'

export const MyHistory = () => {
  return (
    <ContentBox variant='filled' aspectRatio={'auto'}>
      <S.IdAnchor id='Minha história' />
      <Topic>
        Minha história de vida e ligação com a psiquiatria e psicogeriatria
      </Topic>
      <S.Centralizer>
        <S.Image src='/images/my-history.jpg' alt='dr-working' />
        <S.TextContainer>
          Nascida em{' '}
          <TextEmphasize options={{ color: theme.colors.greenLighter }}>
            <strong>Gurupi – TO</strong>
          </TextEmphasize>
          , mas de família gaúcha de{' '}
          <TextEmphasize options={{ color: theme.colors.orangeLight }}>
            <strong>Porto Alegre – RS</strong>
          </TextEmphasize>
          .
          <br />
          Desde pequena com contato afetuoso e muito próximo com os meus quatro
          avós, que são vivos e seguem presentes em minha vida. Sempre
          apresentei grande interesse na observação do comportamento humano e
          avaliação das emoções. Dentre todas as áreas da Medicina, me encantei
          por aquela que mais me intrigava: aquela que se aprofunda no que há de
          mais íntimo e sagrado do ser humano. Ter a permissão para compartilhar
          dores, angústias e satisfações para mim é um presente diário.
          Conhecida sempre por preferir sempre estar com idosos, me sentia quase
          hipnotizada pela convivência tão serena e sábia. Hoje tenho a
          oportunidade de fazer o que mais amo, aprendendo diariamente com os
          meus pacientes e tendo a minha parcela de contribuição na redução do
          sofrimento mental e no restabelecimento de uma vida que vale a pena
          ser vivida.
        </S.TextContainer>
      </S.Centralizer>
      <ContentBox variant='poem' aspectRatio={'auto'}>
        <Topic fontSize={'2rem'} color={theme.colors.orangeLight}>
          Detalhes
        </Topic>
        <S.TextPoemContainer $alignment='left'>
          Eu gosto dos detalhes
          <br /> Então eu me dei bem
          <br /> Pra quem aprecia os detalhes,
          <br /> Melhor focar em quem os tem
          <br />
          <br /> Gosto da serenidade no olhar,
          <br /> Que aceita ser encontrado para poder contagiar
          <br /> Do leve encurvar do canto da boca ao falar de sua experiência
          <br /> Os holofotes realçando apenas a essência
          <br />
          <br /> Sem tempo para picuinhas,
          <br /> Só o que é verdadeiro tem lugar ali
          <br /> O que não for genuíno
          <br /> Nem venha parar aqui!
          <br />
          <S.PoemImage
            $aspectRatio='1.38/1'
            $width='376px'
            $position={{ top: '8rem', right: '3rem' }}
            src='/images/poem-1.jpg'
          />
          <S.ImageFilter
            $aspectRatio='1.38/1'
            $width='376px'
            $position={{ top: '8rem', right: '3rem' }}
          />
        </S.TextPoemContainer>
        <S.TextPoemContainer $alignment='right'>
          <S.PoemImage
            $aspectRatio='1.5/1'
            $width='376px'
            $position={{ top: '7rem', left: '3rem' }}
            src='/images/poem-2.jpg'
          />
          <S.ImageFilter
            $aspectRatio='1.5/1'
            $width='376px'
            $position={{ top: '7rem', left: '3rem' }}
          />
          Gosto dos fiozinhos brancos, formando uma rede de descanso para meu
          olhar
          <br /> Cada um tem uma história, quando vejo, mais quero admirar
          <br /> O caminhar nem sempre independente, mas quase sempre seguro
          <br /> De quem já viveu muito para ficar em cima do muro
          <br /> A firmeza e calma que mais parecem uma dança
          <br /> Daquelas de quando ninguém está olhando
          <br /> Que você só se lembra de ter feito quando era criança
          <br /> Eu gosto até da desconfiança no olhar
          <br /> Quando um jovem se atreve a examinar
          <br /> É muita ousadia sim, senhora
          <br /> Onde já se viu, querer ter essa honra assim agora?!
          <br />
        </S.TextPoemContainer>
        <S.TextPoemContainer $alignment='left'>
          Gosto muito de te admirar
          <br /> Espero não te envergonhar
          <br /> Só não dá pra disfarçar a minha admiração
          <br /> Quando a sua história você vem compartilhar
          <br /> Paciência é você que tem que ter comigo
          <br /> Mas meus olhos curiosos
          <br /> Querem fazer um novo amigo
          <br /> Compartilha teus medos e deixa eu te cuidar
          <br /> Seu tempo é precioso e por isso não vamos nos apressar
          <br /> Eu gosto dos detalhes!
          <br />
          <S.PoemImage
            $aspectRatio='1.15/1'
            $width='300px'
            $position={{ top: '5rem', right: '3rem' }}
            src='/images/poem-3.jpg'
          />
          <S.ImageFilter
            $aspectRatio='1.15/1'
            $width='300px'
            $position={{ top: '5rem', right: '3rem' }}
          />
        </S.TextPoemContainer>
        <S.TextPoemContainer $alignment='right' $isSignature>
          WALLAU, INGRID - 28/04/2021
        </S.TextPoemContainer>
      </ContentBox>
    </ContentBox>
  )
}
