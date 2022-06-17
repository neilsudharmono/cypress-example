import {checkBuilderListPerPage,
    clickNextPaginationButtonThenGoToSecondPage,
    goToThirdPage,
    goToSecondPage} from './product-set-pagination.method';

describe('Pagination on Product Set Listing page', function () {
 
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
          cy.connectToBuilderSummaryData();
          cy.openTestingEnvironment("products-builder.html","productsetsselection") ;
        
          
    })

  
    it('show only 12 items per page in list view', function () {   
        checkBuilderListPerPage(12);
    })
    
    it('show only 24 items per page in list view', function () {    
        checkBuilderListPerPage(24);
    })

    it('show only 36 items per page in list view', function () {   
        checkBuilderListPerPage(36);
    })

    it('show only 48 items per page in list view', function () {   
        checkBuilderListPerPage(48);
    })

    it('show only 60 items per page in list view', function () { 
        checkBuilderListPerPage(60);
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

  