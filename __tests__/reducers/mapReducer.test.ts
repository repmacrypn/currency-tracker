import { defaultBanks } from '@/constants/testsData'
import {
  setBanks,
  setGeoPosition,
  setMapError,
  setMapStatus,
  setSearchCurrency,
} from '@/store/actions/mapActions'
import { RequestStatusType } from '@/store/reducers/app/types'
import { initialState, mapReducer } from '@/store/reducers/map/mapReducer'
import { MapType } from '@/store/reducers/map/types'
import { IMapGeo } from '@/types/city'

describe('mapReducer', () => {
  const state = initialState

  it(`should handle ${MapType.SET_BANKS}`, () => {
    const banks = defaultBanks
    const action = setBanks(banks)
    const newState = mapReducer(state, action)

    expect(newState.banks).toEqual(banks)
  })

  it(`should handle ${MapType.SET_ERROR}`, () => {
    const error = 'Oops, something went wrong...'
    const action = setMapError(error)
    const newState = mapReducer(initialState, action)

    expect(newState.mapError).toEqual(error)
  })

  it(`should handle ${MapType.SET_STATUS}`, () => {
    const status = RequestStatusType.Failed
    const action = setMapStatus(status)
    const newState = mapReducer(initialState, action)

    expect(newState.mapStatus).toEqual(status)
  })

  it(`should handle ${MapType.SET_SEARCH_CURRENCY}`, () => {
    const currency = 'USD'
    const action = setSearchCurrency(currency)
    const newState = mapReducer(initialState, action)

    expect(newState.searchCurrency).toEqual(currency)
  })

  it(`should handle ${MapType.SET_GEO}`, () => {
    const geo: IMapGeo = { latitude: 1.23, longitude: 4.56 }
    const action = setGeoPosition(geo)
    const newState = mapReducer(initialState, action)

    expect(newState.geo).toEqual(geo)
  })
})

describe('setBanks', () => {
  it('should create an action to set banks', () => {
    const payload = defaultBanks
    const expectedAction = {
      type: MapType.SET_BANKS,
      payload,
    }

    expect(setBanks(payload)).toEqual(expectedAction)
  })
})

describe('setMapError', () => {
  it('should create an action to set the map error', () => {
    const payload = 'Oops, something went wrong...'
    const expectedAction = {
      type: MapType.SET_ERROR,
      payload,
    }

    expect(setMapError(payload)).toEqual(expectedAction)
  })
})

describe('setMapStatus', () => {
  it('should create an action to set the map status', () => {
    const payload = RequestStatusType.Succeeded
    const expectedAction = {
      type: MapType.SET_STATUS,
      payload,
    }

    expect(setMapStatus(payload)).toEqual(expectedAction)
  })
})

describe('setSearchCurrency', () => {
  it('should create an action to set the search currency', () => {
    const payload = 'USD'
    const expectedAction = {
      type: MapType.SET_SEARCH_CURRENCY,
      payload,
    }

    expect(setSearchCurrency(payload)).toEqual(expectedAction)
  })
})

describe('setGeoPosition', () => {
  it('should create an action to set the map geo position', () => {
    const payload: IMapGeo = { latitude: 1.23, longitude: 4.56 }
    const expectedAction = {
      type: MapType.SET_GEO,
      payload,
    }

    expect(setGeoPosition(payload)).toEqual(expectedAction)
  })
})
