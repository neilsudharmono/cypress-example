const REQUEST_PRODUCT_INCLUSION = "{'count':true,'search':'','page':1,'pageSize':12,'sortBy':'commercialReference','sortDir':'desc','filters':[]}";
const REQUEST_PRODUCT_INCLUSION_FULL = "{'count':true,'search':'','page':1,'pageSize':12,'sortBy':'commercialReference','sortDir':'desc','filters':[{'field':'isIncluded','values':[false],'operator':'eq','dataType':'boolean'}]}";

import { getTestSelector} from "../../support/getTestSelector";
import {PRODUCT_INCLUSION_API_LINK,PRODUCT_INCLUSION_API_LINK_2,PROJECT_API_LINK_2,PRODUCT_CATALOGUE_API_LINK_2} from '../../support/baseConst';
import { api } from '../../schemas/index.ts';
import {uploadInclusionPlan} from "../Project/project_addnew.method";

let clickAddInclusion =()=>{
    cy.wait (2000);
    // Click no skip project assignment
    cy.skipProjectAssignmentProcess();   
    cy.wait (2000);
    cy.get('[data-testid=link-ProjectOverview]')
    .click();

    cy.skipProjectAssignmentProcess();
    

    cy.get('[data-testid=add-button]')
    .invoke('text')  
    .then(text => {
        cy.get('[data-testid=add-button]')
        .click();

        if (!text.includes('Resume'))
        {
            cy.wait(Cypress.env('waitForLoading'))

            cy.get('[data-testid=btn-products]')
            .click();

        }
    });

}

let clickBackButton =() =>{
    cy.get('[data-testid="back-btn"]')
    .click();
}

let addInclusionPageAppear =()=>{
  
    // check page is load
    cy.get('.sadip-heading')
    .should('be.visible');

    cy.get('[data-testid=productCheckbox]')
    .should('be.visible');    
}

let clickSetProduct=()=>{
    cy.get('[data-testid=productCheckbox]')
    .click({ multiple: true });

    cy.wait(Cypress.env('productTimeout'));
}

let clickEveryProductInThisPage=()=>{
    // check product rows are loaded
    cy.wait(Cypress.env('productTimeout'));

    cy.get('[data-testid=defaultDescription]')
    .should('be.visible');

    cy.get("[data-testid=productCheckbox]")
    .click( { multiple: true,force:true });
}

let clickFinishInclusion=()=>{
    cy.get("[data-testid=btn-products-finish]")
    .click();

    cy.get("[data-testid=btn-products-yes]")
    .click();
}

let clickStartConsultation=()=>{
    cy.get(".btn-skin-1",{timeout:Cypress.env('floorplanWaitForLoading')})
    .contains("Start Consultation")
    .click({force:true});
}

let filterByBuilder=(keyword)=>{
    cy.get('[data-testid=builder-dropdown] > .input-wrapper > [data-testid=toggle-dropdown]')
    .click();

    cy.get("[data-testid=multiple-options-dropdown]")
    .contains(keyword)
    .click({force:true});

    clickApplyButton();
    return cy
        .log(`Searching for ${keyword}`)
}

let clickProjectOverview=()=>{
    cy.get("[data-testid=link-ProjectOverview]")
    .click();
}

let clickFirstProject = ()=>{
    // get project with Allen builds
    // for current development, only this build that can show inclusion page

    //filterByBuilder(Cypress.env("builderName"));

    cy.get('[data-testid="builder-dropdown"] > .input-wrapper > [data-testid=toggle-dropdown]')
    .click();

    cy.get('[value="'+Cypress.env('builderID')+'"]')
    .click({force:true});


    cy.get(getTestSelector(['ctil2'], 'name'))   
    .first()
    .click();
}


let clickFirstProjectPagination = ()=>{
    // get project with Allen builds
    // for current development, only this build that can show inclusion page

    //filterByBuilder(Cypress.env("builderName"));

    cy.get('[data-testid="builder-dropdown"] > .input-wrapper > [data-testid=toggle-dropdown]')
    .click();

    cy.get('[value="'+Cypress.env('builderID')+'"]')
    .click({force:true});


    cy.get(getTestSelector(['ctil2'], 'name'))   
    .first()
    .click();
}

let prerequisiteRunAttachedFile=()=>{
    cy.wait(1000);

    // Click no skip project assignment
    cy.skipProjectAssignmentProcess();

    cy.get('[data-testid=link-Attachments]')
    .click();

    cy.get("[data-test-id=add-button]")
    .click();

    uploadInclusionPlan();

    cy.get("[data-testid=control-next]")
    .click();
}

