$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginInToAccount.feature");
formatter.feature({
  "line": 2,
  "name": "Login into account",
  "description": "",
  "id": "login-into-account",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@chrom"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "login page",
  "description": "",
  "id": "login-into-account;login-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I access \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on the loggin button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter a \"\u003cusername\u003e\" username",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter a \"\u003cpassword\u003e\" password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "prompt alert \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "login-into-account;login-page;",
  "rows": [
    {
      "cells": [
        "url",
        "username",
        "password",
        "message"
      ],
      "line": 13,
      "id": "login-into-account;login-page;;1"
    },
    {
      "cells": [
        "http://webdriveruniversity.com/",
        "login1",
        "pass1",
        "validation failed"
      ],
      "line": 14,
      "id": "login-into-account;login-page;;2"
    },
    {
      "cells": [
        "http://webdriveruniversity.com/",
        "webdriver",
        "webdriver123",
        "validation succeeded"
      ],
      "line": 15,
      "id": "login-into-account;login-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4529729760,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "login page",
  "description": "",
  "id": "login-into-account;login-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@chrom"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I access \"http://webdriveruniversity.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on the loggin button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter a \"login1\" username",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter a \"pass1\" password",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "prompt alert \"validation failed\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://webdriveruniversity.com/",
      "offset": 10
    }
  ],
  "location": "LoginInToAccount.i_access(String)"
});
formatter.result({
  "duration": 1164596116,
  "status": "passed"
});
formatter.match({
  "location": "LoginInToAccount.i_click_on_the_loggin_button()"
});
formatter.result({
  "duration": 177634988,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login1",
      "offset": 11
    }
  ],
  "location": "LoginInToAccount.i_enter_a_username(String)"
});
formatter.result({
  "duration": 1133180657,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pass1",
      "offset": 11
    }
  ],
  "location": "LoginInToAccount.i_enter_a_password(String)"
});
formatter.result({
  "duration": 70766195,
  "status": "passed"
});
formatter.match({
  "location": "LoginInToAccount.i_click_on_the_login_button()"
});
formatter.result({
  "duration": 62165025,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "validation failed",
      "offset": 14
    }
  ],
  "location": "LoginInToAccount.prompt_alert(String)"
});
formatter.result({
  "duration": 8665718,
  "status": "passed"
});
formatter.after({
  "duration": 845884942,
  "status": "passed"
});
formatter.before({
  "duration": 3529239639,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "login page",
  "description": "",
  "id": "login-into-account;login-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@chrom"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I access \"http://webdriveruniversity.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on the loggin button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter a \"webdriver\" username",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter a \"webdriver123\" password",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "prompt alert \"validation succeeded\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://webdriveruniversity.com/",
      "offset": 10
    }
  ],
  "location": "LoginInToAccount.i_access(String)"
});
formatter.result({
  "duration": 808435974,
  "status": "passed"
});
formatter.match({
  "location": "LoginInToAccount.i_click_on_the_loggin_button()"
});
formatter.result({
  "duration": 162797550,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver",
      "offset": 11
    }
  ],
  "location": "LoginInToAccount.i_enter_a_username(String)"
});
formatter.result({
  "duration": 1135037205,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver123",
      "offset": 11
    }
  ],
  "location": "LoginInToAccount.i_enter_a_password(String)"
});
formatter.result({
  "duration": 74568273,
  "status": "passed"
});
formatter.match({
  "location": "LoginInToAccount.i_click_on_the_login_button()"
});
formatter.result({
  "duration": 64539044,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "validation succeeded",
      "offset": 14
    }
  ],
  "location": "LoginInToAccount.prompt_alert(String)"
});
formatter.result({
  "duration": 7078661,
  "status": "passed"
});
formatter.after({
  "duration": 859582778,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "login page",
  "description": "",
  "id": "login-into-account;login-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I access \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "login-into-account;login-page;",
  "rows": [
    {
      "cells": [
        "url",
        "username",
        "password",
        "message"
      ],
      "line": 22,
      "id": "login-into-account;login-page;;1"
    },
    {
      "cells": [
        "http://webdriveruniversity.com/",
        "login1",
        "pass1",
        "validation failed"
      ],
      "line": 23,
      "id": "login-into-account;login-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3711019133,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "login page",
  "description": "",
  "id": "login-into-account;login-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@chrom"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I access \"http://webdriveruniversity.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://webdriveruniversity.com/",
      "offset": 10
    }
  ],
  "location": "LoginInToAccount.i_access(String)"
});
formatter.result({
  "duration": 835369240,
  "status": "passed"
});
formatter.after({
  "duration": 2955339264,
  "status": "passed"
});
});