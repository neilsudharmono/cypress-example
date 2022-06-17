import {checkSearchByCRCode,
    checkSearchByAllLowerLetter,
    checkSearchByAllUpperCase,
    checkSearchByAndBehavior,
    checkInvalidSearchByInvalidText,
    checkSearchByDescription,
    checkSearchByCatCode} from "./product_inclusion_listing_search.method";

import {    
        clickFirstProject,
        clickAddInclusion,
        addInclusionPageAppear,
        clickSetProduct,
        ChooseProjectStatusAsPartOfPrerequisition,
        clickBackButton
    } from "./product_inclusion_listing.method"

describe('Check search functionality', function () {
    

       after(()=> {
        clickBackButton();
        cy.get('[class="sslid-account-label"]')
        .click()
        
        cy.get('[href="/account/dologout"]').click()

    })
       beforeEach(() => {        

        // Handle login on DEV or Netifly on Showcase
        cy.task('deleteFile','cookies.json');
        cy.setCookies(); 
            
        // Open testing page
        cy.visit("projects");
        cy.finishedLoadingAnimation();
        ChooseProjectStatusAsPartOfPrerequisition();
        clickFirstProject();
        clickAddInclusion();
        addInclusionPageAppear();
        clickSetProduct();


});    
   
    //TODO: UNSTABLE TEST
    // not in from BED
    // it('Search by CR Code', function () {
    //     checkSearchByCRCode();
    // })

    // it('Search by category code', function () {
    //     checkSearchByCatCode()
    // })
    // TODO FILYA

    // it('Search by description', function () {
    //     checkSearchByDescription();
    // })

    it('Search by invalid text then show error message', function () {
    
        checkInvalidSearchByInvalidText();
    })
    // TODO FILYA
    // it('Search with case not sensitive', function () {
    //     checkSearchByAllLowerLetter();
    //     checkSearchByAllUpperCase();
    // })

    it('Search with AND behavior by searching more than two keywords', function () {
        checkSearchByAndBehavior();
    })
    
})
