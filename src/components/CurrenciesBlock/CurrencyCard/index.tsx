import { ICurrencyCard } from './interface'
import { Container, IconDiv, IconImg, Price, Title, Wrapper } from './styled'

export const CurrencyCard = ({ src, symbol, name, price }: ICurrencyCard) => {
  return (
    <Container>
      {src ? <IconImg src={src} alt='icon' /> : <IconDiv>{symbol || 'None'}</IconDiv>}
      <Wrapper>
        <Title>{name || 'None'}</Title>
        <Price>{price || 0.0}</Price>
      </Wrapper>
    </Container>
  )
}
