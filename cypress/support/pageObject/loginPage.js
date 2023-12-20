import BaseTest from "./baseClass";

export default class LoginPage extends BaseTest {

  usernametxt = "[name='username']";
  passwordtxt = "[name='password']";
  btnlogin = ".oxd-button";
  logo = ".orangehrm-login-branding";
  errormessage = ".oxd-alert-content";

  fillUsername(username) {
    cy.get(this.usernametxt).clear().type(username);
  }

  fillPassword(password) {
    cy.get(this.passwordtxt).clear().type(password);
  }

  clickLoginButton() {
    cy.get(this.btnlogin).click();
  }

  verifyLoginPageLoaded() {
    cy.url().should('include', '/auth/login');
  }

  verifyLogoImage() {
    cy.get(this.logo).find('img').should('have.attr', 'src').should('include', '/web/images/ohrm_branding.png');
  }

  verifyErrorMessageDisplayed() {
    cy.get(this.errormessage).should('contain.text', 'Invalid credentials');
  }

  verifyDashboardPage() {
    cy.url().should('include', '/dashboard');
  }

  verifyLogoutFunctionality() {
    cy.get('.oxd-userdropdown').click()
    cy.contains('Logout').click()
    cy.url().should('include', '/auth/login');
  }
}

export const loginPage = new LoginPage();