// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:

import './commands'
import 'cypress-mochawesome-reporter/register';
import '../support/PageObjects/bankManagerPageObjects.cy';
import '../support/PageObjects/addCustomerPageObject.cy';
import '../support/PageObjects/openAccountPageObject.cy'
import '../support/PageObjects/customerObjectPage.cy'
import '../support/PageObjects/customerLoginpageObject.cy'
import '../support/PageObjects/transactionObject.cy'
import deposit from '../support/PageObjects/depositObject.cy'
import '../support/PageObjects/withdrawalObject.cy'
import '../support/PageObjects/nopCommRegistrationPageObj.cy'
import  registerPlaceOrder from '../support/PageObjects/nopEcomRegisPlaceOrderObj.cy'
import {registerPage} from "../support/PageObjects/naveenAutoRegisPage.cy"

// Faker
import '../support/commands'



// Alternatively you can use CommonJS syntax:
// require('./commands')
require('cypress-xpath');
import 'cypress-iframe';
// cy.faker = require('@faker-js/faker')