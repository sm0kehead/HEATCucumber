@chrom
Feature: Login into account

  Scenario Outline: login page
    Given I access "<url>"
    When I click on the loggin button
    And I enter a "<username>" username
    And I enter a "<password>" password
    And I click on the login button
    Then prompt alert "<message>"

    Examples:
      |  url                            | username | password | message |
      | http://webdriveruniversity.com/ | login1   | pass1    |    validation failed |
      | http://webdriveruniversity.com/ | webdriver   | webdriver123    |    validation succeeded |


  Scenario Outline: login page
    Given I access "<url>"

    Examples:
      |  url                            | username | password | message |
      | http://webdriveruniversity.com/ | login1   | pass1    |    validation failed |