/// <reference types="Cypress" />

import { getTestSelector} from "../../support/getTestSelector";
import {DEFAULT_ITEM_PER_PAGE} from "../../support/baseConst";

let clickViewAsGrid= ()=> {
    //click toggle grid view
    // cy.get(getTestSelector([rootToggleControl]))
    // .click();

    cy.get('[data-testid=text]')
    .click();

    return cy
}

let click_A_Z_SortingIcon = ()=> {
    //click sorting Ascending - Descending icon 
    cy.get('[data-testid=dir-toggle]')
    .click({force:true});

    return cy
}

export {
    clickViewAsGrid,
    click_A_Z_SortingIcon
}