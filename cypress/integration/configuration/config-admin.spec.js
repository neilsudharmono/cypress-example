// Test Description : 
// This test to ensure that user able to configuration page is succesfully loaded 
import {
    checkElementRendered,
    checkCorrectLinkApplied,
    checkAddBusinessForm
} from './config-admin.method';

describe('Check Configuration Admin Elements', function () {

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
          cy.openTestingEnvironment("configuration-admin.html#/","configuration") 
        
          
    })

    //if (Cypress.env("runShowcase"))  
    //{
            it('page element rendered', function () {        
                
                checkElementRendered();
            })
            
            it('correct link applied', function () {        
                        
                checkCorrectLinkApplied();
            })

            
    //}
})