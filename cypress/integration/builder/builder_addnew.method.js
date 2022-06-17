import { getTestSelector} from "../../support/getTestSelector";
import inputValidBuilderDetails from '../../fixtures/input/builder-details';
import validContactInput from '../../fixtures/input/contact-details';

const next_button = 'control-next';
const button_root = "cview";


// ------------------- STEP 1 ------------------------------//
let clickAddNewBuilder= ()=> {
    cy.get('[data-testid=link-Adda Builder]')
    .click();
}

let clickAddNewBuilderLink=()=>{
    cy.get('[data-testid=text-icon-button]')
    .click();
}

let checkBuilderListAppear=()=>{
    cy.wait(2000);
    cy.get(getTestSelector(['ctil4'], 'name'))   
    .should('be.visible');
}

let filloutBuilderDetails=()=>{
    cy.get('[name=name]')
    .type(inputValidBuilderDetails.builderDisplayName);

    cy.get('[name=tradingName]')
    .type(inputValidBuilderDetails.builderTradingName);

    cy.get('[name=emailAddress]')
    .type(inputValidBuilderDetails.builderEmail);

    cy.get('[name=phoneNumber]')
    .type(inputValidBuilderDetails.builderPhoneNumber);

    cy.get('[name=website]')
    .type(inputValidBuilderDetails.builderWebsite);

    cy.get('[data-testid=internalNotes] > .input-wrapper > [name=internalNotes]')
    .type(inputValidBuilderDetails.internalNotes);

   
}



let filloutBuilderLocation=()=>{
    cy.get('[name=primaryAddressCountry]')
    .select(inputValidBuilderDetails.builderAddressCountry);

    cy.get('[name="primaryAddressState"]')
    .select(inputValidBuilderDetails.builderState);

    cy.get('[name=primaryAddressPostcode]')
    .type(inputValidBuilderDetails.builderPostcode);

    cy.get('[name=primaryAddressHouseNumber]')
    .type(inputValidBuilderDetails.builderHouseNumber);

    cy.get('[name=primaryAddressStreet]')
    .type(inputValidBuilderDetails.builderAddress);

    cy.get('[name=primaryAddressSuburb]')
    .type(inputValidBuilderDetails.builderSuburb);
    
}

let uploadclipsallogopng=()=>{
    cy.fixture('file/clipsallogopng.png', 'base64').then(fileContent => {
        cy.get('[data-testid="file-input-field"]').upload(
          { fileContent, fileName: 'file/clipsallogopng.png', mimeType: 'image/jpeg' },
          { subjectType: 'input' },
        );
        cy.get('.cuplo-upload-name').contains('clipsallogopng.png');
      });
}

let clickNext= ()=> {
    cy.get(getTestSelector([button_root],next_button))
    .click();
}

let clickAddNewContact=()=>{
    cy.get('button')
    .contains('Add new contact')
    .click();
}

let clickSameAsPrimaryAddress=()=>{
    cy.get('[data-testid=sameAsPrimary]')
    .click();
}

// ------------------- STEP 2 ------------------------------//

let filloutBuilderPostalLocation=()=>{
    cy.get('[name=postalAddresscountry]')
    .select(inputValidBuilderDetails.builderAddressCountry);

    cy.get('[name=postalAddressstate]')
    .select(inputValidBuilderDetails.builderAddressState);

    cy.get('[name=postalAddressPostcode]')
    .type(inputValidBuilderDetails.builderPostcode);

    cy.get('[name=postalAddressLotNumber]')
    .type(inputValidBuilderDetails.builderHouseNumber);

    cy.get('[name=postalAddressStreetName]')
    .type(inputValidBuilderDetails.builderAddress);

    cy.get('[name=postalAddressSuburb]')
    .type(inputValidBuilderDetails.builderSuburb);
    
}

let checkErrorMessageOnAddress=()=>{
    // this based on localization
    // cy.get('[data-testid=primaryAddressCountry] > .input-wrapper > .error-msg')
    // .should('be.visible');

    cy.get('[data-testid=primaryAddressPostcode] > .input-wrapper > .error-msg')
    .should('be.visible');

    cy.get('[data-testid=primaryAddressLotNumber] > .input-wrapper > .error-msg')
    .should('be.visible');

    cy.get('[data-testid=primaryAddressStreetName] > .input-wrapper > .error-msg')
    .should('be.visible');

    cy.get('[data-testid=primaryAddressSuburb] > .input-wrapper > .error-msg')
    .should('be.visible');
}

