module.exports = {
  test_settings: {
    chrome: {
      desiredCapabilities: {
        "chromeOptions" : {
          "args" : ["headless", "no-sandbox", "disable-gpu"]
        }
      }
    }
  }
}