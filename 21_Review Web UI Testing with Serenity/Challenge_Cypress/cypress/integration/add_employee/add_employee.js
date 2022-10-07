import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const homeOrangePage = require("../../pages/homeOrangePage");

Given("Navigate to login page", () => {
  cy.visit("/");
  cy.viewport(1920, 1080);
});

When("User enter username {string}", (username) => {
  homeOrangePage.typeUsername(username);
});

And("User enter password {string}", (password) => {
  homeOrangePage.typePassword(password);
});

And("Click button login", () => {
  homeOrangePage.clickLogin();
});

Then("validate title page login", () => {
  cy.url().should("contains", "/web/index.php/pim/viewEmployeeList");
});

// =======================================

And("Navigate to Add employee page", () => {
  homeOrangePage.clickAddButton();
});

When("User enter employee firstname {string}", (firstname) => {
  homeOrangePage.typeFirstname(firstname);
});

And("User enter employee lastname {string}", (lastname) => {
  homeOrangePage.typeLastname(lastname);
});

And("Click button save in personal detail", () => {
  homeOrangePage.clickSaveAddEmployee();
});

Then("Back to dashboard", () => {
  cy.visit("/");
});