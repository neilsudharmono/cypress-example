/// <reference types="Cypress" />

import { getTestSelector} from "../../support/getTestSelector";
import {DEFAULT_ITEM_PER_PAGE} from "../../support/baseConst";

const previousButton = 'pager-prev';
const nextButton = 'pager-next';
const linkNumberButton = 'pager-link';
const rootBusinessCard = 'cbuit';
const rootPaginationNav = 'cpagi';

let checkDefaultPageItemPerPage =() => {
    cy.get(getTestSelector([rootBusinessCard], 'businessName')
        ,{timeout:Cypress.env('asyncTimeout')})  
        .should('have.length', DEFAULT_ITEM_PER_PAGE);
    cy.wait(1000);
}

let checkBusinessListPerPage= (expected_item_perpage, list_view=true)=> {
    var item_perpage_text = expected_item_perpage.toString() + " items per page";

    // click option to choose how many items showing per page
    cy.get(getTestSelector(['clist']))
    .children()
    .contains(item_perpage_text)
    .click({force:true})
    .then(() => {
        cy.get(getTestSelector(['cbuit'], 'businessName'))
        .should('have.length', expected_item_perpage); 
    })      
}

let clickNextPaginationButtonThenGoToSecondPage= ()=> {
    // click next button
    cy.get(getTestSelector([rootPaginationNav],nextButton))
    .click()
    .then(()=> {
        // check correct project shown
        checkDefaultPageItemPerPage();        

        cy.get(getTestSelector([rootBusinessCard], 'businessName')
        ,{timeout:Cypress.env('asyncTimeout')})   
        .should('have.contain', 'SECOND PAGE') 
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

        cy.get(getTestSelector([rootBusinessCard], 'businessName')
        ,{timeout:Cypress.env('asyncTimeout')})   
        .should('have.contain', 'THIRD PAGE') 
    });
    //return cy
}

let goToSecondPage= () => {
    
    goToThirdPage();

    // click previous button
    cy.get(getTestSelector([rootPaginationNav],previousButton))
    .click()
    .then(()=> {
        // check correct project shown
        checkDefaultPageItemPerPage();

        cy.get(getTestSelector([rootBusinessCard], 'businessName')
        ,{timeout:Cypress.env('asyncTimeout')})  
        .should('have.contain', 'SECOND PAGE') 
 
    });  
}

export {
    checkBusinessListPerPage,
    clickNextPaginationButtonThenGoToSecondPage,
    goToThirdPage,
    goToSecondPage,
    checkDefaultPageItemPerPage
}