import { ExchangeBlock } from '@/components/Converter/ExchangeBlock'
import { IconDiv } from '@/components/CurrenciesBlock/CurrencyCard/styled'
import { filterCurrencyData } from '@/utils/helpers/filterCurrencyData'

import { IConverter } from './interface'
import { Container, Hint, Item } from './styled'

export const Converter = ({ currentCurrency }: IConverter) => {
  const currancyData = filterCurrencyData(currentCurrency)

  return (
    <Container data-cy='converter'>
      <IconDiv className={currentCurrency.code}>{currentCurrency.code}</IconDiv>
      {currancyData.map(([key, value]) => (
        <Item key={key}>
          <b>{key}:</b> {value}
        </Item>
      ))}
      <Hint>
        You can find out the exchange rate of the {currentCurrency.name} currancy
      </Hint>
      <ExchangeBlock currentCurrency={currentCurrency} />
    </Container>
  )
}
