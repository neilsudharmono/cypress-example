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


describe('Check product search', function () {
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

    it('Search with AND behavior by searching more than two keywords', function () {
        checkSearchByAndBehavior();
    })

    it('Search by category code and description', function () {
        checkSearchByCatCode();
        checkSearchByDescription();
    })

    it('Search by description', function () {
         checkSearchByDescription();
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

})

