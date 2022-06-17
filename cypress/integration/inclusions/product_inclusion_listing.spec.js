import {    
    verifyHeaderInclusionPageAppear,
    verifyProductListAppear,
    verifyPaginationButtonPageAppear,
    checkDataLoadedCorrectly,
    clickFirstProject,
    clickAddInclusion,
    addInclusionPageAppear,
    clickSetProduct,
    prerequisiteRunAttachedFile,
    clickProjectOverview,
    ChooseProjectStatusAsPartOfPrerequisition
} from "./product_inclusion_listing.method"

import {
    filterByInactiveProductStatus,
    } from "./product_inclusion_listing_filter.method"

import {
    checkSearchByDescription
    } from "./product_inclusion_listing_search.method";

describe('Check product inclusion list elements', function () {   
 
    before(() => {        
        // Handle login on DEV or Netifly on Showcase
        cy.task('deleteFile','cookies.json');
        cy.setCookies(); 
    })
       after(()=> {
        cy.get('[class="sslid-account-label"]')
        .click()
        
        cy.get('[href="/account/dologout"]').click()

    })
       beforeEach(() => {       

        // Open testing page
        //cy.openTestingEnvironment("projects.html#/","projects")        
        cy.visit("projects");

         ChooseProjectStatusAsPartOfPrerequisition();
         clickFirstProject();
         prerequisiteRunAttachedFile();
         clickProjectOverview();
         clickAddInclusion();
         addInclusionPageAppear();
         clickSetProduct();

   });    

   //TODO INVESTIGATE THIS FAILED
    // it('Check correct information is displayed in list view', function () {      
    //     // run the main test
    //     verifyHeaderInclusionPageAppear();
    //     cy.wait(5000);
    //     verifyProductListAppear();
    //     verifyPaginationButtonPageAppear();
    //     checkDataLoadedCorrectly();
    // })     
    
    // it('Check search product combine with search, filter and sort', function () {        
    //     filterByInactiveProductStatus();   
    //     checkSearchByDescription();
    // })  

})