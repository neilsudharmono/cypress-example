/*import {addTemplateThenPublished,
  selectPublishedTemplate,
  useTemplateForProject,
  checkAllValidation} from './template_addnew.method';

describe('Add New Template End to Testing', function () {
    before(() => {        
      // Handle login on DEV or Netifly on Showcase
      cy.task('deleteFile','cookies.json');
      cy.setCookies(); 
  })
       after(()=> {
        cy.get('[class="sslid-account-label"]')
        .click()
        
        cy.get('[href="/account/dologout"]').click()

    })
       beforeEach(() => {   
  
        // Open testing page
        cy.openTestingEnvironment("projects.html#/","projects#/templates") ;
  
    });
  
    if( Cypress.env('runProjectTest'))
    {
      it('Add new template,check validation and publish it', function () {   
        checkAllValidation();
        cy.reload();
        addTemplateThenPublished();
      }) 

      it('Create project from published template', function () {   
          selectPublishedTemplate();
      }) 
    }  
    
  })
  
  describe('Add New Template End to Testing', function () {  
    before(() => {        
      // Handle login on DEV or Netifly on Showcase
      cy.task('deleteFile','cookies.json');
      cy.setCookies(); 
    })
         after(()=> {
        cy.get('[class="sslid-account-label"]')
        .click()
        
        cy.get('[href="/account/dologout"]').click()

    })
       beforeEach(() => {   
      
        // Open testing page
        cy.openTestingEnvironment("projects.html#/","projects") ;

    });
    if( Cypress.env('runProjectTest'))
    {

      it('New Project use template', function () {   
        useTemplateForProject();
      }) 

    }  
    
  })*/