import "cypress-iframe";

class CalculatorUserActions {
  inputValues(value1, operator, value2) {
    const val1 = value1;
    const val2 = value2;
    const ops = operator;
    cy.frameLoaded("#fullframe");
    cy.get("#fullframe").as("frame");

    if (val1.includes("-") && val2.includes("-")) {
      this.negativeInputs(val1);
      cy.iframe("@frame").type(ops);
      this.negativeInputs(val2);
    } else if (val1.includes("-")) {
      this.negativeInputs(val1);
      cy.iframe("@frame").type(ops);
      cy.iframe("@frame").type(val2);
    } else if (val2.includes("-")) {
      cy.iframe("@frame").type(val1);
      cy.iframe("@frame").type(ops);
      this.negativeInputs(val2);
    } else {
      this.positiveInputs(val1, ops, val2);
    }
    cy.iframe("@frame").type("{enter}");
  }

  negativeInputs(val) {
    cy.iframe("@frame").type(val.replace("-", ""));
    cy.iframe("@frame").find("#canvas").trigger("mousedown", 250, 550);
    return val;
  }

  positiveInputs(val1, ops, val2) {
    cy.iframe("@frame").type(val1);
    cy.iframe("@frame").type(ops);
    cy.iframe("@frame").type(val2);
    return val1, ops, val2;
  }
}
export default CalculatorUserActions;
