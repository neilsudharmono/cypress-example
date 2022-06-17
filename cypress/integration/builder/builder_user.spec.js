import {
  clickBuilderUsers,
  clickSaveChanges,
  clickTestBuilder,
  checkCorrectResult,
  filterByActive,
  filterByPending,
  inviteNewUser,
  searchByName,
  searchByEmail
} from './builder_user.method';

import {

  clickFirstBusiness
} from './builder_edit.method';

import {
  getFirstBuilderLink
} from './builder_view.method';

import {
  clickFirstResult,
  clickFirstResultUser
} from '../business/business_view.method';

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

    // click builder detail page
    clickBuilderUsers();
      
})
  
  

  // this is still a bug so please uncomment once its fixed
   it('check invite new user', function () {
     inviteNewUser();
   }) 

  it('Check search user', function () {  
    searchByName();
    searchByEmail();
  }) 
  
  it('Check filter user', function () {  
    //filterByActive();
    filterByPending();
  }) 
})