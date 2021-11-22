# wdioDeviceAutomation

Cross browser: Switching browser or running with additional browser, need to add entry on the wdio.conf.js under capabilities
Screenshot capture: 
    Set the disableWebdriverScreenshotsReporting: false on the reporters section of wdio.conf.js
    prefix await to browser.takeScreenshot() as it is a async function