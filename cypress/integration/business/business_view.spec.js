import {
    checkUserAccountListData,
    checkUserAccountHeader,
    checkBuilderListData,
    getFirstBusinessLink,
    checkBusinessDetailName,
    checkContactDetailsData,
    checkContractPeriodData,
    checkSAPNumberData,
    checkBuilderListHeader,
    clickFirstResult,
    checkExpiredContract,
    backtoBusinessPage
} from './business_view.method';

describe('View a business test case', function () {

 
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
      cy.openTestingEnvironment("business-accounts.html#/","businessaccounts")   
      
})

    it('check user get highlight info about expiring soon contract date', function () {  

      // TODO FILYA
    //  // Data MOCK Failed

    //  // open details page
    //   getFirstBusinessLink(true);

    //   // back to business
    //   backtoBusinessPage();

    //   // reopen the page
    //   getFirstBusinessLink(false);

    //   // check data retrieved
    //   checkExpiredContract();

    //   // check data retrieved
    //   checkBusinessDetailName();
    //   checkContactDetailsData();
    //   checkContractPeriodData();
    //   checkSAPNumberData();
      
    //   // check builder list appear
    //   checkBuilderListHeader();
    //   checkBuilderListData();

    //   // check user account list appear
    //   checkUserAccountListData();
    //   //checkUserAccountHeader();
    }) 
    
})