import {    checkProductAccountListElement,
    checkProductAccountHeaderElement,
    checkDataLoadedCorrectly,
    clickApplyButton
    } from "./product-listing.method"

import{
    check12ProductListPerPage,
    clickNextPaginationButtonThenGoToSecondPage,
    goToThirdPage,
    goToSecondPage,
    check24ProductListPerPage,
    check36ProductListPerPage,
    check48ProductListPerPage,
    check60ProductListPerPage
    }from "./product-pagination.method";

import {checkSearchByCRCode,
    checkSearchByAllLowerLetter,
    checkSearchByAllUpperCase,
    checkSearchByAndBehavior,
    checkInvalidSearchByInvalidText,
    checkSearchByDescription,
    checkSearchByCatCode,
    checkProductSchema} from "./product-search.method"

import {    
    checkSortByCRAscending,
    checkSortByCRDescending,
    checkSortByCatAscending,
    checkSortByCatDescending,
    checkSortByCatCodeAscending,
    checkSortByCatCodeDescending,
    checkProductSortingSchema
} from "./product-sorting.method"

import {
    filterByActiveProductStatus,
    filterByInactiveProductStatus,
    filterByAllProductStatus,
    checkFilterResult,
    checkInvalidResult
} from "./product-filter.method"

import { api } from '../../schemas/index.ts';
import {PRODUCT_API_LINK} from '../../support/baseConst';



describe('Check product sort', function () {

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
          cy.openTestingEnvironment("products-admin.html#/","masterproducts")  
        
          
    })

    
    it('Sort by Commercial Reference Ascending', function () {        
        checkSortByCRAscending();
    })

    it('Sort By Commercial Reference Descending', function () {   
        checkSortByCRDescending();
    })

 
    it('Sort By Category Ascending', function () {    
        checkSortByCatAscending();
    })

    it('Sort By Category Descending', function () {    
        checkSortByCatDescending();
    })

    it('Check filter active', function () {        
        filterByActiveProductStatus();
    })   

    /*it('Check filter inactive', function () {        
        filterByInactiveProductStatus();
    })*/   

    it('Check filter all applied', function () {        
        filterByAllProductStatus();
    })   

})
