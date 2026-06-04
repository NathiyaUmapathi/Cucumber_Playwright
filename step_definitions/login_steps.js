const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

Given('User launch the application', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.navigateToLoginPage();
  
});

When('User enter the username and password', async function () {
  await this.loginPage.login(process.env.USERNAME, process.env.PASSWORD);
  await this.page.waitForTimeout(3000);
});

When('User click on the login button', async function () {
    await this.loginPage.clickLoginButton();
});

Then('the user should be redirected to the dashboard', async function () {
    await this.loginPage.waitForDashboard();
    expect(await this.page.isVisible(this.loginPage.dashboardSelector)).toBeTruthy();
});