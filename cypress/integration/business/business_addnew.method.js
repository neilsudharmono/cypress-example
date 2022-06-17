/// <reference types="Cypress" />

import { getTestSelector} from "../../support/getTestSelector";
//------------------ Step 1----------------------------------
const page_root = "sappr";
const root_Selector = "cform";
const add_button = 'add-button';
const business_name_locator = "businessAccountName";
const phone_locator = "phoneNumber";
const sap_number = "sapAccountNumber";
const comments = "comments";
const next_button = 'control-next';
const button_root = "cview";
const dayjs = require('dayjs')
//------------------ Step 2 ----------------------------------
const existing_user_id = "existingUserId";
let generateRandomNumber = ()=>{
    var min = 100;
    var max = 10000;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let businessValidInput = {
    business_name : "Test Business AT-" + dayjs().format('DDMMYYYY') + generateRandomNumber(),
    business_name_prefix : "Test Business AT-",
    business_usereExist: 'Schneider',
    sap_number : "123456789",
    phone: "0412345678", 
    email: "tester@mail.com",
    comment:"This is automation test running",
    project_name:"Automation Test Project",
    country:"Australia",
    state:"VIC",
    postcode:"3000",
    address:"Level 1, 195 Little Collins St",
    house_number:"01",
    suburb:"george town",
    role : 'administrator',
    manageBy : 'Automation Business',
    accountTypeInternal : 'Internal',
    accountTypeExternal : 'External'

}

let businessContactValidInput = {
    firstname : "AT contact",
    lastname : "new",
    phone: "0412345678", 
    email: "testerx@mail.com"    
}

// ------------------- STEP 1 ------------------------------//
let clickAddNewBusiness= ()=> {
    cy.get(getTestSelector([page_root],add_button))
    .click();
}

let checkBusinessListAppear=()=>{
    cy.wait(1000);
    cy.get(getTestSelector(['cbuit'], 'businessName'))   
    .should('be.visible');
}

let filloutDetails=(business_name,phone,sap,comment)=>{
    cy.get('[name=name]')
    .clear()
    .type(business_name);

    cy.get(getTestSelector([root_Selector],phone_locator))
    .children()
    .find("[name=phoneNumber]")
    .type(phone);

    cy.get(getTestSelector([root_Selector],sap_number))
    .children()
    .find("[name=sapAccountNumber]")
    .clear()
    .type(sap);

    cy.get(getTestSelector([root_Selector],comments))
    .children()
    .find("[name=internalNotes]")
    .type(comment);
}


let setAccountDetail=()=>{
    cy.get('[name=managedByAccountId]')
    .select(businessValidInput.manageBy);

    cy.get('[name=accountType]')
    .select(businessValidInput.accountTypeInternal);
}

let filloutBusinessLocation=(country,state,postcode,house,street,suburb)=>{
    cy.get('[name=country]')
    .select(country);

    cy.get('[name=state]')
    .select(state);

    cy.get('[name=postcode]')
    .type(postcode);

    cy.get('[name=houseNumber]')
    .type(house);

    cy.get('[name=street]')
    .type(street);

    cy.get('[name=suburb]')
    .type(suburb);
    
}

let uploadLogo=()=>{
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

let clickAddMoreContact=()=>{
    cy.get('button')
    .contains('Add new contact')
    .click();
}

let checkMandatoryErrorMessage=()=>{
    cy.get('[data-testid=businessName] > .input-wrapper > .error-msg')
    .scrollIntoView()
    .should('be.visible');

    cy.get('[data-testid=phoneNumber] > .input-wrapper > .error-msg')
    .should('be.visible');

    cy.get('[data-testid=sapAccountNumber] > .input-wrapper > .error-msg')
    .should('be.visible');

    // this because its already predifined on localization
    // cy.get('[data-testid=country] > .input-wrapper > .error-msg')
    // .should('be.visible');

    cy.get('[data-testid=postcode] > .input-wrapper > .error-msg')
    .should('be.visible');

    cy.get('[data-testid=houseNumber] > .input-wrapper > .error-msg')
    .should('be.visible');

    cy.get('[data-testid=street] > .input-wrapper > .error-msg')
    .should('be.visible');

    cy.get('[data-testid=suburb] > .input-wrapper > .error-msg')
    .should('be.visible');

    // TODO UNCOMMENT THIS ONCE ITS FIXED BY DEV
    // cy.get('.cuplo-error')
    // .should('be.visible');
}

let filloutValidValueForStep1Form=()=>{
    filloutDetails(businessValidInput.business_name,businessValidInput.phone
        ,businessValidInput.sap_number,businessValidInput.comment);

    filloutBusinessLocation(businessValidInput.country,
        businessValidInput.state, businessValidInput.postcode,
        businessValidInput.house_number,businessValidInput.address, businessValidInput.suburb);

    uploadLogo("file/clipsallogopng.png");   

    
}

// ------------------- STEP 2 ------------------------------//

let typeToExistingUserTextbox=()=>{
    cy.get('[data-testid=auto-input]')
    .clear()
    .type(" ");

    cy.get('[data-testid=suggestion-item]')
    .first()
    .click();
    
    clickNext();


}

let fillOutAddNewContactDetail=()=>{
    cy.get('[name="contactUserRoleCode"]')
    .select(businessValidInput.role);
    cy.get('[name="contactUser.firstName"]')
    .type(businessContactValidInput.firstname + generateRandomNumber());
    cy.get('[name="contactUser.lastName"]')
    .type(businessContactValidInput.lastname);
    cy.get('[name="contactUser.phoneNumber"]')
    .type(businessContactValidInput.phone);
    cy.get('[name="contactUser.emailAddress"]')
    .type(generateRandomNumber()+ businessContactValidInput.email);
    cy.get('[name=canAdjustProductPrice]')
    .click({multiple: true, force : true });
    clickNext();
}

let checkErrorMessageExistingAccount=()=>{
    cy.get('.error-msg')
    .should('be.visible');
}

let checkErrorMessageNewContact=()=>{
    cy.get('[data-testid=firstName] > .input-wrapper > .error-msg')
    .should('be.visible');

    cy.get('[data-testid=lastName] > .input-wrapper > .error-msg')
    .should('be.visible');

    cy.get('[data-testid=phone] > .input-wrapper > .error-msg')
    .should('be.visible');

    cy.get('[data-testid=email] > .input-wrapper > .error-msg')
    .should('be.visible');
}

//-------------------------Step 3 ----------------------------------------

let chooseChargeTotalElectrical=(valueChargeTotalElectrical)=>{
    cy.get('[data-testid=chargesTotalElectrical]')
    .click();

    cy.get('[name="businessContract.chargeValue"]')
    .type(valueChargeTotalElectrical);
}

let chooseChargeTotalUpsell=(valueChargeTotalUpsell)=>{
    cy.get('[data-testid=chargeStructure] > .input-wrapper > .error-msg > [name=chargeStructure]')
    .check("% Charges Total Upsell");
    cy.get('[data-testid=chargeStructure] > .input-wrapper > .error-msg > [name=chargeStructureValue]')
    .type(valueChargeTotalUpsell);
}

let chooseFlatFee=(valueFlatFee)=>{
    cy.get('[data-testid=chargeStructure] > .input-wrapper > .error-msg > [name=chargeStructure]')
    .check("Flat Fee Per Project");
    cy.get('[data-testid=chargeStructure] > .input-wrapper > .error-msg > [name=chargeStructureValue]')
    .type(valueFlatFee);
}

let choosePeriodicFee=(valuePeriodicFee)=>{
    cy.get('[data-testid=chargeStructure] > .input-wrapper > .error-msg > [name=chargeStructure]')
    .check("Periodic Fee Charged");
    cy.get('[data-testid=chargeStructure] > .input-wrapper > .error-msg > [name=chargeStructureValue]')
    .type(valuePeriodicFee);
}

let chooseContractPeriod=(date_from, date_to)=>{
    // set date from
    cy.get('[name="businessContract.startDateTimeUtc"]')
    .type(date_from);

    cy.get('[name="businessContract.endDateTimeUtc"]')
    .type(date_to);

}

let chooseInvoice=()=>{
    cy.get('[name="businessContract.canGenerateInvoiceDetail"]')
    .click( {force: true} );
    
}

let checkErrorMessageChargeDetail=()=>{
    cy.get('[data-testid=chargesTotalElectrical]')
    .click();

    cy.get('[name="businessContract.chargeValue"]')
    .next()
    .contains('Provide valid number');

    cy.get('[data-testid=chargesTotalUpsell]')
    .click();

    cy.get('[name="businessContract.chargeValue"]')
    .next()
    .contains('Provide valid number');

    cy.get('[data-testid=chargesFlatFee]')
    .click();

    cy.get('[name="businessContract.chargeValue"]')
    .next()
    .contains('Provide valid number');

    cy.get('[data-testid=chargesPeriodicFee]')
    .click();

    cy.get('[name="businessContract.chargeValue"]')
    .next()
    .contains('Provide valid number');

    cy.get('[name="businessContract.chargePeriod"]')
    .next()
    .contains('Required');

    cy.get('[data-testid=contractStart] > .input-wrapper > .error-msg')
    .contains('Required')
    .should('be.visible');

    cy.get('[data-testid=contractEnd] > .input-wrapper > .error-msg')
    .contains('Required')
    .should('be.visible');

   
}

export{
    clickAddNewBusiness,
    filloutDetails,
    filloutBusinessLocation,
    uploadLogo,
    clickNext,
    checkMandatoryErrorMessage,
    filloutValidValueForStep1Form,
    typeToExistingUserTextbox,
    fillOutAddNewContactDetail,
    checkErrorMessageNewContact,
    chooseChargeTotalElectrical,
    chooseChargeTotalUpsell,
    chooseFlatFee,
    choosePeriodicFee,
    chooseContractPeriod,
    chooseInvoice,
    checkErrorMessageChargeDetail,
    checkErrorMessageExistingAccount,
    clickAddMoreContact,
    checkBusinessListAppear,
    setAccountDetail,
    businessValidInput
}
