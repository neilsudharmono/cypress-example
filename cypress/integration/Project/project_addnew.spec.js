
import {
    validAddNewProjectProcess,
    checkAllValidation,
    addProjectForInProgressStatus
}from './project_addnew.method'

import{
  clickCopyFloorPlan,
  copyProjectProcess
}from './copy_project.method'

describe('Add New Project End to Testing', function () {
     after(()=> {
        cy.get('[class="sslid-account-label"]')
        .click()
        
        cy.get('[href="/account/dologout"]').click()

    })
       beforeEach(() => {        
    // Handle login on DEV or Netifly on Showcase
    cy.session('user', ()=>{
        cy.task('deleteFile','cookies.json');
        cy.setCookies(); 
        
      })
      cy.openTestingEnvironment("projects.html#/","projects#/active") ;




  
      
})

  if( Cypress.env('runProjectTest'))
  {
    it('check validation for each test', function(){
      checkAllValidation();
  })
    it('Add new project End to End also successfully copied into new project', function () {   
    
      addProjectForInProgressStatus();
      //clickCopyFloorPlan();
      //copyProjectProcess();
    }) 
  }


})
