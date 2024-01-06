import { useEffect } from 'react'

import { Select } from '@/components/Converter/Select'
import { ErrorText } from '@/components/ErrorText'
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
import { ConverterValue } from './styled'

export const ExchangeBlock = ({ currentCurrency }: IConverter) => {
  const dispatch = useAppDispatch()

  const currencyFrom = useAppSelector(selectConvertFrom)
  const currencyTo = useAppSelector(selectConvertTo)
  const convertValue = useAppSelector(selectConvertValue)
  const status = useAppSelector(selectCurrencyStatus)
  const error = useAppSelector(selectCurrencyError)

  const currencyOptions = filterCurrency(currentCurrency)
  const codeCurrencyTo = getCurrencyCode(currencyTo)
  const codeCurrencyFrom = getCurrencyCode(currencyFrom)

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
    <>
      <Select onClick={handleSelectChange} placeholder='Exchange currancy...'>
        {currencyOptions.map((cur) => (
          <option value={cur} key={cur}>
            {cur}
          </option>
        ))}
      </Select>
      {isLoading && <Loader />}
      {error && <ErrorText>{error}</ErrorText>}
      {currencyTo && !isLoading && !error && (
        <ConverterValue data-cy='convertValue'>
          1 {currentCurrency.code} = {convertValue} {codeCurrencyTo}
        </ConverterValue>
      )}
    </>
  )
}
