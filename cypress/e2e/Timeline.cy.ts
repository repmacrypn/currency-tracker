import { cy } from 'local-cypress'

describe('TimeLine Page', () => {
  const waitSecValue = 3000

  it('the elements of the TimeLine page should be visible', () => {
    cy.visit('http://localhost:5000/#/timeline')
    cy.wait(waitSecValue)

    const currencyIcon = cy.get('[data-testid="currencyIcon"]')
    const selectCurrecnyBlock = cy.get('[data-cy="selectCurrencyBlock"]')
    const toggler = cy.get('[data-cy="periodToggler"]')
    const chart = cy.get('[data-testid="chart"]')

    currencyIcon.should('be.visible')
    selectCurrecnyBlock.should('be.visible')
    toggler.should('be.visible')
    chart.should('be.visible')
  })

  it('the value in select and in the card must be the same', () => {
    const currentCurrency = 'USD'
    const currencyIcon = cy.get('[data-testid="currencyIcon"]')
    const selectOption = cy.get('[data-cy="select"] > :nth-child(1)')

    selectOption.should('contains.text', currentCurrency)
    currencyIcon.should('contains.text', currentCurrency)
  })

  it('when the day is selected, a chart should be displayed', () => {
    const toggler = cy.get('[data-cy="periodToggler"]')

    toggler.first().click()

    const selectDayBlock = cy.get('[data-cy="selectDayBlock"]')

    selectDayBlock.should('be.visible')

    cy.wait(waitSecValue)

    const chart = cy.get('[data-testid="chart"]')

    chart.should('be.visible')
  })

  it('when the month toggler is clicked, the request is sent for the month statistics', () => {
    const toggler = cy.get('[data-cy="periodToggler"]')

    toggler.first().click()
    cy.wait(waitSecValue)

    const chart = cy.get('[data-testid="chart"]')
    const chartPopUp = cy.get('[data-cy="chartPopUp"]')

    chart.should('be.visible')
    chartPopUp.should('be.visible')
  })
})
