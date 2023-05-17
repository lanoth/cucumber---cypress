Feature: Find user and add a visit to their pet

    Scenario: User navigates to owners page
        Given User is located at the home page
        When The user clicks the find owners button in the nav bar
        Then The user is forwarded to the find owners page

    Scenario: User navigates to Betty Davis page
        Given User is located on the find owners page
        When The user enters the name <Davis>
        And Searches for the name
        Then <Betty Davis> is displayed in the overview
        When The user clicks <Betty Davis>
        Then The user is forwarded to <Betty Davis> page

    Scenario: User adds a visit for Basil
        Given A user visits <Betty Davis> page
        When The user clicks the pet Basil's add visit button
        Then The user is forwarded to the New visit page
        When The user enters a description
        And Changes the date
        And Clicks Add Visit
        Then A new visit is added to the owner's page