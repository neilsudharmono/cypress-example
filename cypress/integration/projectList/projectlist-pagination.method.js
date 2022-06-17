import { getTestSelector} from "../../support/getTestSelector";
import { checkDefaultPageItemPerPage} from "./projectlist.method";
import expectedProjectResult from '../../fixtures/input/project-input'

import {testingInput,inputInProgress} from "../Project/project_addnew.method";
const rootListing = 'clist';
const rootTileProjectCompact = 'ctil2';
const previousButton = 'pager-prev';
const nextButton = 'pager-next';
const linkNumberButton = 'pager-link';
const rootTileProjectCard = 'ctil1';
const rootPaginationNav = 'cpagi';
const rootProject = 'sproj';
const count_total = 'count-total';

let checkProjectListPerPage= (expected_item_perpage, list_view=true)=> {
    var item_perpage_text = expected_item_perpage.toString() + " items per page";

    // click option to choose how many items showing per page
    cy.get(getTestSelector([rootListing]))
    .children()
    .contains(item_perpage_text)
    .click({force:true})
    .then(() => {
        if (list_view)
        {
            cy.get(getTestSelector([rootTileProjectCompact], 'name'))
            .then((list_length) => {
                let actual_length = list_length.length;
                expect(actual_length).to.be.lessThan(expected_item_perpage+1)
            })
            //.should('have.length', expected_item_perpage); 
        } else {
            
            cy.get(getTestSelector([rootTileProjectCard], 'name'))
            .then((list_length) => {
                let actual_length = list_length.length;
                expect(actual_length).to.be.lessThan(expected_item_perpage+1)
            })
           // cy.get(getTestSelector([rootTileProjectCard], 'name'))
           // .should('have.length', expected_item_perpage); 
        }
    })      
}

let clickNextPaginationButtonThenGoToSecondPage= ()=> {
    // click next button
    cy.get(getTestSelector([rootPaginationNav],nextButton))
    .click()
    .then(()=> {
        // check correct project shown
        checkDefaultPageItemPerPage();        

        /*cy.get(getTestSelector([rootTileProjectCard], 'name')
        ,{timeout:Cypress.env('asyncTimeout')})   
        .should('have.contain', expectedProjectResult.project_second_page) */

        cy.get('[class="cpagi-page is-selected"]')
        .contains('2')
        .should('exist')

    });
}

let goToThirdPage= ()=> {
    // click page number 3
    cy.get(getTestSelector([rootPaginationNav],linkNumberButton))
    .contains('3')
    .click()
    .then(()=> {
        // check correct project shown
        //checkDefaultPageItemPerPage();

       /* cy.get(getTestSelector([rootTileProjectCard], 'name')
        ,{timeout:Cypress.env('asyncTimeout')})   
        .should('have.contain', expectedProjectResult.project_third_page) */

        cy.get('[class="cpagi-page is-selected"]')
        .contains('3')
        .should('exist')
    });
}

let goToSecondPage= () => {
    
    goToThirdPage();

    // click previous button
    cy.get(getTestSelector([rootPaginationNav],previousButton))
    .click()
    .then(()=> {
        // check correct project shown
        checkDefaultPageItemPerPage();

        /*cy.get(getTestSelector([rootTileProjectCard], 'name')
        ,{timeout:Cypress.env('asyncTimeout')})  
        .should('have.contain', expectedProjectResult.project_second_page) */

        cy.get('[class="cpagi-page is-selected"]')
        .contains('2')
        .should('exist')
 
    });  
}



export {
    checkProjectListPerPage,
    clickNextPaginationButtonThenGoToSecondPage,
    goToThirdPage,
    goToSecondPage
}