import { useRef } from 'react'
import { ContentBox } from '../../../../../../components/ContentBox'
import { TextEmphasize } from '../../../../../../components/TextEmphasize'
import { Topic } from '../../../../../../components/Topic'
import { theme } from '../../../../../../global.styled'
import * as S from './HowDoIWork.styled'

export const HowDoIWork = () => {
  const scrollRef = useRef(null)
  return (
    <ContentBox variant='inverted' aspectRatio={'auto'}>
      <S.IdAnchor id='Como eu trabalho' />
      <Topic color={theme.colors.white}>
        Como eu{' '}
        <TextEmphasize options={{ color: theme.colors.yellowMustard }}>
          trabalho
        </TextEmphasize>
        ?
      </Topic>
      <S.Centralizer>
        <S.TextContainer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ root: scrollRef, once: true }}
          transition={{ ease: 'linear', delay: 0.5 }}
        >
          Tenho interesse máximo em me dedicar a cada paciente de forma única,
          com{' '}
          <TextEmphasize options={{ color: theme.colors.greenLighter }}>
            esforço, atenção, cuidado, empatia e capacitação técnica
          </TextEmphasize>
          . Procuro me atualizar diariamente quanto às evidências científicas e
          adotá-las aos meus atendimentos.
        </S.TextContainer>
        <S.ImageContainer>
          <S.Image
            src='/images/work-photo.jpg'
            alt='dr-working'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ root: scrollRef, once: true }}
            transition={{ ease: 'linear', delay: 0.7 }}
          />
        </S.ImageContainer>
      </S.Centralizer>
      <Topic color={theme.colors.white}>
        Sobre as{' '}
        <TextEmphasize options={{ color: theme.colors.orangeLighter }}>
          consultas
        </TextEmphasize>
        ...
      </Topic>
      <S.TextContainer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ root: scrollRef, once: true }}
        transition={{ ease: 'linear', delay: 0.5 }}
      >
        Atendimentos de adultos e idosos por telemedicina ou consultas
        domiciliares.
        <br />
        <br /> Assim como os atendimentos presenciais, nas consultas em
        telemedicina buscamos entender o paciente, suas queixas, angústias e
        toda a sua história de vida de forma ampla e pormenorizada. A escuta
        empática, a elaboração diagnóstica e o acolhimento das necessidades e
        individualidades dos pacientes são pontos chaves destes atendimentos.
        São pontos primordiais a total confidencialidade e o tratamento baseado
        em evidências científicas. As receitas são assinadas e enviadas
        digitalmente, quando possível, com QR code para acesso fácil em
        farmácias. Quando não possível, receitas são enviadas por SEDEX
        registrado, com fornecimento de protocolo de acompanhamento. <br />{' '}
        <br />
        As consultas domiciliares em <strong>
          Psiquiatria Geriátrica
        </strong>{' '}
        ocorrem no conforto da residência do paciente. É importante que a
        família esteja envolvida, ajudando a obter informações sobre o histórico
        do paciente, doenças pré-existentes e sintomas atuais e também para
        receber todas as informações e orientações necessárias ao cuidado do
        paciente idoso. É realizada uma avaliação extremamente detalhada quanto
        todo o contexto prévio e atual do paciente. No atendimento é feito o
        acolhimento empático, a psicoeducação do paciente e familiar quanto às
        patologias existentes, exame físico e testes neuropsicológicos. Também é
        avaliado o ambiente de moradia, com orientações sobre locais de riscos e
        possíveis melhorias estruturais visando a prevenção de quedas e outros
        riscos e fornecendo sugestões para o cuidado mais adequado. É feita uma
        organização e avaliação quanto aos fármacos utilizados, interações e
        riscos-benefícios naquele momento, sempre estabelecendo uma relação de
        confiança, interesse e apoio destinado ao paciente.
      </S.TextContainer>
    </ContentBox>
  )
}
