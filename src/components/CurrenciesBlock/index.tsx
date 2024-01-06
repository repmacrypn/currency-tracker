import { ICurrenciesBlock } from './interface'
import { Block, Title, Wrapper } from './styled'

export const CurrenciesBlock = ({ children, title }: ICurrenciesBlock) => {
  return (
    <Wrapper data-cy='currenciesBlock'>
      <Title>{title}</Title>
      <Block>{children}</Block>
    </Wrapper>
  )
}
