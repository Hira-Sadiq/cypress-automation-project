/// <reference types="Cypress" />

import { adminPage } from "../support/pageObject/adminPage";

describe('Admin section', () => {

    beforeEach(() => {

        adminPage.logIntoWebsite()

    })
    
    // Test case: verify number of records with user roles by Admin and ESS
    it('verify records with user roles', () => {

        // Navigate to the Admin page
        adminPage.navigateToAdminPage()

        // Get the count of total number of rows
        adminPage.getTotalRowCount().then((totalRowCount) => {
            cy.log(`Total number of rows: ${totalRowCount}`)

            // Get the count of rows with role 'Admin'
            adminPage.getAdminRowCount().then((adminRowCount) => {
                cy.log(`Number of rows with role 'Admin': ${adminRowCount}`)

                // Get the count of rows with role 'ESS'
                adminPage.getEssRowCount().then((essRowCount) => {
                    cy.log(`Number of rows with role 'ESS': ${essRowCount}`)

                    // Assert the total number of rows
                    cy.wrap(totalRowCount).should('eq', adminRowCount + essRowCount)

                })
            })
        })
    })
})
