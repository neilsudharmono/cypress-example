const { chromium } = require("playwright-chromium");

module.exports.DevLogin = async function DevLogin(options = {}) {
    validateOptions(options)

    const browser = await chromium.launch({ headless: !!options.headless })
    const page = await browser.newPage()
    await page.goto(options.loginUrl)
    //await page.setDefaultNavigationTimeout(100000); 
    

    await typeEmail({ page, options })
    await typePassword({ page, options })

    const cookies = await getCookies({ page, options })

    await finalizeSession({ page, browser, options })

    return {
        cookies
    }
}

function validateOptions(options) {
    if (!options.username || !options.password) {
        throw new Error('Username or Password missing for login')
    }
    if (!options.loginUrl) {
        throw new Error('Login Url missing')
    }
    if (!options.postLoginSelector) {
        throw new Error('Post login selector missing')
    }
}

async function typeEmail({ page, options } = {}) {
    await page.waitForSelector('input[id=inputEmail]', { visible: true, delay: 2000 })
    await page.type('input[id=inputEmail]', options.username, { delay: 50 })
    await page.click('input[type=submit]')
}

async function typePassword({ page, options } = {}) {
    await page.waitForSelector('input[id=inputPassword3]', { visible: true, delay: 2000 })
    await page.type('input[id=inputPassword3]', options.password, { delay: 50 })
    await page.click('input[type=submit]')
}