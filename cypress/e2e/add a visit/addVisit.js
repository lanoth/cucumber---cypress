import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

// Navigate to find owners page
Given("User is located at the home page", () => {
    cy.visit('/')
})

And("The user clicks the find owners button in the nav bar", () => {
    cy.contains('Find owners').click()
})

Then("The user is forwarded to the find owners page", () => {
    cy.url().should('match', /\/owners\/find$/)
})

// Navigate to specific users page
Given("User is located on the find owners page", () => {
    cy.visit('/owners/find')
})

When("The user enters the name <Davis>", () => {
    cy.get('input').type('Davis')
})

And("Searches for the name", () => {
    cy.contains('button', 'Find Owner').click()
})

Then("<Betty Davis> is displayed in the overview", () => {
    cy.contains('Betty Davis').should('be.visible')
})

When("The user clicks <Betty Davis>", () => {
    cy.contains('Betty Davis').click()
})

Then("The user is forwarded to <Betty Davis> page", () => {
    cy.url().should('match', /\/owners\/2$/)
})

// Navigate to Betty Davis page and add a visit
Given("A user visits <Betty Davis> page", () => {
    cy.visit('/owners/2')
})

When("The user clicks the pet Basil's add visit button", () => {
    cy.contains('a', 'Add Visit').click()
})

Then("The user is forwarded to the New visit page", () => {
    cy.url().should('match', /\/visits\/new$/)
})

When("The user enters a description", () => {
    cy.get('input[type="text"]').type('cucumber description')
})

And("Changes the date", () => {
    cy.get('input[type="date"]').type('2023-12-24')
})

And("Clicks Add Visit", () => {
    cy.contains('button', 'Add Visit').click()
})

Then("A new visit is added to the owner's page", () => {
    cy.contains('2023-12-24').should('be.visible')
    cy.contains('cucumber description').should('be.visible')
})