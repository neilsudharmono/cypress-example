/// <reference types="Cypress" />

import { getTestSelector} from "../../support/getTestSelector";

import pageFloorplanInput from "../../fixtures/input/page-floorplan";

const search_root = 'sprfi';

let clickUploadButton =()=>{
  cy.get("[data-testid='control-next']")
  .click();
}

let uploadImage =()=>{
  clickUploadNewDocument();

    cy.fixture('file/samplefloorplan.jpg', 'base64').then(fileContent => {
        cy.get('[data-testid="file-input-field"]').upload(
          { fileContent, fileName: 'file/samplefloorplan.jpg', mimeType: 'image/jpeg' },
          { subjectType: 'input' },
        );
        cy.get('.cuplo-upload-name').contains('samplefloorplan.jpg');
      });
    clickUploadButton();
}

let clickUploadNewDocument=()=>{



    cy.get('[type="button"]')
    .contains('Upload new document')
    .click();
}

let clickSelectDocument=()=>{
  cy.get('button')
  .contains('Select a document')
  .click();
}

let checkLoadingAnimationIsFinished=() => {    
  cy.wait(6000);
  cy.get('[data-testid=loadermask]')
  .should('not.exist');
  // attached list is appear
  cy.get('[data-testid=attachment-item]')
  .should('be.visible');
}

let uploadPDF =()=>{
    
    clickUploadNewDocument();
    cy.fixture('file/floorplans.pdf', 'base64').then(fileContent => {
        cy.get('[data-testid="file-input-field"]').upload(
          { fileContent, fileName: 'file/floorplans.pdf', mimeType: 'application/pdf' },
          { subjectType: 'input' },
        );
        cy.get('.cuplo-upload-name').contains('floorplans.pdf');
      });
      clickUploadButton();
     
}

let uploadZIP =()=>{
  clickUploadNewDocument();

    cy.fixture('file/sampleZIP.zip', 'base64').then(fileContent => {
        cy.get('[data-testid="file-input-field"]').upload(
          { fileContent, fileName: 'file/sampleZIP.zip', mimeType: 'application/zip' },
          { subjectType: 'input' },
        );
        cy.get('.cuplo-upload-name').contains('sampleZIP.zip');
      });
      clickUploadButton();
}

let openFloorplanPage =()=>{

  cy.wait(Cypress.env("waitForLoading"));  
  // filter project based on the AT prepared code

  cy.get('[data-testid=builder-dropdown] > .input-wrapper > [data-testid=toggle-dropdown]')
  .click()
  .get('.cmult-option-label-text')
  .contains(Cypress.env("builderName"))
  .click({force:true});
  
  cy.get(getTestSelector([search_root],'apply-filter-btn'))
  .click();

  cy.wait(Cypress.env("waitForLoading"));

  // Click the first result for the AT code

  cy.get(getTestSelector(['ctil2'], 'link')) 
    .first()
    .click();

  cy.wait(Cypress.env('userWaitForLoading'));

  clickPreparePlanButton();

  //New
  //clickAddNewFloorplan();

}


let preparationStepsForPrepareFloorPlan=()=>{
  //TODO UNCOMMENT THIS ONCE ITS STABLE
  cy.wait(3000);

  cy.get("body").then($body => {
    if ($body.find('[data-testid="btn-add-new"]').length > 0) {   //evaluates as true
     
      clickAddNewFloorplan();
    }
  });

  cy.get('[data-testid=attachment-select]')
  .should('be.visible');

  cy.get("body").then($body => {
    if ($body.find("[data-testid=floorplan-item-image]").length > 0) {   //evaluates as true
      cy.log("debug 1")
     
        clickNextFloorplan();
    }else
    {
      cy.log("debug 2")
      uploadImage();
      checkLoadingAnimationIsFinished();
      selectSingleSetupFloorPlan();

    


      clickNextFloorplan();
    }
  });
}



let preparationStepsForPrepareFloorPlanPreparedStatus=()=>{
  //TODO UNCOMMENT THIS ONCE ITS STABLE
  cy.wait(3000);
  

  cy.get('[data-testid=attachment-select]')
  .should('be.visible');

  cy.get("body").then($body => {
    if ($body.find("[data-testid=floorplan-item-image]").length > 0) {   //evaluates as true
      cy.log("debug 1")
     
        clickNextFloorplan();
    }else
    {
      cy.log("debug 2")
      uploadImage();
      checkLoadingAnimationIsFinished();
      selectSingleSetupFloorPlan();

    


      clickNextFloorplan();
    }
  });
}

