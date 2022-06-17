// Test Description : 
// This test to ensure that user able to dashboard page is succesfully loaded 
import { 
    checkHeaderIsShowing,
    assignProjectToMe,
    assignInProgressProjectToMe,
    unassignedProjectTab
 } from './dashboard.method';

describe('Check Dashboard Navigation Elements', function () {


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
          cy.openTestingEnvironment("projects.html#/","")   
        
          
    })

    it('check header is rendered and assigned to me', function () {  
       // assignProjectToMe();        
        checkHeaderIsShowing();
    })
    
    /*it('check im working on element appear', function () {        
        //assignInProgressProjectToMe();    
        unassignedProjectTab();      
    }) */
    
})