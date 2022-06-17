import inputValidBuilderDetails from '../../fixtures/input/builder-edit'
import validContactInput from '../../fixtures/input/contact_details'

let clickBuilderDetails =()=>{
  cy.get("[data-testid=link-BuilderDetails]")
  .first()
  .click();
  cy.wait(1000);
}

let clickFirstBusiness =()=>{
  cy.get("[data-testid=businessName]")
  .first()
  .click();
  cy.wait(1000);
}

let getBusinessWithBuilder=()=>{
  cy.request(PRODUCT_API_LINK)
  .its('body')
  .its('items')
}

let clickBackToAccountBusiness=()=>{
  cy.get('[data-testid=button-back-to-s]')
  .click();
}

let checkBuilderDetailsData= ()=> {
    cy.get('[name=name]')
    .should('exist');
    //.should('have.value',inputValidBuilderDetails.builderDisplayName);

    cy.get('[name=tradingName]')
    .should('exist');
    //.should('have.value',inputValidBuilderDetails.builderTradingName);

    cy.get('[name=phoneNumber]')
    .should('exist');
    //.should('have.value',inputValidBuilderDetails.builderPhoneNumber);

    cy.get('[name=website]')
    .should('exist');
    //.should('have.value',inputValidBuilderDetails.builderWebsite);

    cy.get('[name=emailAddress]')
    .should('exist');
    //.should('have.value',inputValidBuilderDetails.builderEmail);

    cy.get("[name=primaryAddressCountry]")
    .should('exist');
    //.should('have.value',validContactInput.country);

    cy.get("[name=primaryAddressPostcode]")
    .should('exist');
    //.should('have.value',validContactInput.postcode);
    
    cy.get("[name=primaryAddressState]")
    .should('exist');
    //.should('have.value',validContactInput.state);

    cy.get("[name=primaryAddressHouseNumber]")
    .should('exist');
    //.should('have.value',validContactInput.house_number);

    cy.get("[name=primaryAddressStreet]")
    .should('exist');
    //.should('have.value',validContactInput.street);

    cy.get("[name=primaryAddressSuburb]")
    .should('exist');
    //.should('have.value',validContactInput.suburb);
    
    cy.get("[name='contactUser.firstName']")
    .should('exist');
    //.should('have.value',validContactInput.first_name);

    cy.get("[name='contactUser.lastName']")
    .should('exist');
    //.should('have.value',validContactInput.last_name);

    cy.get("[name='contactUser.phoneNumber']")
    .should('exist');
    //.should('have.value',validContactInput.phone);
    
    cy.get("[name='contactUser.emailAddress']")
    .should('exist');
    //.should('have.value',validContactInput.email);

}

let clearAllRequiredFields= ()=> {
    cy.get('[name=name]')
   .clear();

    cy.get('[name=tradingName]')
   .clear();

    cy.get('[name=phoneNumber]')
   .clear();

    cy.get('[name=website]')
   .clear();

    cy.get('[name=emailAddress]')
   .clear();

    cy.get("[name=primaryAddressPostcode]")
   .clear();

    cy.get("[name=primaryAddressHouseNumber]")
   .clear();

    cy.get("[name=primaryAddressStreet]")
   .clear();

    cy.get("[name=primaryAddressSuburb]")
   .clear();
    
    cy.get("[name='contactUser.firstName']")
   .clear();

    cy.get("[name='contactUser.lastName']")
   .clear();

    cy.get("[name='contactUser.phoneNumber']")
   .clear();
    
    cy.get("[name='contactUser.emailAddress']")
   .clear();

}

