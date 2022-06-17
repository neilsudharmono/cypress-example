import { getTestSelector} from "../../support/getTestSelector";
import {surchargePagination} from '../../fixtures/input/surcharges_admin';


const rootListing = 'lside';
const previousButton = 'pager-prev';
const nextButton = 'pager-next';
const linkNumberButton = 'pager-link';
const rootPaginationNav = 'cpagi';
const item_name = '.csuri-name';

let clickBackButton =() =>{
    cy.get('[data-testid="back-btn"]')
    .click();
}

let checkSurchargesListPerPage= (expected_item_perpage)=> {
    var item_perpage_text = expected_item_perpage.toString() + " items per page";

    // click option to choose how many items showing per page
    cy.get(getTestSelector([rootListing]))
    .children()
    .contains(item_perpage_text)
    .click({force:true})
    .then(() => {
            cy.get(item_name)
            .should('have.length', expected_item_perpage); 
    })      
}

let clickNextPaginationButtonThenGoToSecondPage= ()=> {
    // click next button
    cy.get(getTestSelector([rootPaginationNav],nextButton))
    .click()
    .then(()=> {
        // check correct surcharge shown
        checkDefaultPageItemPerPage();        

        cy.get(item_name
        ,{timeout:Cypress.env('asyncTimeout')})   
        .should('have.contain', surchargePagination.second_page) 
    });
}

let goToThirdPage= ()=> {
    // click page number 3
    cy.get(getTestSelector([rootPaginationNav],linkNumberButton))
    .contains('3')
    .click()
    .then(()=> {
        // check correct surcharge shown
        checkDefaultPageItemPerPage();

        cy.get(item_name
        ,{timeout:Cypress.env('asyncTimeout')})   
        .should('have.contain', surchargePagination.third_page) 
    });
}

let goToSecondPage= () => {
    
    goToThirdPage();

    // click previous button
    cy.get(getTestSelector([rootPaginationNav],previousButton))
    .click()
    .then(()=> {
        // check correct surcharge shown
         checkDefaultPageItemPerPage();

        cy.get(item_name
        ,{timeout:Cypress.env('asyncTimeout')})  
        .should('have.contain',  surchargePagination.third_page) 
 
    });  
}



export {
    checkSurchargesListPerPage,
    clickNextPaginationButtonThenGoToSecondPage,
    goToThirdPage,
    goToSecondPage,
    clickBackButton
}