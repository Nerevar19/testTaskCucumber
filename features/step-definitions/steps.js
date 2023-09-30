import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';



Given('User is located on the main page of saucedemo website', async () => {
    await LoginPage.open();
});

When('User clicks the "Login" button', async ( ) => {
    await LoginPage.clickLoginButton()
});

Then('User should see the "Epic sadface: Username is required" error message', async () => {

    await expect(await LoginPage.errorMesage).toHaveTextContaining('Epic sadface: Username is required');
});

