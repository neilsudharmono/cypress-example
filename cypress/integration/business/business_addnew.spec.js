import {
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
  setAccountDetail  
}from './business_addnew.method';

describe('Add New Business End to Testing', function () {
  
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
      
})
    

  if( Cypress.env('runBusinessTest'))
  {
      it('check functionality on Step 1', function () {  
        clickAddNewBusiness();
        clickNext();
        // this will check validation error message appear
        checkMandatoryErrorMessage();
        filloutValidValueForStep1Form();
        uploadLogo();
        clickNext();
      }) 
    
      it('check functionality on Step 2', function () {  
        clickAddNewBusiness();
        filloutValidValueForStep1Form();
        uploadLogo();
        clickNext();
        clickNext();
        // this will check validation error message appear
        checkErrorMessageExistingAccount();    
        clickAddMoreContact();
        clickNext();
        // this will check validation error message appear
        checkErrorMessageNewContact();    
        fillOutAddNewContactDetail();
        clickNext();
      }) 

      it('check functionality on Step 3 ', function () {  
        clickAddNewBusiness();
        filloutValidValueForStep1Form();
        uploadLogo();
        clickNext();
        typeToExistingUserTextbox();
        clickNext();
        clickNext();
        // this will check validation error message appear
        checkErrorMessageChargeDetail();
        chooseChargeTotalElectrical("10");
        chooseContractPeriod('01/11/2019','01/12/2019');
        chooseInvoice();
      }) 
    
      it('check end to end functionality with valid existing contact', function () {  
        clickAddNewBusiness();
        filloutValidValueForStep1Form();
        uploadLogo();
        clickNext();
        typeToExistingUserTextbox();
        clickNext();
        clickNext();
        // this will check validation error message appear
        checkErrorMessageChargeDetail();
        chooseChargeTotalElectrical("10");
        chooseContractPeriod('01/11/2019','01/12/2019');
        chooseInvoice();
        clickNext();
        checkBusinessListAppear();
      }) 

      it('check end to end functionality with valid add new contact', function () {  
        clickAddNewBusiness();
        filloutValidValueForStep1Form();
        uploadLogo();
        clickNext();
        clickAddMoreContact();
        fillOutAddNewContactDetail();
        clickNext();
        clickNext();
        // this will check validation error message appear
        checkErrorMessageChargeDetail();
        chooseChargeTotalElectrical("10");
        chooseContractPeriod('01/05/2020','01/12/2020');
        chooseInvoice();
        setAccountDetail();
        clickNext();
        checkBusinessListAppear();
      }) 
    
  }

})


