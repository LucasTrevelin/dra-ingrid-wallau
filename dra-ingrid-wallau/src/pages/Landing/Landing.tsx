import React from 'react'
import { Container } from './Landing.styled'
import { LandingContent } from './components/LandingContent'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header'

export const Landing: React.FC = () => {
  return (
    <Container>
      <Header />
      <LandingContent />
      <Footer />
    </Container>
  )
}
