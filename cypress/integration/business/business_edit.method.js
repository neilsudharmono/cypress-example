/// <reference types="Cypress" />

import { getTestSelector} from "../../support/getTestSelector";
import validBusinessDetailInput from '../../fixtures/input/business_details'
import validContact from '../../fixtures/input/contact_details'
import {BUSSINESS_API_LINK,BUSSINESS_API_LINK_2} from '../../support/baseConst';
import {businessValidInput} from './business_addnew.method';
const root_Selector = "cform";
const phone_locator = "phoneNumber";

let getFirstBusinessLink=(is_expired)=>{
    
    cy.get('[data-testid="keyword-search"]')
    .type("Test Business AT-")

    cy.get('[data-testid="apply-filter-btn"]')
    .click();
    let href_value = "";
    cy.get(getTestSelector(['cbuit'], 'link')) 
    .first()
    .invoke('attr', 'href')
      .then(href => {          
        href_value = href.split('/')[1];
        let valid_url = BUSSINESS_API_LINK_2+'/'+ href_value;
        cy.log(href_value)
        cy.log(valid_url);
        const businessid = href_value.toString();
        
        //writefile is used to change the id of the latest project that are chosen.
        // cy.writeFile('cypress/fixtures/data/business-edit.json', {
            
        //         code:200,
        //         status:'OK',
        //         result:'Success',
        //         messages:null,
        //         requestId:null,
        //         dataType:'BusinessAccountDetail',
        //         count:1,
        //         items:[
        //            {
        //               id:businessid,
        //               name:'Wisdom Homes AUTOMATION',
        //               phoneNumber:'04123456789',
        //               sapAccountNumber:'12345678900',
        //               country:'Australia',
        //               postcode:'3166',
        //               state:'VIC',
        //               houseNumber:'176',
        //               street:'300 Rose St.',
        //               suburb:'Collingwood',
        //               internalNotes:'',
        //               isActive:true,
        //               canAdjustProductPrices:true,
        //               lastModifiedDateTimeUtc:'20200707T054657Z',
        //               lastModifiedBy:'Test User',
        //               businessContract:{
        //                  chargeType:'FlatFeePerProject',
        //                  chargeValue:'12.25',
        //                  chargePeriod:null,
        //                  canGenerateInvoiceDetail:true,
        //                  isExpiringSoon:false,
        //                  id:'98d2303a-211d-42bb-841a-1486d67d963d',
        //                  startDateTimeUtc:'20200320T000000Z',
        //                  endDateTimeUtc:'20210420T000000Z',
        //                  isActive:true
        //               },
        //               contactUser:{
        //                  id:'815bb033-ac0f-4c53-8111-7e4d7a9836dd',
        //                  federatedId:null,
        //                  firstName:'Cassius',
        //                  lastName:'West',
        //                  fullName:'Cassius West',
        //                  state:'VIC',
        //                  phoneNumber:'0412345678',
        //                  emailAddress:'Cassius@gmail.com',
        //                  userStatus:'Pending',
        //                  isDeleted: false,
        //                  createdDateTimeUtc:'20200630T010133Z',
        //                  lastModifiedDateTimeUtc:'20200707T054657Z',
        //                  userRoles:null,
        //               },
        //               logo:{
        //                  large:'https://clipspecassetsdev.blob.core.windows.net/https://dummyimage.com/500x370/aaa/fff.png',
        //                  medium:'https://clipspecassetsdev.blob.core.windows.net/https://dummyimage.com/500x370/aaa/fff.png',
        //                  small:'https://clipspecassetsdev.blob.core.windows.net/https://dummyimage.com/500x370/aaa/fff.png',
        //                  url:'/https://dummyimage.com/500x370/aaa/fff.png'
        //               },
        //               builders:[
        //                  {
        //                     id:'325bb013-ac0f-4c53-81e1-7e4d7a9836dd',
        //                     name:'Wisdom Homes',
        //                     primaryAddressSuburb:'Gregory Hills',
        //                     primaryAddressState:'NSW',
        //                     primaryAddressPostcode:'2557',
        //                     primaryAddressHouseNumber:'17-19',
        //                     primaryAddressStreet:'Central Hills Dr',
        //                     logo:null,
        //                     isActive:true,
        //                     contactUser:{
        //                        id:'815bb033-ac0f-4c53-8111-7e4d7a9836dd',
        //                        federatedId:null,
        //                        firstName:'Cassius',
        //                        lastName:'West',
        //                        fullName:'Cassius West',
        //                        state:'VIC',
        //                        phoneNumber:'0412345678',
        //                        emailAddress:'Cassius@gmail.com',
        //                        userStatus:'0',
        //                        isDeleted: false,
        //                        createdDateTimeUtc:'20200630T010133Z',
        //                        lastModifiedDateTimeUtc:'20200707T054657Z',
        //                        roles:null
        //                     },
        //                     createdDateTimeUtc:'20200630T010133Z'
        //                  },
        //                  {
        //                     id:'203c059a-1b39-4ba5-b81e-8734c5378dab',
        //                     name:'Builder Account Test',
        //                     primaryAddressSuburb:'melbourne',
        //                     primaryAddressState:'VIC',
        //                     primaryAddressPostcode:'1234',
        //                     primaryAddressHouseNumber:'01',
        //                     primaryAddressStreet:'FULL COMPLETE ADDRESS',
        //                     logo:null,
        //                     isDeleted: false,
        //                     contactUser:null,
        //                     createdDateTimeUtc:'20200710T072645Z'
        //                  },
        //                  {
        //                     id:'d62a913b-58d6-4ad4-b240-a8014805fbed',
        //                     name:'FILYA TESTER new builder test',
        //                     primaryAddressSuburb:'BALI',
        //                     primaryAddressState:'VIC',
        //                     primaryAddressPostcode:'3000',
        //                     primaryAddressHouseNumber:'101',
        //                     primaryAddressStreet:'Level 1, 195 Little Collins St',
        //                     logo:null,
        //                     isDeleted: false,
        //                     contactUser:null,
        //                     createdDateTimeUtc:'20200707T054801Z'
        //                  }
        //               ],
        //               businessAccountUsers:[
        //                  {
        //                     id:'815bb033-ac0f-4c53-8111-7e4d7a9836dd',
        //                     federatedId:null,
        //                     firstName:'Cassius',
        //                     lastName:'West',
        //                     fullName:'Cassius West',
        //                     state:'VIC',
        //                     phoneNumber:'0412345678',
        //                     emailAddress:'Cassius@gmail.com',
        //                     userStatus:'0',
        //                     isDeleted: false,
        //                     createdDateTimeUtc:'20200630T010133Z',
        //                     lastModifiedDateTimeUtc:'20200707T054657Z',
        //                     roles:null
        //                  }
        //               ],
        //               createdBy:'',
        //               createdDateTimeUtc:'20200630T010133Z'
        //            }
        //         ]
             
            
        //     });

        // cy.readFile('cypress/fixtures/data/business-edit.json').then((buss) => {
           
        //     expect(buss.items[0].id).to.equal(businessid); // true
        //     cy.connectToBusinessDetailData(valid_url);
        //     let business_href;

        //     if ( Cypress.env("runShowcase"))  
        //     {
        //        business_href = "business-accounts.html"+ href +'/details';
        //     }else
        //     {
        //        business_href = "businessaccounts"+ href +'/details';
        //     }
            
        //     cy.visit(business_href);

        //   });

        let business_href;

            if ( Cypress.env("runShowcase"))  
            {
               business_href = "business-accounts.html"+ href +'/details';
            }else
            {
               business_href = "businessaccounts"+ href +'/details';
            }
            
            cy.visit(business_href);
    
})}



