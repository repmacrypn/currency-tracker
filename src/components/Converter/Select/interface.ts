import React from 'react'

export interface ISelect {
  value?: string
  placeholder?: string
  onClick: (currancy: string) => void
  children: React.ReactNode
}
