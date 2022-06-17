/// <reference types="Cypress" />

import { getTestSelector} from "../../support/getTestSelector";
import {checkDataLoadedCorrectly, clickApplyButton, REQUEST_PRODUCT, checkProductAccountListElement} from "./product-listing.method";
import {PRODUCT_API_LINK,PRODUCT_API_LINK_2} from '../../support/baseConst';
import { api } from '../../schemas/index.ts';

// Define all the test roots
const rootTileProductCard = 'cprod';
const activeParam = "?searchParams={'count':true,'search':'','page':1,'pageSize':12,'sortBy':'commercialReference','sortDir':'desc','filters':[{'field':'isActive','values':[true],'operator':'eq','dataType':'boolean'}]}";
const inactiveParam = "?searchParams={'count':true,'search':'','page':1,'pageSize':12,'sortBy':'commercialReference','sortDir':'desc','filters':[{'field':'isActive','values':[false],'operator':'eq','dataType':'boolean'}]}";
const allParam = "?searchParams={'count':true,'search':'','page':1,'pageSize':12,'sortBy':'commercialReference','sortDir':'desc','filters':[]}";

let filterByProductStatus=(keyword)=>{
    cy.get('[data-testid=toggle-dropdown]')
    .click();

    cy.get("[data-testid=multiple-options-dropdown]")
    .contains(keyword)
    .click({force:true});

    clickApplyButton();
    return cy
        .log(`Searching for ${keyword}`)
}

let filterByActiveProductStatus=()=>{
    filterByProductStatus('Active');
  
            checkProductAccountListElement();

    
}

let filterByInactiveProductStatus=()=>{
    
    filterByProductStatus('Inactive');
  
            checkProductAccountListElement();
       
}

let filterByAllProductStatus=()=>{
    filterByProductStatus('All Products');
  
            checkProductAccountListElement();
       
}

let checkFilterResult=(expected_Result)=> {
    cy.get(getTestSelector([rootTileProductCard], 'catCode'))   
    .should('have.contain', expected_Result)
}

let checkInvalidResult=()=>{
    cy.get('[data-testid=listing-container]')   
    .first()
    .should('have.contain', '0 Results Found')

    return true;
}

export {
    filterByActiveProductStatus,
    filterByInactiveProductStatus,
    filterByAllProductStatus,
    checkFilterResult,
    checkInvalidResult
}