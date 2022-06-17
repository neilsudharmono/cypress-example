/*Test Description : 
This test to ensure that user able to project listing page is succesfully loaded
and also checking on functionality is working */

import {
    checkProjectListPerPage,    
    clickNextPaginationButtonThenGoToSecondPage,
    goToThirdPage,
    goToSecondPage
} from './projectlist-pagination.method'
import {DEFAULT_ITEM_PER_PAGE,PROJECT_API_LINK} from "../../support/baseConst";
import {
    checkLoadingAnimationIsFinished,
    checkSortByModifiedDateDescendingStubbed,
    checkSortByProjectNameAscendingStubbed,
    checkSortByClientNameAscendingStubbed,
    checkSortByConsultantNameAscendingStubbed

} from './projectlist.method'

import {clickViewAsGrid} from "./projectlist_global.method";


describe('Check Project Listing Pagination Functionality', function () {
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
          cy.connectToProjectListData(PROJECT_API_LINK);
          cy.openTestingEnvironment("projects.html#/","projects#/active") ;
          
    })

    it('show items per page in list view', function () {   
        checkProjectListPerPage(12);
        checkProjectListPerPage(24);  
        checkProjectListPerPage(36);
        checkProjectListPerPage(48);
        
    })

    it('when project view is changed to Grid View', function () {    
        clickViewAsGrid(); 
        checkProjectListPerPage(24,false);
        checkProjectListPerPage(12,false);
        clickNextPaginationButtonThenGoToSecondPage();
        goToThirdPage();
        goToSecondPage();
    })      

    it('is still applied when project sorted by oldest', function () {    
        clickViewAsGrid(); 
        checkSortByModifiedDateDescendingStubbed();  
        checkProjectListPerPage(24,true);  
    })

    it('is still applied when project sorted by project name', function () {    
        clickViewAsGrid(); 
        checkSortByProjectNameAscendingStubbed();  
        checkProjectListPerPage(24,false);  
    })
    
})

// describe('Pagination with test data', function () {
//     before(() => {        
//         // Handle login on DEV or Netifly on Showcase
//         cy.task('deleteFile','cookies.json');
//         cy.setCookies(); 
//         cy.connectToInternalTestData();

//         // Open testing page
//         cy.openTestingEnvironment("projects.html#/","projects") ;

//         checkLoadingAnimationIsFinished();

//         clickViewAsGrid(); 
//     })
     

    
/*
    it('is still applied when project sorted by oldest', function () {    
        
        checkSortByModifiedDateDescendingStubbed();  
        checkProjectListPerPage(24,true);  
    })*/

    /* TODO RECHECK THIS TESTS
    it('is still applied when project sorted by project name', function () {    
        
        checkSortByProjectNameAscendingStubbed();  
        checkProjectListPerPage(24,false);  
    })

    it('is still applied when project sorted by client name', function () {    
         
        checkSortByClientNameAscendingStubbed();  
        checkProjectListPerPage(24,false);   
    })

    it('is still applied when project sorted by consultant name', function () {    
        
        checkSortByConsultantNameAscendingStubbed();  
        checkProjectListPerPage(24,false);     
    }) NO CLIENT AND CONSULTANT IN JSON RESPONSE*/
// })
