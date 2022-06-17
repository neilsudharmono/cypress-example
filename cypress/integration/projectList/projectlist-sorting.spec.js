// Test Description : 
// This test to ensure that user able to project listing page is succesfully loaded
// and also checking on functionality is working 

import {
    checkProjectListRowGridViewLoaded,
    checkSortByClientNameAscendingStubbed,
    checkSortByClientNameDescendingStubbed,
    checkSortByProjectNameAscendingStubbed,
    checkSortByProjectNameDescendingStubbed,
    checkSortByConsultantNameAscendingStubbed,
    checkSortByConsultantNameDescendingStubbed,
    checkSortByModifiedDateAscendingStubbed,
    checkSortByModifiedDateDescendingStubbed
} from './projectlist.method'
import {DEFAULT_ITEM_PER_PAGE,PROJECT_API_LINK} from "../../support/baseConst";
import {clickViewAsGrid} from "./projectlist_global.method";


describe('Check Project listing with Test data with grid', function () {
    
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
          
        clickViewAsGrid();   
    })
      
    it('Sort By Project Name Ascending', function () {    
        checkSortByProjectNameAscendingStubbed();
    })

    it('Sort By Project Name Descending', function () {  
        checkSortByProjectNameDescendingStubbed();
    }) 

    /*it('Sort By Consultant Name Ascending', function () {    
        checkSortByConsultantNameAscendingStubbed();
    })

    it('Sort By Consultant Name Descending', function () {  
        checkSortByConsultantNameDescendingStubbed();
    })NO CONSULTANT NAME IN JSON*/

    it('Sort By Modified Date Ascending', function () {           
        checkSortByModifiedDateAscendingStubbed();
    })

    it('Sort By Modified Date Descending', function () {         
        checkSortByModifiedDateDescendingStubbed();       
    })
})