import { cy } from 'local-cypress'

describe('Theme toggler', () => {
  const waitInterval = 3000

  it('the theme should change when clicking on the toggle, header and toggle test', () => {
    cy.clearAllLocalStorage()
    cy.visit('/')
    cy.wait(waitInterval)

    const currencyCard = cy.get('[data-cy="currencyCard"]')
    const logoBlock = cy.get('[data-cy="logoBlock"]')
    const themeToggler = cy.get('[data-testid="togglerWrapper"]')

    currencyCard.should('have.css', 'background-color', 'rgb(3, 3, 4)')
    themeToggler.should('have.css', 'border-color', 'rgb(255, 255, 255)')
    logoBlock.should('have.css', 'background-color', 'rgb(3, 3, 4)')

    themeToggler.first().click()

    currencyCard.should('have.css', 'background-color', 'rgb(255, 255, 255)')
    themeToggler.should('have.css', 'border-color', 'rgb(3, 3, 4)')
    logoBlock.should('have.css', 'background-color', 'rgb(255, 255, 255)')
  })

  it('the theme should be saved and applied after the page is reloaded', () => {
    cy.reload()
    cy.wait(waitInterval)

    const currencyCard = cy.get('[data-cy="currencyCard"]')
    const logoBlock = cy.get('[data-cy="logoBlock"]')
    const themeToggler = cy.get('[data-testid="togglerWrapper"]')

    currencyCard.should('have.css', 'background-color', 'rgb(255, 255, 255)')
    themeToggler.should('have.css', 'background-color', 'rgb(255, 255, 255)')
    logoBlock.should('have.css', 'background-color', 'rgb(255, 255, 255)')
  })
})
