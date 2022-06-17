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

describe('Check product list elements', function () {

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

    
    it('Check correct information is displayed', function () {        
        checkProductAccountHeaderElement();        
        checkProductAccountListElement();
        //checkDataLoadedCorrectly();
    })   

    // it('Check product search schema', function () {  
             
    //     checkProductSchema();
    //     checkProductSortingSchema();
    // })   

    it('show items per page in list view', function () {   
        cy.log("12 items");
        check12ProductListPerPage(12);
        cy.log("24 items");
        check24ProductListPerPage(24);  
        cy.log("36 items");
        check36ProductListPerPage(36);
        cy.log("48 items");
        check48ProductListPerPage(48);
        cy.log("60 items");
        check60ProductListPerPage(60);
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

})
