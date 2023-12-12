import { useEffect } from 'react'

import { Select } from '@/components/Converter/Select'
import { IconDiv } from '@/components/CurrenciesBlock/CurrencyCard/styled'
import { ErrorText } from '@/components/ErrorBoundary/ErrorFallback/styled'
import { Loader } from '@/components/Loader'
import { useAppDispatch, useAppSelector } from '@/hooks/useStoreControl'
import { setCurrencyTo } from '@/store/actions/homeActions'
import { RequestStatusType } from '@/store/reducers/app/types'
import {
  selectConvertFrom,
  selectConvertTo,
  selectConvertValue,
  selectCurrencyError,
  selectCurrencyStatus,
} from '@/store/selectors/homeSelectors'
import { fetchConversion } from '@/store/thunks/homeThunks'
import { filterCurrency } from '@/utils/helpers/filterCurrencies'
import { getCurrencyCode } from '@/utils/helpers/getCurrencyCode'

import { IConverter } from './interface'
import { Container, ConverterValue, Hint, Item } from './styled'

export const Converter = ({ currentCurrency }: IConverter) => {
  const dispatch = useAppDispatch()

  const currencyFrom = useAppSelector(selectConvertFrom)
  const currencyTo = useAppSelector(selectConvertTo)
  const convertValue = useAppSelector(selectConvertValue)
  const status = useAppSelector(selectCurrencyStatus)
  const error = useAppSelector(selectCurrencyError)

  const currencyOptions = filterCurrency(currentCurrency)
  const codeCurrencyTo = getCurrencyCode(currencyTo)
  const codeCurrencyFrom = getCurrencyCode(currencyFrom)

  const { name, code } = currentCurrency
  const isLoading = status === RequestStatusType.Loading

  const handleSelectChange = (currancy: string) => {
    dispatch(setCurrencyTo(currancy))
  }

  useEffect(() => {
    if (codeCurrencyFrom && codeCurrencyTo) {
      dispatch(fetchConversion(codeCurrencyFrom, codeCurrencyTo))
    }
  }, [dispatch, codeCurrencyFrom, codeCurrencyTo])

  return (
    <Container>
      <IconDiv className={code}>{code}</IconDiv>
      {Object.entries(currentCurrency)
        .filter(
          ([key]) =>
            key === 'name' ||
            key === 'symbol' ||
            key === 'code' ||
            key === 'symbol_native',
        )
        .map(([key, value]) => (
          <Item key={key}>
            <b>{key}:</b> {value}
          </Item>
        ))}
      <Hint>You can find out the exchange rate of the {name} currancy</Hint>
      <Select onClick={handleSelectChange} placeholder='Exchange currancy...'>
        {currencyOptions.map((cur) => (
          <option value={cur} key={cur}>
            {cur}
          </option>
        ))}
      </Select>
      {isLoading && <Loader />}
      {error && <ErrorText>Oops, something went wrong... {error}</ErrorText>}
      {currencyTo && !isLoading && !error && (
        <ConverterValue>
          1 {code} = {convertValue} {codeCurrencyTo}
        </ConverterValue>
      )}
    </Container>
  )
}
