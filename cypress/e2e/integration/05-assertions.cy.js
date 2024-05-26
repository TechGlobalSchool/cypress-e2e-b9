/// <reference types="cypress" />

describe('Assertions', () => {
  beforeEach(() => {
    // This will fail if the page doesnt send text/html with a 200 status
    cy.contains('.cards', 'Html Elements').click()
  })

  it('Default Assertions', () => {
    cy
      // There is a default assertion that this
      // button must exist in the DOM before proceeding
      .get('#register_button')
      // since Cypress internally checks if the web element on the dom tree or not
      // we don't need to do the below assertion
      .should('be.visible')
      // before issuing the click, this button must be "actionable"
      // it can not be covered, disabled, or hidden from the view.
      .click()
  })

  it('Implicit Assertions', () => {
    // cy.visit('https://www.techglobal-training.com/frontend/project-7')

    // cy.get('.infinite-scroll-component > div').as('divBoxes')

    // cy.get('@divBoxes').last().scrollIntoView()

    // // cy.get('@divBoxes').then(($el) => {
    // //   cy.log(`${$el.length} is the amount of boxes we have`)
    // //   expect($el).to.have.length.above(20)
    // // })

    // cy.get('@divBoxes').should('have.length.greaterThan', 20)

    // Any assertion we do using .should() method is an "Implicit Assertion"

    cy.visit('https://www.techglobal-training.com/frontend/')
    cy.contains('.cards', 'Html Elements').click()

    cy.get('#main_heading').should('be.visible')

    cy.get('#main_heading').should('have.text', 'Html Elements')

    // Checks if the element text contains expected text
    cy.get('#main_heading').should('contain', 'Html Elements')

    cy.get('#main_heading').should('include.text', 'Html Elements')

    cy.url().should('include', 'techglobal')
    cy.title().should('eq', 'TechGlobal Training | Html Elements')

    // cy.get('#main_heading').should('eq', 'Html Elements')

    /**
     * IMPORTANT NOTE
     *
     * Chainers like eq, includes SHOULD NOT be used against the web elements. Web elements comes as a direct object
     * and you must use 'have.text', 'include.text', or 'contain' as a chainer.
     *
     * eg:
     *
     * cy.get('#main_heading').should('eq', 'Html Elements')        => WRONG
     * cy.get('#main_heading').should('includes', 'Html Elements')  => WRONG
     *
     * cy.title().should('eq', 'TechGlobal Training | Html Elements') => TRUE
     *
     */

    cy.get('#main_heading').then(($el) => {
      cy.log(typeof $el)
      cy.wrap($el).should('have.text', 'Html Elements')
      const ele = $el.text()
      cy.log(typeof ele)

      cy.wrap(ele).should('eq', 'Html Elements')
      cy.wrap('Tech').should('eq', 'Tech')
    })

    // have.attr chainer checks the element attribute property
    // it can get 2, or 3 arguments, we can validate if element has specific attribute, and the value of it
    cy.get('#main_heading').should('have.attr', 'id')
    cy.get('#main_heading').should('have.attr', 'id', 'main_heading')

    // have.length chainer validates how many web element our locator returns
    cy.get('[data-identifier*="e"]').should('have.length', 7)
    cy.get('[data-identifier*="e"]').should('have.length.greaterThan', 6)
    cy.get('[data-identifier*="e"]').should('have.length.gte', 7)

    cy.get('[data-identifier*="e"]').should('have.length.lessThan', 8)
    cy.get('[data-identifier*="e"]').should('have.length.lte', 7)

    // be.enabled checks if element is interactable
    cy.get('#checkbox_1').should('be.enabled')

    const userName = 'Tania Vlokh'

    // have.value checks if input like text, or dropdown has the given value
    cy.get('#text_input1').type(userName).should('have.value', userName)

    // b.checked checks if the web element is checked
    cy.get('#checkbox_1').should('not.be.checked').check().should('be.checked')

    // checks the css attribute and value
    cy.get('#main_heading').should('have.css', 'color')
    cy.get('#main_heading')
      .should('have.css', 'color', 'rgb(105, 105, 105)')
      .and('have.text', 'Html Elements')
      .and('be.visible')

    /**
     * 1. Navigate to "https://www.techglobal-training.com/frontend/project-4"
     * 2. Click on Add Product Button > Model Opens
     * 3. Close the model and validate model is not visible
     */

    cy.visit('https://www.techglobal-training.com/frontend/project-4')
    cy.get('#add_product_btn').click()
    cy.get('.delete').click()

    // cy.get('.modal-card').should('not.be.visible');

    cy.get('.modal-card').should('not.exist')
  })

  it('Explicit Assertion', () => {
    // cy.viewport(550, 750)

    expect(true).to.be.equal(true)

    // this is a failure
    // expect(cy.url()).to.be.equal(cy.url())

    cy.get('#main_heading').should('have.text', 'Html Elements')

    cy.get('#main_heading').then(($el) => {
      cy.log(typeof $el)
      cy.wrap($el).should('have.text', 'Html Elements')
      const ele = $el.text()
      cy.log(typeof ele)

      cy.wrap(ele).should('eq', 'Html Elements')
      cy.wrap('Tech').should('eq', 'Tech')
    })

    /**
     * NOTE: Using invoke() or without invoke is preference. Has no performance difference or benefit one over another one.
     */
    cy.get('#main_heading')
      .invoke('text')
      .then((el) => {
        cy.log(el.toUpperCase().trim() + ' retrieved element')
      })

    // Explicit assertion to check element euqals, includes, exist and length
    cy.get('#main_heading').then(($el) => {
      const ele = $el.text()
      cy.log(ele.toUpperCase().trim() + ' retrieved element')

      expect(ele).equal('Html Elements')
      expect(ele).include('Html Elements')
      expect($el).to.exist
      expect($el).to.have.length.above(0)
    })

    // check element attribute
    cy.get('#main_heading')
      .invoke('attr', 'id')
      .then((attr) => {
        expect(attr).equal('main_heading')
      })

    // use without invoke to check attribute
    cy.get('#main_heading').then(($el) => {
      const attr = $el.attr('id')
      expect(attr).equal('main_heading')
    })

    cy.get('#checkbox_1').then(($el) => {
      expect($el).to.be.visible
      expect($el).to.be.enabled
      expect($el).not.to.be.checked
    })

    // cy.get('#main_heading').should('have.css', 'color', 'rgb(105, 105, 105)')

    cy.get('#main_heading').then(($el) => {
      const css = $el.css('color')
      expect(css).eq('rgb(105, 105, 105)')
    })

    cy.get('#main_heading').then(($el) => {
      const ele = $el.text()
      expect(ele).equal('Html Elements')

      cy.wrap(ele).should('eq', 'Html Elements')
      cy.wrap(ele).should('includes', 'Html Elements')

      cy.wrap($el).should('include.text', 'Html Elements')
      cy.wrap($el).should('have.text', 'Html Elements')
    })
  })

  it('each() - interacting with multiple web elements', () => {
    const arr = ['Hello World!', 'I like automation testing!']

    for (let i = 0; i < arr.length; i++) {
      cy.get('[data-identifier="Paragraphs"] > p')
        .eq(i)
        .should('have.text', arr[i])
    }

    cy.get('[data-identifier="Paragraphs"] > p').each(($el, index) => {
      cy.log(index)
      cy.log($el.length)
      cy.log($el.text())

      cy.log(arr[index].length)

      cy.wrap($el)
        .should('have.text', arr[index])
        .and('be.visible')
        .and('have.length', 1)
    })

    /**
     * 1. On the Html Elements page
     * 2. From the "Headings" section, locate both "Programming Languages" and "Automation Tools" web elements
     * 3. Validate their texts with expected text
     * 4. Validate these elements are visible.
     */

    const arr2 = ['Programming Languages', 'Automation Tools']

    cy.get('[data-identifier="Headings"] > h4').each(($el, index) => {
      cy.wrap($el).should('have.text', arr2[index]).and('be.visible')
    })

    // const switch_case = 'empty'

    // switch (switch_case) {
    //   case "non-empty": {
    //     cy.log("blabla");
    //     break;
    //   }

    //   case "1non-empty":
    //   case "2non-empty": {
    //     cy.log("Tech");
    //     break;
    //   }

    //   case "full": {
    //     cy.log("Global");
    //     break;
    //   }

    //   default:{
    //     throw new Error(`My error: ${switch_case} is missing `);
    //   }
    // }

    /**
     * 1. On the Html Elements page
     * 2. From the "Checkboxes" section, locate all checkboxes
     * 3. Validate their texts with expected text
     * 4. Validate checkboxes are visible, and enabled
     */

    const exp = ['Apple', 'Microsoft', 'Tesla']

    cy.get('#checkbox-button-group div').each(($el, index) => {
      cy.wrap($el).find('label').should('have.text', exp[index])
      // .parent().find('input').should('be.visible').and('be.enabled')

      cy.wrap($el).find('input').should('be.visible').and('be.enabled')
    })
  })

  it.only('Assertion Practices', () => {
    /**
     * 1. Go to https://techglobal-training.com/frontend
     * 2. Navigate to 'Html Elements' card
     *
     * 3. From the "Text Inputs" section
     * 4. Validate text input 1 and text input 2 is enabled
     * 5. Validate text input 1 and text input 2 is not required
     * 6. Enter your name and last name
     */

    const names = ['Tech', 'Global']

    cy.get('#text_input1, #text_input2').each(($el, index) => {
      cy.wrap($el)
        .type(names[index])
        .should('be.enabled')
        .and('not.have.attr', 'required')
    })

    /**
     * 1. Go to https://techglobal-training.com/frontend
     * 2. Navigate to 'Html Elements' card
     *
     * 3. From the "Date Inputs" section
     * 4. Validate date input 1 and date input 2 is enabled
     * 5. Validate date input 1 and date input 2 is is not required
     * 6. Enter dates for both date input 1 and date input 2
     * 7. Validate value is changed to given dates.
     */

    const dates = ['11/11/2000', '11/11/2002']

    cy.get('#date_input1, #date_input2').each(($el, index) => {
      cy.wrap($el)
        .clear()
        .type(`${dates[index]}{enter}`) // type(dates[index] +'{enter}')
        .should('have.value', dates[index])
        .and('be.enabled')
        .and('not.have.attr', 'required')
    })

    /**
     * 1. Go to https://techglobal-training.com/frontend
     * 2. Navigate to 'Html Elements' card
     *
     * 3. From the "Dropdowns" section
     * 4. Validate dropdown 1 and dropdown 2 is enabled
     * 6. Enter Microsoft for dropdown 1 and Apple for dropdown 2
     * 7. Validate options are selected
     */

    const dropdowns = ['Microsoft', 'Apple']

    cy.get('#company_dropdown1, #company_dropdown2').each(($el, index) => {
      cy.wrap($el)
        .select(dropdowns[index])
        .should('be.enabled')
        .and('have.value', dropdowns[index])
    })

    cy.get('#company_dropdown1, #company_dropdown2').each(($el, index) => {
      cy.wrap($el)
        .select(dropdowns[index])
        .find('option:selected')
        .should('have.text', dropdowns[index])
    })
  })
})
