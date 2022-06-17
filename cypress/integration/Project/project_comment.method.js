
const testData = 'Test Data';

let doUpdateProjectComment =()=>{
    cy.get('[data-testid=link]') 
    .first()
    .click();

    // Click no skip project assignment
    cy.skipProjectAssignmentProcess();

    cy.get('[data-testid=link-ProjectComments]')
    .click();

    cy.get('[name=projectComments]')
    .clear()
    .type(testData);

    cy.get('[data-testid=button-submit]')
    .click();

    cy.get('[data-testid=notice-msg]')
    .contains('has been updated successfully!')
    .should('be.visible');

    // reload the page ensure it can retrieve the latest value
    cy.reload();

    // Click no skip project assignment
    cy.skipProjectAssignmentProcess();

    cy.get('[data-testid=link-ProjectComments]')
    .click();


    cy.get('[name=projectComments]')
    .should('have.value',testData);


}

export {
    doUpdateProjectComment
}