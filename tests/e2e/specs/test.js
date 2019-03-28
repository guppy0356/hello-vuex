// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'increment counter': browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .click("button#plus-btn")
      .assert.containsText('h1', '1')
      .end()
  },
  "decrement counter": browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .click("button#minus-btn")
      .assert.containsText('h1', '-1')
      .end()
  }
}
