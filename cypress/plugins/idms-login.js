const puppeteer = require('puppeteer')
//const { puppeteer } = require("playwright-chromium");

module.exports.IDMSLogin = async function IDMSLogin(options = {}) {
    validateOptions(options)

    const browser = await puppeteer.launch({ headless: !!options.headless })
    const page = await browser.newPage()
    await page.goto(options.loginUrl,{waitUntil: 'load', timeout: 0})
    //await page.setDefaultNavigationTimeout(80000); 
    

    await typeEmail({ page, options })
    await typePassword({ page, options })

    if(await page.waitForSelector('input[value=Continue]', { visible: true, delay:2000, timeout: 0 }) !== null)
    {
        await page.click('input[value=Continue]')
    }
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
    await page.waitForSelector('input[id=currentPwdId]', { visible: true, delay: 2000 })
    await page.type('input[id=currentPwdId]', options.password, { delay: 50 })
    await page.click('input[type=submit]')
}

async function getCookies({ page, options } = {}) {
    await page.waitForSelector(options.postLoginSelector, { visible: true, delay: 2000 })

    const cookies = options.getAllBrowserCookies
        ? await getCookiesForAllDomains(page)
        : await page.cookies(options.loginUrl)

    if (options.logs) {
        console.log(cookies)
    }

    return cookies
}

async function getCookiesForAllDomains(page) {
    const cookies = await page._client.send('Network.getAllCookies', {})
    return cookies.cookies
}

async function finalizeSession({ page, browser, options } = {}) {
    await browser.close()
}