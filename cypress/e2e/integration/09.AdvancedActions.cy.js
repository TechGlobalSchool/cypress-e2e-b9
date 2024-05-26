/// <reference types="cypress" />

describe('Keyboard & Mouse Actions', () => {
  beforeEach(() => {
    cy.clickCard('Actions')
  })

  it('Mouse Actions using Cypress events', () => {
    cy.get('#dropdown-button').trigger('mouseover')

    cy.get('#dropdown-button').realHover()
  })

  it('Keyboard Actions', () => {
    cy.visit('https://www.techglobal-training.com/frontend/')
    cy.clickCard('Html Elements')

    cy.get('#text_input1')
      .realClick()
      .realPress('KeyA')
      .realPress('Tab')
      .realPress('KeyB')
      .realPress('ArrowLeft')
      .realPress('KeyR')
      .realPress('ArrowRight')
      .realPress('Backspace')
      .realPress(['Alt', 'KeyA'])
  })

  /**
   * Go to https://techglobal-training.com/frontend/
   * Click on the "Actions" card
   * Verify that the user is redirected to the Actions page
   * Verify that the first three web elements are present and labeled as "Click on me", "Right-Click on me", and "Double-Click on me"
   * Perform a click action on the first web element labeled "Click on me"
   * Verify that a message appears next to the element stating, "You clicked on a button!"
   * Perform a right-click action on the second web element labeled "Right-Click on me"
   * Verify that the message appears next to the element stating, "You right-clicked on a button!"
   * Perform a double-click action on the third web element labeled "Double-Click on me"
   * Verify that the message appears next to the element stating, "You double-clicked on a button!"
   */

  it('Right Click, and Double Click', () => {

    cy.get('[id$="click"]').as('buttons')

    cy.url().then((url) => {
      const actions = url.slice(url.lastIndexOf('/') + 1)
      cy.log(actions)

      cy.wrap(actions).should('eq', 'actions')
    })

    cy.get('@buttons').first().should('have.text', 'Click on me').click()
      .next().should('have.text', 'You clicked on a button!')

    cy.get('@buttons').eq(1).should('have.text', 'Right-Click on me').rightclick()
      .next().should('have.text', 'You right-clicked on a button!')

    cy.get('@buttons').last().should('have.text', 'Double-Click on me').dblclick()
      .next().should('have.text', 'You double-clicked on a button!')
  })

  it('Drag and Drop', () => {

    cy.get('#drag_element').drag('#drop_element')

  })
})
