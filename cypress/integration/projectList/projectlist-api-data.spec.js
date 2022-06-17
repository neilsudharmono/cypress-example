// Test Description : 
// This test to ensure that user able to project listing page is succesfully loaded
// and also checking on functionality is working 

import {checkProjectListHeaderLoaded,
    checkProjectListRowListViewLoaded,
    checkLoadingAnimationIsFinished,
    checkSortByClientNameIsWorkingAscending,
    checkSortByClientNameIsWorkingDescending,
    checkSortByProjectNameIsWorkingAscending,
    checkSortByProjectNameIsWorkingDescending,
    checkSortByModifiedDateIsWorkingAscending,
    checkSortByModifiedDateIsWorkingDescending,
    checkSortByConsultantNameIsWorkingAscending,
    checkSortByConsultantNameIsWorkingDescending
} from './projectlist.method'


describe('Check Project Listing Elements with API data', function () {

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

    // TODO FILYA
    // it('check project list header is appear in list view', function () {     
        
    //     checkProjectListHeaderLoaded();
    // })
    
    it('check project list data is appear with list view', function () {        
        checkProjectListRowListViewLoaded();        
    })

})
