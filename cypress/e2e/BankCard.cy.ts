import { cy } from 'local-cypress'

describe('BankCard Page', () => {
  const waitSecValue = 3000
  const currentHintsLength = 3
  const currentMarkerLength = 11

  it('the elements of the BankCard page should be visible', () => {
    cy.visit('http://localhost:5000/#/bankCard')
    cy.wait(waitSecValue)

    cy.get('[data-cy="searchInput"]').should('be.visible')
    cy.get('.mapboxgl-canvas').should('be.visible')
  })

  it('interaction with the input should be correct', () => {
    const inputValue = 'C'
    const searchInput = cy.get('[data-cy="searchInput"]')

    searchInput.type(inputValue)

    searchInput.should('have.value', inputValue)
  })

  it('hints should appear when the input value is more than one character', () => {
    const hintsList = cy.get('[data-cy="hintsList"]')
    const searchInput = cy.get('[data-cy="searchInput"]')

    cy.wait(waitSecValue)

    hintsList.should('be.visible')
    hintsList.children().should('be.visible').should('have.length', currentHintsLength)

    searchInput.clear()
    cy.wait(waitSecValue)
  })

  it('empty state message should appear when the input value is invalid', () => {
    const inputValue = 'qwerty'
    const searchInput = cy.get('[data-cy="searchInput"]')

    searchInput.type(inputValue)
    cy.wait(waitSecValue)

    const hintsEmptyState = cy.get('[data-cy="hintsEmptyState"]')

    hintsEmptyState.should('be.visible')

    searchInput.clear()
    cy.wait(waitSecValue)
  })

  it('should display an appropriate amount of bank markers according to the chosen currency', () => {
    const inputValue = 'C'
    const searchInput = cy.get('[data-cy="searchInput"]')

    searchInput.type(inputValue)
    cy.wait(waitSecValue)

    const hintsList = cy.get('[data-cy="hintsList"]')

    hintsList.children().first().click()

    cy.get('.mapboxgl-marker').should('have.length', currentMarkerLength)
  })
})
