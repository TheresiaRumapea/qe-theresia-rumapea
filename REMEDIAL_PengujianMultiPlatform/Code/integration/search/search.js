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

Given('User enter keyword want to Search {string}', (keywordsearch) => {
    blibiPage.typeKeyword(keywordsearch)
})  
When('Click button search' , () => {
    blibiPage.clickSearchButton()
})