import React, { useState } from 'react'

import { useDebounce } from '@/hooks/useDebounce'
import { useAppDispatch, useAppSelector } from '@/hooks/useStoreControl'
import { setSearchCurrency } from '@/store/actions/mapActions'
import { selectSearchCurrency } from '@/store/selectors/mapSelectors'

export const useSearchControl = () => {
  const dispatch = useAppDispatch()

  const initialSearchValue = useAppSelector(selectSearchCurrency)

  const [searchValue, setSearchValue] = useState<string>(initialSearchValue)
  const [isHintBlockOpen, setIsHintBlockOpen] = useState(false)

  const debouncedSearchValue = useDebounce(searchValue, 500)

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)

    if (e.target.value.length > 0) setIsHintBlockOpen(true)
    else setIsHintBlockOpen(false)
  }

  const handleHintItemClick = (code: string) => {
    dispatch(setSearchCurrency(code))
    setIsHintBlockOpen(false)
    setSearchValue(code)
  }

  const onInputFocus = () => {
    if (searchValue.length > 0) setIsHintBlockOpen(true)
  }

  return {
    searchValue,
    isHintBlockOpen,
    debouncedSearchValue,
    onSearchChange,
    setIsHintBlockOpen,
    onInputFocus,
    handleHintItemClick,
  }
}
