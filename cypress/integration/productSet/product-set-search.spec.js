import {checkSearchByKeywords,
    checkSearchByAddress,
    checkInvalidSearchByInvalidText} from './product-set-search.method';

describe('Search on product Set Listing page', function () {
   
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

     
  
    it('Check search by name', function () {        
        checkSearchByKeywords('Coral');
    }) 

    it('Check search by contact', function () {        
        checkSearchByAddress('Francois','Clipsal Showroom');
    }) 

    it('Check search by address', function () {        
        checkSearchByAddress('coffs harbour', 'Coral');
    }) 

    it('Check search by invalid keyword', function () {        
        checkInvalidSearchByInvalidText();
    }) 
  
  })