let checkBusinessDetailDataRetrieved=()=>{
    cy.get('[name=name]')
    .should('have.value',validBusinessDetailInput.name);

    cy.get("[name=sapAccountNumber]")
    .should('have.value',validBusinessDetailInput.sapAccountNumber);

    cy.get("[name='businessContract.startDateTimeUtc']")
    .should('have.value',validBusinessDetailInput.startDateTimeUtc);

    cy.get("[name='businessContract.endDateTimeUtc']")
    .should('have.value',validBusinessDetailInput.endDateTimeUtc);

    cy.get("[name=country]")
    .should('have.value',validBusinessDetailInput.country);

    cy.get("[name=postcode]")
    .should('have.value',validBusinessDetailInput.postcode);

    cy.get("[name=state]")
    .should('have.value',validBusinessDetailInput.state);

    cy.get("[name=houseNumber]")
    .should('have.value',validBusinessDetailInput.house_number);

    cy.get("[name=street]")
    .should('have.value',validBusinessDetailInput.street);

    cy.get("[name=suburb]")
    .should('have.value',validBusinessDetailInput.suburb);
    
    cy.get("[name='contactUser.firstName']")
    .should('have.value',validContact.first_name);

    cy.get("[name='contactUser.lastName']")
    .should('have.value',validContact.last_name);

    cy.get("[name='contactUser.phoneNumber']")
    .should('have.value',validContact.phone);
    
    cy.get("[name='contactUser.emailAddress']")
    .should('have.value',validContact.email);
}

let filloutBusinessDetails=()=>{
    cy.get('[name=name]')
    .clear()
    .type(validBusinessDetailInput.name);

    cy.get("[name=sapAccountNumber]")
    .clear()
    .type(validBusinessDetailInput.sapAccountNumber);
    
}

let filloutContractPeriod=()=>{
    cy.get('[name="businessContract.startDateTimeUtc"]')
    .clear()
    .type(validBusinessDetailInput.startDateTimeUtc);

    cy.get('[name="businessContract.endDateTimeUtc"]')
    .clear()
    .type(validBusinessDetailInput.endDateTimeUtc);

}

