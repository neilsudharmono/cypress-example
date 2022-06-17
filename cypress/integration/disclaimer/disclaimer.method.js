let saveDisclaimer =()=>{
    
    // check thatdisclaimer page is loaded
    cy.get('.cdifo-title')
    .contains('Disclaimers')
    .should('be.visible')
    
    cy.wait(Cypress.env('userWaitForLoading'));
    
    cy.get('[name=generalDisclaimer]')
    .type('Update')

    cy.get('[data-testid=button-submit]')
    .click();

    cy.get('[data-testid=notice-msg]')
    .contains('have been updated successfully!')
    .should('be.visible');
  
}

export {
    saveDisclaimer
}