/// <reference types="Cypress" />

import { dashboardPage } from "../support/pageObject/dashboardPage";

describe('Dashboard Page', () => {

  beforeEach(() => {

    dashboardPage.logIntoWebsite()

  })

  // Test case: Check that the dashboard page loads successfully after login
  it('should load the dashboard page successfully', () => {

    dashboardPage.verifyDashboardLoadedSuccessfully()

  })

  // Test case: Verify that title and number of items on the dashboard
  it('check the Dashboard text in header', () => {

    dashboardPage.verifyDashboardHeaderText()

  })

  // Test case: Count the number of items displayed on the Dashboard
  it('count the number of items displayed on a Dashboard', () => {

    dashboardPage.verifyNumberOfItems()

  })

  // Test case: Verify the title of items displayed on the Dashboard
  it('verify the title of items displayed on a Dashboard', () => {

    dashboardPage.verifyTitleOfItems()

  })

})