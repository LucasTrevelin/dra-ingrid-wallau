import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

:root {
  font-family: 'Open Sans Hebrew', 'Helvetica Neue', sans-serif;
}

#root {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100vw;
  margin: 0;
  padding: 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.black}
}

html,
body {
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  width: 100%;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}`

//Global colors
export const theme = {
  colors: {
    primary: '#2B316D',
    greenLighter: '#AED7C3',
    greenLight: '#98FB98',
    greenWhatsApp: '#27D366',
    background: '#001F54',
    yellowLight: '#F1DE74',
    yellowMustard: '#FFD700',
    cardBackground: '#F3F7F9',
    greyWhite: '#F3F7F9',
    orangeLighter: '#FFA265',
    orangeLight: '#FFA07A',
    white: '#FFFFFF',
    black: '#000000',
    gray: '#999999',
    cardGradient: 'linear-gradient(-91deg, #2C3E50 0%, #34495E 100%)'
  }
}
