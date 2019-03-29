// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

describe('counter testing', () => {
  describe('press plus button', () => {

    it('increments counter', (browser) => {
      browser
        .url(process.env.VUE_DEV_SERVER_URL)
        .click("button#plus-btn")
        .expect.element('h1').text.to.equal('1')
      browser.end()
    })
  })

  describe('press minus button', () => {

    it('decrements counter', (browser) => {
      browser
        .url(process.env.VUE_DEV_SERVER_URL)
        .click("button#minus-btn")
        .expect.element('h1').text.to.equal('-1')
      browser.end()
    })
  })
})
