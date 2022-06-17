import {checkSurchargesListPerPage,
    clickNextPaginationButtonThenGoToSecondPage,
    goToThirdPage,
    goToSecondPage} from './surcharges_listing_pagination.method';

describe('Pagination on Surcharges Listing page', function () {
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
        cy.openTestingEnvironment("surcharges.html#/","systemsettings#/surcharges") ;

    });
  
    it('show only 12 items per page in list view', function () {   
        checkSurchargesListPerPage(12);
    })
    
    // it('show only 24 items per page in list view', function () {    
    //     checkSurchargesListPerPage(24);
    // })

    // it('show only 36 items per page in list view', function () {   
    //     checkSurchargesListPerPage(36);
    // })

    // it('show only 48 items per page in list view', function () {   
    //     checkSurchargesListPerPage(48);
    // })

    // it('show only 60 items per page in list view', function () { 
    //     checkSurchargesListPerPage(60);
    // })

    // it('is able to navigate to the next page', function () {    
    //     clickNextPaginationButtonThenGoToSecondPage();
    // })    

    // it('is able to navigate into X page by clicking number of page', function () {    
    //     goToThirdPage();
    // })

    // it('is able to navigate to previous page', function () {   
    //     goToSecondPage();
    // })
  
  })