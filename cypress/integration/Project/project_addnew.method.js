
import { getTestSelector} from "../../support/getTestSelector";
const dayjs = require('dayjs')
import inputValidBuilderDetails from '../../fixtures/input/builder-details';

const root_Selector = 'sappr';
const add_button = 'add-button';
const next_button = 'control-next';
const previous_button = 'control-back';
const root_step_1 = 'cadd2';
const root_step_2 = 'cadd3';
const empty_builder_message = 'builder-filtered-empty';
const builder_name_text_box = 'builder-search-input';
const builder_item_box = 'builder-filtered-entry';
const builder_name = 'builderName';
const selected_builder_name_label = 'builder-selected';
const add_more_contact_button = 'add-additional-button';
const remove_contact_button = 'remove-additional-button';
const rootTileProject = 'ctil2';

// ------------------- BEGIN FORM STEP 1 ------------------------------

let clickAddNewProject= ()=> {
    cy.get(getTestSelector([root_Selector],add_button))
        .click();
}

let clickAddNewProjectRegularFlow=()=>{
    cy.get('[data-testid=btn-add-new]')
    .first()
    .click();
}

let clickAddNewProjecTemplateFlow=()=>{
    cy.get('[data-testid=btn-add-new]')
    .last()
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
    //   cy.get('.cform-content')
    //   .children()
    //   .find('[type=text]')
    //   .first()
    //   .type('{esc}',{force:true})
    //   .type('{enter}',{force:true});
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

// -------------------  END FORM STEP 1 -------------------------------
// ------------------- BEGIN FORM STEP 2 ------------------------------

let fillOutContactDetails=(first_name,last_name,phone,email)=>{
    cy.get("[name='primaryContact.firstName']")
    .clear()
    .type(first_name);

    cy.get("[name='primaryContact.lastName']")
    .clear()
    .type(last_name);

    cy.get("[name='primaryContact.phoneNumber']")
    .clear()
    .type(phone);

    cy.get("[name='primaryContact.emailAddress']")
    .clear()
    .type(email);
}

let checkRequiredCustomerDetailsFields=()=>{
    cy.get('[data-testid=primaryContactFName] > .input-wrapper > .error-msg')
    .should('be.visible')

    cy.get('[data-testid=primaryContactLName] > .input-wrapper > .error-msg')
    .should('be.visible')

    cy.get('[data-testid=primaryContactPhone] > .input-wrapper > .error-msg')
    .should('be.visible')

    cy.get('[data-testid=primaryContactEmail] > .input-wrapper > .error-msg')
    .should('be.visible')
}


let handleDialogBox=()=>{
    cy.on('window:confirm', str => {
        cy.get('button').click();
        return true;
      });
}

let clickAddMoreContact=()=>{
    cy.get(getTestSelector([root_step_2],add_more_contact_button))
        .click();
}

let fillOutAdditionalContactDetails=(first_name,last_name,phone,email)=>{
    cy.get('[name="additionalContact.firstName"]')
    .type(first_name);

    cy.get('[name="additionalContact.lastName"]')
    .type(last_name);

    cy.get('[name="additionalContact.phoneNumber"]')
    .type(phone);

    cy.get('[name="additionalContact.emailAddress"]')
    .type(email);
}

let checkErrorMessageShouldAppear=(expected_error_message)=>{
    cy.get('.error-msg')
    .should('be.visible')
    .contains(expected_error_message);
}

let clickRemoveAdditionalContact=()=>{
    cy.get(getTestSelector([root_step_2],remove_contact_button))
    .click();
}

let fillOutPreferencesDetails=(prefered_contact_method,contact_time,notes)=>{

    cy.get('[name=preferredContactMethod]')
    .select(prefered_contact_method);
    
    cy.get('[name=preferredContactTime]')
    .select(contact_time);

    cy.get('[name=internalNotes]')
    .type(notes);
}

let clickPreviousButton=()=>{
    cy.get(getTestSelector([root_Selector],previous_button))
    .click();
}

// ------------------- END FORM STEP 2 ------------------------------
// ------------------- BEGIN FORM STEP 3 ------------------------------

let checkStepThreeAppear=()=>{
    cy.get('[data-testid=step-text]')
    .contains('Step 3 of 4');
}

let fillOutAboutTheBuild=(project_name, project_type,size
    , num_of_floor,build_type)=>{

        cy.get('[name=name]')
        .clear()
        .type(project_name);

        /*cy.get('[data-testid=radio-tab-option]')
        .each(($item, index, $list) => {
            cy
                .get($item)
                .children()
                .first()
                .invoke('val')
                .then(value => {
                    if(value == project_type || value ==num_of_floor || value ==build_type )
                    {
                        cy
                        .get($item)
                        .click();
                    }
                    
                })

        }); */

        cy.get('[data-testid="radio-projectType-NewBuild"]')
        .click();
       
        cy.get('[data-testid="radio-buildingNumberOfFloors-One"]')
        .click();

        cy.get('[data-testid="radio-buildingType-House"]')
        .click();


        cy.get('[name=buildingSize]')
        .type(size);
}

let checkRequiredProjectDetailsFields=()=>{
    cy.get('[data-testid=name] > .input-wrapper > .error-msg')
    .should('be.visible');

    cy.get('[data-testid=projectType] > .input-wrapper > .error-msg')
    .should('be.visible');

    cy.get('[data-testid=buildingType] > .input-wrapper > .error-msg')
    .should('be.visible');

    cy.get('[data-testid=numberOfFloorOptions] > .input-wrapper > .error-msg')
    .should('be.visible');
    
    // cy.get('[data-testid=postcode] > .input-wrapper > .error-msg')
    // .should('be.visible');

    // cy.get('[data-testid=state] > .input-wrapper > .error-msg')
    // .should('be.visible');

    cy.get('[data-testid=houseNumber] > .input-wrapper > .error-msg')
    .should('be.visible');
    
    cy.get('[data-testid=street] > .input-wrapper > .error-msg')
    .should('be.visible');

    cy.get('[data-testid=suburb] > .input-wrapper')
    .should('be.visible');
}

let checkStateErrorMessage=(country_name)=>{
    cy.get('[name=country]')
    .select(country_name);

    cy.get('[data-testid=state] > .input-wrapper > .error-msg')
    .should('be.visible');

}

let filloutBuildLocation=(country,state,postcode,house,street,suburb)=>{
    cy.get('[name=country]')
    .select(country);

    cy.get('[name=state]')
    .select(state);

    cy.get('[name=postcode]')
    .clear()
    .type(postcode);

    cy.get('[name=houseNumber]')
    .clear()
    .type(house);

    cy.get('[name=street]')
    .clear()    
    .type(street);

    cy.get('[name=suburb]')
    .clear()
    .type(suburb);
    
}

// ------------------- END FORM STEP 3 ------------------------------
// ------------------- BEGIN FORM STEP 4 ------------------------------
let uploadFloorPlan=()=>{
    cy.fixture('file/uploadPDF.pdf', 'base64').then(fileContent => {
        cy.get('[data-testid="file-input-field"]').first()
        .upload(
          { fileContent, fileName: 'file/floorplans.pdf', mimeType: 'application/pdf' },
          { subjectType: 'input' },
        );
        cy.get('.cuplo-upload-name').should('contain','floorplans.pdf');
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
        cy.get('.cuplo-upload-name').should('contain','floorplans.pdf');
      });
      cy.wait(1000);
}

let uploadFileExistFile=()=>{
    cy.fixture('file/uploadPDF.pdf', 'base64').then(fileContent => {
        cy.get('[data-testid="file-input-floorplan"]').upload(
          { fileContent, fileName: 'file/uploadPDF.pdf', mimeType: 'application/pdf' },
          { subjectType: 'input' },
        );
        cy.get('.cadd1-upload-name').should('contain','uploadPDF.pdf')
      });

      cy.wait(1000);

      cy.fixture('file/uploadPDF.pdf', 'base64').then(fileContent => {
        cy.get('[data-testid="file-input-floorplan"]').upload(
          { fileContent, fileName: 'file/uploadPDF.pdf', mimeType: 'application/pdf' },
          { subjectType: 'input' },
        );
        cy.get('.cadd1-error').should('contain','The file you have selected already exists')
      }); 
      
}

let checkProjectListAppear=()=>{
    cy.wait(1000);
    cy.get(getTestSelector([rootTileProject], 'name'))   
    .should('be.visible');
}

let testingInput = {
    builder_name : "Automation",
    first_name: "Automation", 
    last_name: "Testing", 
    full_name : "Automation Testing",
    phone: "0412345678", 
    email: "tester@mail.com",
    address_line1: "123 Test road",
    prefered_contact_method:"Phone",
    prefered_contact_time:"Morning",
    notes:"This is automation test running",
    project_name:"Automation Test Project " + dayjs().format('DDMMYYYY'),
    project_name_prefix:"Automation Test",
    country:"Australia",
    state:"VIC",
    postcode:"3000",
    house_number:"home 01",
    suburb:"george town",
    project_type:"NewBuild",
    size:"1000",
    number_of_floor:"One",
    building_type:"House"

}

let inputInProgress = {
    builder_name : "Auto",
    first_name: "Test BOM No Product", 
    last_name: "Testing", 
    full_name : "Test BOM No Product",
    phone: "0412345678", 
    email: "tester@mail.com",
    address_line1: "123 Test road",
    prefered_contact_method:"Phone",
    prefered_contact_time:"Morning",
    notes:"This is automation test running",
    project_name:"Automation Test BOM No Product Project " + dayjs().format('DDMMYYYY'),
    project_name_prefix:"Automation Test BOM No Product Project ",
    project_name_prefix_lowercase:"automation test bom no product project ",
    country:"Australia",
    state:"VIC",
    postcode:"3000",
    house_number:"home 01",
    suburb:"george town",
    project_type:"NewBuild",
    size:"1000",
    number_of_floor:"One",
    building_type:"House"

}

let validAddNewProjectProcess=()=>{
    clickAddNewProject();
    clickAddNewProjectRegularFlow();
    typeToBuilderNameTextBox(inputValidBuilderDetails.builderDisplayName);
    //checkBuilderDetailsInfo(testingInput.builder_name);
    clickNextButton();
    fillOutContactDetails(testingInput.first_name,testingInput.last_name,
        testingInput.phone,testingInput.email);
    fillOutPreferencesDetails(testingInput.prefered_contact_method,
        testingInput.prefered_contact_time,
        testingInput.notes);
    clickNextButton();
    fillOutAboutTheBuild(testingInput.project_name,testingInput.project_type,
        testingInput.size,testingInput.number_of_floor,testingInput.building_type);
    filloutBuildLocation(testingInput.country,
        testingInput.state, testingInput.postcode, testingInput.house_number,
        testingInput.address_line1, testingInput.suburb);
    clickNextButton();
    uploadFloorPlan();
    uploadInclusionPlan();
    clickNextButton();
    checkProjectListAppear();
    
}

let addProjectForInProgressStatus=()=>{
    clickAddNewProject();
    clickAddNewProjectRegularFlow();
    typeToBuilderNameTextBox(inputValidBuilderDetails.builderDisplayName);
    //checkBuilderDetailsInfo(inputInProgress.builder_name);
    clickNextButton();
    fillOutContactDetails(inputInProgress.first_name,inputInProgress.last_name,
        inputInProgress.phone,inputInProgress.email);
    fillOutPreferencesDetails(inputInProgress.prefered_contact_method,
        inputInProgress.prefered_contact_time,
        inputInProgress.notes);
    clickNextButton();
    fillOutAboutTheBuild(inputInProgress.project_name,inputInProgress.project_type,
        inputInProgress.size,inputInProgress.number_of_floor,inputInProgress.building_type);
    filloutBuildLocation(inputInProgress.country,
        inputInProgress.state, inputInProgress.postcode, inputInProgress.house_number,
        inputInProgress.address_line1, inputInProgress.suburb);
    clickNextButton();
    uploadFloorPlan();
    // to save time
    //uploadInclusionPlan();
    clickNextButton();
    checkProjectListAppear();
}

let testingInvalidInput = {
    builder_name : "Clever Homes",
    first_name: "Automation", 
    last_name: "Testing", 
    phone: "0412345678", 
    email: "tester@mail.com",
    address_line1: "123 Test road",
    prefered_contact_method:"Phone",
    prefered_contact_time:"Morning",
    notes:"This is automation test running",
    project_name:"Automation Test Project",
    country:"Australia",
    state:"VIC",
    postcode:"3000",
    house_number:"home 01",
    suburb:"george town",
    project_type:"New build",
    size:"1000",
    number_of_floor:"1",
    building_type:"House",
    invalid_email:"abc-sadasd-.sdasdsd",
    invalid_phone:"!213sfsdf",
    error_invalid_email:"Provide valid email",
    error_invalid_phone:"Provide valid phone number",
    second_contact_name:"second contact name",
    second_contact_email:"second@mail.com"
}

let checkAllValidation=()=>{
    
        clickAddNewProject();
        clickAddNewProjectRegularFlow();
        checkButtonNextDisable();
        // TODO UNCOMMENT THIS ONCE GOT CLARYFICATION FROM TESS
        //checkEmptyBuilderErrorMessage();
        checkButtonNextDisable();
        // check next button disabled when invalid builder is filled out
        typeToBuilderNameTextBoxDirectly(inputValidBuilderDetails.builderDisplayName);
        checkButtonNextDisable();

        typeToBuilderNameTextBox(inputValidBuilderDetails.builderDisplayName);
        clickNextButton();
        // check validation message is showing for step 2
        clickNextButton();
        checkRequiredCustomerDetailsFields();
        // check invalid email
        fillOutContactDetails(testingInvalidInput.first_name,testingInvalidInput.last_name,
            testingInvalidInput.invalid_phone,testingInvalidInput.invalid_email);
        clickNextButton();
        checkErrorMessageShouldAppear(testingInvalidInput.error_invalid_email);
        fillOutContactDetails(testingInvalidInput.first_name,testingInvalidInput.last_name,
            testingInvalidInput.invalid_phone,testingInvalidInput.email);
        clickNextButton();
        // check invalid phone
        checkErrorMessageShouldAppear(testingInvalidInput.error_invalid_phone);
        fillOutContactDetails(testingInvalidInput.first_name,testingInvalidInput.last_name,
            testingInvalidInput.phone,testingInvalidInput.email);
        clickAddMoreContact();
        // add additional contact
        fillOutAdditionalContactDetails(testingInvalidInput.second_contact_name,testingInvalidInput.last_name,
            testingInvalidInput.phone,testingInvalidInput.second_contact_email);
        fillOutPreferencesDetails(testingInvalidInput.prefered_contact_method,
            testingInvalidInput.prefered_contact_time,
            testingInvalidInput.notes);
        clickNextButton();
        checkStepThreeAppear();
        // check validation message is showing for step 3
        clickNextButton();
        checkRequiredProjectDetailsFields();
        checkStateErrorMessage(testingInvalidInput.country);
        // close form
        // clickCloseForm();
        // handleDialogBox();
      
    
}

// ------------------- END FORM STEP 4 ------------------------------

export {
    clickAddNewProject,
    typeToBuilderNameTextBox,
    clickBuilderByBuilderName,
    checkEmptyBuilderErrorMessage,
    clickNextButton,
    checkBuilderDetailsInfo,
    clickAddMoreContact,
    clickRemoveAdditionalContact,
    fillOutAdditionalContactDetails,
    fillOutPreferencesDetails,
    fillOutContactDetails,
    clickPreviousButton,
    fillOutAboutTheBuild,
    filloutBuildLocation,
    uploadFloorPlan,
    uploadInclusionPlan,
    checkButtonNextDisable,
    checkRequiredCustomerDetailsFields,
    checkErrorMessageShouldAppear,
    checkStepThreeAppear,
    checkRequiredProjectDetailsFields,
    clickCloseForm,
    handleDialogBox,
    uploadFileExistFile,
    validAddNewProjectProcess,
    checkAllValidation,
    checkProjectListAppear,
    checkStateErrorMessage,
    typeToBuilderNameTextBoxDirectly,
    addProjectForInProgressStatus,
    clickAddNewProjectRegularFlow,
    clickAddNewProjecTemplateFlow,
    testingInput,
    inputInProgress
    
}