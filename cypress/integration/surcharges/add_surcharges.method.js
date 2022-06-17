import {validInputSurcharges} from '../../fixtures/input/surcharges_admin';
import {checkSurchargeListContains,
    checkRowsElementAppear} from './surcharges_listing_element.method';

let clickAddSurcharges=()=>{
    //click add button 
    cy.get('button')
    .contains('Add a Surcharge')
    .click();

    // check the pop-up is appear
    cy.get('[data-testid=step-heading]')
    .contains('Add a Surcharge')
    .should('be.visible');
}

let filloutSurchargeDetails=(name,desc,isFreeStanding)=>{

    // fillout name, description and choose surcharge type
    cy.get('[name=name]')
    .clear()
    .type(name);

    cy.get('[name=description]')
    .type(desc);

    if (isFreeStanding)
    {
        cy.get('[name=isFreeStanding]')
        .first()
        .click({force: true});
    }
}

let checkErrorMessageAppear=()=>{

    // check error message appear in name and description
    cy.get('[name=name]')
    .next()
    .should('have.class','error-msg');

    cy.get('[name=description]')
    .next()
    .should('have.class','error-msg')
}

let clickCancelAndBack=()=>{
    // back to surcharge listing page
    cy.get('[data-testid=control-back]')
    .click();
}

let clickFinishSurcharge=()=>{
    cy.get('[data-testid=control-next]')
    .click();
}

let AddValidSurcharges=()=>{
    // Valid Positif path on adding surcharge
    clickAddSurcharges();
    filloutSurchargeDetails(validInputSurcharges.name, validInputSurcharges.desc, true);
    clickFinishSurcharge();
    cy.wait(Cypress.env('userWaitForLoading'));
    checkSurchargeListContains(validInputSurcharges.name);
}

let AddInvalidSurcharges=()=>{
    clickAddSurcharges();
    clickFinishSurcharge();
    checkErrorMessageAppear();
    clickCancelAndBack();
    checkRowsElementAppear();
}

export{
    clickAddSurcharges,
    filloutSurchargeDetails,
    checkErrorMessageAppear,
    clickCancelAndBack,
    AddValidSurcharges,
    AddInvalidSurcharges
}

