import chooseSortingBySurchargeName from './surcharges_listing_sort.method';

describe('Sorting on Surcharges Listing page', function () {
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
          cy.openTestingEnvironment("surcharges.html#/","systemsettings#/surcharges") ;
     
          
          
    })
    

  
    it('sort by surcharge name A-Z', function () {   
        chooseSortingBySurchargeName(false);
    })
    

    it('sort by surcharge name Z-A', function () {   
        chooseSortingBySurchargeName(true);
    })

})