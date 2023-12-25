import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import { RootStoreType } from '@/store/types'

export type RootDispatchThunkType = ThunkDispatch<RootStoreType, any, AnyAction>
export const useAppDispatch = () => useDispatch<RootDispatchThunkType>()

export const useAppSelector: TypedUseSelectorHook<RootStoreType> = useSelector
