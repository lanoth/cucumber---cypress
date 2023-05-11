import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("User is located on the find owners page", () => {
    cy.visit('/owners/find')
})

When("The user enters the name <Betty Davis>", () => {
    cy.get('input').type('Davis')
})

And("Searches for the name", () => {
    cy.contains('button', 'Find Owner').click()
})

Then("<Betty Davis> is displayed in the overview", () =>{
    cy.contains('Betty Davis').should('be.visible')
})

When("The user clicks <Betty Davis>", ()=>{
    cy.contains('Betty Davis').click()
})

Then("The user is forwarded to <Betty Davis> page", ()=>{
    cy.url().should('match', /\/owners\/2$/)
})