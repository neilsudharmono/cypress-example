import{
    checkProductInclusionListPerPage,
    clickNextPaginationButtonThenGoToSecondPage,
    goToThirdPage,
    goToSecondPage,
    checkDefaultPageItemPerPage,
    check12ProductInclusionListPerPage,
    check24ProductInclusionListPerPage,
    check36ProductInclusionListPerPage,
    check48ProductInclusionListPerPage,
    clickBackButton
    }from "./product_inclusion_listing_pagination.method";

    import {    
        clickFirstProject,
        clickAddInclusion,
        addInclusionPageAppear,
        clickSetProduct,
        ChooseProjectStatusAsPartOfPrerequisition,
        clickFirstProjectPagination
    } from "./product_inclusion_listing.method";

describe('Check pagination functionality', function () {
 
       after(()=> {

        clickBackButton();
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

          cy.finishedLoadingAnimation();
          ChooseProjectStatusAsPartOfPrerequisition();
          clickFirstProjectPagination();
          clickAddInclusion();
          addInclusionPageAppear();
          clickSetProduct();
        
          
    })


    it('show  items per page in list view', function () {   
        cy.log("12 items");
        check12ProductInclusionListPerPage();
        cy.log("24 items");
        check24ProductInclusionListPerPage();   
        cy.log("36 items");
        check36ProductInclusionListPerPage();
        cy.log("48 items");
        check48ProductInclusionListPerPage();
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