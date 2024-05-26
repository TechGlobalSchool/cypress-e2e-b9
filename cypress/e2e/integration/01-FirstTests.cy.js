/// <reference types="cypress"/>

// This is describe test block that holds group of tests
describe('My First Tests', () => {
  it('Visit TechGlobal trainnig app home page', () => {
    cy.visit('https://www.techglobal-training.com/')

    cy.reload() // Command to refresh your current url

    cy.visit('/frontend')

    // Navigate back on the web page
    // cy.go('back')
    cy.go(-1)

    // Navigate frorward on the web page
    // cy.go('forward')
    cy.go(1)
    cy.go(-1)

    cy.title().should('eq', 'TechGlobal Training | Home')

    cy.url().should('contain', 'techglobal-training')
  })

  it('My Myrst Test', () => {

    // expect(true).to.equal(false)

    cy.visit('https://www.techglobal-training.com/')

    cy.get('#logo').click().should('be.visible')

    // cy.get('#logo').should('be.visible')
  })
})
