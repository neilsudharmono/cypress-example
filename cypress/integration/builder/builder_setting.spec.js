import {
  clickBuilderSetting,
    updateAllBuilderSetting,
    clickSaveChanges,
    checkSuccessMessageAppear,
    clickSaveCategories,
    clickAddNewCategory,
    clickAddNewSubCategory,
    setCategoryAndSubcat,
    clickCategoryTab,
    clickTestBuilder
} from './builder_setting.method';

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
  getFirstBuilderLinkStubbed,
  clickBackToAccountBusiness,
  clickFirstBusiness
} from './builder_edit.method';

import {
getFirstBuilderLink
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
  filloutBillOfMaterialPlan
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
      clickBuilderSetting();
      
})
  

  // TODO UNSTABLE TEST FILYA

  it('check builder setting', function () {
    updateAllBuilderSetting();

    clickSaveChanges();

    checkSuccessMessageAppear();
  }) 

  it('Check category setting', function () {  
    
    clickCategoryTab();

    setCategoryAndSubcat();

    clickSaveCategories();

    checkSuccessMessageAppear();
  }) 
  
})