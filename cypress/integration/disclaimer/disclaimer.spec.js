// Test Description : 
// This test to ensure that user able to dashboard page is succesfully loaded 
import { 
    saveDisclaimer
 } from './disclaimer.method';

describe('Check Disclaimer functionality', function () {
         after(()=> {
        cy.get('[class="sslid-account-label"]')
        .click()
        
        cy.get('[href="/account/dologout"]').click()

    })
       beforeEach(() => {   
        cy.task('deleteFile','cookies.json');
        cy.setCookies(); 
        // Open testing page       
        cy.openTestingEnvironment("projects.html#/","systemsettings#/disclaimers")        

    
    });

    it('check save disclaimer is working', function () {  
        saveDisclaimer();
    })
    
})