describe('Cypress Acttions', () => {

  beforeEach(() => {
    cy.contains('.cards', 'Html Elements').click()
  })

  /**
   * Visit the techglobal frontend page
   * Click and navigate to Html Elements page
   * Click on the Register button on the Html Elements Page
   * Validate "You clicked on “Register" text is visible
   * And click on the "Sign in" button
   * Validate "You clicked on “Sign in”" text is visible
   */

  it('Click Action', () => {
    
    cy.get('#register_button').click()
    cy.get('.mt-1').should('have.text', 'You clicked on “Register”')

    cy.get('#signin_button').click()
    cy.get('.mt-1').should('have.text', 'You clicked on “Sign in”')

    cy.get('#register_button').click()
      .next()
      .next()
      .should('have.text', 'You clicked on “Register”')
      .prev()
      .click()
      .next()
      .should('have.text', 'You clicked on “Sign in”')
  })

  it('Checkbox & Radio Buttons', () => {

    // This assertion will not work, because "#apple_check" targets <label> web element
    // and this element is not the input itself, and its not possible to get input information from it
    // cy.get('#apple_check').click().should('be.checked')


    /**
     * cy.check() can only be called on :checkbox and :radio. 
     * Your subject is a: <label id="apple_check" class="checkbox">...</label>
     */
    // cy.get('#apple_check').check()

    /**
     * 1. Check on the Apple checkbox button
     * 2. Then Validate its checked
     * 3. Uncheck the Apple checkbox button
     * 4. Validate its unchecked
     */

    cy.get('#checkbox_1')
      .check()
      .should('be.checked')
      .uncheck()
      .should('not.be.checked')

    /**
     * 1. Locate the "Java" radio button, and validate its not checked
     * 2. Select Java radio option
     * 3. Validate its checked.
     */

    cy.get('#radio_1_option_1').should('not.be.checked')
      .check().should('be.checked')
  })

  it('Text Input', () => {

    // .type('TechGlobal')
    // .clear()

    /**
     * Locate the text inputs, and send text inside the input, 
     * Validate the text you send is inside the input
     * and clear it
     * Validate it is empty
     */

    const inputs = ['Tech', 'Global']

    const [first, last] = inputs

    // cy.log(first)

    cy.get('[data-identifier="Text Inputs"] input').each(($el, index) => {
      cy.wrap($el).type(inputs[index]).should('have.value', inputs[index]).clear().should('be.empty')
    })

    // cy.get('#text_input1').type(first).should('have.value', first)
    // .clear().should('be.empty').next().children().eq(1).children()
    // .type(last).should('have.value', last).clear().should('be.empty')

    cy.get('#text_input1').type(first).should('have.value', first)
      .clear().should('be.empty')

    cy.get('#text_input2').type(last).should('have.value', last)
      .clear().should('be.empty')
  })

  it('Date Inputs', () => {
    /**
     * Locate the first date input
     * and send a proper date inside
     * 
     * Repeat the same thing with second date input
     */

    cy.get('#date_input1').type('06/08/1993{enter}')

    cy.get('#date_input2').clear().type('06/08/1993{esc}')
  })

  it.only('Dropdowns', () => {

    /**
     * If you want to handle the dropdown that is created using <select> web element
     * you MUST use select() method from the Cypress
     */
    cy.get('#company_dropdown1').select('Microsoft').should('have.value', 'Microsoft')

    cy.get('#company_dropdown2').select(2)


    // Dropdown without <select> tag example

    /**
     * If dropdown is created with regular HTML web elements
     * You have to handle it as you handle regular web components
     */
    cy.visit('https://www.techglobal-training.com/frontend/dropdowns')

    cy.get('#shipment_dropdown').click()
    cy.contains('[role="option"]', 'Pick up').click()
  })
})