let verifyHeaderInclusionPageAppear=()=>{
    // verify that inclusion page is appear
    cy.get('.sadip-heading')
    .contains("Select Products")
    .should('be.visible');

    // verify download inclusion document section appear
    cy.get('[data-testid=text-icon-button]')
    .should('be.visible');

    cy.get('.sadip-doc-name')
    .should('be.visible');

    cy.get('.sadip-doc-info')
    .should('be.visible');

    // verify header page inclusion is appear
    cy.get('[data-testid=keyword-search]')
    .scrollIntoView()
    .should('be.visible');

    cy.get('[data-testid=select-by-active-product]')
    .should('be.visible');

    cy.get('[data-testid=builder-category-dropdown]')
    .should('be.visible');

    cy.get('[data-testid=text-icon-button]')
    .should('be.visible');

    cy.get('[data-testid=apply-filter-btn]')
    .should('be.visible');

    cy.get('[data-testid=count-showing]')
    .scrollIntoView()
    .should('be.visible');

    cy.get('[data-testid=count-total]')
    .should('be.visible');

    cy.get('[data-testid=display-text]')
    .should('be.visible');
}

let verifyProductListAppear=()=>{
    // verify product list data showing in page
    cy.get('[data-testid=image]',{timeout:Cypress.env('productTimeout')})
    .should('be.visible');

    cy.get('[data-testid="productCheckbox"]')
    .should('be.visible');

    //cy.get('[data-testid="defaultDescription]')
    //.should('be.visible');

    
    // cy.get('[data-testid=colour]')
    // .should('be.visible');

    // cy.get('[data-testid=style]')
    // .should('be.visible');

   // cy.get('[data-testid=category]')
   // .should('be.visible');

    cy.get('[data-testid=builderPrice]')
    .should('be.visible');

    cy.get('[data-testid=quantity]')
    .should('be.visible');
}

let verifyPaginationButtonPageAppear=()=>{
    // verify pagination botton navigation

    cy.get('[data-testid=pager-link]')
    .first()
    .scrollIntoView()
    .should('be.visible');

    cy.get('[data-testid=pager-next]')
    .should('be.visible');
}

let checkDataLoadedCorrectly=()=>{
    let builderID,projectID;
    cy.url().then(urlString => {

        cy.log(urlString);
        projectID = urlString.split('#/')[1];
        cy.log(projectID);
        projectID = projectID.replace('projects/','');
        cy.log(projectID);
        builderID = Cypress.env('builderID');

        cy.log('builder ID is :' + builderID);

        let url = PRODUCT_CATALOGUE_API_LINK_2.replace('builderId', builderID);
 
    cy.setCookies();
    return cy.request('POST',url,
         {
            "count": true,
            "search": "",
            "page": 1,
            "pageSize": 12,
            "sortBy": ["commercialReference"],
            "sortDir": "desc",
            "filters": [
                {
                    "field": "productId",
                    "values": [""],
                    "operator": "eq",
                    "dataType": "string"
                }
            ]
        
    })
    .its('body')
    .its('items')
    .then(item => {
        if (item.length > 0)
        {
            api.assertSchema('ProductsInclusionResponse', '1.0.0');
        }
    }); 
    });

   
     
 }

 let clickApplyButton =()=>{
    cy.get('[data-testid=apply-filter-btn]')
    .click();
    cy.wait(1000);
}

let getBuilderID =(projectID)=>{
    let builderID;



        cy.request('GET',PROJECT_API_LINK_2+'/'+projectID)
        .its('body')
        .then(resp => {
        builderID = resp.items[0].builder.id;
        return builderID;

        
    });

    
}

let ChooseProjectStatusAsPartOfPrerequisition=()=>{
    let search_root = 'sprfi';

    cy.get(getTestSelector([search_root],'multiple-options-dropdown'))
    .contains("Preparation")
    .click({force:true});

    cy.get(getTestSelector([search_root],'builder-dropdown'))
    .contains(Cypress.env("builderName"))
    .click({force:true});
    
    cy.get(getTestSelector([search_root],'apply-filter-btn'))
    .click();

    cy.wait(3000);

}

export{
    clickAddInclusion,
    addInclusionPageAppear,
    clickSetProduct,
    verifyHeaderInclusionPageAppear,
    verifyProductListAppear,
    verifyPaginationButtonPageAppear,
    REQUEST_PRODUCT_INCLUSION,
    REQUEST_PRODUCT_INCLUSION_FULL,
    checkDataLoadedCorrectly,
    clickFirstProject,
    clickApplyButton,
    getBuilderID,
    prerequisiteRunAttachedFile,
    clickProjectOverview,
    ChooseProjectStatusAsPartOfPrerequisition,
    clickEveryProductInThisPage,
    clickFinishInclusion,
    clickStartConsultation,
    clickFirstProjectPagination,
    clickBackButton
}