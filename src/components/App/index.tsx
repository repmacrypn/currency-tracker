import { Theme } from '@/context/ThemeContext'

import { Container, GlobalStyles } from './styled'

export const App = () => {
  return (
    <Theme>
      <Container>
        <GlobalStyles />
        <div>чекнуть пэкдж</div>
      </Container>
    </Theme>
  )
}
