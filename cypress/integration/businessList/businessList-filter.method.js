/// <reference types="Cypress" />

import { getTestSelector} from "../../support/getTestSelector";

// Define all the test roots
const rootTileProjectCard = 'cbuit';

let filterByBusinessStatus=(keyword)=>{
    cy.get('[data-testid=multiple-options-dropdown]')
    .contains(keyword)
    .click({force:true});

    return cy
        .log(`Searching for ${keyword}`)
}

let filterByContractDateRange=(date_from,date_to)=>{
    // set date from
    cy.get('[name="minDate"]')
    .clear()
    .type(date_from);

    cy.get('[name="maxDate"]')
    .clear()
    .type(date_to);
}

let filterByBusinessType=(keyword)=>{
    cy.get('[data-testid=select-by-account-type]')
    .click();

    cy.get('[data-testid=multiple-options-option]')
    .contains(keyword)
    .click({force:true});

    return cy
        .log(`Searching for ${keyword}`)
}

let checkFilterResult=(expected_Result)=> {
    cy.get(getTestSelector([rootTileProjectCard], 'businessName'))   
    .should('have.contain', expected_Result)
}

let checkInvalidResult=()=>{
    cy.get('[data-testid=listing-container]')   
    .first()
    .should('have.contain', '0 Results Found')
}

export{
    filterByBusinessStatus,
    filterByContractDateRange,
    checkFilterResult,
    checkInvalidResult,
    filterByBusinessType
}