/// <reference types='Cypress' />

import {PROJECT_API_LINK,PROJECT_API_LINK_2} from '../../support/baseConst'

describe('Get Project Listing API', () => {
  before(() => {        
    // Handle login on DEV or Netifly on Showcase
    cy.task('deleteFile','cookies.json');
    cy.setCookies(); 
})
    
       beforeEach(() => {   

    // Open testing page
    //cy.openTestingEnvironment("projects.html#/","projects") ;
    
    
});

    it('Request body must returns JSON', () => {

      cy.request('GET',PROJECT_API_LINK)
        .its('headers')
        .its('content-type')
        //.should('include', 'application/json')
        .should('include', 'charset=utf-8')        
    })

    /*it('Response status of the request', () => {
      cy.request('GET',PROJECT_API_LINK)
        .its('body')
        .its('status')
        .should('equal','OK');
    })*/

    //TODO
    // it('Response code of the request', () => {
    //   cy.request('GET',PROJECT_API_LINK)
    //     .its('body')  
    //     .its('code')
    //     .should('equal',200);
    // })


})



