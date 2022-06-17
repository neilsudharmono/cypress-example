import {
    clickAddNewBuilderLink,
    clickAddNewBuilderLinkLink,
    checkBuilderListAppear,
    filloutBuilderDetails,
    filloutBuilderLocation,
    uploadclipsallogopng,
    clickNext,
    clickAddNewContact,
    clickSameAsPrimaryAddress,
    filloutBuilderPostalLocation,
    checkMandatoryErrorMessage,
    filloutValidValueForStep1Form,
    typeToExistingUserTextbox,
    fillOutAddNewContactDetail,
    checkErrorMessageExistingAccount,
    clickPermissionAdjustPrice,
    checkErrorMessageNewContact,
    filloutBillOfMaterialPlan,
    checkErrorMessageBillOfMaterialPlan,
    checkErrorMessageOnAddress,
    checkStateErrorMessage
} from './builder_addnew.method';

import {
    clickFirstBusiness
  } from './builder_edit.method';

  
import {
    clickFirstResult
  } from '../business/business_view.method';

describe('Add New Builder End to Testing Step 1 & 2', function () {
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
          cy.openTestingEnvironment("business-accounts.html#/","businessaccounts")   
            clickFirstResult();
          
            // open builder details page
            //getFirstBuilderLink(false);
            
            // click builder detail page
            clickFirstBusiness();
          
    })
 
 

    if( Cypress.env('runBuilderTest'))
    {

        it('check functionality on Step 1', function () {  
            clickAddNewBuilderLink();
            clickNext();
          // this will check validation error message appear
            checkMandatoryErrorMessage();
            filloutBuilderDetails();       
            clickNext();
        }) 
      
        it('check functionality on Step 2', function () { 
            clickAddNewBuilderLink();
            filloutBuilderDetails();        
            clickNext();
            clickNext();
            // this will check validation error message appear
            checkErrorMessageOnAddress();  
            checkStateErrorMessage();  
            filloutBuilderLocation();
            uploadclipsallogopng();
            clickNext();      
            
        
        }) 
      
        it('check functionality on Step 3 ', function () {  
            clickAddNewBuilderLink();
            filloutBuilderDetails();        
            clickNext(); 
            filloutBuilderLocation();
            uploadclipsallogopng();
            clickNext(); 
            clickAddNewContact();
            fillOutAddNewContactDetail();
            clickNext();
            clickNext();
        }) 
        it.only('check end to end functionality with valid new contact', function () {  
            clickAddNewBuilderLink();
            filloutBuilderDetails();        
            clickNext(); 
            filloutBuilderLocation();
            uploadclipsallogopng();
            clickNext(); 
            clickAddNewContact();
            fillOutAddNewContactDetail();
            clickNext();
            filloutBillOfMaterialPlan();
            clickNext();
            checkBuilderListAppear();
        })   
      
    }

})

