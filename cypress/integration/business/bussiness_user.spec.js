import {
  clickBusinessUsers,
  filterByActive,
  filterByPending,
  searchByName,
  searchByEmail,
  inviteNewUser
} from './bussiness_user.method';


describe('Edit a Business test case', function () {

   
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
      
      clickBusinessUsers(); 
      
})
  

  // this is still a bug so please uncomment once its fixed
  // it('check invite new user', function () {
  //   inviteNewUser();
  // }) 
  it('Invite new user', function () {  
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