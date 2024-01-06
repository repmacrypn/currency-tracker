import { cy } from 'local-cypress'

describe('Routing', () => {
  const routes = ['timeline', 'bankCard', 'contacts']
  const timeSecInterval = 3000

  it('should open a home page fisrt', () => {
    cy.visit('/')

    cy.get('[data-cy="homePage"]').should('be.visible')
    cy.url().should('include', '/')

    routes.forEach((route) => {
      cy.url().should('not.include', route)
    })
  })

  it('should redirect to the pages', () => {
    routes.forEach((route) => {
      cy.get(`[data-cy="/${route}"]`).first().click()
      cy.wait(timeSecInterval)
      cy.get(`[data-cy="${route}Page"]`).should('be.visible')
      cy.url().should('include', route)
    })
  })
})
