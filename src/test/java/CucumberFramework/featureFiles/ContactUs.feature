Feature: Submit data to webdriveruniversity.com using contact us form


  Scenario: Submit information using contact us form
    Given I access webdriveruniversity
    When I click on the contact us button
    And I enter a firstname
    And I enter a lastname
    And I enter an email address
    And I enter comments
    | 1 | 2 |
    | 3 | 4 |
    When I click on the submit button
    Then the information should successfully be submitted via the contact us form

