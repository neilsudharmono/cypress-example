import {
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
    uploadMultipleLogo,
    checkSuccessMessageAppear,
    getFirstBusinessLink
} from './business_edit.method';

import {
  setAccountDetail  
}from './business_addnew.method';

import {
  clickFirstResult  
}from './business_view.method';

describe('View a business test case', function () {

  
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
  
    //TODO INVESTIGATE DATA IS NOT CORRECTLY RETRIEVED
    // it('check all data retrieved in edit page', function () {  
    //   // open details page
    //   getFirstBusinessLink(false);

    //   // check data retrieved
    //   checkBusinessDetailDataRetrieved();
    // }) 
    
    it('Check edit business validation details', function () {  
        // open details page
      getFirstBusinessLink(false);
 
      // clear all fields
      clearAllField();

      clickSaveChanges();

      // check validation error message
      checkRequiredFields();
    })     

    if( Cypress.env('runBusinessTest'))
    {
      it('Check user able to upload jpg file', function () {  
      
        // open details page
        getFirstBusinessLink(false);

        uploadJPGLogo();

        clickSaveChanges();

        checkSuccessMessageAppear();
      }) 

      it('Check user able to upload png file', function () {  
            
        // open details page
        getFirstBusinessLink(false);

        uploadPngLogo();

        clickSaveChanges();

        checkSuccessMessageAppear();
      }) 
    }

    
    it('Check user unable to upload multiple file', function () {       
      // open details page
      getFirstBusinessLink(false);
     
      uploadMultipleLogo();
    }) 

    it('Check user unable to upload invalid file', function () {       
      // open details page
      getFirstBusinessLink(false);

      uploadInvalidFile();
    }) 

    it ('check user able to update account detail',function(){
      // open details page
         getFirstBusinessLink(false);
         setAccountDetail();
         clickSaveChanges();
         checkSuccessMessageAppear();
    })
 
 
     it('Check user unable to upload file which more than 30MB', function () {       
       // open details page
       getFirstBusinessLink(false);
 
       uploadMoreThanMaxLogo();
     }) 
     if( Cypress.env('runBusinessTest'))
     {
         it('Check user able to update business values end to end process', function () {  
               
           // open details page
           getFirstBusinessLink(false);
 
           filloutBusinessDetails();
           // current implementation is not allowed to update contract period
           //filloutContractPeriod();
 
           filloutPrimaryAddress();
 
           uploadJPGLogo();
 
           clickSaveChanges();
 
           checkSuccessMessageAppear();
         })
     }

  
})

