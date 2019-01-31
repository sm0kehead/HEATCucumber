Feature: Submit data to webdriveruniversity.com using contact us form


  Scenario Outline: Submit information using contact us form
    Given I access webdriveruniversity
    When I click on the contact us button
    And I enter a "<1st>" firstname
    And I enter a "<2nd>" lastname
    And I enter an email address
    And I enter comments
    | 1 | 2 | ala ma kota |
    | 3 | 4 | kot ma ale  |
    When I click on the submit button
    Then the information should successfully be submitted via the contact us form

  Examples:
    | 1st | 2nd |
    | 2   | a   |
    | 3   | b   |
    | 4   | c   |
    | 5   | d   |
