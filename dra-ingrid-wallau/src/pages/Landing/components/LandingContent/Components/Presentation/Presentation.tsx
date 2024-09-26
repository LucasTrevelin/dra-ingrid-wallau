import { ContentBox } from '../../../../../../components/ContentBox'
import { Pill } from '../../../../../../components/Pill'
import { TextEmphasize } from '../../../../../../components/TextEmphasize'
import { theme } from '../../../../../../global.styled'
import { Button } from './component/Button'
import * as S from './Presentation.styled'

export const Presentation = () => {
  return (
    <S.Container id='Home'>
      <ContentBox variant='inverted'>
        <S.TextContent>
          <h1>
            Atendo{' '}
            <TextEmphasize options={{ color: theme.colors.greenLight }}>
              adultos e idosos
            </TextEmphasize>{' '}
            por meio de teleconsultas e consultas presenciais em domicílio.
          </h1>
        </S.TextContent>
        <S.TextContent>
          <p>
            Forneço{' '}
            <TextEmphasize options={{ color: theme.colors.yellowMustard }}>
              atendimento personalizado
            </TextEmphasize>
            , com foco na escuta acolhedora, avaliação meticulosa e conduta
            resolutiva, sempre baseada nas evidências científicas mais atuais.
          </p>
        </S.TextContent>
        <Button />
      </ContentBox>
      <S.ImageContainer>
        <S.Image
          src='/images/presentation-image.jpg'
          alt='dr-image'
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
          initial='hidden'
          animate='visible'
          transition={{ ease: 'linear', delay: 0.5 }}
        />
        <Pill backgroundColor={theme.colors.white} animationFrom='left'>
          <span>Dra. Ingrid Wallau </span>
          <span>CRM-DF: 24232</span>
        </Pill>
        <Pill
          backgroundColor={theme.colors.yellowMustard}
          animationFrom='right'
        >
          Psiquiatra e Psicogeriatra
        </Pill>
      </S.ImageContainer>
    </S.Container>
  )
}
