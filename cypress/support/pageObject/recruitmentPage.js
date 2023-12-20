import BaseTest from "./baseClass";

export default class RecruitmentPage extends BaseTest {

    addNewCandidate(candidateData) {
      cy.get('.orangehrm-header-container button').click()
      cy.url().should('include', 'addCandidate')
      cy.get('[name="firstName"]').type(candidateData.firstName)
      cy.get('[name="lastName"]').type(candidateData.lastName)
      cy.get('.oxd-select-wrapper').click().contains(candidateData.role).click()
      cy.get('.oxd-input-group:contains("Email") [placeholder="Type here"]').type(candidateData.email)
      cy.get('.oxd-input-group:contains("Contact Number") [placeholder="Type here"]').type(candidateData.contactNumber)
      cy.get('.orangehrm-file-input input[type="file"]').selectFile(candidateData.resumeFilePath, { force: true })
      cy.contains('Save').click()
    }
  
    navigateToCandidatesSection() {
      cy.get('nav').contains('Candidates').click()
    }
  
    verifyCandidateInCandidatesSection(candidateData) {
      cy.get('.oxd-table-body').find('.oxd-table-row').first().within(() => {
        cy.get('.oxd-table-cell').eq(2).contains(candidateData.firstName + ' ' + candidateData.lastName)
      })
    }
  }
  
  export const recruitmentPage = new RecruitmentPage();