module.exports = {
  test_runner: {
    type: 'mocha'
  },
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