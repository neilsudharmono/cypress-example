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
          cy.openTestingEnvironment("projects.html#/","")   
        
          
    })
    it('check left navigation is rendered', function () {        
        
        checkMainNavigationItemsLoaded();
    })

    it('check navigation is able to collapse', function () {        
                
        checkMainNavigationCanCollapsed();
    })


    it.only('check navigation is able to expand', function () {        
        
        checkMainNavigationCanExpanded();
    })
    



    
})