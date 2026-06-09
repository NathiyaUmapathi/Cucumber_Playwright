const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

setDefaultTimeout(60000);

Before(async function () {

    const isCI = process.env.CI === 'true';

    this.browser = await chromium.launch({
        headless: isCI ? true : false
    });

    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
});

