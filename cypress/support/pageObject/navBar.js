import BaseTest from "./baseClass";

export default class NavBar extends BaseTest {

    countNavItems() {
        const navItemsArray = ["Admin", "PIM", "Leave", "Time", "Recruitment", "My Info", "Performance", "Dashboard", "Directory", "Maintenance", "Claim", "Buzz"]

        cy.get('.oxd-main-menu li').each((navItem, index) => {
            cy.wrap(navItem).should('contain', navItemsArray[index])
        })
        // Verify that the total count of navigation items is 12
        cy.get('.oxd-main-menu li').should('have.length', 12);
    }

    navItemIsClickable() {
        const navItemsArray = ["Admin", "PIM", "Leave", "Time", "Recruitment", "My Info", "Performance", "Dashboard", "Directory", "Maintenance", "Claim", "Buzz"];

        cy.wrap(null).then(() => { // Use wrap to create a new command chain
            navItemsArray.forEach((navItemText) => {
                cy.visit('/');

                // Use .contains to find the specific navigation item based on the text
                cy.get('.oxd-main-menu li').contains(navItemText).then((navItem) => {

                    const navItemTextLowercase = navItemText.toLowerCase().replace(/\s/g, '');

                    cy.wrap(navItem).click();

                    if (navItemText === "My Info") {
                        cy.url().should('include', 'viewPersonalDetails');
                    } else if (navItemText === "Maintenance") {
                        cy.url().should('include', navItemTextLowercase)
                        cy.get('[type="button"]').click()
                    }
                    else {
                        cy.url().should('include', navItemTextLowercase);
                    }
                })
            })
        })
    }

    chevronOnMenuBar() {
        // Find the navigation element containing the menu button
        cy.get('nav').find('.oxd-main-menu-button').then(chevron => {
            // Ensure that the menu button initially has the 'bi-chevron-left' class
            cy.wrap(chevron).find('i').should('have.class', 'bi-chevron-left');

            // Click the menu button
            cy.wrap(chevron).click();

            // Ensure that the menu button now has the 'bi-chevron-right' class after clicking
            cy.wrap(chevron).find('i').should('have.class', 'bi-chevron-right');
        })
    }

    logoOnNavBar() {

        cy.get('nav .oxd-brand-banner').find('img').should('have.attr', 'src').should('include', '/web/images/orangehrm-logo.png');
    }

    searchOnMenuBar() {
        const menuItemsToVerify = ["Leave", "Performance", "Dashboard", "Maintenance", "Buzz"];

        // Find the search container
        cy.get('.oxd-main-menu-search').within(() => {
            // Verify the search icon
            cy.get('svg').should('exist').and('have.class', 'oxd-icon');

            // Verify the search input functionality
            cy.get('input').as('searchInput').should('exist').and('have.class', 'oxd-input');

            // Iterate through each menu item and verify

        });
        menuItemsToVerify.forEach((searchText) => {
            cy.get('@searchInput').clear().type(searchText);

            // Wait for the specific menu item to become visible
            cy.get('.oxd-main-menu-item', { timeout: 10000 })
                .should('be.visible')
                .should('contain.text', searchText);
        });
    }
}
    
    
export const navBar = new NavBar();