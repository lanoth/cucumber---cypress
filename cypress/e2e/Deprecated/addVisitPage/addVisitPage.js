import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("User visits a registered user's page", () => {
    cy.visit('/owners/2')
})

When("User clicks the add visit button", () => {
    cy.contains('Add Visit').click()
})

Then("The user is forwarded to the new visit page", () => {
    cy.url().should('include', 'visits/new')
})