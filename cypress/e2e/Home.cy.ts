import { cy } from 'local-cypress'

describe('Home', () => {
  const waitSecValue = 3000

  it('the elements of the Home page should be visible', () => {
    const currenciesCount = 11

    cy.visit('/')
    cy.wait(waitSecValue)

    const currencyCards = cy.get('[data-cy="currencyCard"]')

    currencyCards.should('be.visible').should('have.length', currenciesCount)
  })

  it('when you click on the currency, a modal window should open', () => {
    const currenciesBlocks = cy.get('[data-cy="currenciesBlock"]')

    currenciesBlocks.last().children().last().children().first().click()

    const modal = cy.get('[data-testid="modal"]')

    modal.should('be.visible')
  })

  it('the operation when clicking on select must be correct (selecting the currency and getting the conversion value)', () => {
    const converter = cy.get('[data-cy="converter"]')
    const currencySelect = cy.get('[data-cy="converter"] select')

    converter.should('be.visible')
    currencySelect.should('be.visible')

    currencySelect.select(7)

    cy.wait(waitSecValue)

    const convertValue = cy.get('[data-cy="convertValue"]')

    convertValue.should('be.visible')
  })
})
