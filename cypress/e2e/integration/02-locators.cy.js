/// <reference types="cypress" />

describe('CSS Locators', () => {
  it('Understanding CSS Syntax - Locating using Tags', () => {
    cy.visit('https://www.techglobal-training.com/frontend/html-elements')

    cy.get('button')

    cy.get('h3')

    cy.get('li')

    cy.get('input')
  })

  it('Understanding CSS Syntax - Locating class and ID', () => {
    cy.visit('https://www.techglobal-training.com/frontend/html-elements')

    cy.get('#checkbox-button-group')

    cy.get('.checkbox')
  })

  it('Understanding CSS Syntax - Locating web elements with multiple attributes', () => {
    cy.visit('https://www.techglobal-training.com/frontend/html-elements')

    cy.get('div#dropdown-container.undefined.dropdown.is-hoverable')

    cy.get('button.is-inline.undefined')
  })

  it('Understanding CSS Syntax - Locating child, descendant, adjacent web element', () => {
    cy.visit('https://www.techglobal-training.com/frontend/html-elements')

    /**
     * Child Selector ( > ) *
     *
     * Description: Targets direct children of a specified parent element.
     */

    cy.get('div > #hello_paragraph')

    cy.get('div > #unordered_list > li')

    cy.get('#radio-button-group > h3')

    /**
     * Descendant Selector ( space ) *
     *
     * Description: Targets elements nested anywhere within a specific parent.
     */

    cy.get('#checkbox-button-group #microsoft_check')

    cy.get('#root #ordered_list_item1')

    cy.get('#radio-button-group input')

    // Locates the immediate sibling of #unordered_list_item1
    cy.get('#unordered_list > #unordered_list_item1 + li')

    // Locates all sibling of #unordered_list_item1
    cy.get('#unordered_list > #unordered_list_item1 ~ li')


    /**
     * Grouping Selectors ( , ) *
     * 
     * Description: Combines multiple selectors into one rule set, 
     * allowing you to style different elements with the same set of styles.
     */
  })

  it('Locating the element using Attribute Selectors', () => {
    // These are proper way to locate the class and id
    // cy.get("#checkbox-button-group");
    // cy.get(".checkbox");
    cy.visit('https://www.techglobal-training.com/frontend/html-elements')

    cy.get('[id="checkbox-button-group"]')
    cy.get('[class="checkbox"]')

    cy.get('[data-identifier="Headings"]')

    cy.get('[value="Apple"]')

    cy.get('#company_dropdown1 > option[value="Apple"]')
  })

  /**
   * TEST CASE 1
   * Go to https://techglobal-training.com/frontend/dynamic-elements
   * Locate the below box is displayed
   * Box 1
   *
   * TEST CASE 2
   * Go to https://techglobal-training.com/frontend/dynamic-elements
   * Locate the below box is displayed
   * Box 2
   */

  it('Test Case', () => {

    /**
     * contains     => [class*="className"]
     * starts-with  => [class^="className"]
     * ends-with    => [class$="className"]
     */

    // cy.get('https://techglobal-training.com/frontend/dynamic-elements')

    cy.visit('https://techglobal-training.com/frontend/dynamic-elements')
    
    cy.get('[id^="box_1_"]').should('be.visible')
    cy.get('[id^="box_2_"]').should('be.visible')

    cy.get('[id^="box_"]').each(($el) => {
      expect($el).to.be.visible
    })
  })

  it('Pseudo Classes', () => {
    cy.visit('https://www.techglobal-training.com/frontend/html-elements')

    cy.get('#ordered_list li:first-child')
    cy.get('#ordered_list li:last-child')
    cy.get('#ordered_list li:nth-child(1)')

    cy.get('#checkbox-button-group input:not(#checkbox_2)')

    cy.get('#microsoft_check input').check()
    cy.get('input:checked')

    cy.get('input:not(:checked)')

  })
})
