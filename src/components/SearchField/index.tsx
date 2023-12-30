import { memo, useRef } from 'react'

import { HintBlock } from '@/components/SearchField/HintBlock'
import { useOutsideClick } from '@/hooks/useOutsideClick'
import { useSearchControl } from '@/hooks/useSearchControl'

import { Container, InputItem } from './styled'

export const SearchField = memo(() => {
  const hintBlockNode = useRef<HTMLDivElement>(null)

  const {
    searchValue,
    isHintBlockOpen,
    debouncedSearchValue,
    setIsHintBlockOpen,
    onSearchChange,
    onInputFocus,
    handleHintItemClick,
  } = useSearchControl()

  useOutsideClick(hintBlockNode, () => setIsHintBlockOpen(false))

  return (
    <Container ref={hintBlockNode}>
      <InputItem
        onFocus={onInputFocus}
        value={searchValue}
        onChange={onSearchChange}
        placeholder='Currency search...'
      />
      {isHintBlockOpen && (
        <HintBlock onClick={handleHintItemClick} searchValue={debouncedSearchValue} />
      )}
    </Container>
  )
})
