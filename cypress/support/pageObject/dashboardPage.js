import BaseTest from "./baseClass";

class DashboardPage extends BaseTest {

    verifyDashboardLoadedSuccessfully() {
        cy.url().should('include', '/index.php/dashboard');
    }

    verifyDashboardHeaderText() {

        cy.get('.oxd-topbar-header-title').should('be.visible').and('contain', 'Dashboard');

    }
    verifyNumberOfItems() {

        cy.get('.oxd-grid-item').should('be.visible').and('have.length', 7);


    }

    verifyTitleOfItems(){

        const itemsText = ['Time at Work', 'My Actions', 'Quick Launch', 'Buzz Latest Posts', 'Employees on Leave Today', 'Employee Distribution by Sub Unit', 'Employee Distribution by Location'];

        cy.get('.oxd-grid-item').each( (gridItem, index) => {
            cy.wrap(gridItem).find('.orangehrm-dashboard-widget-header').should('have.text', itemsText[index])

        })
    }
}

export const dashboardPage = new DashboardPage();