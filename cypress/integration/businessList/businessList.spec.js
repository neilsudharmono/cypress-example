// Test Description : 
// This test to ensure that user able to business listing page is succesfully loaded
// and also checking on functionality is working 

import {
    checkBusinessAccountListElement,
    checkBusinessAccountHeaderElement,
    clickApplyButton
}from "../businessList/businessList.method";

import{
    checkBusinessListPerPage,
    clickNextPaginationButtonThenGoToSecondPage,
    goToThirdPage,
    goToSecondPage,
    checkDefaultPageItemPerPage
}from "../businessList/businessList-pagination.method";

import{
    checkSortByBusinessAccountNameAscending,
    checkSortByContractEndDAteAscending,
    checkSortByContractStartDateAscending,
    checkSortByBusinessAccountNameDescending,
    checkSortByContractEndDAteDescending,
    checkSortByContractStartDateDescending,
} from "./businessList-sort.method";

import{
    checkSearchByKeywords,
    checkSearchByAllLowerLetter,
    checkSearchByAllUpperCase,
    checkSearchByAndBehavior,
    checkInvalidSearchByInvalidText,
    checkSearchByContactName
}from "./businessList-search.method";

import {
    filterByBusinessStatus,
    filterByContractDateRange,
    checkFilterResult,
    checkInvalidResult,
    filterByBusinessType
}from "./businessList-filter.method"

import {BUSSINESS_API_LINK,BUSSINESS_API_LINK_2} from '../../support/baseConst';

describe('Check business list filter elements', function () {
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
          cy.connectToBusinessListingData(BUSSINESS_API_LINK_2);
          cy.openTestingEnvironment("business-accounts.html#/","businessaccounts")   
          
    })

    it('Check correct information is displayed', function () {        
        checkBusinessAccountListElement();        
        checkBusinessAccountHeaderElement();
    })   

    it('show only 12 items per page in list view', function () {   
        checkBusinessListPerPage(12);
    })
    
    it('show only 24 items per page in list view', function () {        
        checkBusinessListPerPage(24);  
    })

    it('show only 36 items per page in list view', function () {    
        checkBusinessListPerPage(36);
    })

    it('show only 48 items per page in list view', function () {    
        checkBusinessListPerPage(48);
    })

    it('is able to navigate to the next page', function () {    
        clickNextPaginationButtonThenGoToSecondPage();
    })    

    it('is able to navigate into X page by clicking number of page', function () {    
        goToThirdPage();
    })

    it('is able to navigate to previous page', function () {   
        goToSecondPage();
    })

    it('Sort by Business Account Name Ascending', function () {        
        checkSortByBusinessAccountNameAscending();
    })

    //TODO CHECK THIS ICON LATER
    // it.only('Sort By Business Account Name Descending', function () {   
    //     checkSortByBusinessAccountNameDescending();
    // })

    // TODO : UNCOMMENT THIS TEST ONCE ITS FIX BY FED
    // it('Sort By Contract Start Date Ascending', function () {    
    //     checkSortByContractStartDateAscending();
    // })

    it('Sort By Contract Start Date Descending', function () {    
        checkSortByContractStartDateDescending();
    })

    // TODO : UNCOMMENT THIS TEST ONCE ITS FIX BY FED
    // it('Sort By Contract End Ascending', function () {    
    //     checkSortByContractEndDAteAscending();
    // })

    it('Sort By Contract End Descending', function () {    
        checkSortByContractEndDAteDescending();
    })

    it('Search by business name', function () {
        checkSearchByKeywords('Luminary Test','Luminary Test');
    })
    it('Search by contact  name', function () {
        checkSearchByContactName('Allen Chen');
    })

    /*it('Search by state', function () {
        checkSearchByKeywords('VIC Homes','Wisdom Homes');
    })*/

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

    it('Filter by business type Internal',function(){
        filterByBusinessType('Internal');
        clickApplyButton();
        checkFilterResult('Stobo Homes');
    })

    it('Filter by business type External',function(){
        filterByBusinessType('External');
        clickApplyButton();
        checkFilterResult('ZZZZ business name');
    })

    it('Filter by Business Status', function () {  
        filterByBusinessType('All Types');
        filterByBusinessStatus('Inactive Businesses');     
        clickApplyButton();
        checkFilterResult('Update Business Account2');
    })

    it('Filter by Business Status', function () {   
        filterByBusinessStatus('Active Businesses');     
        clickApplyButton();
        checkFilterResult('AllenTest');
    })    

    it('Filter by Valid contract range', function () {   
        filterByContractDateRange('01/11/2019','25/11/2019');
        clickApplyButton();
        checkFilterResult('Test Tony');
    })
    it('Filter by invalid contract range', function () {    
        filterByContractDateRange('25/11/2011','20/11/2011');
        clickApplyButton();
        checkInvalidResult();
    })
})

