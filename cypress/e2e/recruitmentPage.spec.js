/// <reference types="Cypress" />

import { recruitmentPage } from "../support/pageObject/recruitmentPage";

describe('Recruitment Page', () => {

  beforeEach(() => {

    recruitmentPage.logIntoWebsite()
    recruitmentPage.navigateToRecruitmentPage()

  })

  // Test case: Add a new candidate
  it('add new candidate', () => {

    cy.fixture('candidateData').then(candidateData => {

      recruitmentPage.addNewCandidate(candidateData)

    })
  })

  // Test case: Verify the added candidate in the Candidates section
  it('verify candidate in the Candidates section', () => {

    cy.fixture('candidateData').then(candidateData => {

      recruitmentPage.navigateToCandidatesSection()
      recruitmentPage.verifyCandidateInCandidatesSection(candidateData)

    })
  })

})