import { IBurgerMenu } from './interface'
import { Container } from './styled'

export const BurgerMenu = ({ isOpen, handleMenuClick }: IBurgerMenu) => {
  return (
    <Container onClick={handleMenuClick} $isOpen={isOpen}>
      <div />
      <div />
      <div />
    </Container>
  )
}
