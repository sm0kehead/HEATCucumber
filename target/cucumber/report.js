$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/CucumberFramework/featureFiles/ContactUs.feature");
formatter.feature({
  "line": 1,
  "name": "Submit data to webdriveruniversity.com using contact us form",
  "description": "",
  "id": "submit-data-to-webdriveruniversity.com-using-contact-us-form",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Submit information using contact us form",
  "description": "",
  "id": "submit-data-to-webdriveruniversity.com-using-contact-us-form;submit-information-using-contact-us-form",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I access webdriveruniversity",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on the contact us button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter a \"\u003c1st\u003e\" firstname",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter a \"\u003c2nd\u003e\" lastname",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter an email address",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter comments",
  "rows": [
    {
      "cells": [
        "1",
        "2",
        "ala ma kota"
      ],
      "line": 11
    },
    {
      "cells": [
        "3",
        "4",
        "kot ma ale"
      ],
      "line": 12
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on the submit button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the information should successfully be submitted via the contact us form",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "submit-data-to-webdriveruniversity.com-using-contact-us-form;submit-information-using-contact-us-form;",
  "rows": [
    {
      "cells": [
        "1st",
        "2nd"
      ],
      "line": 17,
      "id": "submit-data-to-webdriveruniversity.com-using-contact-us-form;submit-information-using-contact-us-form;;1"
    },
    {
      "cells": [
        "2",
        "a"
      ],
      "line": 18,
      "id": "submit-data-to-webdriveruniversity.com-using-contact-us-form;submit-information-using-contact-us-form;;2"
    },
    {
      "cells": [
        "3",
        "b"
      ],
      "line": 19,
      "id": "submit-data-to-webdriveruniversity.com-using-contact-us-form;submit-information-using-contact-us-form;;3"
    },
    {
      "cells": [
        "4",
        "c"
      ],
      "line": 20,
      "id": "submit-data-to-webdriveruniversity.com-using-contact-us-form;submit-information-using-contact-us-form;;4"
    },
    {
      "cells": [
        "5",
        "d"
      ],
      "line": 21,
      "id": "submit-data-to-webdriveruniversity.com-using-contact-us-form;submit-information-using-contact-us-form;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4574999180,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Submit information using contact us form",
  "description": "",
  "id": "submit-data-to-webdriveruniversity.com-using-contact-us-form;submit-information-using-contact-us-form;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I access webdriveruniversity",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on the contact us button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter a \"2\" firstname",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter a \"a\" lastname",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter an email address",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter comments",
  "rows": [
    {
      "cells": [
        "1",
        "2",
        "ala ma kota"
      ],
      "line": 11
    },
    {
      "cells": [
        "3",
        "4",
        "kot ma ale"
      ],
      "line": 12
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on the submit button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the information should successfully be submitted via the contact us form",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactUsSteps.i_access_webdriveruniversity()"
});
formatter.result({
  "duration": 3093051904,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_click_on_the_contact_us_button()"
});
formatter.result({
  "duration": 190953945,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 11
    }
  ],
  "location": "ContactUsSteps.i_enter_a_firstname(String)"
});
formatter.result({
  "duration": 1131571117,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "a",
      "offset": 11
    }
  ],
  "location": "ContactUsSteps.i_enter_a_lastname(String)"
});
formatter.result({
  "duration": 46462499,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_enter_an_email_address()"
});
formatter.result({
  "duration": 113363042,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_enter_comments(DataTable)"
});
formatter.result({
  "duration": 121635263,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_click_on_the_submit_button()"
});
formatter.result({
  "duration": 74393,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.the_information_should_successfully_be_submitted_via_the_contact_us_form()"
});
formatter.result({
  "duration": 89345,
  "status": "passed"
});
formatter.after({
  "duration": 34279,
  "status": "passed"
});
formatter.before({
  "duration": 3785269803,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Submit information using contact us form",
  "description": "",
  "id": "submit-data-to-webdriveruniversity.com-using-contact-us-form;submit-information-using-contact-us-form;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I access webdriveruniversity",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on the contact us button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter a \"3\" firstname",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter a \"b\" lastname",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter an email address",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter comments",
  "rows": [
    {
      "cells": [
        "1",
        "2",
        "ala ma kota"
      ],
      "line": 11
    },
    {
      "cells": [
        "3",
        "4",
        "kot ma ale"
      ],
      "line": 12
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on the submit button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the information should successfully be submitted via the contact us form",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactUsSteps.i_access_webdriveruniversity()"
});
formatter.result({
  "duration": 2723941813,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_click_on_the_contact_us_button()"
});
formatter.result({
  "duration": 172111342,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 11
    }
  ],
  "location": "ContactUsSteps.i_enter_a_firstname(String)"
});
formatter.result({
  "duration": 1134764185,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "b",
      "offset": 11
    }
  ],
  "location": "ContactUsSteps.i_enter_a_lastname(String)"
});
formatter.result({
  "duration": 79088247,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_enter_an_email_address()"
});
formatter.result({
  "duration": 95598774,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_enter_comments(DataTable)"
});
