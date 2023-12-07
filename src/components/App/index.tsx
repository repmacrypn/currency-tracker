import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Theme } from '@/context/ThemeContext'

import { Container, GlobalStyles } from './styled'

export const App = () => {
  return (
    <Theme>
      <Container>
        <GlobalStyles />
        <Header />
        <main>main</main>
        <Footer />
      </Container>
    </Theme>
  )
}
