/// <reference types="cypress" />

describe('Debugging', () => {
  beforeEach(() => {
    cy.clickCard('Html Elements')
  })


  it('cy.wait() - Hard Wait', () => {

    cy.get('#checkbox_1').check()

    // cy.wait(10000)

    cy.get('#checkbox_2').check()

  })

  it('cy.pause() - Debuggins use pause', () => {
    cy.visit(`${Cypress.env('SITE_URL')}/frontend`)

    cy.clickCard('Project - Login Function')

    cy.get('#username').type(Cypress.env('UI_USERNAME'))

    cy.pause()

    cy.get('#password').type(Cypress.env('UI_PASSWORD'))

    cy.get('#login_btn').click()

    cy.get('#success_lgn').should('be.visible')
  })

  it.only('cy.debug() - Debuggins use debug', () => {
    cy.visit(`${Cypress.env('SITE_URL')}/frontend`)

    cy.clickCard('Project - Login Function')

    cy.get('#username').type(Cypress.env('UI_USERNAME'))

    cy.get('#password').type(Cypress.env('UI_PASSWORD'))

    cy.get('#login_btn').click()

    cy.get('#success_lgn').should('be.visible')

    cy.get('#dropdown-button').realHover()

    cy.debug()

  })



})
