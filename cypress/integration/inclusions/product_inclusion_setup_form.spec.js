import {
    setIncludedValueWithValidInput,
    setIncludedValueWithInvalidInput,
    clickSetValue,
    clickYesButton,
    clickNoButton,
    checkInclusionValueLabel,
    checkErrorMessage
} from "./product_inclusion_setup_form.method"

import {    
    clickFirstProject,
    clickAddInclusion,
    addInclusionPageAppear,
    verifyProductListAppear,
    ChooseProjectStatusAsPartOfPrerequisition
} from "./product_inclusion_listing.method"

describe('Check included product', function () {

  
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
        //cy.openTestingEnvironment("projects.html#/","projects")        
        cy.visit("projects");

    cy.finishedLoadingAnimation();
    ChooseProjectStatusAsPartOfPrerequisition();
    clickFirstProject();
    clickAddInclusion();
    addInclusionPageAppear();  

});  
    // TODO UNSTABLE TEST
    // it('Check user able to set valid included product', function () {        
    //     clickSetValue();
    //     setIncludedValueWithValidInput();
    //     clickYesButton();
    //    // checkInclusionValueLabel(); -- uncomment this if issue is fixed
    // })   
    
    
    // it('Check user able valid included product and reset again', function () {        
    //     clickSetValue();
    //     setIncludedValueWithValidInput();
    //     clickNoButton();
    //     // check user able to reset
    //     setIncludedValueWithValidInput();
    //     clickSetValue();
    //     clickYesButton();
    //    // checkInclusionValueLabel();
    // }) 
 
})


describe('Check included product', function () {

  
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
        //cy.openTestingEnvironment("projects.html#/","projects")        
        cy.visit("projects");

    cy.finishedLoadingAnimation();
    ChooseProjectStatusAsPartOfPrerequisition();
    clickFirstProject();
    clickAddInclusion();
    addInclusionPageAppear();  

});  

    
    // it('Check user unable to set invalid included product', function () {        
    //     clickSetValue();
    //     setIncludedValueWithInvalidInput();
    //     checkErrorMessage();
    // })     
})