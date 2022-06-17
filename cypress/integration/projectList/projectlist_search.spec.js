/*Test Description : 
This test to ensure that user able to search
project name, builders , consultant , assignee
address , client name, suburb*/

import {
    checkSearchByProjectName,
    checkSearchByBuildersName,
    checkSearchByConsultantName,
    checkSearchByAssigneeName,
    checkSearchByAddress,
    checkSearchByClientName,
    checkSearchBySuburbName,
    checkInvalidSearchByInvalidText,
    checkSearchByAllLowerLetter,
    checkSearchByAllUpperCase,
    checkSearchByAndBehavior

} from './projectlist.method'

import {clickViewAsGrid} from "./projectlist_global.method";



describe('Check Search functionality on project listing', function () {
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
          
        clickViewAsGrid();   
    })

    it('Search by project name', function () {
        checkSearchByProjectName();
    })

    it('Search by builders  name', function () {
        checkSearchByBuildersName();
    })

    //it('Search by address', function () {
    //    checkSearchByAddress();
    //})    

    it('Search by suburb', function () {
        checkSearchBySuburbName();
    })

    it('Search by invalid text then show error message', function () {
        checkInvalidSearchByInvalidText();
    })

    it('Search with case not sensitive', function () {
        checkSearchByAllLowerLetter();
        checkSearchByAllUpperCase();
    })

    it('Search with AND behavior by searching more than two keywords', function () {
        checkSearchByAndBehavior();
    })

    /* 
        NOT TO MVP
    it.only('Search by consultant  name', function () {
       checkSearchByConsultantName();
    })

    it('Search by assignee  name', function () {
       checkSearchByAssigneeName();
    })   

    it('Search by client name', function () {
       checkSearchByClientName();
    })
    */
    
})