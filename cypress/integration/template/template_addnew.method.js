
import { getTestSelector} from "../../support/getTestSelector";
import {testingInput, inputInProgress, testingInvalidInput, projectInput} from "../../fixtures/input/template-input";

const root_Selector = 'saptb';
const add_button = 'add-button';
const previous_button = 'control-back';
const root_step_1 = 'cadd2';
const empty_builder_message = 'builder-filtered-empty';
const builder_name_text_box = 'builder-search-input';
const selected_builder_name_label = 'builder-selected';
const rootTileTemplate = 'ctptc';

// ------------------- BEGIN FORM STEP 1 ------------------------------

let clickAddNewTemplate= ()=> {
    cy.get(getTestSelector([root_Selector],add_button))
        .click();
}

let clickBuilderByBuilderName =(builder_name)=>{
    cy.get(getTestSelector([root_step_1],builder_name))
    .contains(builder_name)
    .click();
}

let typeToBuilderNameTextBox =(builder_name)=>{
    cy.get('[data-testid=auto-input]')
    .clear()
    .type(builder_name)
    .type('{enter}');

    cy.get('[data-testid=suggestion-item]')
    .first()
    .click();
    
}

let typeToBuilderNameTextBoxDirectly =(builder_name)=>{
    cy.get('[data-testid=auto-input]')
    .clear()
    .type(builder_name)
    .type('{enter}');
    
}
let clickNextButton =()=>{
    cy.get('[data-testid=control-next]')
        .click();
}

let clickCloseForm=()=>{
    cy.get('[data-testid=modal-close]')
    .first()
    .click({force:true});

    cy.on('window:confirm', str => {
        cy.get('button').click();
        return true;
      });
}

let checkEmptyBuilderErrorMessage=()=> {

    cy.get(getTestSelector([root_step_1],builder_name_text_box))
    .type('INVALID BUILDER NAME')
    .type('{enter}');

    cy.get(getTestSelector([root_step_1],empty_builder_message))
    .should('be.visible');
}

let checkButtonNextDisable=()=>{
    cy.get('[data-testid=control-next]')
    .should('be.disabled')
}

let checkBuilderDetailsInfo=(builder_name)=>{
    cy.get(getTestSelector([root_step_1],selected_builder_name_label))
    .find('[data-testid=name]')
    .contains(builder_name)
    .should('be.visible');
}

let handleDialogBox=()=>{
    cy.on('window:confirm', str => {
        cy.get('button').click();
        return true;
      });
}

let checkErrorMessageShouldAppear=(expected_error_message)=>{
    cy.get('.error-msg')
    .should('be.visible')
    .contains(expected_error_message);
}

let clickPreviousButton=()=>{
    cy.get(getTestSelector([root_Selector],previous_button))
    .click();
}

let fillOutAboutTheBuild=(Template_name, Template_type,size
    , num_of_floor,build_type)=>{

        cy.get('[name=name]')
        .clear()
        .type(Template_name);

        cy.get('[data-testid=radio-projectType-NewBuild] > .cradi-option-label')
        .click();
       
        cy.get('[data-testid=radio-buildingNumberOfFloors-One] > .cradi-option-label')
        .click();

        cy.get('[data-testid=radio-buildingType-House] > .cradi-option-label')
        .click();

        cy.get('[name=buildingSize]')
        .type(size);
}

let checkRequiredTemplateDetailsFields=()=>{
    cy.get('[data-testid=name] > .input-wrapper > .error-msg')
    .should('be.visible');

    cy.get('[data-testid=projectType] > .input-wrapper > .error-msg')
    .should('be.visible');

    cy.get('[data-testid=buildingType] > .input-wrapper > .error-msg')
    .should('be.visible');

    cy.get('[data-testid=numberOfFloorOptions] > .input-wrapper > .error-msg')
    .should('be.visible');
    
}

let uploadFloorPlan=()=>{
    cy.fixture('file/uploadPDF.pdf', 'base64').then(fileContent => {
        cy.get('[data-testid="file-input-field"]').first()
        .upload(
          { fileContent, fileName: 'file/floorplans.pdf', mimeType: 'application/pdf' },
          { subjectType: 'input' },
        );
        cy.get('.cuplo-upload-name').contains('floorplans.pdf');
      });
      cy.wait(1000);
}

