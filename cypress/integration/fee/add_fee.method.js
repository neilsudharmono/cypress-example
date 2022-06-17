
import addFeeDetails from '../../fixtures/input/addfee';
import { getTestSelector} from "../../support/getTestSelector";

let clickEditCanvas=()=>{


    cy.get(getTestSelector(['ctil2'], 'link')) 
    .first()
    .click();

    cy.get('button[data-testid=control]') 
    .eq(0)
    .click({force:true});

    cy.finishedLoadingAnimation();

    cy.get('.cverl-close-button')
    .click({force:true});

    cy.get('[data-testid=manu]')
    .contains('Edit Plan')   
    .first()
    .click({force:true});
}

let addFee=()=>{
    cy.get("[data-testid=group-new-btn]")
    .click();

    // check the pop-up appear
    cy.get("h3")
    .contains("Add a Fee")
    .should('be.visible');

    checkOnRequiredMessage();

    // user able to fill out fee pop-up
    cy.get('[name=builderCategory]')
    .find('option')
    .eq(1)
    .invoke('val')
    .then((val)=>{
      cy.get('[name=builderCategory]').first().select(val)
    })

    cy.get("[name=name]")
    .type(addFeeDetails.fee_name);

    cy.get("[name=description]")
    .type(addFeeDetails.fee_desc);

    cy.get("[name=builderPrice]")
    .type(addFeeDetails.client_price);

    cy.get("[data-testid=text-icon-button]")
    .contains("More")
    .click({force: true})

    cy.get("[name=contractorPrice]")
    .type(addFeeDetails.contractor_price);

    clickApplyFee();

    cy.finishedLoadingAnimation();

    cy.get("[data-testid=group-expand-btn-icon]")
    .last()
    .click({force: true});

    cy.get(".cbsai-desc")
    .contains(addFeeDetails.fee_name)
    .should("be.visible");

    cy.get(".cbsai-value")
    .contains(addFeeDetails.client_price)
    .should("be.visible");

}

let clickApplyFee=()=>{
    cy.get("[data-testid=fee-details-modal]")
    .find("button")
    .contains('Apply')
    .click({force: true});
}

let checkOnRequiredMessage=()=>{
    
    clickApplyFee();

    cy.get("[name=builderCategory]")
    .next()
    .contains('Required')
    .should("be.visible");

    cy.get("[name=name]")
    .next()
    .contains('Required')
    .should("be.visible");

    cy.get("[name=builderPrice]")
    .next()
    .contains('Required')
    .should("be.visible");
    
}

let clickDeleteFee=()=>{

    // cy.get("[data-testid=group-expand-btn-icon]")
    // .last()
    // .click();

    cy.get("[data-testid=remove-btn]")
    .click({multiple:true});

    cy.get(".cbsai-desc")
    .should("not.exist");
}

let updateFeeDetails=()=>{
    // expand fee list
    // cy.get("[data-testid=group-expand-btn-icon]")
    //  .last()
    // .click();

    // click fee name
    cy.get(".cbsai-desc")
    .contains(addFeeDetails.fee_name)
    .click();

      // user able to fill out fee pop-up
    cy.get('[name=builderCategory]')
    .find('option')
    .eq(1)
    .invoke('val')
    .then((val)=>{
      cy.get('[name=builderCategory]').first().select(val)
    })
 
     cy.get("[name=name]")
     .clear()
     .type(addFeeDetails.fee_name + " update");
 
     cy.get("[name=description]")
     .clear()
     .type(addFeeDetails.fee_desc + " update");
 
     cy.get("[name=builderPrice]")
     .clear()
     .type(addFeeDetails.updated_client_price);

     cy.get("[data-testid=text-icon-button]")
     .contains("More")
     .click()
 
     cy.get("[name=contractorPrice]")
     .clear()
     .type(addFeeDetails.updated_contractor_price);

     clickApplyFee();

     cy.finishedLoadingAnimation();
     
     // expand fee list
     cy.get("[data-testid=group-expand-btn-icon]")
     .last()
    .click();

    // check updated name is appeared and old value is gone
     cy.get(".cbsai-desc")
     .contains(addFeeDetails.fee_name)
     .should("not.exist");

          // expand fee list
          cy.get("[data-testid=group-expand-btn-icon]")
          .last()
         .click();

     cy.get(".cbsai-desc")
     .contains(addFeeDetails.fee_name + " update")
     .should("be.visible");
}

let updateProjectCommentOnEditMode=()=>{
    cy.get('[data-testid=open-project-comments]')
    .click();

    cy.get('[name=projectComments]')
    .clear()
    .type('Dummy Project Comment on Edit Mode');

    cy.get('button')
    .contains('Update')
    .click();
}



export {
    addFee,
    clickEditCanvas,
    checkOnRequiredMessage,
    clickDeleteFee,
    updateFeeDetails,
    updateProjectCommentOnEditMode
}