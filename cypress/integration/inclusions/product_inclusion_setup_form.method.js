import inclusionValue from '../../fixtures/input/inclusion-value-input'

let setIncludedValueWithValidInput=()=>{
    cy.get('[data-testid=quantity]').first()
    .clear({force: true})
    .type(inclusionValue.validInput,{force: true});
}

let setIncludedValueWithInvalidInput=()=>{
    cy.get('[data-testid=quantity]').first()
    .clear({force: true})
    .type(inclusionValue.invalidInput,{force: true});
}

let clickSetValue=()=>{
    cy.get("[data-testid=productCheckbox]").first()
    .click();
}

let clickYesButton=()=>{
    cy.get("[data-testid=btn-products-yes]")
    .click();
}

let clickNoButton=()=>{
    cy.get("[data-testid=btn-products-back]")
    .click();
}

let checkInclusionValueLabel =()=>{
    cy.get('.cprim-detail')
    .first()
    .contains(inclusionValue.validInputText);
}

let checkErrorMessage =()=>{
    cy.get(".error-msg")
    .should('be.visible')
    .contains('Please set an included value');
}

export{
    setIncludedValueWithValidInput,
    setIncludedValueWithInvalidInput,
    clickSetValue,
    clickYesButton,
    clickNoButton,
    checkInclusionValueLabel,
    checkErrorMessage
}