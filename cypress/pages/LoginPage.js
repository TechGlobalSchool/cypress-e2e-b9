import BasePage from './BasePage'

class LoginPage extends BasePage {

  /* Locators */

  getUsernameField() {
    return cy.get('#username')
  }

  getPasswordField() {
    return cy.get('#password')
  }

  getSubmitButton() {
    return cy.get('#login_btn')
  }

  getSuccessMessage() {
    return cy.get('#success_lgn')
  }

  getErrorMessage() {
    return cy.get('#error_message')
  }

  /* Methods */
  clickLoginButton(){
    this.getSubmitButton().click()
  }

  userLogin(username, password) {
    this.getUsernameField().type(username)
    this.getPasswordField().type(password)
    this.clickLoginButton()
  }
}

// ES6
export default LoginPage
