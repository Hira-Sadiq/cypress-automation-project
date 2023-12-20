import BaseTest from "./baseClass";

class Admin extends BaseTest {

  navigateToAdminPage() {

    cy.get('.oxd-main-menu li').contains('Admin').click()

  }

  getTotalRowCount() {

    return cy.get('.oxd-table-body .oxd-table-row').its('length');

  }

  getAdminRowCount() {

    return cy.get('.oxd-table-body .oxd-table-row:contains("Admin")').its('length')

  }

  getEssRowCount() {

    return cy.get('.oxd-table-body .oxd-table-row:contains("ESS")').its('length')

  }
}

export const adminPage = new Admin();
