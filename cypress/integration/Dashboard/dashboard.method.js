import { getTestSelector} from "../../support/getTestSelector";


let checkHeaderIsShowing =()=>{

    //check project flow is appear
    cy.get("[data-testid='add-button']")
    .should('be.visible')
    .click();

    cy.get('[data-testid="step-heading"]')
    .should('be.visible')

    cy.get('[data-testid=modal-close]')
    .first()
    .click({force:true});    

    // check link to project list is appear
    cy.get('a')
    .contains('View All Projects')
    .should('be.visible')
    .should('have.attr', 'href').and('include', 'projects')

     // check link to profile  is appear
    cy.get('a')
    .contains('Manage my Profile')
    .should('be.visible')
    .should('have.attr', 'href').and('include', 'profile')

    cy.get('.pdavi-stat-item.pdavi-area-created')
    .should('be.visible')

    cy.get('.pdavi-stat-item.pdavi-area-preparing')
    .should('be.visible')

    cy.get('.pdavi-stat-item.pdavi-area-ready')
    .should('be.visible')

    cy.get('.pdavi-stat-item.pdavi-area-in-progress')
    .should('be.visible')

    cy.get('.pdavi-stat-item.pdavi-area-completed')
    .should('be.visible')

    // cy.get('.pdavi-stat-item.pdavi-area-created')
    // .children()
    // .find('div.pdavi-stat-value')
    // .should('be.visible')

    // cy.get('.pdavi-stat-item.pdavi-area-preparing')
    // .children()
    // .find('div.pdavi-stat-value')
    // .should('be.visible')

    // cy.get('.pdavi-stat-item.pdavi-area-ready')
    // .children()
    // .find('div.pdavi-stat-value')
    // .should('be.visible')

    // cy.get('.pdavi-stat-item.pdavi-area-in-progress')
    // .children()
    // .find('div.pdavi-stat-value')
    // .should('be.visible')

    // cy.get('.pdavi-stat-item.pdavi-area-completed')
    // .children()
    // .find('div.pdavi-stat-value')
    // .should('be.visible')

    cy.get('.pdavi-help')
    .should('be.visible')
}

let assignProjectToMe =()=>{

    // search project with AT 
    cy.get('[data-testid=nav-item]')
    .contains('Projects')
    .click({force:true});

    cy.get('[data-testid=keyword-search]')
    .type('Automation Testing');

    cy.get("[data-testid=apply-filter-btn]")
    .click();

    cy.wait(Cypress.env('userWaitForLoading'));

    cy.get(getTestSelector(['ctil2'], 'link')) 
    .first()
    .click();

    // click assign to me
    cy.get("body").then($body => {
        if ($body.find(".c-overlay").length > 0) {   //evaluates as true
          cy.get('[data-testid=overlay]').then(el => {
              if (el.hasClass('is-visible')){
                  cy.get('button')
                  .contains('Yes, assign to me')
                  .click();
              }
          })    
        }        
    });

    // assign to AT user
    cy.get("[data-testid=user-assignment-select]")
    .click();

    cy.get("[data-testid=option-item]")
    .contains(Cypress.env('automationTestUser'))
    .click({force:true});

    cy.wait(Cypress.env('userWaitForLoading'));

    // check the project title
    let project_name;

    cy.get('[data-testid=sidebarTitle]').invoke('text').then((text1) => {
        project_name = text1;   

         // check the project is appear
        cy.log('Project name is ' + project_name);    

         // back to dashboard
        cy.get('[data-testid=nav-item]')
        .first()
        .click({force:true});

        // check that assignment tab is appear
        cy.get('[data-testid=tab-button]')
        .contains('Assigned to me')
        .should('be.visible');    
        
        cy.get('[data-testid=name]')
        .contains(project_name);
    });

   
}

let assignInProgressProjectToMe =()=>{
    // search project with AT 
    cy.get('[data-testid=nav-item]')
    .contains('Projects')
    .click({force:true});

    cy.get('[data-testid=keyword-search]')
    .type('Automation Testing');

    // choose dropdown status by dropdown value
    cy.get('[data-testid=status-dropdown] > .input-wrapper > [data-testid=toggle-dropdown]')
    .click()
    .wait(2000)
    .get('.cmult-option-label-text')
    .contains('In-Progress')
    .click({force:true});

    // choose dropdown status by dropdown value
    cy.get(getTestSelector(['sprfi'],'multiple-options-dropdown'))
    .contains(Cypress.env('builderName'))
    .click({force:true});

    cy.get("[data-testid=apply-filter-btn]")
    .click();

    cy.wait(Cypress.env('userWaitForLoading'));

    cy.get(getTestSelector(['ctil2'], 'link')) 
    .first()
    .click();

    // click assign to me
    cy.get("body").then($body => {
        if ($body.find(".c-overlay").length > 0) {   //evaluates as true
          cy.get('[data-testid=overlay]').then(el => {
              if (el.hasClass('is-visible')){
                  cy.get('button')
                  .contains('No, skip')
                  .click();
              }
          })    
        }        
    });

    // assign to AT user
    cy.get("[data-testid=user-assignment-select]")
    .click();

    cy.get("[data-testid=option-item]")
    .contains(Cypress.env('automationTestUser'))
    .click({force:true});

    cy.wait(Cypress.env('userWaitForLoading'));

    // check the project title
    let project_name;

    cy.get('[data-testid=sidebarTitle]').invoke('text').then((text1) => {
        project_name = text1;   

         // check the project is appear
        cy.log('Project name is ' + project_name);    

         // back to dashboard
        cy.get('[data-testid=nav-item]')
        .first()
        .click({force:true});

        // check that assignment tab is appear
        cy.get('[data-testid=tab-button]')
        .contains("I'm working on")
        .should('be.visible')
        .click();   
        
        cy.get('[data-testid=name]')
        .contains(project_name);

        cy.get('[data-testid=projectStatus]')
        .contains('In-Progress');
    });
   
}

let unassignedProjectTab =()=>{
    
     // check that assignment tab is appear
     cy.get('[data-testid=tab-button]')
     .contains('Unassigned')
     .should('be.visible')
     .click(); 
     
     cy.wait(Cypress.env('userWaitForLoading'));
     
     cy.get('[data-testid=link]')
     .then((list_length) => {
         let actual_length = list_length.length;
         expect(actual_length).to.be.at.least(10);
     })
   
}

export {
    checkHeaderIsShowing,
    assignProjectToMe,
    assignInProgressProjectToMe,
    unassignedProjectTab
}