
import {doUpdateProjectComment} from './project_comment.method'

import {
    goToProjectAttachmentPage,
    clickUploadNewDocumentsButton,
    checkDisabledUploadDocumentsButtons,
    checkUploadedDocuments,
    uploadInvalidFloorPlan,
    uploadInvalidInclusionPlan,
    clickDeleteDocument
} from './project_attachment.method';

import {
    clickFirstResult
} from './project_edit.method';

import {
    uploadFloorPlan,
    uploadInclusionPlan,
    clickNextButton
} from './project_addnew.method';

describe('Project Comment Page', function () {
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
          cy.wait(Cypress.env("waitForLoading"));
          cy.filterProjectByNameAndStatus("Automation Test Project","In-Progress");
          
    })
    
    
  
    it('Check user able to retrieve and update project comment ', function () {  
        doUpdateProjectComment();
    }) 

    it('Check user get validation message to prevent negative cases then upload new documents', function () {
        clickFirstResult();
        goToProjectAttachmentPage();    
        clickUploadNewDocumentsButton();
        checkDisabledUploadDocumentsButtons();
        // reload page then check invalid document
        cy.reload();
        goToProjectAttachmentPage();  
        clickUploadNewDocumentsButton();
        uploadInvalidFloorPlan();
        uploadInvalidInclusionPlan();
        checkDisabledUploadDocumentsButtons();
        // go to next case : upload new document
        cy.reload();
        goToProjectAttachmentPage();  
        clickUploadNewDocumentsButton();
        uploadFloorPlan();
        uploadInclusionPlan();
        clickNextButton();
        checkUploadedDocuments();
        // go to next case : delete document
        // clickDeleteDocument();
        // checkDisabledUploadDocumentsButtons();
    })    
})