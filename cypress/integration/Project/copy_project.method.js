let clickCopyFloorPlan=()=>{
    cy.get('[data-testid=notice-msg]')
    .find('a')
    .click();

    cy.skipProjectAssignmentProcess();

    cy.get('.btn-skin-1')
    .should('have.contain','Add Floor Plans')
    .first()
    .click();

    cy.get('[data-testid="btn-add-new"]')
    .contains('Copy Project')
    .click();    
}

let copyProjectProcess=()=>{
    cy.get('[data-testid="createdDateUtc"]')
    .first()
    .next()
    .click({force:true});

    // click copy
    cy.get('[data-testid="btn-project-copy"]')
    .click();  

    // click yes
    cy.get('[data-testid="btn-products-yes"]')
    .click();  

    // show success message
    cy.get('[data-testid="notice-msg"]')
    .should('contain.text','The Project has been updated successfully!');

    // show error message
    cy.get('[data-testid="notice-msg"]')
    .contains("Couldn't copy the Project")
    .should('not.exist');

    // check correct status applied
    cy.get('[data-testid="projectStatus"]')
    .contains("Ready for Consultation")
    .should('be.visible');

    cy.skipProjectAssignmentProcess();

    // check correct button appear
    cy.get('.cprsu-btns')
    .contains("Start Consultation")
    .should('be.visible');
}

export {
    clickCopyFloorPlan,
    copyProjectProcess
}