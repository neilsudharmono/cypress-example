import {
    checkProductHeaderData,
    checkProductDetailsData,
    checkProductComponentData,
    getFirstProductLink
} from './product_overview.method';

describe('View a product overview page test case', function () {
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
      cy.openTestingEnvironment("products-admin.html#/","masterproducts")  
    
      
})
  
    it('check all data retrieved', function () {  
      // open overview page
         getFirstProductLink();

      // check data retrieved
        checkProductHeaderData();
        checkProductDetailsData();
      // todo : UNCOMMENT THIS WHEN BED GIVE SAMPLE JSON WITH REQUIRED COMPONENT
      // checkProductComponentData();
    })    
    
})