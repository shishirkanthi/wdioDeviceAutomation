# wdioDeviceAutomation

Backlog:
Tag based selective scenario execution for cucumber(https://stackoverflow.com/questions/63494550/how-do-i-run-tagged-scenarios-with-cucumber-tags-in-webdriverio)

Cross browser: Switching browser or running with additional browser, need to add entry on the wdio.conf.js under capabilities

Jenkins integration:
    Common wdio.conf.js and switching

Cucumber parallel execution on browser stack:
Scenario Name mapping to the browser stack session on browser stack:

Device Automation with Appium:
    IOS:
    Android:
        Native App:
        Hybrid App:
        Web App:

Device Automation integration with Browser stack

Switching between multiple drivers using single wdio.conf.js file

Done: Screenshot capture: 
    Set the disableWebdriverScreenshotsReporting: false on the reporters section of wdio.conf.js
    prefix await to browser.takeScreenshot() as it is a async function
Generate report: Added wdio's onComplete hook on the wdio.conf.js to generate allure report

Done: parameterize values with cli:(5:01) https://www.youtube.com/watch?v=FeqBJEeVn20&list=PL6AdzyjjD5HBbt9amjf3wIVMaobb28ZYN&index=21
        Works on Bash
        Any key-value pair passed on the CLI before actual command would be set as env var for node process. 
        Eg. USERNAME=<username> ACCESSKEY=<accesskey> npm run test:local