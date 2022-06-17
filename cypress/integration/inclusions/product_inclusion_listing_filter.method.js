/// <reference types="Cypress" />

import { getTestSelector} from "../../support/getTestSelector";
import { clickApplyButton, verifyProductListAppear, getBuilderID} from "./product_inclusion_listing.method";
import {PRODUCT_INCLUSION_API_LINK,PROJECT_API_LINK_2,PRODUCT_CATALOGUE_API_LINK_2} from '../../support/baseConst';
import { api } from '../../schemas/index.ts';
import {productInclusionInput} from "../../fixtures/input/product-builder-listing";
import {writeKeywordToTextBox} from './product_inclusion_listing_search.method';
// Define all the test roots
const rootTileProductCard = 'cprod';
const activeParam = "?searchParams={'count':true,'search':'','page':1,'pageSize':12,'sortBy':'commercialReference','sortDir':'desc','filters':[{'field':'isIncluded','values':[true],'operator':'eq','dataType':'boolean'}]}";
const inactiveParam = "?searchParams={'count':true,'search':'','page':1,'pageSize':12,'sortBy':'commercialReference','sortDir':'desc','filters':[{'field':'isIncluded','values':[false],'operator':'eq','dataType':'boolean'}]}";
const allParam = "?searchParams={'count':true,'search':'','page':1,'pageSize':12,'sortBy':'commercialReference','sortDir':'desc','filters':[]}";
const colourParam = "?searchParams={'count':true,'search':'','page':1,'pageSize':12,'sortBy':'commercialReference','sortDir':'desc','filters':[{'field':'isIncluded','values':[false],'operator':'eq','dataType':'boolean'},{'field':'colourGroupName','values':['Whites'],'operator':'eq','dataType':'string'}]}";
const styleParam = "?searchParams={'count':true,'search':'','page':1,'pageSize':12,'sortBy':'commercialReference','sortDir':'desc','filters':[{'field':'isIncluded','values':[false],'operator':'eq','dataType':'boolean'},{'field':'style','values':['Iconic'],'operator':'eq','dataType':'string'}]}";


let filterByProductStatus=(keyword)=>{
    cy.get('[data-testid=select-by-active-product] > .input-wrapper > [data-testid=toggle-dropdown]')
    .click();

    cy.get("[data-testid=multiple-options-dropdown]")
    .contains(keyword)
    .click({force:true});

    clickApplyButton();
    return cy
        .log(`Searching for ${keyword}`)
}

let filterByProductCategory=(keyword)=>{
    cy.get('[data-testid=category-dropdown] > .input-wrapper > [data-testid=toggle-dropdown]')
    .click();

    cy.get("[data-testid=multiple-options-dropdown]")
    .contains(keyword)
    .click({force:true});

    clickApplyButton();
    return cy
        .log(`Searching for ${keyword}`)
}

let filterByFilterData=(keyword, URL)=>{
    cy.get('[data-testid=text-icon-button]')
    .first()
    .click();

    cy.get('[data-testid=building-type-checkbox]')
    .next()
    .contains(keyword)
    .scrollIntoView()
    .click({force:true});

    cy.get('button')
    .contains('Apply'); 
    cy.setCookies();
    cy.request('POST', URL,
           {
                "count": true,
                "search": "",
                "page": 1,
                "pageSize": 12,
                "sortBy": [""],
                "sortDir": "desc",
                "filters": [       
                    {
                        "field": "productId",
                        "values": [
                            "false"
                        ],
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
                verifyProductListAppear();
            }
            
    }); 

}

let ChooseProjectStatusAsPartOfPrerequisition=()=>{
    let search_root = 'sprfi';

    cy.wait(Cypress.env("waitForLoading"));

    writeKeywordToTextBox(Cypress.env('projectName'));
    
    cy.get(getTestSelector([search_root],'multiple-options-dropdown'))
    .contains("Preparation")
    .click({force:true});
    
    cy.get(getTestSelector([search_root],'apply-filter-btn'))
    .click();

    cy.wait(Cypress.env("waitForLoading"));

}

let filterByColour =()=>{
    let builderID,projectID;
    cy.url().then(urlString => {

        cy.log(urlString);
        projectID = urlString.split('#/')[1];
        cy.log(projectID);
        projectID = projectID.replace('projects/','');
        cy.log(projectID);

        builderID = Cypress.env('builderID');

        cy.log('builder ID is :' + builderID);


        var url = PRODUCT_CATALOGUE_API_LINK_2.replace('builderId', builderID) + colourParam
        .replace("values':['Whites']","values':['"+productInclusionInput.filter_colour+"']");

        filterByFilterData(productInclusionInput.filter_colour,url);
    })

}

let filterByStyle =()=>{
    // get available range based on Data
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

    cy.get("[data-testid=building-type-checkbox]")
    .first()
    .next()
    .invoke('text')  
    .then(style => {
        cy.log(style);

        // set URL based on available data on screen
        var finalurl = url + styleParam
        .replace("values':['Iconic']","values':['"+style+"']");

        // do filter by current style and current URL
        filterByFilterData(style,finalurl);
    }); 

    })
}

let filterByActiveProductStatus=()=>{

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

        filterByProductStatus('Selected Products');   
        cy.setCookies();
        cy.request( 'POST', url,
           {
                "count": true,
                "search": "",
                "page": 1,
                "pageSize": 12,
                "sortBy": [""],
                "sortDir": "desc",
                "filters": [       
                    {
                        "field": "productId",
                        "values": [
                            "true"
                        ],
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

let filterByInactiveProductStatus=()=>{
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


    filterByProductStatus('Un-selected Products');
    cy.setCookies();
        cy.request( 'POST', url,
             {
            "count": true,
            "search": "",
            "page": 1,
            "pageSize": 12,
            "sortBy": [""],
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
                verifyProductListAppear();
            }
    }); 

})}

let filterByAllProductStatus=()=>{
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

        filterByProductStatus('All Products');   
        cy.setCookies();
        cy.request( 'POST', url,
           {
                "count": true,
                "search": "",
                "page": 1,
                "pageSize": 12,
                "sortBy": [""],
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
            }
        }); 
    });
   
}

let checkFilterResult=(expected_Result)=> {
    cy.get(getTestSelector([rootTileProductCard], 'catCode'))   
    .should('have.contain', expected_Result)
}

let checkInvalidResult=()=>{
    cy.get('[data-testid=listing-container]')   
    .first()
    .should('have.contain', '0 Results Found')

    return true;
}

export {
    filterByActiveProductStatus,
    filterByInactiveProductStatus,
    filterByAllProductStatus,
    checkFilterResult,
    checkInvalidResult,
    filterByProductStatus,
    filterByProductCategory,
    filterByFilterData,
    filterByColour,
    filterByStyle,
    ChooseProjectStatusAsPartOfPrerequisition
}