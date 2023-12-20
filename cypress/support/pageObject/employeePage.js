import BaseTest from "./baseClass";

class Employee extends BaseTest {

  addEmployee(firstName, lastName, employeeID) {

    this.clickAddEmployee();
    this.fillEmployeeDetails(firstName, lastName, employeeID);

  }

  clickAddEmployee() {

    cy.contains('Add Employee').click();

  }

  fillEmployeeDetails(firstName, lastName, employeeID) {

    cy.get('.oxd-form').within(() => {
      cy.get("[name='firstName']").type(firstName);
      cy.get("[name='lastName']").type(lastName);
      cy.get('.oxd-grid-2 input').clear().type(employeeID);

    });
  }

  uploadEmployeeImage() {

    cy.get('.orangehrm-employee-image input[type="file"]').selectFile('cypress/fixtures/sampleFile.jpg', { force: true });
    cy.get('.orangehrm-employee-image img').should('have.attr', 'src').and('include', 'data:image/jpeg;base64,');

  }

  saveEmployeeData() {

    cy.get('.oxd-form-actions').contains('Save').click();
    cy.url().should('include', '/viewPersonalDetails');
    cy.get('.oxd-topbar-body').should('contain', 'Employee List');

  }

  verifyCreatedEmployee(firstName) {

    this.navigateToEmployeeList();
    this.searchEmployee(firstName);
    this.assertEmployeeInTable(firstName);
    this.deleteEmployee();

  }

  navigateToEmployeeList() {

    cy.get('.oxd-sidepanel').contains('PIM').click();
    cy.get('.oxd-topbar-body').contains('Employee List').click();

  }

  searchEmployee(firstName) {

    cy.get('.oxd-grid-item input[placeholder="Type for hints..."]').eq(0).type(firstName);
    cy.get('.oxd-form-actions').contains('Search').click();
    cy.wait(3000);

  }

  assertEmployeeInTable(firstName) {

    cy.get('.oxd-table-body .oxd-table-cell').eq(2).should('contain', firstName);

  }

  deleteEmployee() {

    cy.get('.oxd-table-body .oxd-table-cell').eq(8).find('.bi-trash').click();
    cy.contains('Yes, Delete ').click();

  }

}

export const employee = new Employee();