let uploadInclusionPlan=()=>{
    cy.fixture('file/uploadPDF.pdf', 'base64').then(fileContent => {
        cy.get('[data-testid="file-input-field"]').last()
        .upload(
          { fileContent, fileName: 'file/floorplans.pdf', mimeType: 'application/pdf' },
          { subjectType: 'input' },
        );
        cy.get('.cuplo-upload-name').contains('floorplans.pdf');
      });
      cy.wait(1000);
}

let uploadFileExistFile=()=>{
    cy.fixture('file/uploadPDF.pdf', 'base64').then(fileContent => {
        cy.get('[data-testid="file-input-floorplan"]').upload(
          { fileContent, fileName: 'file/uploadPDF.pdf', mimeType: 'application/pdf' },
          { subjectType: 'input' },
        );
        cy.get('.cadd1-upload-name').contains('uploadPDF.pdf');
      });

      cy.wait(1000);

      cy.fixture('file/uploadPDF.pdf', 'base64').then(fileContent => {
        cy.get('[data-testid="file-input-floorplan"]').upload(
          { fileContent, fileName: 'file/uploadPDF.pdf', mimeType: 'application/pdf' },
          { subjectType: 'input' },
        );
        cy.get('.cadd1-error').contains('The file you have selected already exists');
      }); 
      
}

let checkTemplateListAppear=()=>{
    cy.wait(1000);
    cy.get(getTestSelector([rootTileTemplate], 'name'))   
    .should('be.visible');
}

let setupFloorPlan=()=>{
    cy.get('[data-testid="prepare-plan"]')
    .click();

    //upload new document
    cy.get('button')
    .contains('Upload new document')
    .click();

    cy.fixture('file/samplefloorplan.jpg', 'base64').then(fileContent => {
        cy.get('[data-testid="file-input-field"]').upload(
          { fileContent, fileName: 'file/samplefloorplan.jpg', mimeType: 'image/jpeg' },
          { subjectType: 'input' },
        );
        cy.get('.cuplo-upload-name').contains('samplefloorplan.jpg');
      });

      cy.get("[data-testid='control-next']")
      .click();

    // check document is successfully uploaded
    cy.wait(Cypress.env("waitForLoading"));

    cy.get('[data-testid=loadermask]')
    .should('not.exist');
    // attached list is appear
    cy.get('[data-testid=attachment-item]')
    .should('be.visible');

    // add it as new floorplan
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

    cy.wait(Cypress.env("waitForLoading"));

    cy.get("[data-testid=floorplan-item-name]")
    .contains(pageFloorplanInput.single_file_name);

    cy.get("[data-testid=floorplan-item-url]")
    .contains(pageFloorplanInput.file_name_image);

    cy.get("[data-testid=floorplan-item-status]")
    .contains(pageFloorplanInput.status);

    cy.get("[data-testid=control-next]")
    .click();

    // Setup Region

    cy.wait(7000);
    cy.get('[data-testid=zoom-or-fit-content]')
    .click({force:true});
    cy.wait(Cypress.env("waitForLoading"));
    
    cy.get('#v-2')
    .trigger("mousedown", { clientX: 350, clientY: 100 })
    .trigger("mousemove", { clientX: 1500, clientY: 900 })
    .trigger("mouseup", { force: true });

    cy.get("[data-testid=control-next]")
    .click();
    
    // Setup scale

    // Setup Clean up page



}

let addTemplateThenPublished=()=>{
    // Create Template
    clickAddNewTemplate();
    typeToBuilderNameTextBox(Cypress.env('builderName'));
    clickNextButton();
    fillOutAboutTheBuild(inputInProgress.Template_name,inputInProgress.Template_type,
                        inputInProgress.size,inputInProgress.number_of_floor,
                        inputInProgress.building_type);
    clickNextButton();
    uploadFloorPlan();
    clickNextButton();
    checkTemplateListAppear();
    // Setup Floorplan

    // Setup Inclusion

    // Publish Template 
}

