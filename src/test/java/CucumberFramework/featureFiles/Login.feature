Feature: Login into account
  Existing user should bo able login to account using correct credentials

  Scenario: Login into account correct credentials
    Given User navigates to HEAT website
    And User clicks on the login button on homepage
    And User enters a valid username
    And User enters a valid password
    When User clicks on the login button
    Then User should be taken to the successful login page
