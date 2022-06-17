/// <reference types="Cypress" />

import { getTestSelector} from "../../support/getTestSelector";
import {DEFAULT_ITEM_PER_PAGE} from "../../support/baseConst";
//import {chooseSortingBySortProduct} from '../ProjectList/projectlist.method'
import {checkDefaultPageItemPerPage} from "./product-pagination.method"
import { REQUEST_PRODUCT, checkProductAccountListElement } from './product-listing.method';
import { api } from '../../schemas/index.ts';
import {PRODUCT_API_LINK,PRODUCT_API_LINK_2} from '../../support/baseConst';

// Define all the test roots
const rootSortBy = 'clist';
const rootTileProductCard = 'cprod';

let chooseSortingBySortProduct = (keyword) => {
    // chose sort by dropdown value

    cy.get('[class="c-listing-dropdown"]')
    .click()

    cy.get('[data-testid=options-dropdown]')
    .contains(keyword)
    .click({force:true});

    cy.get(getTestSelector([rootSortBy],'display-text'))
    .contains(keyword)
    .should('be.visible')

    return cy
        .log(`Searching for ${keyword}`)

}

let checkSortByCRAscending = () => {  

    // click on the sort button    
    chooseSortingBySortProduct('Sorting by Commercial Reference').then(() => {
        checkDefaultPageItemPerPage();
        
       
        checkProductAccountListElement();
    }) 
}

let checkSortByCRDescending = () => {  
    // click on the sort button    
    chooseSortingBySortProduct('Sorting by Commercial Reference');
    // click descending button
    cy.get('[data-testid=dir-toggle]')
    .click({force:true}).then(() => {
        checkDefaultPageItemPerPage();
        
       
        checkProductAccountListElement();
    }) 
}

let checkSortByCatAscending = () => {  

    // click on the sort button    
    chooseSortingBySortProduct('Sorting by Category').then(() => {
        checkDefaultPageItemPerPage();
        
      
        checkProductAccountListElement();
    }) 
}

let checkSortByCatDescending = () => {  
    // click on the sort button    
    chooseSortingBySortProduct('Sorting by Category');
    // click descending button
    cy.get('[data-testid=dir-toggle]')
    .click({force:true}).then(() => {
        checkDefaultPageItemPerPage();

        checkProductAccountListElement();
    }) 
}

let checkSortByCatCodeAscending = () => {  

    // click on the sort button    
    chooseSortingBySortProduct('Sorting by Cat Code').then(() => {
        checkDefaultPageItemPerPage();
        
      
        checkProductAccountListElement();
    }) 
}

let checkSortByCatCodeDescending = () => {  
    // click on the sort button    
    chooseSortingBySortProduct('Sorting by Cat Code');
    // click descending button
    cy.get('[data-testid=dir-toggle]')
    .click({force:true}).then(() => {
        checkDefaultPageItemPerPage();

       
        checkProductAccountListElement();
    }) 
}


let checkProductSortingSchema = () => {  
    cy.setCookies();  
    cy.request( 'POST',PRODUCT_API_LINK_2,{
        "search": "",
        "count": true,
        "pageSize": 12,
        "page": 1,
        "sortBy": ["commercialReference"],
        "sortDir": "asc",
        "filters": [
            
        ]
    
})
.its('body')
.its("0")
.then(api.assertSchema('ProductsResponse', '1.0.0')); 

cy.request({
    method : 'POST',
    url : PRODUCT_API_LINK_2,
    body : {
        "search": "",
        "count": true,
        "pageSize": 12,
        "page": 1,
        "sortBy": ["commercialReference"],
        "sortDir": "desc",
        "filters": [
            
        ]
    }
})
.its('body')
.its("0")
.then(api.assertSchema('ProductsResponse', '1.0.0'));  

cy.request({
    method : 'POST',
    url : PRODUCT_API_LINK_2,
    body : {
        "search": "",
        "count": true,
        "pageSize": 12,
        "page": 1,
        "sortBy": ["StdCategory"],
        "sortDir": "asc",
        "filters": [
            
        ]
    }
})
.its('body')
.its("0")
.then(api.assertSchema('ProductsResponse', '1.0.0')); 


cy.request({
    method : 'POST',
    url : PRODUCT_API_LINK_2,
    body : {
        "search": "",
        "count": true,
        "pageSize": 12,
        "page": 1,
        "sortBy": ["StdCategory"],
        "sortDir": "desc",
        "filters": [
            
        ]
    }
})
.its('body')
.its("0")
.then(api.assertSchema('ProductsResponse', '1.0.0'));  

cy.request({
    method : 'POST',
    url : PRODUCT_API_LINK_2,
    body : {
        "search": "",
        "count": true,
        "pageSize": 12,
        "page": 1,
        "sortBy": ["CatCode"],
        "sortDir": "asc",
        "filters": [
            
        ]
    }
})
.its('body')
.its("0")
.then(api.assertSchema('ProductsResponse', '1.0.0')); 

cy.request({
    method : 'POST',
    url : PRODUCT_API_LINK_2,
    body : {
        "search": "",
        "count": true,
        "pageSize": 12,
        "page": 1,
        "sortBy": ["CatCode"],
        "sortDir": "desc",
        "filters": [
            
        ]
    }
})
.its('body')
.its("0")
.then(api.assertSchema('ProductsResponse', '1.0.0')); 
}

export {
    checkSortByCRAscending,
    checkSortByCRDescending,
    checkSortByCatAscending,
    checkSortByCatDescending,
    checkSortByCatCodeAscending,
    checkSortByCatCodeDescending,
    checkProductSortingSchema
}