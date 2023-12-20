/// <reference types="Cypress" />

import { navBar } from "../support/pageObject/navBar";

describe('Navigation Bar', () => {

    beforeEach(() => {

        navBar.logIntoWebsite()

    })
    // Test case: Verify the number of items in the navigation bar
    it('verify the number of items in the navigation bar', () => {

        navBar.countNavItems()

    })
    // Test case: Verify that navigation items are clickable
    it('verify that navigation items is clickable', () => {

        navBar.navItemIsClickable()

    })
    // Test case: Verify the chevron for the Menu bar
    it('verify the chevron for Menu bar ', () => {

        navBar.chevronOnMenuBar()

    })
    // Test case: Verify the logo of the Menu bar
    it('verify the logo of Menu bar ', () => {

        navBar.logoOnNavBar()

    })
    // Test case: Verify the search functionality of the Menu bar
    it('verify the search functionality of Menu bar ', () => {

        navBar.searchOnMenuBar()

    })

})
