/// <reference types="Cypress" />

import testData from '../fixtures/testdata.json';
import { employee } from "../support/pageObject/employeePage";


describe('PIM Section', () => {

  beforeEach(() => {

    employee.logIntoWebsite()
    employee.navigateToPIMPage()

  })

  // Test case: Add a new employee with the required details
  it('should add a new employee with the required details', () => {

    employee.addEmployee(

      testData.employee1.firstName,
      testData.employee1.lastName,
      testData.employee1.employeeID

    )

    employee.uploadEmployeeImage()
    employee.saveEmployeeData()
    employee.verifyCreatedEmployee(testData.employee1.firstName)

  })

})