let typeAllRequiredFields= ()=> {
    cy.get('[name=name]')
   .clear()
   .type(inputValidBuilderDetails.builderDisplayName);

    cy.get('[name=tradingName]')
   .clear()
   .type(inputValidBuilderDetails.builderTradingName);

    cy.get('[name=phoneNumber]')
   .clear()
   .type(inputValidBuilderDetails.builderPhoneNumber);

    cy.get('[name=website]')
   .clear()
   .type(inputValidBuilderDetails.builderWebsite);

    cy.get('[name=emailAddress]')
   .clear()
   .type(inputValidBuilderDetails.builderEmail);

  //   cy.get("[name=primaryAddressCountry]")
  //   .clear()
  //  .type(validContactInput.country);

    cy.get("[name=primaryAddressPostcode]")
   .clear()
   .type(validContactInput.postcode);

    cy.get("[name=primaryAddressState]")
   .type(validContactInput.state);

    cy.get("[name=primaryAddressHouseNumber]")
   .clear()
   .type(validContactInput.house_number);

    cy.get("[name=primaryAddressStreet]")
   .clear()
   .type(validContactInput.street);

    cy.get("[name=primaryAddressSuburb]")
   .clear()
   .type(validContactInput.suburb);
    
    cy.get("[name='contactUser.firstName']")
   .clear()
   .type(validContactInput.first_name);

    cy.get("[name='contactUser.lastName']")
   .clear()
   .type(validContactInput.last_name);

    cy.get("[name='contactUser.phoneNumber']")
   .clear()
   .type(validContactInput.phone);
    
    cy.get("[name='contactUser.emailAddress']")
   .clear()
   .type(validContactInput.email);

}

let checkAllRequiredErrorMessages= ()=> {
  cy.get('[name=name]')
  .scrollIntoView()
  .next()
  .should('have.class','error-msg')
  .contains('Required')
  .should('be.visible');

  cy.get('[name=tradingName]')
  .scrollIntoView()
  .next()
  .should('have.class','error-msg')
  .contains('Required')
  .should('be.visible');

  cy.get('[name=phoneNumber]')
  .scrollIntoView()
  .next()
  .should('have.class','error-msg')
  .contains('Required')
  .should('be.visible');
  

  cy.get('[name=website]')
  .scrollIntoView()
  .next()
  .should('have.class','error-msg')
  .contains('Required')
  .should('be.visible');

  cy.get('[name=emailAddress]')
  .scrollIntoView()
  .next()
  .should('have.class','error-msg')
  .contains('Required')
  .should('be.visible');


  cy.get("[name=primaryAddressPostcode]")
  .scrollIntoView()
  .next()
  .should('have.class','error-msg')
  .contains('Required')
  .should('be.visible');
  
  cy.get("[name=primaryAddressHouseNumber]")
  .scrollIntoView()
  .next()
  .should('have.class','error-msg')
  .contains('Required')
  .should('be.visible');
  

  cy.get("[name=primaryAddressStreet]")
  .scrollIntoView()
  .next()
  .should('have.class','error-msg')
  .contains('Required')
  .should('be.visible');
  

  cy.get("[name=primaryAddressSuburb]")
  .scrollIntoView()
  .next()
  .should('have.class','error-msg')
  .contains('Required')
  .should('be.visible');
  
  
  cy.get("[name='contactUser.firstName']")
  .scrollIntoView()
  .scrollIntoView()
  .next()
  .should('have.class','error-msg')
  .contains('Required')
  .should('be.visible');
  

  cy.get("[name='contactUser.lastName']")
  .scrollIntoView()
  .next()
  .should('have.class','error-msg')
  .contains('Required')
  .should('be.visible');
  

  cy.get("[name='contactUser.phoneNumber']")
  .scrollIntoView()
  .next()
  .should('have.class','error-msg')
  .contains('Required')
  .should('be.visible');
  
  
  cy.get("[name='contactUser.emailAddress']")
  .scrollIntoView()
  .next()
  .should('have.class','error-msg')
  .contains('Required')
  .should('be.visible');
  

}

let checkContactDetailsData= ()=> {
    cy.get('[data-testid=contactName]')
    .contains(inputValidBuilderDetails.contactName);
    cy.get('[data-testid=contactPhone]')
    .contains(inputValidBuilderDetails.contactPhone);
    cy.get('[data-testid=contactEmail]')
    .contains(inputValidBuilderDetails.contactEmail);
}

