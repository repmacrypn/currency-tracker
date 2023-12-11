import { ICurrencyCard } from './interface'
import { Card, Container, IconDiv, IconImg, Price, Title, Wrapper } from './styled'

export const CurrencyCard = ({ src, symbol, name, price, code }: ICurrencyCard) => {
  return (
    <Card>
      <Container>
        {src ? (
          <IconImg src={src} alt='icon' />
        ) : (
          <IconDiv className={code}>{symbol || 'None'}</IconDiv>
        )}
        <Wrapper>
          <Title>{name || 'None'}</Title>
          <Price>{price || 0.0}</Price>
        </Wrapper>
      </Container>
    </Card>
  )
}
