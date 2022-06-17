import {
    
    goToBuilderDetailsPage,
    getFirstBuilderLink,
    getLastBuilderLink,
    checkBuilderDetailName,
    checkContactDetailsData,
    checkBuilderDetailsData,
    checkPostalAddressData,
    checkUserAccountHeader,
    checkUserAccountListData,
    checkInternalNotes,
    checkPostalEmptyAddressData,
    clickFirstBuilder,
    getFirstBuilderLinkStubbed
} from './builder_view.method';

import {
  getFirstBusinessLink,
  clickFirstResult,
  clickLastResult
} from '../business/business_view.method';

describe('View a Builder test case', function () {
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

    // click builder detail page
    clickBuilderUsers();
      
})


  
    // TODO UPDATE THE MOCK DATA
    // it('check all data retrieved', function () {  
    //   // open builder details page
    //   getFirstBuilderLinkStubbed(false);
      
    
    //   // check data retrieved
    //   checkBuilderDetailName();
    //   checkContactDetailsData();
    //   checkBuilderDetailsData();
    //   checkPostalAddressData();

    //   // check user account list appear (moved into account list page)
    //   // checkUserAccountListData();
    //   //checkUserAccountHeader();

    //   //checkInternalNotes();
    // }) 
    
    // it('check empty postal address', function () {  
    //   // open builder details page
    //   getLastBuilderLink();

    //   // check data has postal address
    //   checkPostalEmptyAddressData();
    // }) 
    
})