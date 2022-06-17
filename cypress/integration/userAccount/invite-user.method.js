
/// <reference types="Cypress" />

import { getTestSelector} from "../../support/getTestSelector";
import inputValidUserDetails from '../../fixtures/input/user-detail';

let clickFirstResult=()=>{
    //click the first result of the list of business
    cy.get(getTestSelector(['cbuit'], 'businessName'))   
    .first()
    .click();
}

let clickFirstResultProject=()=>{
    //click the first result of the list of project
    cy.get(getTestSelector(['ctil2'], 'name'))   
    .first()
    .click();
}


let clickInviteAUser=()=>{
    //click invite user 
    cy.get('[data-testid=inviteUserBtn]')
    .click();
}

let clickInviteAUserLeftPane=()=>{
    //click invite user  at the left pane
    cy.get('button[class=cdeta-nav-button]')
    .contains('Invite a User')
    .click();
}

let clickInviteAUsercConfiguration=()=>{
    //click invite user  at the configuration page
    cy.get('[class=cdeta-nav-button]')
    .contains('Invite a User')
    .click();
}


let clickInviteUserButton=()=>{
    //click invite user button for submission
    cy.get('[data-testid=control-next]')
    .click();
}

let checkUserAddition =()=>{
    //check user details after addition

    cy.get('[data-testid=notice-msg]')
    .should('have.contain', inputValidUserDetails.firstName);
    
    cy.get('[data-testid=userList]')
    .last()
    .should('have.contain', inputValidUserDetails.fullName)
    .should('have.contain', inputValidUserDetails.phone)
    .should('have.contain', inputValidUserDetails.email);

    cy.get('[data-testid=control]')
    .last()
    .click();

    cy.get('[data-testid=manu]')
    .should('have.contain','View User Account');
    // this is removed in FED Site
    //.should('have.contain','Revoke User Account');
}

let checkUserAdditionProject =()=>{
    //check user details after addition for project
    
    cy.get('[data-testid=notice-msg]')
    .should('have.contain', inputValidUserDetails.firstName);

}


let checkMandatoryErrorMessage=()=>{
    
    //check all error message that should be appeared when details are blank

    cy.get('[data-testid=userRole] > .input-wrapper > .error-msg')
    .should('be.visible');

    cy.get('[data-testid=firstName] > .input-wrapper > .error-msg')
    .should('be.visible');

    cy.get('[data-testid=lastName] > .input-wrapper > .error-msg')
    .should('be.visible');

    cy.get('[data-testid=phone] > .input-wrapper > .error-msg')
    .should('be.visible');

    cy.get('[data-testid=email] > .input-wrapper > .error-msg')
    .should('be.visible');
}

let filloutDetails=()=>{
    
    //filling all invite user details

    cy.get('[name=userRole]')
    .select(inputValidUserDetails.userRole);

    cy.get('[name=firstName]')
    .type(inputValidUserDetails.firstName);

    cy.get('[name=lastName]')
    .type(inputValidUserDetails.lastName);

    cy.get('[name=phoneNumber]')
    .type(inputValidUserDetails.phone);

    cy.get('[name=emailAddress]')
    .type(inputValidUserDetails.email);
}

/*let Login=()=>{
    
    cy.get('[class=btn-skin-1]')
    .click();

    cy.wait(Cypress.env("waitForLoading"));

    cy.get('[name=emailid]')
    .type(inputValidUserDetails.userName);

    cy.get('[name=lastName]')
    .type(inputValidUserDetails.lastName);

    cy.get('[name=phoneNumber]')
    .type(inputValidUserDetails.phone);

    cy.get('[name=emailAddress]')
    .type(inputValidUserDetails.email);
}*/




export{
    clickFirstResult,
    clickInviteAUser,
    clickInviteUserButton,
    checkMandatoryErrorMessage,
    filloutDetails,
    checkUserAddition,
    clickInviteAUserLeftPane,
    checkUserAdditionProject,
    clickFirstResultProject,
    clickInviteAUsercConfiguration
}