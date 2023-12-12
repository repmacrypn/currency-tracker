import React, { useState } from 'react'

import { ISelect } from './interface'
import { Container } from './styled'

export const Select = ({ placeholder, children, onClick }: ISelect) => {
  const [selectValue, setSelectValue] = useState('')

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value)
    onClick(e.target.value)
  }

  return (
    <Container value={selectValue} onChange={handleSelectChange}>
      <option value='' disabled hidden>
        {placeholder}
      </option>
      {children}
    </Container>
  )
}