let checkStateErrorMessage=()=>{
    cy.get('[name=primaryAddressCountry]')
    .select(inputValidBuilderDetails.builderAddressCountry);

    cy.get('[data-testid=primaryAddressState] > .input-wrapper > .error-msg')
    .should('be.visible');

}

let checkMandatoryErrorMessage=()=>{
    cy.get('[data-testid=builderDisplayName] > .input-wrapper > .error-msg')
    .scrollIntoView()
    .should('be.visible');

    cy.get('[data-testid=builderTradingName] > .input-wrapper > .error-msg')
    .should('be.visible');

    cy.get('[data-testid=emailAddress] > .input-wrapper > .error-msg')
    .should('be.visible');

    cy.get('[data-testid=phoneNumber] > .input-wrapper > .error-msg')
    .should('be.visible');

    cy.get('[data-testid=website] > .input-wrapper > .error-msg')
    .should('be.visible');

}

let typeToExistingUserTextbox=()=>{
    cy.get('[data-testid=auto-input]')
    .clear()
    .type(" ")
    .wait(1000);

    cy.get('[data-testid="suggestion-item"]')
    .first()
    .click();
    
    clickNext();


}

let fillOutAddNewContactDetail=()=>{
    cy.get('[name="contactUserRoleCode"]')
    .select(inputValidBuilderDetails.role);
    cy.get('[name="contactUser.firstName"]')
    .type(validContactInput.firstname);
    cy.get('[name="contactUser.lastName"]')
    .type(validContactInput.lastname);
    cy.get('[name="contactUser.phoneNumber"]')
    .type(validContactInput.phone);
    cy.get('[name="contactUser.emailAddress"]')
    .type(validContactInput.email);
    cy.get('[name=canAdjustProductPrices]')
    .click({force:true});
}

let checkErrorMessageExistingAccount=()=>{
    cy.get('[data-testid=contactUserId] > .input-wrapper > .error-msg')
    .should('be.visible');
}

let clickPermissionAdjustPrice=()=>{
    cy.get('[data-testid=canAdjustProductPrices]')
    .click();
}

let checkErrorMessageNewContact=()=>{
    cy.get('[data-testid=contactUser.firstName] > .input-wrapper > .error-msg')
    .should('be.visible');

    cy.get('[data-testid=contactUser.lastName] > .input-wrapper > .error-msg')
    .should('be.visible');

    cy.get('[data-testid=contactUser.phone] > .input-wrapper > .error-msg')
    .should('be.visible');

    cy.get('[data-testid=contactUser.emailAddress] > .input-wrapper > .error-msg')
    .should('be.visible');
}

//-------------------------Step 3 ----------------------------------------

let filloutBillOfMaterialPlan=()=>{
    cy.get('[name=standardDisclaimer]')
    .type(inputValidBuilderDetails.standardDisclaimer);

    cy.get('[name=projectComments]')
    .type(inputValidBuilderDetails.projectComment);
}

let checkErrorMessageBillOfMaterialPlan=()=>{
    cy.get('[data-testid=standardDisclaimer] > .input-wrapper > .error-msg')
    .should('be.visible');

    cy.get('[data-testid=projectComments] > .input-wrapper > .error-msg')
    .should('be.visible');

   
}

// ------------------- --------------- ------------------------------//

export {
    clickAddNewBuilder,
    clickAddNewBuilderLink,
    checkBuilderListAppear,
    filloutBuilderDetails,
    filloutBuilderLocation,
    uploadclipsallogopng,
    clickNext,
    clickAddNewContact,
    clickSameAsPrimaryAddress,
    filloutBuilderPostalLocation,
    checkMandatoryErrorMessage,
    typeToExistingUserTextbox,
    fillOutAddNewContactDetail,
    checkErrorMessageExistingAccount,
    clickPermissionAdjustPrice,
    checkErrorMessageNewContact,
    filloutBillOfMaterialPlan,
    checkErrorMessageBillOfMaterialPlan,
    checkErrorMessageOnAddress,
    checkStateErrorMessage
}