let useTemplateForProject=()=>{

    cy.filterProjectByNameAndStatus("Automation Test Project","Created");

    cy.wait(Cypress.env("waitForLoading"));  

    // Click the first result for the AT code   
    cy.get(getTestSelector(['ctil2'], 'link')) 
    .first()
    .click();

    cy.get('[data-testid=prepare-plan]')
    .click();

    // click use template
    cy.get('[data-testid=btn-add-new]')
    .contains('Use a Template')
    .click();

    cy.get('[data-testid=projectName]')
    .first()
    .click();

    cy.get('[data-testid=btn-project-copy]')
    .click();

    if (projectInput.use_storage_price)
    {
        cy.get('[data-testid=checkbox-stored]')
        .click();
    }else
    {
        cy.get('[data-testid=checkbox-current]')
        .click();
    }

    // Click use template
    cy.get('[data-testid=control-next]')
    .click();

    // check template overview is loaded
    cy.wait(Cypress.env("floorplanWaitForLoading"));

    let success_msg ="successfully copied from " + projectInput.projectName;

    cy.get('[data-testid=notice-msg]')
    .first()
    .scrollIntoView()
    .contains('The Project has been updated successfully!')
    .should('be.visible');

    // cy.get('[data-testid=notice-msg]')
    // .scrollIntoView()
    // .contains(success_msg)
    // .should('be.visible');

    cy.get('[data-testid=projectStatus]')
    .contains('Ready for Consultation')
    .should('be.visible');
}

let selectPublishedTemplate=()=>{
    cy.get('.c-sort-by > .c-listing-dropdown > [data-testid=display-text]')
    .click();

    cy.get('[data-testid=option-item]')
    .contains('Sorting by Status')
    .click();

    cy.get('[data-testid=projectStatus]')
    .contains('Published')
    .click();

    cy.wait(Cypress.env("waitForLoading"));

    cy.get('.cprsu-title')
    .should('be.visible');

    cy.get('[data-testid=add-button]')
    .click();

    // Fill out Project Details

    // Step 1
    cy.get("[name='primaryContact.firstName']")
    .clear()
    .type(projectInput.firstname);

    cy.get("[name='primaryContact.lastName']")
    .clear()
    .type(projectInput.lastname);

    cy.get("[name='primaryContact.phoneNumber']")
    .clear()
    .type(projectInput.phone);

    cy.get("[name='primaryContact.emailAddress']")
    .clear()
    .type(projectInput.email);

    cy.get('[name=preferredContactMethod]')
    .select(projectInput.prefered_contact_method);
    
    cy.get('[name=preferredContactTime]')
    .select(projectInput.contact_time);

    cy.get('[name=internalNotes]')
    .type(projectInput.notes);

    cy.get('[data-testid=control-next]')
    .click();

    // Step 2
    cy.get('[name=name]')
    .clear()
    .type(projectInput.projectName);

    cy.get('[name=country]')
    .select(projectInput.country);

    cy.get('[name=state]')
    .select(projectInput.state);

    cy.get('[name=postcode]')
    .clear()
    .type(projectInput.postcode);

    cy.get('[name=houseNumber]')
    .clear()
    .type(projectInput.house_number);

    cy.get('[name=street]')
    .clear()    
    .type(projectInput.street);

    cy.get('[name=suburb]')
    .clear()
    .type(projectInput.suburb);

    cy.get('[data-testid=control-next]')
    .click();

    // STEP 3
    // Choose Pricing

    if (projectInput.use_storage_price)
    {
        cy.get('[data-testid=checkbox-stored]')
        .click();
    }else
    {
        cy.get('[data-testid=checkbox-current]')
        .click();
    }

    // Click use template
    cy.get('[data-testid=control-next]')
    .click();

    // check template overview is loaded
    cy.wait(Cypress.env("floorplanWaitForLoading"));

    let success_msg ="New Project " + projectInput.projectName + ' has been created.';

    cy.get('[data-testid=notice-msg]')
    .scrollIntoView()
    .contains(success_msg)
    .should('be.visible');

    cy.get('.cnoti-link')
    .contains('View now')
    .click();

    // check project overview is loaded
    cy.wait(Cypress.env("floorplanWaitForLoading"));

    cy.get('[data-testid=projectStatus]')
    .should('be.visible');


}

let checkAllValidation=()=>{
        clickAddNewTemplate();
        checkButtonNextDisable();
        checkButtonNextDisable();
        // check next button disabled when invalid builder is filled out
        typeToBuilderNameTextBoxDirectly(testingInvalidInput.builder_name);
        checkButtonNextDisable();

        typeToBuilderNameTextBox(Cypress.env('builderName'));
        clickNextButton();
        clickNextButton();
        checkRequiredTemplateDetailsFields();
}

export {
    addTemplateThenPublished,
    checkAllValidation,
    selectPublishedTemplate,
    useTemplateForProject
}