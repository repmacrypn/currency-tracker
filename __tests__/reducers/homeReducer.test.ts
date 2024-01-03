import { defaultCurrencyPrices, defaultCurrencyValues } from '@/constants/testsData'
import {
  getCurrencyPrices,
  getCurrencyValues,
  setConvertValue,
  setCurrencyError,
  setCurrencyFrom,
  setCurrencyStatus,
  setCurrencyTo,
} from '@/store/actions/homeActions'
import { RequestStatusType } from '@/store/reducers/app/types'
import { homeReducer, initialState } from '@/store/reducers/home/homeReducer'
import { HomeType } from '@/store/reducers/home/types'

describe('homeReducer', () => {
  const state = initialState

  test(`should handle ${HomeType.GET_CURRENCY_PRICES}`, () => {
    const currencyPrices = defaultCurrencyPrices
    const action = getCurrencyPrices(currencyPrices)
    const newState = homeReducer(state, action)

    expect(newState.currencyPrices).toEqual(currencyPrices)
  })

  test(`should handle ${HomeType.GET_CURRENCY_VALUES}`, () => {
    const currencyValues = defaultCurrencyValues
    const action = getCurrencyValues(currencyValues)
    const newState = homeReducer(state, action)

    expect(newState.currencyValues).toEqual(currencyValues)
  })

  test(`should handle ${HomeType.SET_CURRENCY_ERROR}`, () => {
    const error = 'Oops, something went wrong...'
    const action = setCurrencyError(error)
    const newState = homeReducer(state, action)

    expect(newState.currencyError).toEqual(error)
  })

  test(`should handle ${HomeType.SET_CURRENCY_STATUS}`, () => {
    const status = RequestStatusType.Loading
    const action = setCurrencyStatus(status)
    const newState = homeReducer(state, action)

    expect(newState.currencyStatus).toEqual(status)
  })

  test(`should handle ${HomeType.SET_CURRENCY_FROM}`, () => {
    const currencyFrom = 'EUR'
    const action = setCurrencyFrom(currencyFrom)
    const newState = homeReducer(state, action)

    expect(newState.convertFrom).toEqual(currencyFrom)
  })

  test(`should handle ${HomeType.SET_CURRENCY_TO}`, () => {
    const currencyTo = 'USD'
    const action = setCurrencyTo(currencyTo)
    const newState = homeReducer(state, action)

    expect(newState.convertTo).toEqual(currencyTo)
  })

  test(`should handle ${HomeType.SET_CONVERT_VALUE}`, () => {
    const convertValue = 100
    const action = setConvertValue(convertValue)
    const newState = homeReducer(state, action)

    expect(newState.convertValue).toEqual(convertValue)
  })
})

describe('getCurrencyValues', () => {
  test('should create an action to get currency values', () => {
    const payload = defaultCurrencyValues
    const expectedAction = {
      type: HomeType.GET_CURRENCY_VALUES,
      payload,
    }

    expect(getCurrencyValues(payload)).toEqual(expectedAction)
  })
})

describe('getCurrencyPrices', () => {
  test('should create an action to get currency prices', () => {
    const payload = defaultCurrencyPrices
    const expectedAction = {
      type: HomeType.GET_CURRENCY_PRICES,
      payload,
    }

    expect(getCurrencyPrices(payload)).toEqual(expectedAction)
  })
})

describe('setCurrencyFrom', () => {
  test('should create an action to set the currency from value', () => {
    const payload = 'USD'
    const expectedAction = {
      type: HomeType.SET_CURRENCY_FROM,
      payload,
    }

    expect(setCurrencyFrom(payload)).toEqual(expectedAction)
  })
})

describe('setCurrencyTo', () => {
  test('should create an action to set the currency to value', () => {
    const payload = 'EUR'
    const expectedAction = {
      type: HomeType.SET_CURRENCY_TO,
      payload,
    }

    expect(setCurrencyTo(payload)).toEqual(expectedAction)
  })
})

describe('setConvertValue', () => {
  test('should create an action to set the convert value', () => {
    const payload = 100
    const expectedAction = {
      type: HomeType.SET_CONVERT_VALUE,
      payload,
    }

    expect(setConvertValue(payload)).toEqual(expectedAction)
  })
})

describe('setCurrencyStatus', () => {
  test('should create an action to set the currency status', () => {
    const payload = RequestStatusType.Succeeded

    const expectedAction = {
      type: HomeType.SET_CURRENCY_STATUS,
      payload,
    }

    expect(setCurrencyStatus(payload)).toEqual(expectedAction)
  })
})

describe('setCurrencyError', () => {
  test('should create an action to set the currency error', () => {
    const payload = 'Oops, something went wrong...'

    const expectedAction = {
      type: HomeType.SET_CURRENCY_ERROR,
      payload,
    }

    expect(setCurrencyError(payload)).toEqual(expectedAction)
  })
})
