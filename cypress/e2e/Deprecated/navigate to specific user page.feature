Feature: Navigate to users page

    Scenario: User navigates to Betty Davis page
    Given User is located on the find owners page
    When The user enters the name <Davis>
    And Searches for the name
    Then <Betty Davis> is displayed in the overview
    When The user clicks <Betty Davis>
    Then The user is forwarded to <Betty Davis> page