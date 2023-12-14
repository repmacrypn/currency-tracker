import { applyMiddleware, combineReducers, compose, legacy_createStore } from 'redux'
import { thunk } from 'redux-thunk'

import { appReducer } from '@/store/reducers/app/appReducer'
import { homeReducer } from '@/store/reducers/home/homeReducer'
import { mapReducer } from '@/store/reducers/map/mapReducer'
import { timeLineReducer } from '@/store/reducers/timeLine/timeLineReducer'

export const rootReducer = combineReducers({
  app: appReducer,
  home: homeReducer,
  timeline: timeLineReducer,
  map: mapReducer,
})

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = legacy_createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(thunk)),
)
