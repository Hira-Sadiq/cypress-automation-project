/// <reference types="Cypress" />

import testData from '../fixtures/testdata.json';
import { loginPage } from '../support/pageObject/loginPage';


describe('Login Functionality', () => {

  beforeEach(() => {

    loginPage.navigateToBaseUrl()

  })

  // Test case: Check that the login page loads correctly without errors
  it('should load the login page correctly without errors', () => {

    loginPage.verifyLoginPageLoaded()

  })
  // Test case: Verify the display of the logo on the login page
  it('should display the logo on the login page', () => {

    loginPage.verifyLogoImage()

  })
  // Test case: Log in with valid credentials
  it('should log in with valid credentials', () => {

    loginPage.fillUsername(testData.validUser.username)
    loginPage.fillPassword(testData.validUser.password)
    loginPage.clickLoginButton()
    loginPage.verifyDashboardPage()

  })
  // Test case: Display appropriate error messages for invalid login attempts
  it('should display appropriate error messages for invalid login attempts', () => {

    loginPage.fillUsername(testData.invalidUser.username)
    loginPage.fillPassword(testData.invalidUser.password)
    loginPage.clickLoginButton()
    loginPage.verifyErrorMessageDisplayed()

  })
  // Test case: Verify logout functionality
  it('verify logout works ', () => {

    loginPage.logIntoWebsite()
    loginPage.verifyLogoutFunctionality()

  })

})