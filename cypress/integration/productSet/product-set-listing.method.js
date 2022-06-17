import {DEFAULT_ITEM_PER_PAGE} from "../../support/baseConst";

let checkProductBuilderSetHeaderElement = ()=>{

    //check master product link appear
    cy.get('.c-product-set-item-master')
    .should('be.visible');    

    // check search appear
    cy.get('[data-testid=keyword-search]')
    .should('be.visible');
    // check apply button appear
    cy.get('[data-testid=apply-filter-btn]')
    .should('be.visible');
    // check label product builder list
    cy.get('[data-testid=count-showing]')
    .should('be.visible');
    cy.get('[data-testid=count-total]')
    .should('be.visible');
    // check label pagination
    cy.get('[data-testid=display-text]')
    .should('be.visible');
    // check label sorting
    cy.get('.c-sort-by > .c-listing-dropdown > [data-testid=display-text]')
    .should('be.visible');

}

let checkBuilderListDataElement = ()=>{
    // check builder name
    cy.get('.cpsit-logo-img')
    .should('be.visible');
    cy.get('.cpsit-name')
    .should('be.visible');

    // check state
    cy.get('.cpsit-state')
    .should('be.visible');

    // check contact name
    cy.get('.cpsit-contact')
    .should('be.visible');

    // check contact number
    cy.get('.cpsit-phone')
    .should('be.visible');

    // check bottom navigation
    cy.get("[data-testid=pager-prev]")
    .scrollIntoView()
    .should('be.visible');

    cy.get("[data-testid=pager-link]")
    .first()
    .scrollIntoView()
    .should('be.visible');

    cy.get("[data-testid=pager-next]")
    .scrollIntoView()
    .should('be.visible');
}

let checkDefaultPageItemPerPage =() => {
    cy.get('.c-product-set-item').should('have.length', DEFAULT_ITEM_PER_PAGE);
    cy.wait(1000);
}

export{
    checkProductBuilderSetHeaderElement,
    checkBuilderListDataElement,
    checkDefaultPageItemPerPage
}