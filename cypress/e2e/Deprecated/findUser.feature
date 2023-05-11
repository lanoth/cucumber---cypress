Feature: Find user

    Scenario: User attempts to find a registered user
    Given User views the home page
    When User clicks the Find Owners button
    Then User is forwarded to the find users page
    When User enters the name Davis
    And User clicks the search button
    Then The Davis user is displayed
    When User clicks the user
    Then User is fowarded to Davis user's page

    