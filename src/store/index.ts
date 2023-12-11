import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import { thunk } from 'redux-thunk'

import { appReducer } from '@/store/reducers/app/appReducer'
import { homeReducer } from '@/store/reducers/home/homeReducer'

export const rootReducer = combineReducers({
  app: appReducer,
  home: homeReducer,
})

export const store = legacy_createStore(rootReducer, {}, applyMiddleware(thunk))
