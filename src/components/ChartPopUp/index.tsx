/* eslint-disable react/no-unused-class-component-methods */
import React from 'react'
import { createRoot } from 'react-dom/client'

import { Container, PopUpItem } from '@/components/ChartPopUp/style'

export class PopUp extends React.Component {
  root: HTMLElement | null = document.getElementById('pop-root')

  componentDidMount() {
    setTimeout(() => {
      const rootEl = createRoot(this.root as HTMLElement)

      rootEl.unmount()
    }, 3000)
  }

  renderComponent() {
    const rootEl = createRoot(this.root as HTMLElement)

    rootEl.render(<PopUp />)
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
