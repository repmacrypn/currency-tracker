import React, { useState } from 'react'

import { useAppDispatch } from '@/hooks/useStoreControl'
import { setCurrencyTo } from '@/store/actions/homeActions'

import { ISelect } from './interface'
import { Container, Item } from './styled'

export const Select = ({ currencyOptions }: ISelect) => {
  const dispatch = useAppDispatch()

  const [selectValue, setSelectValue] = useState('')

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value)
    dispatch(setCurrencyTo(e.target.value))
  }

  return (
    <Container value={selectValue} onChange={handleSelectChange}>
      <Item value='' disabled hidden>
        Exchange currancy...
      </Item>
      {currencyOptions.map((cur) => (
        <Item value={cur} key={cur}>
          {cur}
        </Item>
      ))}
    </Container>
  )
}
