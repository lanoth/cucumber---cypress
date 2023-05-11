import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("User views the home page", () => {
    cy.visit('http://localhost:8080')
})

When("User clicks the Find Owners button", () => {
    cy.contains('Find owners').click()
})

Then("User is forwarded to the find users page", () => {
    cy.url().should('include', 'find')
})

When("User enters the name Davis", () => {
    cy.get('input').type('Davis')
})

And("User clicks the search button", () => {
    cy.contains('button', 'Find Owner').click()
})

Then("The Davis user is displayed", () => {
    cy.contains('Betty Davis').should('be.visible')
})

When("User clicks the user", () => {
    cy.contains('Betty Davis').click();
})

Then("User is fowarded to Davis user's page", () => {
    cy.contains('Owner Information').should('be.visible')
    cy.contains('Betty Davis').should('be.visible')
})