let filloutPrimaryAddress=()=>{
    cy.get('[name=country]')
    .select(validContact.country);

    cy.get('[name=state]')
    .select(validContact.state);

    cy.get('[name=postcode]')
    .clear()
    .type(validContact.postcode);

    cy.get('[name=houseNumber]')
    .clear()
    .type(validContact.house_number);

    cy.get('[name=street]')
    .clear()
    .type(validContact.street);

    cy.get('[name=suburb]')
    .clear()
    .type(validContact.suburb);
    
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
          { fileContent, fileName: 'file/clipsallogopng.png', mimeType: 'image/png' },
          { subjectType: 'input' },
        );

        cy.wait(1000);

        cy.get('[data-testid="file-input-field"]').upload(
            { fileContent, fileName: 'file/clipsallogopng.png', mimeType: 'image/jpeg' },
            { subjectType: 'input' },
          );

        cy.wait(1000);
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
        cy.get('.cuplo-error').contains('The file is too big');
      });
}

let checkExpiredNotification = ()=> {
    cy.get('[data-testid=notice-msg]')
    .should('be.visible');
}

let checkMandatoryErrorMessage=()=>{
    cy.get('[data-testid=businessName] > .input-wrapper > .error-msg')
    .scrollIntoView()
    .should('be.visible');

    cy.get('[data-testid=phoneNumber] > .input-wrapper > .error-msg')
    .should('be.visible');

    cy.get('[data-testid=sapAccountNumber] > .input-wrapper > .error-msg')
    .should('be.visible');

    cy.get('[data-testid=country] > .input-wrapper > .error-msg')
    .should('be.visible');

    cy.get('[data-testid=postcode] > .input-wrapper > .error-msg')
    .should('be.visible');

    cy.get('[data-testid=state] > .input-wrapper > .error-msg')
    .should('be.visible');
    
    cy.get('[data-testid=houseNumber] > .input-wrapper > .error-msg')
    .should('be.visible');

    cy.get('[data-testid=street] > .input-wrapper > .error-msg')
    .should('be.visible');

    cy.get('[data-testid=suburb] > .input-wrapper > .error-msg')
    .should('be.visible');

    cy.get('.cuplo-error')
    .should('be.visible');
}


let fillOutPrimaryContactDetail=()=>{
    cy.get('[name=contactUser.firstName]')
    .clear()
    .type(validContact.first_name + generateRandomNumber());

    cy.get('[name=contactUser.lastName]')
    .clear()
    .type(validContact.last_name);

    cy.get('[name=contactUser.phone]')
    .clear()
    .type(validContact.phone);

    cy.get('[name=contactUser.email]')
    .clear()
    .type(validContact.email);

}

let clearAllField =()=>{
    cy.get('[name=name]')
    .clear();

    cy.get("[name=sapAccountNumber]")
    .clear();    

    cy.get("[name=postcode]")
    .clear();

    cy.get("[name=houseNumber]")
    .clear();

    cy.get("[name=street]")
    .clear();

    cy.get("[name=suburb]")
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

let checkRequiredFields =()=>{    
    cy.get('[data-testid=business-account-name] > .input-wrapper > .error-msg')
    .scrollIntoView()
    .should('be.visible');

    cy.get('[data-testid=business-account-sap-number] > .input-wrapper > .error-msg')
    .should('be.visible');

    cy.get('[data-testid=business-account-postcode] > .input-wrapper > .error-msg')
    .scrollIntoView()
    .should('be.visible');

    cy.get('[data-testid=business-account-house-number] > .input-wrapper > .error-msg')
    .scrollIntoView()
    .should('be.visible');

    cy.get('[data-testid=business-account-street] > .input-wrapper > .error-msg')
    .should('be.visible');

    cy.get('[data-testid=business-account-suburb] > .input-wrapper > .error-msg')
    .should('be.visible');

    cy.get('[data-testid=business-account-contact-first-name] > .input-wrapper > .error-msg')
    .scrollIntoView()
    .should('be.visible');

    cy.get('[data-testid=business-account-contact-last-name] > .input-wrapper > .error-msg')
    .should('be.visible');

    cy.get('[data-testid=business-account-contact-phone-number] > .input-wrapper > .error-msg')
    .should('be.visible');

    cy.get('[data-testid=business-account-contact-email-address] > .input-wrapper > .error-msg')
    .should('be.visible');
}

let clickSaveChanges=()=>{
    cy.get('[data-testid=button-submit]')
    .click();
    
    
}

let checkSuccessMessageAppear=()=>{
    // need to remove this once correct API implemented (currently still trial so it takes time to update)
    cy.wait(5000);

   /* cy.get("[data-testid=notice-msg]")
    .contains("Updating the Business Account...")
    .should('not.exist');   */

    cy.get("[data-testid=notice-msg]")
    .contains("updated successfully!");
}

export{
    checkBusinessDetailDataRetrieved,
    filloutBusinessDetails,
    filloutContractPeriod,
    filloutPrimaryAddress,
    checkMandatoryErrorMessage,
    fillOutPrimaryContactDetail,
    clearAllField,
    checkRequiredFields,
    uploadPngLogo,
    uploadInvalidFile,
    uploadMoreThanMaxLogo,
    checkExpiredNotification,
    clickSaveChanges,
    uploadJPGLogo,
    checkSuccessMessageAppear,
    getFirstBusinessLink,
    uploadMultipleLogo
}
