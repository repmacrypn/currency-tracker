import { ThunkAction } from 'redux-thunk'

import { ActionsAppType } from '@/store/reducers/app/types'
import { ActionsTimelineType } from '@/store/reducers/timeLine/types'
import { rootReducer } from '@/store'

export type RootStoreType = ReturnType<typeof rootReducer>
export type RootActionsType = ActionsAppType | ActionsTimelineType
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootStoreType,
  unknown,
  RootActionsType
>