let drawSquareBox=()=>{

    cy.wait(7000);
    cy.get('[data-testid=zoom-or-fit-content]')
    .click({force:true});
    cy.wait(Cypress.env("waitForLoading"));
    
    cy.get('#v-2')
    .trigger("mousedown", { clientX: 350, clientY: 100 })
    .trigger("mousemove", { clientX: 1500, clientY: 900 })
    .trigger("mouseup", { force: true });
}

let clickPreparePlanButton =()=>{
    
    cy.wait(3000);

    // Click no skip project assignment
    cy.skipProjectAssignmentProcess();

    cy.get("[data-testid='prepare-plan']")
    .first()
    .click();    

}

let clickAddNewFloorplan =()=>{
    


  cy.get('[data-testid="btn-add-new"]')
  .contains("Add New")
  .click();    

}



let selectSingleSetupFloorPlan =()=>{
    cy.get("[data-testid=attachment-name]")
    .contains(pageFloorplanInput.file_name_image)
    .first()
    .next()
    .next()
    .next("button")    
    .click({force:true});

    cy.get("[name=floorPlanName]")
    .type(pageFloorplanInput.single_file_name);

    cy.get("[data-testid='new-floorplan-submit']")
    .click();

    cy.wait(1000);

    checkReadyFloorPlan(pageFloorplanInput.single_file_name,pageFloorplanInput.file_name_image,pageFloorplanInput.status );

}

let clickNextFloorplan=()=>{
  cy.get("[data-testid=control-next]")
  .first()
  .scrollIntoView()
  .click({force:true});
}

let clickNextToScale=()=>{
  cy.get("[data-testid=next-step]")
  .first()
  .scrollIntoView()
  .click({force:true});
}

let selectMultipleFloorPlan =()=>{
  cy.get("[data-testid=attachment-name]")
    .contains("file/floorplans.pdf")
    .first()
    .next()
    .next()
    .next("button")    
    .click({force:true});

    // cy.get("[data-testid=attachment-name]")
    // .contains("file/floorplans.pdf")
    // .first()
    // .parent()
    // .find("[data-testid=attachment-select]")  
    // .click({force:true});

    cy.get("[name=floorPlanPage]")
    .type("1");

    cy.get("[name=floorPlanName]")
    .type(pageFloorplanInput.first_page_name);

    cy.get("[data-testid='new-floorplan-submit']")
    .click();

    cy.get("[name=floorPlanPage]")
    .type("2");

    cy.get("[name=floorPlanName]")
    .type(pageFloorplanInput.second_page_name);

    cy.get("[data-testid='new-floorplan-submit']")
    .click();

    cy.get("name=floorPlanPage")
    .type("3");

    cy.get("[name=floorPlanName]")
    .type(pageFloorplanInput.third_page_name);

    cy.get("[data-testid='new-floorplan-submit']")
    .click();
}

let clickNextStepToScale=()=>{
  
  cy.get("[data-testid=next-step]")
  .click({force: true});
}

let checkReadyFloorPlan =(expected_name,expected_url, expected_status)=>{
    cy.get("[data-testid=floorplan-item-name]")
    .contains(expected_name);

    cy.get("[data-testid=floorplan-item-url]")
    .contains(expected_url);

    cy.get("[data-testid=floorplan-item-status]")
    .contains(expected_status);
}

let removeFloorPlan =()=>{
  cy.get("[data-testid=attachment-name]")
    .contains("file/samplefloorplan.jpg")
    .first()
    .next()
    .next()
    .next("button")   
    .scrollIntoView()
    .click({force:true});

    cy.get("[name=floorPlanName]")
    .type(pageFloorplanInput.remove_file);

    cy.get("[data-testid='new-floorplan-submit']")
    .click();         

    cy.get('.cform-container > [data-testid=floorPlans-listing] > [data-testid=floorplan-item] > [data-testid=floorplan-context-menu] > .c-utility-menu > [data-testid=control]')
    .first()
    .click({force: true});

    cy.get("[data-testid=manu]")
    .contains('Remove Floor Plan')
    .scrollIntoView()
    .click({force:true});

}

export{
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
    clickNextFloorplan,
    preparationStepsForPrepareFloorPlan,
    clickNextStepToScale,
    drawSquareBox,
    clickNextToScale,
    clickAddNewFloorplan,
    preparationStepsForPrepareFloorPlanPreparedStatus
}