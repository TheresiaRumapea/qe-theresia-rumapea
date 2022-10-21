import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const blibiPage = require("../../pages/blibiPage");

Given('Navigate to login page', () => {
  cy.visit('/')
  cy.viewport(1920, 1080)
})

When('User enter email {string}', (id) => {
  blibiPage.typeEmail(id)
})

And('User enter password {string}', (password) => {
  blibiPage.typePassword(password)
})

Then('Click button login' , () => {
  blibiPage.clickButtonLogin()
})

// =================Edit Profile=================================
// =================Scenario: Success edit profile - Successfully Edit Last Name ===========
Given('Navigate to open profile', () => {
  blibiPage.clickIconProfile()
})
When('Click button view profile', () => {
  blibiPage.clickViewProfile()
})
And('Click button edit profile', () => {
  blibiPage.clickEditProfile()
})
And('Enter last name {string}', (lastname) => {
  blibiPage.typeLastname(lastname)
})
Then('Click buttom update account', () => {
  blibiPage.clickUpdateAccount()
})
// ===============================================
// =================Scenario: Success edit profile - Unsuccessfully Paypal Email ===========
// Given('Navigate to open profile', () => {
//   blibiPage.clickIconProfile()
// })
// When('Click button view profile', () => {
//   blibiPage.clickViewProfile()
// })
// And('Click button edit profile', () => {
//   blibiPage.clickEditProfile()
// })
// And('Enter paypal email {string}', (payPalEmail) => {
//   blibiPage.typePaypalEmail(payPalEmail)
// })
// Then('Click buttom update account', () => {
//   blibiPage.clickUpdateAccount()
// })



