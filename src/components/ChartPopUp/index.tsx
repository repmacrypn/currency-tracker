import React from 'react'
import { createRoot, Root } from 'react-dom/client'

import { Container, PopUpItem } from '@/components/ChartPopUp/style'

export class PopUp extends React.Component {
  root: HTMLElement | null = document.getElementById('pop-root')

  rootEl: Root | null = null

  timer: ReturnType<typeof setTimeout> | undefined

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.rootEl = createRoot(this.root as HTMLElement)
      this.rootEl?.unmount()
    }, 3000)
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  renderComponent() {
    if (!this.rootEl) {
      this.rootEl = createRoot(this.root as HTMLElement)

      this.rootEl.render(<PopUp />)
    }
  }

  render() {
    return (
      <Container>
        <PopUpItem>
          The chart with the data for the past month was successfully built
        </PopUpItem>
      </Container>
    )
  }
}
