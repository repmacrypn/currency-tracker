import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Main } from '@/components/Main'
import { Theme } from '@/context/ThemeContext'

import { Container, GlobalStyles } from './styled'

export const App = () => {
  return (
    <Theme>
      <Container>
        <GlobalStyles />
        <Header />
        <Main />
        <Footer />
      </Container>
    </Theme>
  )
}