let checkPostalAddressData= ()=> {
    cy.get('[data-testid=postalAddress]')
    .contains(inputValidBuilderDetails.postalAddress);
}

let checkInternalNotes =()=>{
    cy.get('[name=standardDisclaimer]')
    .should('exist');
    //.contains(inputValidBuilderDetails.standardDisclaimer);

    cy.get('[name=projectComments]')
    .should('exist');
    //.contains(inputValidBuilderDetails.standardProjectComment);
}

let uploadJPGLogo=()=>{
    cy.fixture('file/clipsallogopng.png', 'base64').then(fileContent => {
        cy.get('[data-testid="file-input-field"]').upload(
          { fileContent, fileName: 'file/clipsallogopng.png', mimeType: 'image/jpeg' },
          { subjectType: 'input' },
        );
        cy.get('.cuplo-upload-name').contains('clipsallogopng.png');
      });
}

let uploadPngLogo=()=>{
    cy.fixture('file/clipsallogopng.png', 'base64').then(fileContent => {
        cy.get('[data-testid="file-input-field"]').upload(
          { fileContent, fileName: 'file/clipsallogopng.png', mimeType: 'image/png' },
          { subjectType: 'input' },
        );
        cy.get('.cuplo-upload-name').contains('clipsallogopng.png');
      });
}

let uploadMultipleLogo=()=>{
    cy.fixture('file/clipsallogopng.png', 'base64').then(fileContent => {

        cy.get('[data-testid="file-input-field"]').upload(
          { fileContent, fileName: 'file/clipsallogopng.png', mimeType: 'image/jpeg' },
          { subjectType: 'input' },
        );

        cy.wait(1000);

        cy.get('[data-testid="file-input-field"]').upload(
          { fileContent, fileName: 'file/clipsallogopng.png', mimeType: 'image/png' },
          { subjectType: 'input' },
        );

        
        cy.get('.cuplo-error').contains('Maximum number of files reached');
  });
}

let uploadInvalidFile=()=>{
    cy.fixture('file/uploadPDF.pdf', 'base64').then(fileContent => {
        cy.get('[data-testid="file-input-field"]').upload(
          { fileContent, fileName: 'file/uploadPDF.pdf', mimeType: 'image/pdf' },
          { subjectType: 'input' },
        );
        cy.get('.cuplo-error').contains('The file you have selected is not in the correct format');
      });
}

let uploadMoreThanMaxLogo=()=>{
    cy.fixture('file/LargeImage30MB.jpg', 'base64').then(fileContent => {
        cy.get('[data-testid="file-input-field"]').upload(
          { fileContent, fileName: 'file/LargeImage30MB.jpg', mimeType: 'image/jpeg' },
          { subjectType: 'input' },
        );
        cy.wait(Cypress.env('waitForLoading'));
        cy.get('.cuplo-error').contains('The file is too big');
      });
}

let clickSaveChanges=()=>{
  cy.get('[data-testid=button-submit]')
  .click(); 
}

let checkSuccessMessageAppear=()=>{
  // need to remove this once correct API implemented (currently still trial so it takes time to update)
  cy.wait(5000);

  cy.get("[data-testid=notice-msg]")
  .contains("Updating the Builder...")
  .should('not.exist');

  cy.wait(3000)

  cy.get("[data-testid=notice-msg]")
  .contains("updated successfully!");
}
export{
  clickBackToAccountBusiness,
    clickBuilderDetails,
    checkContactDetailsData,
    checkBuilderDetailsData,
    checkPostalAddressData,
    checkInternalNotes,
    uploadPngLogo,
    uploadJPGLogo,
    clickSaveChanges,
    uploadInvalidFile,
    uploadMoreThanMaxLogo,
    uploadMultipleLogo,
    clearAllRequiredFields,
    typeAllRequiredFields,
    checkAllRequiredErrorMessages,
    checkSuccessMessageAppear,
    clickFirstBusiness
}