import { getTestSelector} from "../../support/getTestSelector";
import expectedBuilderName from '../../fixtures/input/productset-input';


const rootListing = 'clist';
const previousButton = 'pager-prev';
const nextButton = 'pager-next';
const linkNumberButton = 'pager-link';
const rootTileProjectCard = 'ctil1';
const rootPaginationNav = 'cpagi';


let checkBuilderListPerPage= (expected_item_perpage)=> {
    var item_perpage_text = expected_item_perpage.toString() + " items per page";

    // click option to choose how many items showing per page
    cy.get(getTestSelector([rootListing]))
    .children()
    .contains(item_perpage_text)
    .click({force:true})
    .then(() => {
            cy.get(".cpsit-name")
            .should('have.length.lessThan', expected_item_perpage+1); 
    })      
}

let clickNextPaginationButtonThenGoToSecondPage= ()=> {
    // click next button
    cy.get(getTestSelector([rootPaginationNav],nextButton))
    .click()
    .then(()=> {
        // check correct project shown
        // checkDefaultPageItemPerPage();        
        cy.get('[class="cpagi-page is-selected"]')
        .contains('2')
        /*cy.get(".cpsit-name"
        ,{timeout:Cypress.env('asyncTimeout')})   
        .should('have.contain', expectedBuilderName.builder_second_page) */
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
        cy.get('[class="cpagi-page is-selected"]')
        .contains('3')
        /*cy.get(".cpsit-name"
        ,{timeout:Cypress.env('asyncTimeout')})   
        .should('have.contain', expectedBuilderName.builder_third_page) */
    });
}

let goToSecondPage= () => {
    
    goToThirdPage();

    // click previous button
    cy.get(getTestSelector([rootPaginationNav],previousButton))
    .click()
    .then(()=> {
        // check correct project shown
        // checkDefaultPageItemPerPage();
        cy.get('[class="cpagi-page is-selected"]')
        .contains('2')
        /*cy.get(".cpsit-name"
        ,{timeout:Cypress.env('asyncTimeout')})  
        .should('have.contain',  expectedBuilderName.builder_third_page)*/ 
 
    });  
}



export {
    checkBuilderListPerPage,
    clickNextPaginationButtonThenGoToSecondPage,
    goToThirdPage,
    goToSecondPage
}