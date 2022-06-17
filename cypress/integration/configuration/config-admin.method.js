let checkElementRendered=()=>{
    // check left sub menu appear
    cy.get("[data-testid=link-Configuration]")
    .should("be.visible")

    cy.get("[data-testid=link-BusinessAccounts]")
    .should("be.visible")

    cy.get("[data-testid=link-UserAccounts]")
    .should("be.visible")

    //cy.get("[data-testid=link-SystemReporting]")
    //.should("be.visible")

    cy.get("[data-testid=link-SystemSettings]")
    .should("be.visible")

    // check two side form appear
    cy.get("[data-testroot=cadub]")
    .contains("Invite a User");

    cy.get("[data-testid=link-ViewUserAccounts]")
    .should("be.visible")

    cy.get("[data-testid=add-button]")
    .should("be.visible")

    cy.get("[data-testid=link-ViewBusinessAccounts]")
    .should("be.visible")

}

let checkCorrectLinkApplied=()=>{

    if ( Cypress.env("runShowcase"))  
    {
        cy.get("[data-testid=link-BusinessAccounts]")
        .should('have.attr', 'href').and('include', 'business-accounts');
    
        // check business account link
        cy.get("[data-testid=link-ViewBusinessAccounts]")
        .should('have.attr', 'href').and('include', 'business-accounts');
    }else
    {
        cy.get("[data-testid=link-BusinessAccounts]")
        .should('have.attr', 'href').and('include', 'businessaccounts');
    
        // check business account link
        cy.get("[data-testid=link-ViewBusinessAccounts]")
        .should('have.attr', 'href').and('include', 'businessaccounts');
    }



    // check user account link not yet developed
}

let checkAddBusinessForm=()=>{
    cy.get("[data-testid=add-button]")
    .click();

    cy.get("[data-testid=step-heading]")
    .contains("Add a Business")
    .should("be.visible");
}

export{
    checkElementRendered,
    checkCorrectLinkApplied,
    checkAddBusinessForm
}