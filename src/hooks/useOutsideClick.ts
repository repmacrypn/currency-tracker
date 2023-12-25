import { RefObject, useEffect } from 'react'

export const useOutsideClick = (
  ref: RefObject<HTMLDivElement>,
  closeMenu: () => void,
) => {
  useEffect(() => {
    const eventListener = (event: MouseEvent) => {
      if (ref.current && event.target && ref.current.contains(event.target as Node)) {
        return
      }
      closeMenu()
    }

    document.addEventListener('click', eventListener)

    return () => {
      document.removeEventListener('click', eventListener)
    }
  }, [ref, closeMenu])
}
