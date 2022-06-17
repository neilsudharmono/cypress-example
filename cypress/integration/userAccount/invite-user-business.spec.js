
import{
    checkSearchByKeywords
}from "../businessList/businessList-search.method";

import{
    clickFirstResult,
    clickInviteAUser,
    clickInviteUserButton,
    checkMandatoryErrorMessage,
    filloutDetails,
    checkUserAddition,
    clickInviteAUserLeftPane

}from "./invite-user.method";

describe('Invite a User through Business Account detail', function () {
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
        cy.openTestingEnvironment("business-accounts.html#/","businessaccounts") ;

        cy.finishedLoadingAnimation();

        checkSearchByKeywords(Cypress.env("businessName"),Cypress.env("businessName"));

        clickFirstResult();

        cy.wait(Cypress.env("userWaitForLoading"));
    
        
        
    });
    
    if (Cypress.env("runUserAccount"))
    {
  
        it('invite a user error message checking', function () {  
            clickInviteAUser();
            clickInviteUserButton();
            checkMandatoryErrorMessage();
        })    
        
        it('invite a user via business overview', function () {  
            clickInviteAUser();
            filloutDetails();
            clickInviteUserButton();
            cy.wait(Cypress.env("userWaitForLoading"));
            checkUserAddition();
        })  

        it('invite a user via business detail left pane', function () {  
            clickInviteAUserLeftPane();
            filloutDetails();
            clickInviteUserButton();
            cy.wait(Cypress.env("userWaitForLoading"));
            checkUserAddition();
        })  
    }
})