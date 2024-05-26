/// <reference types="cypress" />

describe('Cypress Selectors', () => {
  // before(() => {
  //   cy.log('BATCH-9')
  // })

  beforeEach(() => {
    cy.visit('https://www.techglobal-training.com/frontend/')
    // cy.log('TechGlobal')
  })

  it('Practice Web Elements using - get and contains', () => {
    cy.get('.CardGrids_CardGrids__qDdyI').as('allCards')

    cy.get('@allCards')

    // Handling multiple elements

    // Returns the first element
    cy.get('.cards').first()

    // Returns the last element
    cy.get('.cards').last()

    // Targets the specific index of an element
    cy.get('.cards').eq(9)

    // Locates the web element by its visual text on the GUI
    cy.contains('Html Elements')

    // This one tries to find element with "Html Elements" visual text inside the web element with .cards attribute
    cy.contains('.cards', 'Html Elements')

    // This will do the same thing as above locator in more explicit way
    // It will look for card with 'Html Elements' visible text ONLY inside the class name '.CardGrids_CardGrids__qDdyI'
    cy.get('@allCards').contains('Html Elements')
  })

  it('Practice Web Elements using - find', () => {
    cy.contains('.cards', 'Html Elements').click()
    // When we do this, we try to locate web element with "Paragraph" text inside the div container
    cy.get('div').contains('Paragraph')

    cy.get('#radio-button-group').find('div')

    cy.get('#radio-button-group div')
  })

  it('Practice Web Elements using - Siblings, Parent and Child', () => {
    cy.contains('.cards', 'Html Elements').click()

    // next()   => locates the immediate next sibling of a web element
    cy.get('div').contains('Paragraph').next()

    // nextAll()   => locates the immediate next siblings of a web element
    cy.get('div').contains('Paragraph').nextAll()

    // prev()   => locates the immediate previous sibling of a web element
    cy.get('#testing_paragraph').prev()

    // prevAll()   => locates the immediate previous sibling of a web element
    cy.get('#testing_paragraph').prevAll()

    // Locates the immediate parent of a web element
    cy.get('#testing_paragraph').parent()

    // Locates the all the parents of a web element
    cy.get('#testing_paragraph').parents()

    // Locates until the specific parent
    cy.get('#testing_paragraph').parentsUntil('.HtmlElements_mainContainer__Fpn6M')

    cy.get('[data-identifier="Paragraphs"]').children()

    cy.get('#checkbox-button-group').next().find('div').first().children().find('input').parent().parent().parent().prev()

  })
})
