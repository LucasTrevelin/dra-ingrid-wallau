import { ThemeProvider } from 'styled-components'
//import { Landing } from './pages/Landing/Landing'
import GlobalStyled, { theme } from './global.styled'
import { Landing } from './pages/Landing/Landing'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <Landing />
    </ThemeProvider>
  )
}

export default App
