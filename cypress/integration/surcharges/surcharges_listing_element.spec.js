import {
    checkHeaderElementAppear,
    checkRowsElementAppear,
    checkSurchargeListContains
    
}from './surcharges_listing_element.method'

describe('Add surcharge testing', function () {
   

    before(() => {        
        // Handle login on DEV or Netifly on Showcase
        cy.task('deleteFile','cookies.json');
        cy.setCookies(); 
    })
         after(()=> {
        cy.get('[class="sslid-account-label"]')
        .click()
        
        cy.get('[href="/account/dologout"]').click()

    })
       beforeEach(() => {  

        // Open testing page
        cy.openTestingEnvironment("surcharges.html#/","systemsettings#/surcharges") ;
    });

  
    it('check elements are loaded', function () {   
        checkHeaderElementAppear();
        checkRowsElementAppear();
    })    
 
})