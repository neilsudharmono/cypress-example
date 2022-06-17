import {
  uploadImage,
  uploadPDF,
  uploadZIP,
  selectSingleSetupFloorPlan,
  selectMultipleFloorPlan,
  checkReadyFloorPlan,
  clickPreparePlanButton,
  openFloorplanPage,
  removeFloorPlan,
  clickSelectDocument,
  checkLoadingAnimationIsFinished,
  clickAddNewFloorplan
} from './add_floorplan.method';

import {
  validAddNewProjectProcess
  
}from '../Project/project_addnew.method';


describe('Add Floor Plans test', function () {

     after(()=> {

      cy.get('[class="cmoda-close-txt"]')
      .click()
      
        cy.get('[class="sslid-account-label"]')
        .click()
        
        cy.get('[href="/account/dologout"]').click()

    })
       beforeEach(() => {   
        
        // Handle login on DEV or Netifly on Showcase
        cy.task('deleteFile','cookies.json');
        cy.setCookies(); 
        
        // Open testing page
        cy.openTestingEnvironment("projects.html#/","projects")        

        cy.filterProjectByNameAndStatus("Automation Test Project","Created");
        openFloorplanPage();
        
    });

    it('setup single image', function () {  
      clickAddNewFloorplan();
      uploadImage();
      checkLoadingAnimationIsFinished();
      selectSingleSetupFloorPlan();
      
    }) 

    // TODO : needs to revisit this once pdf to image service is up
    // it('setup multiple pdf pages', function () {  
    //   uploadPDF(); 
    //   checkLoadingAnimationIsFinished();      
    //   selectMultipleFloorPlan();
    // }) 

    // it('remove floor plan', function () { 
    //   clickAddNewFloorplan(); 
    //   uploadImage();
    //   checkLoadingAnimationIsFinished();
    //   removeFloorPlan();
    // }) 
})