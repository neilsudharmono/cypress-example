/// <reference types="Cypress" />

import { api } from '../../schemas/index.ts';
import {PRODUCT_API_LINK,PRODUCT_API_LINK_2} from '../../support/baseConst';
const REQUEST_PRODUCT = "{'count':true,'search':'','page':1,'pageSize':12,'sortBy':'commercialReference','sortDir':'desc'}";

let checkProductAccountListElement = ()=>{
    // check Product account name
    cy.get('[data-testid="commercialReference"]')
    .should('be.visible');
    // check contact name
    cy.get('[data-testid=colour]')
    .should('be.visible');
    // check contact number
    cy.get('[data-testid=style]')
    .should('be.visible');
    // check contract start date
    cy.get('[data-testid=description]')
    .should('be.visible');
    // check contract end date
    cy.get('[data-testid=category]')
    .should('be.visible');
    
}

let checkProductAccountHeaderElement = ()=>{
    // check add Product button
    // cy.get('[data-testid=importProductBtn]')
    // .should('be.visible');
    // check search
    cy.get('[data-testid=keyword-search]')
    .should('be.visible');
    // check filter elements
    cy.get('[data-testid=toggle-dropdown]')
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


let checkDataLoadedCorrectly=()=>{

        cy.setCookies();
        cy.request('POST',PRODUCT_API_LINK_2,
        {
            "search": "",
            "count": true,
            "pageSize": 12,
            "page": 1,
            "sortBy": ["commercialReference"],
            "sortDir": "desc",
            "filters": [
                {"field": "isActive", "values": ["true"], "operator": "eq", "dataType": "boolean"}
                
            ]
        })
        .its('body')
        .its('items')
        .then(item => {
            if (item.length > 0)
            {
                api.assertSchema('ProductsResponse', '1.0.0');
            }
    });



   
}

export {
    checkProductAccountListElement,
    checkProductAccountHeaderElement,
    clickApplyButton,
    checkDataLoadedCorrectly,
    REQUEST_PRODUCT
}