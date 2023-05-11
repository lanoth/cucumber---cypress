import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("User is located at the home page", () => {
    cy.visit('/')
})

And("The user clicks the find owners button in the nav bar", () => {
    cy.contains('Find owners').click()
})

Then("The user is forwarded to the find owners page", () => {
    cy.url().should('match', /\/owners\/find$/)
})