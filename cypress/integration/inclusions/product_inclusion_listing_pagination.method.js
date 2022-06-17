/// <reference types="Cypress" />

import { getTestSelector} from "../../support/getTestSelector";
import {DEFAULT_ITEM_PER_PAGE} from "../../support/baseConst";
import paginationInput from "../../fixtures/input/pagination";
import {PRODUCT_INCLUSION_API_LINK_2,PROJECT_API_LINK_2} from '../../support/baseConst';
import { api } from '../../schemas/index.ts';
import {getBuilderID} from "../inclusions/product_inclusion_listing.method";

const previousButton = 'pager-prev';
const nextButton = 'pager-next';
const linkNumberButton = 'pager-link';
const rootProductCard = 'cbpif';
const productElement = 'image';
const rootPaginationNav = 'cpagi';

let checkDefaultPageItemPerPage =() => {
    cy.get(getTestSelector([rootProductCard], productElement)
        ,{timeout:Cypress.env('asyncTimeout')})  
        .should('have.length', DEFAULT_ITEM_PER_PAGE);
    cy.wait(1000);
}

let checkProductInclusionListPerPage= (expected_item_perpage)=> {
    var item_perpage_text = expected_item_perpage.toString() + " items per page";

    // todo uncomment this when product load quicker
    cy.wait(1000);
    // click option to choose how many items showing per page
   
    cy.get(getTestSelector(['clist']))
    .children()
    .contains(item_perpage_text)
    .click({force:true})
    .then(() => {
       
        cy.get(getTestSelector([rootProductCard], productElement))
            .then((list_length) => {
               var actual_length = list_length.length;
               cy.log(actual_length);
                expect(actual_length).to.be.lessThan(expected_item_perpage+1)
            })
       
    })
}

let check12ProductInclusionListPerPage=()=>{
    checkProductInclusionListPerPage(paginationInput.default);    
}

let check24ProductInclusionListPerPage=()=>{
    checkProductInclusionListPerPage(paginationInput.twenty_four);
}

let check36ProductInclusionListPerPage=()=>{
    checkProductInclusionListPerPage(paginationInput.thirty_six);
}

let check48ProductInclusionListPerPage=()=>{
    checkProductInclusionListPerPage(paginationInput.fourty_eight);
}

let check60ProductInclusionListPerPage=()=>{
    checkProductInclusionListPerPage(paginationInput.sixty);
}

let clickNextPaginationButtonThenGoToSecondPage= ()=> {
    let builderID,projectID;
    cy.url().then(urlString => {

        cy.log(urlString);
        projectID = urlString.split('#/')[1];
        cy.log(projectID);
        projectID = projectID.replace('projects/','');
        cy.log(projectID);

        builderID = Cypress.env('builderID');

    let url = PRODUCT_INCLUSION_API_LINK_2.replace('builderId', builderID);

    // click next button
    cy.get(getTestSelector([rootPaginationNav],nextButton))
    .click()
    .then(()=> {
        // check correct project shown
        checkDefaultPageItemPerPage();        
        cy.setCookies();
        cy.request('POST',url,
            {
                "count": true,
                "search": "",
                "page": 2,
                "pageSize": 12,
                "sortBy": ["commercialReference"],
                "sortDir": "desc",
                "filters": [
                    {
                        "field": "IsActive",
                        "values": [
                            "false"
                        ],
                        "operator": "eq",
                        "dataType": "bool"
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

    })
}

let goToThirdPage= ()=> {
    cy.url().then(urlString => {
        let url = PRODUCT_INCLUSION_API_LINK_2.replace('builderId', Cypress.env('builderID'));

        // click page number 3
        cy.get(getTestSelector([rootPaginationNav],linkNumberButton))
        .contains('3')
        .click()
        .then(()=> {
            // check correct project shown
            checkDefaultPageItemPerPage();

        });
        cy.setCookies();
        cy.request('POST', url,
        {
                "count": true,
                "search": "",
                "page": 3,
                "pageSize": 12,
                "sortBy": ["commercialReference"],
            "sortDir": "desc",
            "filters": [
                {
                    "field": "IsActive",
                    "values": [
                        "false"
                    ],
                    "operator": "eq",
                    "dataType": "bool"
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
    })
}

let goToSecondPage= () => {
    
    goToThirdPage();

    // click previous button
    cy.get(getTestSelector([rootPaginationNav],previousButton))
    .click()
    .then(()=> {
        // check correct project shown
        checkDefaultPageItemPerPage();
 
    });  
    let builderID,projectID;
    cy.url().then(urlString => {

        cy.log(urlString);
        projectID = urlString.split('#/')[1];
        cy.log(projectID);
        projectID = projectID.replace('projects/','');
        cy.log(projectID);

        cy.request('GET',PROJECT_API_LINK_2+'/'+projectID)
        .its('body')
        .then(resp => {
        builderID = resp.items[0].builder.id;

        cy.log('builder ID is :' + builderID);

    let url = PRODUCT_INCLUSION_API_LINK_2.replace('builderId', builderID);

    cy.setCookies();
    cy.request( 'POST', url,
       {
            "count": true,
            "search": "",
            "page": 2,
            "pageSize": 12,
            "sortBy": ["commercialReference"],
            "sortDir": "desc",
            "filters": [
                {
                    "field": "IsActive",
                    "values": [
                        "false"
                    ],
                    "operator": "eq",
                    "dataType": "bool"
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
})
})
}

let clickBackButton =() =>{
    cy.get('[data-testid="back-btn"]')
    .click();
}

export {
    checkProductInclusionListPerPage,
    clickNextPaginationButtonThenGoToSecondPage,
    goToThirdPage,
    goToSecondPage,
    checkDefaultPageItemPerPage,
    check12ProductInclusionListPerPage,
    check24ProductInclusionListPerPage,
    check36ProductInclusionListPerPage,
    check48ProductInclusionListPerPage,
    check60ProductInclusionListPerPage,
    clickBackButton

}