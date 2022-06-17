/// <reference types="Cypress" />

import { getTestSelector} from "../../support/getTestSelector";
import {DEFAULT_ITEM_PER_PAGE} from "../../support/baseConst";
import paginationInput from "../../fixtures/input/pagination";
import {PRODUCT_API_LINK,PRODUCT_API_LINK_2} from '../../support/baseConst';
import { api } from '../../schemas/index.ts';
import {REQUEST_PRODUCT, checkProductAccountListElement} from "../product/product-listing.method";

const previousButton = 'pager-prev';
const nextButton = 'pager-next';
const linkNumberButton = 'pager-link';
const rootProductCard = 'cprod';
const productElement = 'cprod-cat-code"';
const rootPaginationNav = 'cpagi';

let checkDefaultPageItemPerPage =() => {
    cy.wait(5000)
    cy.get('[data-testid="link"]')
        .should('have.length', DEFAULT_ITEM_PER_PAGE);
    cy.wait(1000);
}

let checkProductListPerPage= (expected_item_perpage)=> {
    var item_perpage_text = expected_item_perpage.toString() + " items per page";

    // todo uncomment this when product load quicker
    cy.wait(1000);
    // click option to choose how many items showing per page

    cy.get('[class="c-listing-dropdown"]')
    .contains(" items per page")
    .click()

    cy.get('[data-testid="options-dropdown"]')
    .contains(item_perpage_text)
    .click()
    .wait(1000);

    cy.get('[class="'+productElement+']')
    .should('have.length', expected_item_perpage); 

}

let check12ProductListPerPage=()=>{
    checkProductListPerPage(paginationInput.default);    
}

let check24ProductListPerPage=()=>{
    checkProductListPerPage(paginationInput.twenty_four);
}

let check36ProductListPerPage=()=>{
    checkProductListPerPage(paginationInput.thirty_six);
}

let check48ProductListPerPage=()=>{
    checkProductListPerPage(paginationInput.fourty_eight);
}

let check60ProductListPerPage=()=>{
    checkProductListPerPage(paginationInput.sixty);
}

let clickNextPaginationButtonThenGoToSecondPage= ()=> {
    // click next button
    cy.get(getTestSelector([rootPaginationNav],nextButton))
    .click()
    .then(()=> {
        cy.log('check default item per page');
        // check correct project shown
        checkDefaultPageItemPerPage();   
       
    });
    

}

let goToThirdPage= ()=> {
    // click page number 3
    cy.get(getTestSelector([rootPaginationNav],linkNumberButton))
    .contains('3')
    .click()
    .then(()=> {
        // check correct project shown
        checkDefaultPageItemPerPage();

    });
   
    checkProductAccountListElement();
}

let goToSecondPage= () => {
    
    goToThirdPage();

    // click previous button
    cy.get(getTestSelector([rootPaginationNav],previousButton))
    .click()
    .then(()=> {
        // check correct project shown
        checkDefaultPageItemPerPage();
 
    });  

  
    checkProductAccountListElement();
}

export {
    checkProductListPerPage,
    clickNextPaginationButtonThenGoToSecondPage,
    goToThirdPage,
    goToSecondPage,
    checkDefaultPageItemPerPage,
    check12ProductListPerPage,
    check24ProductListPerPage,
    check36ProductListPerPage,
    check48ProductListPerPage,
    check60ProductListPerPage,
    REQUEST_PRODUCT
}