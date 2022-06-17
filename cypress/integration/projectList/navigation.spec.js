// Test Description : 
// This test to ensure that user able to dashboard page is succesfully loaded 
import { checkMainNavigationItemsLoaded,
    checkMainNavigationCanCollapsed,
    checkMainNavigationCanExpanded } from './navigation.method';

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
          cy.openTestingEnvironment("projects.html#/","projects#/active") ;
          
    })
    
    it('check left navigation is rendered able to collapsed and expanded', function () {        
        
        checkMainNavigationItemsLoaded();
        checkMainNavigationCanCollapsed();
        checkMainNavigationCanExpanded();
    
    })   
})