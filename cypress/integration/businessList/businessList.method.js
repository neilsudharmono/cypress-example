/// <reference types="Cypress" />

import { getTestSelector} from "../../support/getTestSelector";

// Define all the test roots
const rootUtilityMenu = 'cutil';
const search_root = 'ssear';

let checkBusinessAccountListElement = ()=>{
    // check business account name
    cy.get('[data-testid=businessName]')
    .should('be.visible');
    // check contact name
    cy.get('[data-testid=contactName]')
    .should('be.visible');
    // check contact number
    cy.get('[data-testid=contactNumber]')
    .should('be.visible');
    // check contract start date
    cy.get('[data-testid=contractStart]')
    .should('be.visible');
    // check contract end date
    cy.get('[data-testid=contractEnd]')
    .should('be.visible');
    // check row navigation
    cy.get('[data-testid=control]')
    .first()
    .click();

    cy.get('[data-testid=manu]')
    .children()
    .contains('View Account')
    .and('have.attr', 'href');

    //  cy.get(getTestSelector([rootUtilityMenu], 'manu'))
    //  .first()
    //  .children()
    //  .contains('Duplicate Account')
    //  .and('have.attr', 'href');

    //  cy.get(getTestSelector([rootUtilityMenu], 'manu'))
    //  .first()
    //  .children()
    //  .contains('Deactivate Account')
    //  .and('have.attr', 'href');

}

let checkBusinessAccountHeaderElement = ()=>{
    // check add business button
    cy.get('[data-testid=add-button]')
    .scrollIntoView()
    .should('be.visible');
    // check search
    cy.get('[data-testid=keyword-search]')
    .should('be.visible');
    // check filter elements
    cy.get('[data-testid=toggle-dropdown]')
    .should('be.visible');

    cy.get('[name=minDate]')
    .should('be.visible');

    cy.get('[name=maxDate]')
    .should('be.visible');
    // check apply button
    cy.get('[data-testid=apply-filter-btn]')
    .should('be.visible');
}

let clickApplyButton =()=>{
    cy.get('[data-testid=apply-filter-btn]')
    .click();
    cy.wait(1000);
}

export {
    checkBusinessAccountListElement,
    checkBusinessAccountHeaderElement,
    clickApplyButton
}