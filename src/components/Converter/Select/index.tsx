import React, { useState } from 'react'

import { ISelect } from './interface'
import { Container } from './styled'

export const Select = ({ placeholder, value, children, onClick }: ISelect) => {
  const [selectValue, setSelectValue] = useState(value || '')

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value)
    onClick(e.target.value)
  }

  return (
    <Container data-cy='select' value={selectValue} onChange={handleSelectChange}>
      {placeholder && (
        <option value='' disabled hidden>
          {placeholder}
        </option>
      )}
      {children}
    </Container>
  )
}
