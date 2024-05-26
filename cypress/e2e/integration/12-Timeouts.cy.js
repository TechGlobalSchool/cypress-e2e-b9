/// <reference types="cypress" />

describe('Timeouts', () => {
  beforeEach(() => {
    // cy.visit('www.google.com', { timeout: 100000, })
    cy.clickCard('Html Elements')
  })


  it('Explicit and Inline timeouts', () => {

    cy.get('#main_heading', { timeout: 5000 })

    cy.get('#hello_paragraph', { timeout: 5000 }).click({ timeout: 10000 })

    cy.get('#checkbox-button-group input').click({ multiple: true, timeout: 10000 })

    // npx cypress run --config defaultCommandTimeout=10000
  })

  it('Waits', () => {
    cy.visit(`${Cypress.env('SITE_URL')}/frontend`)
    cy.clickCard('Waits')

    cy.get('#red').click()

    cy.get('.box', { timeout: 10000 }).should('be.visible')

  })


})
