import {
    filterByActiveProductStatus,
    filterByInactiveProductStatus,
    filterByAllProductStatus,
    checkFilterResult,
    checkInvalidResult,
    filterByFilterData,
    filterByProductCategory,
    filterByColour,
    filterByStyle,
    ChooseProjectStatusAsPartOfPrerequisition
} from "./product_inclusion_listing_filter.method";

import {    
    clickFirstProject,
    clickAddInclusion,
    addInclusionPageAppear,
    clickSetProduct
} from "./product_inclusion_listing.method";

describe('Check filter functionality', function () {

       after(()=> {
        cy.get('[class="sslid-account-label"]')
        .click()
        
        cy.get('[href="/account/dologout"]').click()

    })
       beforeEach(() => {   

        // Handle login on DEV or Netifly on Showcase
        cy.task('deleteFile','cookies.json');
        cy.setCookies(); 
        
        // Open testing page
        //cy.openTestingEnvironment("projects.html#/","projects")        
        cy.visit("projects");
        ChooseProjectStatusAsPartOfPrerequisition();

        clickFirstProject(); 

        clickAddInclusion();

        addInclusionPageAppear();
        
        clickSetProduct();
   });  

   // TODO QA NEED TO INVESTIGATE THIS
    // it('Check filter selected',{
    //     retries: {
    //       runMode: 2,
    //       openMode: 1
    //     }}, function () {     
    //     filterByActiveProductStatus();
    // })   


    // TODO wait until BED/FED fix this
    // it('Check filter by category', function () {        
    //     filterByProductCategory();
    // })   

    // TODO QA TO FIX
    // it('Check filter range or style', function () {        
    //     filterByStyle();
    // })   

    // it('Check filter colour', function () {        
    //     filterByColour();
    // })  

    // TODO UNCOMMENT THIS AND INVESTIGATE IT WHY IT FAILED
    // it('Check filter un-selected', function () {        
    //     filterByInactiveProductStatus();
    // })   
    
    // it('Check multiple filter applied', function () {        
    //     filterByColour();
    //     filterByStyle();
    // }) 

})

