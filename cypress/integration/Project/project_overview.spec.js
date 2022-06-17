import {
    getFirstInProgressProjectLink,
    getFirstPreparationProjectLink,
    getFirstReadyForComsultationProjectLink,
    getFirstCreatedProjectLink,
    getFirstCompleteProjectLink,
    clickFirstResult
} from './project_overview.method';

import {
    filterByProjectStatus,
    clickApplyButton

} from '../projectList/projectlist_filter.method';

describe('View a product overview page', function () {
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
  
    it('check in progress  data retrieved ', function () {  
      // open overview page
      filterByProjectStatus('In-Progress');
      clickApplyButton();
      getFirstInProgressProjectLink(); 

    })  
    
     it('check preparation data retrieved ', function () {  
         // open overview page
         filterByProjectStatus('Preparation');
         clickApplyButton();
         getFirstPreparationProjectLink(); 
  
     })   

    it('check ready for consultation data retrieved ', function () {  
        // open overview page
        filterByProjectStatus('Ready for Consultation');
        clickApplyButton();
        getFirstReadyForComsultationProjectLink(); 
  
    }) 

    it('check created data retrieved ', function () {  
        // open overview page
        filterByProjectStatus('Created');
        clickApplyButton();
        getFirstCreatedProjectLink(); 
  
    }) 

   it('check complete data retrieved ', function () {  
        //open overview page
        cy.openTestingEnvironment("projects.html#/completed","projects#/completed")
        getFirstCompleteProjectLink(); 
  
    }) 

})
