var checkMainNavigationItemsLoaded= ()=> {
    // check logo is appear
    cy
        .get('[data-testid=logo]')
        .should('exist')
        .should('be.visible');
    // check expand collapse icon is appear
    cy
        .get('[data-testid=nav-control]')
        .should('exist')
        .should('be.visible');
    // check navigation items are appear
    cy
        .get('[data-testid=nav-item]')
        .each(($item, index, $list) => {
            cy
                .get($item)
                .should('exist')
                .should('be.visible')
                .find('svg')
                .should('exist')
                .should('be.visible')
                .find('use')
                .should('have.attr', 'xlink:href')

          })
    // check help info is appear
    cy
        .get('[data-testid=nav-config-info]')
        .should('exist')
        .should('be.visible');
    // check account info is appear
    
    /*
    COMMENTING THIS BECAUSE LOGGED IN USER AND NOT LOGGED IN ONE HAS DIFFERENT ELEMENTS
    
    cy
        .get('[data-testid=nav-config-account]')
        .should('exist')
        .should('be.visible');
    // check account's icon is appear
    cy
        .get('i')
        .should('exist')
        .should('be.visible');*/
}

var checkMainNavigationCanCollapsed= ()=> {
    // check menu is expanded by default
    cy
        .get('.s-slide-nav.is-expanded')
        .should('exist')
        .should('be.visible');
    // check menu width
    
}

var checkMainNavigationCanExpanded= ()=> {
    // click navigation icon to collapsed
        cy
        .get('[data-testid=nav-control]')
        .click();

  // check menu is collapsed
    cy
        .get('.s-slide-nav.is-expanded')
        .should('not.exist')

    
}

export {checkMainNavigationItemsLoaded,
    checkMainNavigationCanCollapsed,
    checkMainNavigationCanExpanded
}