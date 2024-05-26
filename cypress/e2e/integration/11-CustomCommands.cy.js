/// <reference types="cypress" />

describe('Custom Commands', () => {
  beforeEach(() => {
    cy.clickCard('Html Elements')
  })


  it('Parent Commands', () => {

    /* Parent Commands */
    // cy.get()
    // cy.url()
    // cy.title()
    // cy.visit()
    // cy.window()
    // cy.on()

    cy.selectDropdownOption('#company_dropdown1', 'Apple')

    cy.login('randomEmail@gmai.com', 'TechGlobal')
  })

  it('Child Command', () => {

    // .should()
    // .find()
    // all the action commands

    cy.get('#main_heading').then(($el) => {
      const text = $el.text()

      cy.log(text)
    })


    cy.get('#main_heading').logText().haveText('Html Elements')

    console.log(process.env.UI_URL + 'my env')

    cy.log(process.env.UI_USERNAME)

    cy.log(Cypress.env('SITE_URL'))
    cy.log(Cypress.env('UI_USERNAME'))
    cy.log(Cypress.env('UI_PASSWORD'))

    // expect(true).equal(false)


  })


  it.only('qwe', () => {
    cy.visit('http://127.0.0.1:5500/myRandom.html')
  })

})
