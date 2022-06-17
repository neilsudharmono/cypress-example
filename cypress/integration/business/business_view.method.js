import {BUSSINESS_API_LINK,BUSSINESS_API_LINK_2} from '../../support/baseConst';
import { getTestSelector} from "../../support/getTestSelector";
import validBusinessDetailInput from '../../fixtures/input/business_details'
import {businessValidInput} from './business_addnew.method';

let inputValidBusinessDetails = {
    businessAccountName : 'Wisdom Homes AUTOMATION',
    businessAccountAddress : '176 300 Rose St',
    businessAccountAddressState : ' VIC',
    businessAccountAddressCountry : 'Australia',
    businessAccountAddressPhone : '0412345678',
    contactUserName : 'Cassius West',
    contactUserPhoneNumber : '0412345678',
    contactUserEmail : 'Cassius@gmail.com',
    contractPeriod : '1 year 1 month',
    contractFromTo : '20 Mar 2020 to 20 Apr 2021',
    contractExpiring : 'Expiring soon',
    sapAccountNumber : '123456789',
    logoImage : 'https://dummyimage.com/500x370/aaa/fff.png',
}

let clickFirstResult2=()=>{

    

    cy.get('[data-testid="keyword-search"]')
    .type(businessValidInput.business_name_prefix)

    cy.get('[data-testid="apply-filter-btn"]')
    .click();
    
    cy.get(getTestSelector(['cbuit'], 'businessName'))   
    .first()
    .click();
}

let clickFirstResult=()=>{

    cy.get('[data-testid="keyword-search"]')
    .type("Test Business AT")

    cy.get('[data-testid="apply-filter-btn"]')
    .click();
}

let clickFirstResultUser=()=>{

    

    cy.get('[data-testid="keyword-search"]')
    .type(businessValidInput.business_usereExist)

    cy.get('[data-testid="apply-filter-btn"]')
    .click();
    
    cy.get(getTestSelector(['cbuit'], 'businessName'))   
    .first()
    .click();
}


let backtoBusinessPage=()=>{
    cy.get('[data-testid=button-back-to-s]')
    .click();
}

let clickLastResult=()=>{
    cy.get(getTestSelector(['cbuit'], 'businessName'))   
    .last()
    .click();
}

let getFirstBusinessLink=(is_expired)=>{
    let href_value = "";
    cy.get(getTestSelector(['cbuit'], 'link')) 
    .first()
    .invoke('attr', 'href')
      .then(href => {          
        href_value = href.split('/')[1];
        let valid_url = BUSSINESS_API_LINK_2+'/'+ href_value;
/*
        if (is_expired)
        {
            cy.connectToBusinessExpired(valid_url);
        }else
        {
            cy.connectToBusinessOverviewData(valid_url);
        }*/
        


        if ( Cypress.env("runShowcase"))  
        {
            cy.visit("business-accounts.html#/").then(() => {
                clickFirstResult();
            })
        }else
        {
           // cy.visit("businessaccounts").then(() => {
                clickFirstResult();
            //})
        }
        //cy.clearCookies();
    });
}

let checkBusinessDetailName= ()=> {
    cy.get('[data-testid=businessAccountName]')
    .contains(inputValidBusinessDetails.businessAccountName);
    cy.get('[data-testid=businessAccountAddress]')
    .contains(inputValidBusinessDetails.businessAccountAddress);
    cy.get('[data-testid=businessAccountAddress]')
    .contains(inputValidBusinessDetails.businessAccountAddressCountry);
    cy.get('[data-testid=contactUserPhoneNumber]')
    .contains(inputValidBusinessDetails.businessAccountAddressPhone);
    cy.get('[data-testid=businessAccountAddress]')
    .contains(inputValidBusinessDetails.businessAccountAddressState);
    
    // cy.get('[data-testid=logoImage]')
    // .invoke('attr', 'src').then((nextSrc) => {
    //     expect(nextSrc).equal(inputValidBusinessDetails.logoImage)}
    // );
}

