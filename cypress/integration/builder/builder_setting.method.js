import inputValidBuilderDetails from '../../fixtures/input/builder-edit'
import validContactInput from '../../fixtures/input/contact_details'
import {
  clickAddNewBuilderLink,
  clickAddNewBuilderLinkLink,
  checkBuilderListAppear,
  filloutBuilderDetails,
  filloutBuilderLocation,
  uploadclipsallogopng,
  clickNext,
  clickAddNewContact,
  clickSameAsPrimaryAddress,
  filloutBuilderPostalLocation,
  checkMandatoryErrorMessage,
  filloutValidValueForStep1Form,
  typeToExistingUserTextbox,
  fillOutAddNewContactDetail,
  checkErrorMessageExistingAccount,
  clickPermissionAdjustPrice,
  checkErrorMessageNewContact,
  filloutBillOfMaterialPlan,
  checkErrorMessageBillOfMaterialPlan,
  checkErrorMessageOnAddress,
  checkStateErrorMessage
} from './builder_addnew.method';

let clickBuilderSetting =()=>{
  cy.get("[data-testid=link-Settings]")
  .click();
  cy.wait(1000);
}


let clickTestBuilder =()=>{
  cy.get("body").then($body => {
  if ($body.find('[data-testid=notice-msg]').length>0) {   //evaluates as true
    clickAddNewBuilderLink();
    filloutBuilderDetails();        
    clickNext(); 
    filloutBuilderLocation();
    uploadclipsallogopng();
    clickNext(); 
    clickAddNewContact();
    fillOutAddNewContactDetail();
    clickNext();
    filloutBillOfMaterialPlan();
    clickNext();
    checkBuilderListAppear();
    
    cy.get('[data-testid=name]')
    .contains('Test')
    .click();

  }
  else
  {
  

    cy.get('[data-testid=name]')
    .contains('Test')
    .click();

    
  }

        
});


}

let updateAllBuilderSetting=()=>{
  cy.get('[name=defaultStyle]')
  .select('Iconic')

  cy.get('[name=defaultColour]')
  .select('Vivid White (VW)')

  cy.get('[name=builderNcpSharingCode]')
  .clear()
  .type("TE-01")

  cy.get('[name=builderAutoCompleteDays]')
  .clear()
  .type("25")

  cy.get('span')
  .contains('Allow Custom Product Catcode')
  .prev()
  .click()

  cy.get('span')
  .contains('Allow Builder Product Description')
  .prev()
  .click()

  cy.get('span')
  .contains('Allow Zero Pricing')
  .prev()
  .click()  

  cy.get('span')
  .contains('Inclusions Qty')
  .prev()
  .click()

  cy.get('span')
  .contains('Variations Qty')
  .prev()
  .click()

  cy.get('span')
  .contains('Unit Value (Incl. GST)')
  .prev()
  .click()

  cy.get('span')
  .contains('Variations Value (Incl. GST)')
  .prev()
  .click()

  cy.get('span')
  .contains('Total Value (Incl. GST)')
  .prev()
  .click()

  cy.get('[data-testid=radio-bomValues-All]')
  .first()
  .click()

}

let clickSaveChanges=()=>{
  cy.get('[data-testid=button-submit]')
  .click(); 
}

let clickSaveCategories=()=>{
  cy.get('[data-testid=save-categories]')
  .click(); 
}

let checkSuccessMessageAppear=()=>{
  // need to remove this once correct API implemented (currently still trial so it takes time to update)
  //cy.wait(5000);

  cy.get("[data-testid=notice-msg]")
  .contains("Updating the Builder...")
  .should('not.exist');

  cy.get("[data-testid=notice-msg]")
  .contains("updated successfully");
}

let clickAddNewCategory=()=>{
  cy.get('[data-testid=add-new-category]')
  .click()
  
}

let clickAddNewSubCategory=()=>{
  cy.get('[data-testid=add-new-subcategory]')
  .click()
  
}

let clickCategoryTab=()=>{
  cy.wait(2000)
  cy.get('a')
  .contains('Categories')
  .click()
  
}

let setCategoryAndSubcat=()=>{

  cy.get("body").then($body => {

  
  if ($body.find('[data-testid="notice-msg"]').length>0) {   //evaluates as true
    
    cy.wait(2000);
    cy.get('[data-testid=add-new-category]')
    .click()

  }

  
  cy.wait(2000);

  cy.get('[data-testid=change-colour]')
  .last()
  .click();

  cy.get('[title="Black"]')
  //.first()
  .click();

  cy.get('[data-testid=category-name]')
  .last()
  .clear()
  .type("Test Cat1")
  .then( ex => {

    cy.get("body").then($body => {
      if ($body.find('[data-testid=show-subcategories]').length<1) {   //evaluates as true
        
        cy.wait(2000);
        cy.get('[data-testid=add-new-subcategory]')
        .last()
        .click();
    
      }
      else
      {
        cy.get('[data-testid=show-subcategories]')
        .last()
        .click();
        
      }

      cy.get('[data-testid=subcategory-name]')
      .last()
      .clear()
      .type("Test SubCat1");
    })
    })

  
   
})




  
}

export{
    clickBuilderSetting,
    updateAllBuilderSetting,
    clickSaveChanges,
    checkSuccessMessageAppear,
    clickSaveCategories,
    clickAddNewCategory,
    clickAddNewSubCategory,
    setCategoryAndSubcat,
    clickCategoryTab,
    clickTestBuilder
}