import {
  checkBuilderDetailsData,
  checkContactDetailsData,
  checkPostalAddressData,
  checkInternalNotes, 
  uploadPngLogo,
  uploadJPGLogo,
  uploadInvalidFile,
  uploadMoreThanMaxLogo,
  uploadMultipleLogo,
  clearAllRequiredFields,
  typeAllRequiredFields,
  checkAllRequiredErrorMessages,
  clickBuilderDetails,
  clickSaveChanges,
  checkSuccessMessageAppear,
  getFirstBuilderLinkStubbed,
  clickBackToAccountBusiness,
  clickFirstBusiness
} from './builder_edit.method';


import {
getFirstBuilderLink,
goToBuilderDetailsPage
} from './builder_view.method';

import {
  clickFirstResult
} from '../business/business_view.method';

import {
  clickAddNewBuilderLink,
  checkBuilderListAppear,
  filloutBuilderDetails,
  filloutBuilderLocation,
  uploadclipsallogopng,
  clickNext,
  clickAddNewContact,
  fillOutAddNewContactDetail,
  filloutBillOfMaterialPlan,
  
} from './builder_addnew.method';

describe('Edit a Builder test case', function () {
 
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
        getFirstBuilderLink(false);
        clickBuilderDetails();
      
})
  

  if( Cypress.env('runBusinessTest'))
  {
      //TODO FILYA

      it('create new builder with valid add new contact', function () {  
        clickBackToAccountBusiness();
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

  it('check all data retrieved', function () {       
      // check data retrieved

      checkBuilderDetailsData();
      checkInternalNotes();
  })  


  it('Check user able to upload jpg file', function () {  
    uploadJPGLogo();

    clickSaveChanges();

    checkSuccessMessageAppear();
  }) 

  
/*it('Check user able to upload png file', function () {  
  uploadInvalidFile();

  uploadPngLogo();

  clickSaveChanges();

  checkSuccessMessageAppear();
}) */


if( Cypress.env('runBuilderTest'))
{
  it('Check user able to update builder values end to end process', function () {  

    typeAllRequiredFields();

    uploadJPGLogo();

    clickSaveChanges();

    checkSuccessMessageAppear();
  })
}

it('check required fields validation', function () {
  // check mandatory fields cant be blank
  clearAllRequiredFields();

  clickSaveChanges();

  checkAllRequiredErrorMessages();
})

})

