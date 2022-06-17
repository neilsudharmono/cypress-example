/// <reference types="Cypress" />

import {productInclusionInput} from "../../fixtures/input/product-builder-listing";
import { checkDataLoadedCorrectly, REQUEST_PRODUCT_INCLUSION_FULL ,verifyProductListAppear, getBuilderID} 
from './product_inclusion_listing.method';
import { api } from '../../schemas/index.ts';
import {PROJECT_API_LINK_2,PRODUCT_CATALOGUE_API_LINK_2} from '../../support/baseConst';
import {filterByProductStatus} from './product_inclusion_listing_filter.method';

// Define all the test roots
const rootTileProduct = 'cprod';

let writeKeywordToTextBox=(keyword)=>{
    cy.get('[data-testid=keyword-search]')
    .clear()
    .type(keyword);

    cy.get('[data-testid=apply-filter-btn]')
    .click();

    cy.wait(1000);

    cy.finishedLoadingAnimation();
}

let checkSearchByKeywords =(search_keyword)=>{
    
     // write project name to text box
     writeKeywordToTextBox(search_keyword);

     checkDataLoadedCorrectly();
}

let checkSearchByDescription =()=>{


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

        writeKeywordToTextBox(productInclusionInput.search_description);
        filterByProductStatus('All Products');
        cy.setCookies();
    cy.request('POST',url,
      {
            "count": true,
            "search": productInclusionInput.search_description,
            "page": 1,
            "pageSize": 12,
            "sortBy": ["commercialReference"],
            "sortDir": "desc",
            "filters": [
                
            ]
        
    })
    .its('body')
    .its('items')
    .then(item => {
        if (item.length > 0)
        {
            api.assertSchema('ProductsInclusionResponse', '1.0.0');
            verifyProductListAppear();
        }
   })

    
})
}



    


let checkSearchByCRCode =()=>{
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
    // write project name to text box
    writeKeywordToTextBox(productInclusionInput.search_CR_code);
    filterByProductStatus('All Products');

    var search_request = "'search':'" + productInclusionInput.search_CR_code + "'";
    var requestbody = REQUEST_PRODUCT_INCLUSION_FULL.replace("'search':''",search_request);
        
    var test = url + "?searchParams="+ requestbody;
    cy.setCookies();
    cy.request("POST",test)
    .its('body')
    .its('items')
    .then(item => {
        if (item.length > 0)
        {
            api.assertSchema('ProductsInclusionResponse', '1.0.0');
            verifyProductListAppear();
        }
   }); 
    
})
}



let checkSearchByCatCode =()=>{
        const builderID = 'd3cee30f-affb-414c-b480-8a7eedba6731';

        cy.log('builder ID is :' + builderID);

        let url = PRODUCT_CATALOGUE_API_LINK_2.replace('builderId', builderID);
    // write project name to text box
     writeKeywordToTextBox(productInclusionInput.search_Catcode);
     filterByProductStatus('All Products');
     cy.wait(5000);
     cy.setCookies();
    cy.request('POST',url,
      {
            "count": true,
            "search": productInclusionInput.search_Catcode,
            "page": 1,
            "pageSize": 50,
            "sortBy": ["commercialReference"],
            "sortDir": "desc"            
        
    })
    .its('body')
    .its('items')
    .then(item => {
        if (item.length > 0)
        {
            api.assertSchema('ProductsInclusionResponse', '1.0.0');
            verifyProductListAppear();
        }
   }); 

       
       
}

let checkInvalidSearchByInvalidText=()=>{
    // write project name to text box
    writeKeywordToTextBox('INVALID TEST');
    filterByProductStatus('All Products');

     // Check that search result contains keyword

    cy.get('[data-testid=listing-container]')   
    .first()
    .should('have.contain', '0 Results Found');

}

let checkSearchByAllLowerLetter=()=>{
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
    // write project name to text box
    writeKeywordToTextBox(productInclusionInput.search_lower.toUpperCase());
    filterByProductStatus('All Products');
    cy.setCookies();
    cy.request( 'POST',url,
      {
            "count": true,
            "search": productInclusionInput.search_lower,
            "page": 1,
            "pageSize": 12,
            "sortBy": ["commercialReference"],
            "sortDir": "desc",
            "filters": [
                
            ]
        
    })
    .its('body')
    .its('items')
    .then(item => {
        if (item.length > 0)
        {
            api.assertSchema('ProductsInclusionResponse', '1.0.0');
            verifyProductListAppear();
        }
   }); 

    })
}

let checkSearchByAllUpperCase=()=>{
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
    // write project name to text box
    writeKeywordToTextBox(productInclusionInput.search_upper.toLowerCase());
    filterByProductStatus('All Products');
    cy.setCookies();
    cy.request( 'POST', url,
       {
            "count": true,
            "search": productInclusionInput.search_upper,
            "page": 1,
            "pageSize": 12,
            "sortBy": ["commercialReference"],
            "sortDir": "desc",
            "filters": [
                
            ]
        
    })
    .its('body')
    .its('items')
    .then(item => {
        if (item.length > 0)
        {
            api.assertSchema('ProductsInclusionResponse', '1.0.0');
            verifyProductListAppear();
        }
   }); 

    })
}

let checkSearchByAndBehavior=()=>{
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
    // write project name to text box
    writeKeywordToTextBox(productInclusionInput.search_multi_behavior);
    filterByProductStatus('All Products');
    cy.setCookies();
    cy.request( 'POST', url,
       {
            "count": true,
            "search": productInclusionInput.search_multi_behavior,
            "page": 1,
            "pageSize": 12,
            "sortBy": ["commercialReference"],
            "sortDir": "desc",
            "filters": [
                
            ]
        
    })
    .its('body')
    .its('items')
    .then(item => {
        if (item.length > 0)
        {
            api.assertSchema('ProductsInclusionResponse', '1.0.0');
            verifyProductListAppear();
        }
   }); 


})
   
}

export {
    checkSearchByKeywords,
    checkSearchByAllLowerLetter,
    checkSearchByAllUpperCase,
    checkSearchByAndBehavior,
    checkInvalidSearchByInvalidText,
    checkSearchByDescription,
    checkSearchByCatCode,
    checkSearchByCRCode,
    writeKeywordToTextBox
}
