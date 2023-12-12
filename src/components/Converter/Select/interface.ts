import React from 'react'

export interface ISelect {
  placeholder: string
  onClick: (currancy: string) => void
  children: React.ReactNode
}
