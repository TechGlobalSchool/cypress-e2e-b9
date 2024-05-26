describe('Homework', () => {
  beforeEach(() => {
    cy.visit('https://www.techglobal-training.com/frontend/')
    cy.contains('.cards', 'Dropdowns').click()
  })

  /**
   * Test Case: Validate Dropdowns Functionality on TechGlobal Training Page
   * Go to https://techglobal-training.com/frontend
   * Select the "Dropdowns" card
   * Select the "MacBook Pro 13" option from the "Product" dropdown.
   * Select the "Green" option from the "Color" dropdown.
   * Open the "Shipping" dropdown and click on the "Delivery" option.
   * Click on the "Submit" button.
   * Validate result message displays "Your Green MacBook Pro 13 will be delivered to you."
   */
  it('Dropdown Menu', () => {
    const product = 'MacBook Pro 13'
    const color = 'Green'
    const shippingOption = 'Pick up'
    const expectedMessage =
      shippingOption === 'Delivery'
        ? `Your ${color} ${product} will be delivered to you.`
        : `Your ${color} ${product} is ready to be picked up.`

    cy.get('#product_dropdown').select(product)
    cy.get('#color_dropdown').select(color)

    cy.get('#shipment_dropdown').click()
    cy.get(`[aria-label="${shippingOption}"]`).click()

    cy.get('#submit').click()

    cy.get('#result').should('have.text', expectedMessage)
  })

  /**
   * Click on the “Male” option and validate it is selected while the others are not selected
   * Click on the “Female” option and validate it is selected while the others are not selected
   */

  it('example', () => {
    cy.visit('https://www.techglobal-training.com/frontend/project-1')

    cy.contains('Male').find('input').first().check().should('be.checked')

    cy.contains('Female').find('input').first().should('not.be.checked')
    cy.contains('Prefer not to disclose')
      .find('input')
      .first()
      .should('not.be.checked')

    cy.contains('Female').find('input').first().check().should('be.checked')

    cy.contains('Male').find('input').first().should('not.be.checked')
    cy.contains('Prefer not to disclose')
      .find('input')
      .first()
      .should('not.be.checked')

    const expectedTexts = ['Male', 'Female', 'Prefer not to disclose']

    cy.checkOptionAndValidateOthersNotChecked('Male', expectedTexts)
    cy.checkOptionAndValidateOthersNotChecked('Female', expectedTexts)
  })

  /**
   * Navigate to https://techglobal-training.com/frontend/project-1
   * Validate that the Address input box is displayed
   * Validate that the Address input box is not required
   * Validate that the label of the Address input box is “Address”
   * Validate that the placeholder of the Address input box is “Enter your address*”
   *
   * Navigate to https://techglobal-training.com/frontend/project-1
   * Validate that the Email input box is displayed
   * Validate that the Email input box is required
   * Validate that the label of the Email input box is “Email *”
   * Validate that the placeholder of the Email input box is “Enter your email”
   *
   * Navigate to https://techglobal-training.com/frontend/project-1
   * Validate that the Phone input box is displayed
   * Validate that the Phone input box is not required
   * Validate that the label of the Phone input box is “Phone”
   * Validate that the placeholder of the Address input box is “Enter your phone number”
   *
   * Navigate to https://techglobal-training.com/frontend/project-1
   * Validate that the Message text area is displayed
   * Validate that the Message text area is not required
   * Validate that the label of the Message text area is “Message”
   * Validate that the placeholder of the Message text area is “Type your message here…”
   */

  const testCases = [
    {
      description: 'Address input box',
      label: 'Address',
      placeholder: 'Enter your address',
      required: false,
    },
    {
      description: 'Email input box',
      label: 'Email *',
      placeholder: 'Enter your email',
      required: true,
    },
    {
      description: 'Phone input box',
      label: 'Phone',
      placeholder: 'Enter your phone number',
      required: false,
    },
    {
      description: 'Message input box',
      label: 'Message',
      placeholder: 'Type your message here...',
      required: false,
    },
  ]

  testCases.forEach((test, index) => {
    it(`Test Case 0${index + 4} - ${test.description}`, () => {
      cy.visit('https://www.techglobal-training.com/frontend/project-1')

      cy.contains('label', test.label).should('have.text', test.label)

      cy.contains('label', test.label)
        .parent()
        .find('input, textarea')
        .should('be.visible')
        .and('have.attr', 'placeholder', test.placeholder)
        .and(test.required ? 'have.attr' : 'not.have.attr', 'required')
    })
  })

  it('random', () => {
    cy.visit('https://www.techglobal-training.com/frontend/project-1')

    cy.get('[for="name"]').then(($el) => {
      const attr = $el.attr('class')

      cy.log(attr + ' Is the value of class attribute')
    })

    cy.get('.field label').each(($el) => {
      const attr = $el.attr('class')

      cy.log(attr + ' Is the value of class attribute')
    })
  })

  // it.only("practice", () => {
  //   cy.get("#locator").then(($el) => {
  //     cy.visit("https://www.techglobal-training.com/frontend");

  //     cy.get("#locator").then(($el) => {
  //       $el.text();
  //       cy.wrap($el).then(($el2) => {
  //         $el2.text();
  //       });
  //     });

  //     cy.get("#locator").then(($el) => {

  //       cy.wrap($el.text()).should("eq", "expectedText");

  //       cy.title().should("eq", "expectedText");
  //     });

  //     let myName = 'TG'

  //     cy.wrap(myName).should('eq', 'TG')

  //     cy.wrap(myName).then((el) => {
  //       myName.trim()
  //       cy.wrwap(myName.trim())
  //     })

  //     let num = 2

  //     cy.wrap(num).should('eq', 2)


  //     cy.title()
  //     cy.url()


  //     // 1st Usage
  //     cy.get("#locator").invoke('').then((el) => {

  //     })

  //     // 2nd Usage
  //     cy.get("#locator").then(($el) => {
  //       const text = $el.text()
  //       const length = $el.length
  //       const attr = $el.attr('id')
  //     })

  //   });
})