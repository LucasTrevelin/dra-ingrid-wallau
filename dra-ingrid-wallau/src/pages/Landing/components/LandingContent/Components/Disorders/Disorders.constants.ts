import { TContentTopic } from './Components/insideTopics/InsideTopics.types'

export const disordersObjects: Array<TContentTopic> = [
  {
    letter: 'A',
    title: 'de humor',
    imageLink: '/icons/humor_symbol.png',
    itemsList: ['Depressão', 'Bipolaridade']
  },
  {
    letter: 'B',
    title: 'de ansiedade',
    imageLink: '/icons/anxiety_symbol.png',
    itemsList: [
      'Ansiedade',
      'Síndrome do pânico',
      'Transtorno Obsessivo-Compulsivo (TOC)',
      'Fobias'
    ]
  },
  {
    letter: 'C',
    title: 'Neuropsiquiátricos',
    imageLink: '/icons/neuropsychiatric_symbol.png',
    itemsList: ['Esquizofrenia', 'Autismo']
  },
  {
    letter: 'D',
    title: 'Neurocognitivos',
    imageLink: '/icons/neurocognitive_symbol.png',
    itemsList: [
      'Doença de Alzheimer',
      'Transtornos Neurocognitivos (Demências de diversas etiologias)'
    ]
  },
  {
    letter: 'E',
    title: 'Outros',
    imageLink: '/icons/others_symbol.png',
    itemsList: [
      'Déficit de Atenção e Hiperatividade (TDAH)',
      'Transtornos por uso de substâncias psicoativas',
      'Transtornos Alimentares'
    ]
  }
]
