
import{
    clickInviteUserButton,
    checkMandatoryErrorMessage,
    filloutDetails,
    checkUserAddition,
    clickInviteAUsercConfiguration

}from "./invite-user.method";

describe('Invite a User through Configuration', function () {
    before(() => {   
        if ( !(Cypress.env("runShowcase")))  
        {
             //cy.clearCookies(); 
cy.setCookies();
        }
        });


       beforeEach(() => {   
        if ( Cypress.env("runShowcase") && Cypress.env("runUserAccount"))  
         {
            //cy.visit("configuration#/");
         }
         else if(Cypress.env("runUserAccount"))
         {
            
          cy.visit("configuration");
         }          
         //clickInviteAUsercConfiguration();
    });
  
    it('invite a user error message checking', function () {  
        //checkMandatoryErrorMessage();
        // Need to login will revisit this after role is done
        
    })    
    

    it('invite a user', function () {  
       /* filloutDetails();
        clickInviteUserButton();
        cy.wait(Cypress.env("waitForLoading"));
        checkUserAddition(); */
    })  
})