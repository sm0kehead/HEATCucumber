$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/CucumberFramework/featureFiles/ContactUs.feature");
formatter.feature({
  "line": 1,
  "name": "Submit data to webdriveruniversity.com using contact us form",
  "description": "",
  "id": "submit-data-to-webdriveruniversity.com-using-contact-us-form",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4438095099,
  "status": "passed"
});
formatter.before({
  "duration": 190359,
  "error_message": "java.lang.NullPointerException\r\n\tat CucumberFramework.steps.LoginSteps.setup(LoginSteps.java:27)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 4,
  "name": "Submit information using contact us form",
  "description": "",
  "id": "submit-data-to-webdriveruniversity.com-using-contact-us-form;submit-information-using-contact-us-form",
  "type": "scenario",
  "keyword": "Scenario"
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
  "name": "I enter a firstname",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter a lastname",
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
        "2"
      ],
      "line": 11
    },
    {
      "cells": [
        "3",
        "4"
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
  "status": "skipped"
});
formatter.match({
  "location": "ContactUsSteps.i_click_on_the_contact_us_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactUsSteps.i_enter_a_firstname()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactUsSteps.i_enter_a_lastname()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactUsSteps.i_enter_an_email_address()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactUsSteps.i_enter_comments(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactUsSteps.i_click_on_the_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactUsSteps.the_information_should_successfully_be_submitted_via_the_contact_us_form()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 680458685,
  "status": "passed"
});
});