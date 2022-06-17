import {
    checkProductBuilderSetHeaderElement,
    checkBuilderListDataElement
} from './product-set-listing.method';


describe('Product Set Listing page element', function () {
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
  
    it('Check correct information is displayed in list view', function () {        
        checkProductBuilderSetHeaderElement();
        checkBuilderListDataElement();
    }) 
  
  })