let checkContactDetailsData= ()=> {
    cy.get('[data-testid=contactUserName]')
    .contains(inputValidBusinessDetails.contactUserName);
    cy.get('[data-testid=contactUserPhoneNumber]')
    .contains(inputValidBusinessDetails.contactUserPhoneNumber);
    cy.get('[data-testid=contactUserEmail]')
    .contains(inputValidBusinessDetails.contactUserEmail);
}

let checkContractPeriodData= ()=> {
    cy.get('[data-testid=contractPeriod]')
    .contains(inputValidBusinessDetails.contractPeriod);
    cy.get('[data-testid=contractFromTo]')
    .contains(inputValidBusinessDetails.contractFromTo);
    // cy.get('[data-testid=contractExpiring]')
    // .contains(inputValidBusinessDetails.contractExpiring);
}

let checkExpiredContract=()=>{
    cy.get('[data-testid=contractExpired]')
    .contains('Expired');
}

let checkSAPNumberData= ()=> {
    cy.get('[data-testid=sapAccountNumber]')
    .contains(inputValidBusinessDetails.sapAccountNumber);
}

let checkBuilderListHeader= ()=> {
    // check builder filter
    cy.get('[data-testid=filter-by-builder] > .input-wrapper > [data-testid=toggle-dropdown]')
    .should('be.visible');
    // check add builder button
    cy.get('[data-testid=text-icon-button]')
    .should('be.visible');
}

let checkBuilderListData= ()=> {   
    // check builder name
    cy.get('[data-testid=name]')
    .should('be.visible');
    // check state
    cy.get('[data-testid=state]')
    .should('be.visible');
    // check contact name
    cy.get('[data-testid=contactName]')
    .should('be.visible');
    // check contract phone
    cy.get('[data-testid=contactPhone]')
    .should('be.visible');
    // check row navigation
    cy.get(getTestSelector(['cutil'], 'manu'))
     .first()
     .children()
     .contains('View Builder')
     .and('have.attr', 'href');

    /* cy.get(getTestSelector(['cutil'], 'manu'))
     .first()
     .children()
     .contains('Duplicate Builder')
     //.and('have.attr', 'href'); --UNCOMMENT THIS WHEN HREF IS ADDED
     .and('have.attr', 'type');*/

     // this menu currently being removed in FED
    //  cy.get(getTestSelector(['cutil'], 'manu'))
    //  .first()
    //  .children()
    //  .contains('Deactivate Builder')
    //  //.and('have.attr', 'href'); --UNCOMMENT THIS WHEN HREF IS ADDED
    //  .and('have.attr', 'type');
}

/*
let checkUserAccountHeader= ()=> {
    // check add user account button
    cy.get('[data-testid=inviteUserBtn]')
    .should('be.visible');
}*/

let checkUserAccountListData= ()=> {
    // check user account name
    cy.get('[data-testid=name]')
    .should('be.visible');
    // check state
    cy.get('[data-testid=state]')
    .should('be.visible');
    // check contact name
    cy.get('[data-testid=contactUserEmail]')
    .should('be.visible');
    // check contract phone
    cy.get('[data-testid=contactPhone]')
    .should('be.visible');
    // check row navigation
   // cy.get('.cutil-control > [data-testid=manu]')
    // .contains('View User Account')
     //.and('have.attr', 'href'); --UNCOMMENT THIS WHEN HREF IS ADDED
    // .and('have.attr', 'type');

    // this is removed in FED Site
    //  cy.get('.ctil5-menu-holder > .c-utility-menu > [data-testid=manu]')
    //  .contains('Revoke User Account')
    //  //.and('have.attr', 'href'); --UNCOMMENT THIS WHEN HREF IS ADDED
    //  .and('have.attr', 'type');

    //  cy.get('.ctil5-menu-holder > .c-utility-menu > [data-testid=manu]')
    //  .contains('Deactivate User Account')
    //  .and('have.attr', 'href');
}

export{
    checkUserAccountListData,
    checkBuilderListData,
    getFirstBusinessLink,
    checkBusinessDetailName,
    checkContactDetailsData,
    checkContractPeriodData,
    checkSAPNumberData,
    checkBuilderListHeader,
    checkExpiredContract,
    clickFirstResult,
    clickLastResult,
    backtoBusinessPage,
    clickFirstResultUser
}