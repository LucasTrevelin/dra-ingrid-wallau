import React from 'react'
import { Container } from './Landing.styled'
import { Header } from '../../components/Header/Header'
import { LandingContent } from './components/LandingContent'

export const Landing: React.FC = () => {
  return (
    <Container>
      <Header />
      <LandingContent />
      {/*<Footer />*/}
    </Container>
  )
}
