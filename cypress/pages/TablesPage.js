import BasePage from "./BasePage"

class TablesPage extends BasePage {

  getCompanyTableHeaders() {
    return cy.get('.header')
  }

  /**
   * This method takes the company headers and returns the specific header
   * depending on the argument.
   * 
   * @param {string} header - Company header name
   * @returns 
   * 
   * @example
   * 
   * getSpecificTableHeaderByLabel('Rank')
   */

  getSpecificTableHeaderByLabel(header) {
    return this.getCompanyTableHeaders().contains(header)
  }

  
}

export default TablesPage