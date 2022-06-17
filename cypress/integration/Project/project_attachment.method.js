import {PROJECT_API_LINK} from '../../support/baseConst';
import { getTestSelector} from "../../support/getTestSelector";
import {inputProjectDetails,updateProjectDetails} from '../../fixtures/input/project-details'

const filename = 'floorplans.pdf';

const rootTileProjectCompact = 'ctil2';

let goToProjectAttachmentPage=()=>{
    cy.wait(Cypress.env("waitForLoading"));       

    //click attachment link in left pane

    // Click no skip project assignment
    cy.skipProjectAssignmentProcess();
  
    cy.get('[data-testid=link-Attachments]')
    .click();

}

let clickUploadNewDocumentsButton=()=>{
    //click upload new documents button

    cy.get('[data-test-id=add-button]')
    .contains('Upload New Documents')
    .click();
}

let clickDeleteDocument=()=>{
    //click 'x' at the uploaded document

    cy.get('[class="cuplo-upload-remove"]')
    .first()
    .click();

    cy.get('[class="cuplo-upload-remove"]')
    .last()
    .click();
}

let checkDisabledUploadDocumentsButtons=()=>{

    //check upload documents button that should be disabled if no documents uploaded yet    

    cy.get('[data-testid=control-next]')
    .should('be.disabled');

    // close form
    cy.get('[data-testid=modal-close] > .svg-icon > use')
    .click();
}

let checkUploadedDocuments=()=>{
    
    //check new uploaded documents in attachment page

    cy.get('[data-testid=attachments-list]')
    .first()
    .should('have.contain',filename)
    .should('have.contain','Just now');

    cy.get('[data-testid=attachments-list]')
    .last()
    .should('have.contain',filename)
    .should('have.contain','Just now');
}


let uploadInvalidFloorPlan=()=>{

    // upload invalid file type for floorplan

    cy.fixture('file/SampleInvalidFile.xlsx', 'base64').then(fileContent => {
        cy.get('[data-testid="file-input-field"]').first()
        .upload(
          { fileContent, fileName: 'file/SampleInvalidFile.xlsx', mimeType: 'application/vnd.ms-excel', encoding: 'utf-8' },
          { subjectType: 'input' },
        );
        cy.get('[class=cuplo-error]').first().should('be.visible');
      });
      cy.wait(Cypress.env("waitForLoading"));
}

let uploadInvalidInclusionPlan=()=>{

    // upload invalid file type for inclusion

    cy.fixture('file/SampleInvalidFile.xlsx', 'base64').then(fileContent => {
        cy.get('[data-testid="file-input-field"]').last()   
        .upload(
          { fileContent, fileName: 'file/SampleInvalidFile.xlsx', mimeType: 'application/vnd.ms-excel',encoding: 'utf-8' },
          { subjectType: 'input' },
        );
        cy.get('[class=cuplo-error]').last().should('be.visible');
      });
      cy.wait(Cypress.env("waitForLoading"));
}

export {
    goToProjectAttachmentPage,
    clickUploadNewDocumentsButton,
    checkDisabledUploadDocumentsButtons,
    checkUploadedDocuments,
    uploadInvalidFloorPlan,
    uploadInvalidInclusionPlan,
    clickDeleteDocument
    
}