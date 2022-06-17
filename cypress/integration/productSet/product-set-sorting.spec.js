import {chooseSortingByBuilderName,
    chooseSortingByBuilderNameZA,
    chooseSortingDateAddedLeastRecent,
    chooseSortingDateAddedMostRecent}
from './product-set-sorting.method';

describe('Product Set Listing page', function () {
  

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

  
    it('Sort by builder name Ascending', function () {   
        chooseSortingByBuilderName(false);
        chooseSortingByBuilderNameZA(false);
    })
    
    it('Sort by builder name descending', function () {    
        chooseSortingByBuilderName(true);
        chooseSortingByBuilderNameZA(true);
    })

    it('Sort by date added Ascending', function () {   
        chooseSortingDateAddedLeastRecent(true);
        chooseSortingDateAddedMostRecent(true);
        
    })

    it('Sort by date added descending', function () {   
        chooseSortingDateAddedLeastRecent(false);
        chooseSortingDateAddedMostRecent(false);
    })
  
  })

  