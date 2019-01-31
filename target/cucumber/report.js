$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginInToAccount.feature");
formatter.feature({
  "line": 1,
  "name": "Login into account",
  "description": "",
  "id": "login-into-account",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "login page",
  "description": "",
  "id": "login-into-account;login-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I access \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the loggin button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I enter a \"\u003cusername\u003e\" username",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter a \"\u003cpassword\u003e\" password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "prompt alert \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
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
      "line": 12,
      "id": "login-into-account;login-page;;1"
    },
    {
      "cells": [
        "http://webdriveruniversity.com/",
        "login1",
        "pass1",
        "validation failed2"
      ],
      "line": 13,
      "id": "login-into-account;login-page;;2"
    },
    {
      "cells": [
        "http://webdriveruniversity.com/",
        "webdriver",
        "webdriver123",
        "validation succeeded"
      ],
      "line": 14,
      "id": "login-into-account;login-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4595345691,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "login page",
  "description": "",
  "id": "login-into-account;login-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I access \"http://webdriveruniversity.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the loggin button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I enter a \"login1\" username",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter a \"pass1\" password",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "prompt alert \"validation failed2\"",
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
  "duration": 951367703,
  "status": "passed"
});
formatter.match({
  "location": "LoginInToAccount.i_click_on_the_loggin_button()"
});
formatter.result({
  "duration": 189785536,
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
  "duration": 1135464355,
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
  "duration": 64815349,
  "status": "passed"
});
formatter.match({
  "location": "LoginInToAccount.i_click_on_the_login_button()"
});
formatter.result({
  "duration": 65865969,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "validation failed2",
      "offset": 14
    }
  ],
  "location": "LoginInToAccount.prompt_alert(String)"
});
formatter.result({
  "duration": 5557602,
  "error_message": "java.lang.AssertionError: expected [validationfailed2] but found [validationfailed]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:135)\r\n\tat org.testng.Assert.assertEquals(Assert.java:116)\r\n\tat org.testng.Assert.assertEquals(Assert.java:190)\r\n\tat org.testng.Assert.assertEquals(Assert.java:200)\r\n\tat CucumberFramework.Steps.login.LoginInToAccount.prompt_alert(LoginInToAccount.java:91)\r\n\tat ✽.Then prompt alert \"validation failed2\"(LoginInToAccount.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 115041992,
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : validation failed}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.35.528161 (5b82f2d2aae0ca24b877009200ced9065a772e73),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds: null\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-H7PFGS0\u0027, ip: \u0027192.168.40.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.35.528161 (5b82f2d2aae0ca..., userDataDir: C:\\Users\\ARTURW~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: e65182cdec25b989f80f008d80548ebf\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:172)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:694)\r\n\tat CucumberFramework.Steps.login.LoginInToAccount.tearDown(LoginInToAccount.java:38)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 4025472342,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "login page",
  "description": "",
  "id": "login-into-account;login-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I access \"http://webdriveruniversity.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the loggin button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I enter a \"webdriver\" username",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter a \"webdriver123\" password",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
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
  "duration": 1041215962,
  "status": "passed"
});
formatter.match({
  "location": "LoginInToAccount.i_click_on_the_loggin_button()"
});
formatter.result({
  "duration": 232297543,
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
  "duration": 1138176421,
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
  "duration": 90629023,
  "status": "passed"
});
formatter.match({
  "location": "LoginInToAccount.i_click_on_the_login_button()"
});
formatter.result({
  "duration": 74126154,
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
  "duration": 8698157,
  "status": "passed"
});
formatter.after({
  "duration": 866977124,
  "status": "passed"
});
});