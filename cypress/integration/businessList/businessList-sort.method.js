/// <reference types="Cypress" />

import { getTestSelector} from "../../support/getTestSelector";
import {DEFAULT_ITEM_PER_PAGE} from "../../support/baseConst";
//import {chooseSortingBySortItem} from '../ProjectList/projectlist.method'
import {checkDefaultPageItemPerPage} from './businessList-pagination.method'

// Define all the test roots
const rootSortBy = 'clist';
const rootTileProjectCard = 'cbuit';

let chooseSortingBySortItem = (keyword) => {
    // chose sort by dropdown value
    cy.get('[data-testid=options-dropdown]')
    .contains(keyword)
    .click({force:true});

    cy.get(getTestSelector([rootSortBy],'display-text'))
    .contains(keyword)
    .should('be.visible')

    return cy
        .log(`Searching for ${keyword}`)

}

let checkSortByBusinessAccountNameDescending = () => {  

    // click on the sort button    
    // click descending button

    // cy.get('[id=sort-name-down]')
    // .click({force:true}).then(() => {
        
    //     chooseSortingBySortItem('Sorting by business account name').then(() => {
    //         checkDefaultPageItemPerPage();


    //         // assert that first result is correct 
    //         cy.get(getTestSelector([rootTileProjectCard], 'businessName')
    //         ,{timeout:Cypress.env('asyncTimeout')})   
    //         .first()
    //         .should('be.contain.text', 'ZZZ');
    //     }) 
    // })

    // click on the sort button    
    chooseSortingBySortItem('Sorting by business account name').then(() => {
        checkDefaultPageItemPerPage();
        
        // click descending button
        cy.get('[id=sort-name-down]')
        .click({force:true});

        // assert that first result is correct 
        cy.get(getTestSelector([rootTileProjectCard], 'businessName')
        ,{timeout:Cypress.env('asyncTimeout')})   
        .first()
        .should('be.contain.text', 'ZZZ');
    }) 
}

let checkSortByContractStartDateAscending = () => {  

    // click on the sort button    
    chooseSortingBySortItem('Sorting by contract start date').then(() => {
        checkDefaultPageItemPerPage();

        // assert that first result is correct 
        cy.get(getTestSelector([rootTileProjectCard], 'businessName')
        ,{timeout:Cypress.env('asyncTimeout')})   
        .first()
        .should('be.contain.text', 'newest start date');
    }) 

}

let checkSortByContractEndDAteAscending = () => {  

    // click on the sort button    
    chooseSortingBySortItem('Sorting by contract end date').then(() => {
        checkDefaultPageItemPerPage();

        // assert that first result is correct 
        cy.get(getTestSelector([rootTileProjectCard], 'businessName')
        ,{timeout:Cypress.env('asyncTimeout')})   
        .first()
        .should('be.contain.text', 'nearest contract end date');
    }) 

}

let checkSortByBusinessAccountNameAscending = () => {  

    // click on the sort button    
    chooseSortingBySortItem('Sorting by business account name');

    
        checkDefaultPageItemPerPage();

        // assert that first result is correct 
        cy.get(getTestSelector([rootTileProjectCard], 'businessName')
        ,{timeout:Cypress.env('asyncTimeout')})   
        .first()
        .should('be.contain.text', 'AAA');
    

}

let checkSortByContractStartDateDescending = () => {  

    // click on the sort button    
    chooseSortingBySortItem('Sorting by contract start date');
    // click descending button
    cy.get('[data-testid=dir-toggle]')
    .click({force:true}).then(() => {
        checkDefaultPageItemPerPage();

        // assert that first result is correct 
        cy.get(getTestSelector([rootTileProjectCard], 'businessName')
        ,{timeout:Cypress.env('asyncTimeout')})   
        .first()
        .should('be.contain.text', 'far start date');
    }) 

}

let checkSortByContractEndDAteDescending = () => {  

    // click on the sort button    
    chooseSortingBySortItem('Sorting by contract end date');

    // click descending button
    cy.get('[data-testid=dir-toggle]')
    .click({force:true}).then(() => {
        checkDefaultPageItemPerPage();

        // assert that first result is correct 
        cy.get(getTestSelector([rootTileProjectCard], 'businessName')
        ,{timeout:Cypress.env('asyncTimeout')})   
        .first()
        .should('be.contain.text', 'far away end date');
    }) 

}

export{
    checkSortByBusinessAccountNameAscending,
    checkSortByContractEndDAteAscending,
    checkSortByContractStartDateAscending,
    checkSortByBusinessAccountNameDescending,
    checkSortByContractEndDAteDescending,
    checkSortByContractStartDateDescending,
}