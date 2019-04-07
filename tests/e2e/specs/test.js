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

describe('delimiters to counter', () => {
  it('decrements counter', (browser) => {
    const client = browser.url(process.env.VUE_DEV_SERVER_URL)

    const waitForCountUp = (andThen) => {
      client
        .click("button#plus-btn")
        .element('xpath', '//*[@id="app"]/div/h1[text()="999"]', (event) => {
          if (event.status < 0) {
            waitForCountUp(andThen)
          } else {
            andThen()
          }
        })
    }

    waitForCountUp(() => {
      client
        .click("button#plus-btn")
        .expect.element('h1').text.to.equal('1,000')
      browser.end()
    })
  })
})
