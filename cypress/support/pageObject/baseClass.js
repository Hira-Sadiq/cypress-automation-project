export default class BaseTest {


    navigateToBaseUrl() {
        cy.visit('/')
    }

   navigateToPIMPage() {
        cy.contains('PIM').click();
        cy.get('.oxd-topbar-header-title').should('be.visible').and('contain', 'PIM');
    }

    navigateToRecruitmentPage() {
        cy.contains('Recruitment').click();
        cy.get('.oxd-topbar-header-title').should('be.visible').and('contain', 'Recruitment');
    }


     logIntoWebsite() {
        const username = 'Admin';
        const password = 'admin123';

        cy.visit('/');
        cy.get("[name='username']").type(username);
        cy.get("[name='password']").type(password);
        cy.get(".oxd-button").click();
    }

    getPageTitle() {
        return cy.title();
    }

    getCurrentUrl() {
        return cy.url();
    }
}
export const baseTest = new BaseTest();


