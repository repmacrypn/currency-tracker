import { setAppError, setAppStatus, setModal } from '@/store/actions/appActions'
import { appReducer, initialState } from '@/store/reducers/app/appReducer'
import { AppType, RequestStatusType } from '@/store/reducers/app/types'

describe('appReducer', () => {
  const state = initialState

  test(`should handle ${AppType.SET_STATUS}`, () => {
    const status = RequestStatusType.Loading
    const action = setAppStatus(status)
    const newState = appReducer(state, action)

    expect(newState.appStatus).toBe(status)
  })

  test(`should handle ${AppType.SET_ERROR}`, () => {
    const error = 'Oops, something went wrong...'
    const action = setAppError(error)
    const newState = appReducer(state, action)

    expect(newState.appError).toBe(error)
  })

  test(`should handle ${AppType.SET_MODAL}`, () => {
    const isModalOpen = true
    const action = setModal(isModalOpen)
    const newState = appReducer(state, action)

    expect(newState.isModalOpen).toBe(isModalOpen)
  })
})

describe('setAppStatus', () => {
  test('should create an action to set the app status', () => {
    const payload = RequestStatusType.Succeeded

    const expectedAction = {
      type: AppType.SET_STATUS,
      payload,
    }

    expect(setAppStatus(payload)).toEqual(expectedAction)
  })
})

describe('setAppError', () => {
  test('should create an action to set the app error', () => {
    const payload = 'Oops, something went wrong...'

    const expectedAction = {
      type: AppType.SET_ERROR,
      payload,
    }

    expect(setAppError(payload)).toEqual(expectedAction)
  })
})

describe('setModal', () => {
  test('should create an action to set the app modal', () => {
    const payload = true

    const expectedAction = {
      type: AppType.SET_MODAL,
      payload,
    }

    expect(setModal(payload)).toEqual(expectedAction)
  })
})
