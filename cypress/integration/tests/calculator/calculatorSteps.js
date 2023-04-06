import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import CalculatorUserActions from "../../userAction/calculatorUserActions.js";
const userAction = new CalculatorUserActions();

Given("user open the calculator page", function () {
  cy.visit("https://www.online-calculator.com/full-screen-calculator/");
});

When(
  "user enter {string} {string} and {string}",
  (value1, operator, value2) => {
    userAction.inputValues(value1, operator, value2);
    cy.wait(4000);
  }
);

Then("user should be able to see {string}", (output) => {
  cy.compareSnapshot(output, { capture: "fullPage", errorThreshold: 0.0 });
});
