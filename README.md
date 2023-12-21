## cypress-automation-project
Automating OrangeHRM website with Cypress and JavaScript. Utilizing Page Object Model, generating JUnit and Mochawesome HTML reports, and integrating with Docker and Jenkins for efficient testing workflows.


## Link to Website:
https://opensource-demo.orangehrmlive.com


## Technologies Used:

- **JavaScript:** The primary programming language for developing automated tests.

- **Cypress 13:** A powerful end-to-end testing framework used for creating and running tests.

- **Docker:** Utilized for containerization, allowing for consistent and isolated test environments.

- **Jenkins:** Employed for continuous integration, automating the testing process and ensuring reliable builds.

- **Mochaawesome Multi Reporter:** Enhanced test reporting using the Mochaawesome reporter for generating HTML reports, providing comprehensive insights into test results.


## Cypress Automation Framework Setup Guide

### Prerequisites

1. **Node.js Installation:**
   - Ensure that Node.js is installed. You can check by running the following commands in your terminal:
     ```bash
     node --version
     npm --version
     ```
   - Download Node.js: [Node.js Download](https://nodejs.org/en/download/?msclkid=9235b36aae8711ec83c8dcadd3d2c7ae)

2. **Visual Studio Code Installation:**
   - Download and install Visual Studio Code: [Visual Studio Code Download](https://code.visualstudio.com/Download?msclkid=27c13200a9b411ec9558d874544e8563#)

### Project Setup

3. **Clone the Repository:**
   - Create a project folder and clone the repository.
     ```bash
     git clone <repository_url>
     cd <project_folder>
     ```

4. **Initialize Project:**
   - Open the project folder in Visual Studio Code.
   - Run the following command in the terminal:
     ```bash
     npm init
     ```
   - Ensure that the `package.json` file is created.

5. **Install Cypress:**
   - Run the following command to install Cypress:
     ```bash
     npm install cypress --save-dev --force
     ```
   - Verify that all Cypress folders are downloaded and installed.

### Writing and Running Tests

6. **Open Test Runner:**
   - Run the following command to open the Cypress Test Runner:
     ```bash
     npx cypress open
     ```
   - Start writing your tests in the opened Test Runner window.

### Running Tests from CLI

7. **Run Tests from CLI:**
   - To run all scripts from the command line, use the following command in the terminal:
     ```bash
     npm run cypress:e2e
     ```
   - This will execute all specs, delete old reports, and generate new reports inside the Cypress framework.
   - JUnit.xml & Mochawesome.json reports can be found in: `cypress/results`.
   - Mochawesome HTML report will be created in the `mochawesome-report` folder in the root of the project.

### Running Tests inside Docker Container

8. **Run Tests inside Docker Container:**
   - To run all scripts inside a Docker container, use the following command in the terminal:
     ```bash
     docker-compose up
     ```
   - Reports will be generated in the `dockerReports` folder in the root of the project.