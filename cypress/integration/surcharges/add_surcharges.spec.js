
import {
    AddValidSurcharges,
    AddInvalidSurcharges
    
}from './add_surcharges.method'

describe('Add surcharge testing', function () {


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
          cy.openTestingEnvironment("surcharges.html#/","systemsettings#/surcharges") ;
     
          
          
    })

  
    it('with valid data', function () {   

        AddValidSurcharges();
    }) 

    it('with invalid data', function () {   

        AddInvalidSurcharges();
    }) 
 
})
