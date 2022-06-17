let checkHeaderElementAppear=()=>{
    // check title
    cy.get("h2")
    .contains('Surcharges')
    .should('be.visible')

    // check add button
    cy.get("button")
    .contains('Add a Surcharge')
    .should('be.visible')

    // check pagination
    cy.get("[data-testid=count-showing]")
    .should('be.visible')

    cy.get("[data-testid=count-total]")
    .should('be.visible')

    cy.get("[data-testid=display-text]")
    .contains('12 items per page')
    .should('be.visible')

    // check search
    // cy.get("[data-testid=search]")
    // .should('be.visible')

    // // check filter is active
    // cy.get("[data-testid=search]")
    // .should('be.visible')

    // check sort option
    cy.get("[data-testid=dir-toggle]")
    .should('be.visible')

    cy.get("[data-testid=display-text]")
    .contains('Sort by surcharge name')
    .should('be.visible')
}

let checkRowsElementAppear=()=>{
    // check name
    cy.get(".csuri-name")
    .should('be.visible')

    // check description
    cy.get(".csuri-description")
    .should('be.visible')

    // check rows utility menu
   // cy.get("[data-testid=control]")
    //.should('be.visible')

    // check navigate to previous page
    // cy.get("[data-testid=pager-prev]")
    // .should('be.visible')

    // check navigate to x page
    // cy.get("[data-testid=pager-link]")
    // .should('be.visible')

    // check navigate to next page
    // cy.get("[data-testid=pager-next]")
    // .should('be.visible')
}

let checkSurchargeListContains=(name)=>{
    // check surcharge name is in the surcharge list
    cy.get(".csuri-name")
    .contains(name)
    .should('be.visible');
}

export{
    checkHeaderElementAppear,
    checkRowsElementAppear,
    checkSurchargeListContains
}