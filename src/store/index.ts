import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import { thunk } from 'redux-thunk'

import { appReducer } from '@/store/reducers/app/appReducer'
import { homeReducer } from '@/store/reducers/home/homeReducer'
import { timeLineReducer } from '@/store/reducers/timeLine/timeLineReducer'

export const rootReducer = combineReducers({
  app: appReducer,
  home: homeReducer,
  timeline: timeLineReducer,
})

export const store = legacy_createStore(rootReducer, {}, applyMiddleware(thunk))
