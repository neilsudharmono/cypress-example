/// <reference types="Cypress" />

import productListingInput from "../../fixtures/input/product-listing";
import { checkDataLoadedCorrectly, checkProductAccountListElement } from "./product-listing.method";
import { api } from '../../schemas/index.ts';
import {REQUEST_PRODUCT} from "../product/product-listing.method";
import {PRODUCT_API_LINK,PRODUCT_API_LINK_2} from '../../support/baseConst';

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

let checkSearchByKeywords =(search_keyword, expected_keyword)=>{
    
     // write project name to text box
     writeKeywordToTextBox(search_keyword);

     checkDataLoadedCorrectly();
}

let checkSearchByDescription =()=>{
    // write project name to text box
    writeKeywordToTextBox(productListingInput.search_description);
    checkProductAccountListElement();

}

let checkSearchByCRCode =()=>{
    // write project name to text box
    writeKeywordToTextBox(productListingInput.search_CR_code);

   
}

let checkSearchByCatCode =()=>{
     // write project name to text box
     writeKeywordToTextBox(productListingInput.search_Catcode);
    
     checkProductAccountListElement();

}


let checkInvalidSearchByInvalidText=()=>{
    // write project name to text box
    writeKeywordToTextBox('INVALIDTESTPRODUCTABC');

     // Check that search result contains keyword

    cy.get('[data-testid=listing-container]')   
    .first()
    .should('have.contain', '0 Results Found');

}

let checkSearchByAllLowerLetter=()=>{
    // write project name to text box
    writeKeywordToTextBox(productListingInput.search_lower.toUpperCase());

  
}

let checkSearchByAllUpperCase=()=>{
    // write project name to text box
    writeKeywordToTextBox(productListingInput.search_upper.toLowerCase());

 
}

let checkSearchByAndBehavior=()=>{
    // write project name to text box
    writeKeywordToTextBox(productListingInput.search_multi_behavior);
    checkProductAccountListElement();
}


let checkProductSchema=()=>{

    cy.setCookies();  
    cy.request({
        method:'POST',
        url: PRODUCT_API_LINK_2,
        
        body:  {
            "search": productListingInput.search_Catcode,
            "count": true,
            "pageSize": 12,
            "page": 1,
            "sortBy": ["CommercialReference"],
            "sortDir": "desc",
            "filters": [
                
            ]
        
    }})
    .its('body')
    .then(item => {
        

        
        if (item.length > 0)
        {
            api.assertSchema('ProductsResponse', '1.0.0');
            
        }
    }); 


    cy.request( 'POST', PRODUCT_API_LINK_2,
    {
          "search": productListingInput.search_lower,
          "count": true,
          "pageSize": 12,
          "page": 1,
          "sortBy": ["CommercialReference"],
          "sortDir": "desc",
          "filters": [
              
          ]
      
  })
  .its('body')
  .then(item => {
      if (item.length > 0)
      {
          api.assertSchema('ProductsResponse', '1.0.0');
          
      }
  }); 

    cy.request( 'POST',PRODUCT_API_LINK_2,
    {
        "search": productListingInput.search_description,
        "count": true,
        "pageSize": 12,
        "page": 1,
        "sortBy": ["CommercialReference"],
        "sortDir": "desc",
        "filters": [
            
        ]
    
})
.its('body')
.then(item => {
    if (item.length > 0)
    {
        api.assertSchema('ProductsResponse', '1.0.0');
   
    }
}); 


cy.request( 'POST', PRODUCT_API_LINK_2,
{
       "search": productListingInput.search_CR_code,
       "count": true,
       "pageSize": 12,
       "page": 1,
       "sortBy": ["CommercialReference"],
       "sortDir": "desc",
       "filters": [
           
       ]
   
})
.its('body')

.then(item => {
   if (item.length > 0)
   {
       api.assertSchema('ProductsResponse', '1.0.0');
       
   }
}); 

cy.request( 'POST', PRODUCT_API_LINK_2,
{
       "search": productListingInput.search_upper,
       "count": true,
       "pageSize": 12,
       "page": 1,
       "sortBy": ["CommercialReference"],
       "sortDir": "desc",
       "filters": [
           
       ]
   
})
.its('body')

.then(item => {
   if (item.length > 0)
   {
       api.assertSchema('ProductsResponse', '1.0.0');
       
   }
}); 

cy.request('POST',PRODUCT_API_LINK_2,
{
    "search": productListingInput.search_multi_behavior,
    "count": true,
    "pageSize": 12,
    "page": 1,
    "sortBy": ["CommercialReference"],
    "sortDir": "desc",
    "filters": [
        
    ]

})
.its('body')

.then(item => {
if (item.length > 0)
{
    api.assertSchema('ProductsResponse', '1.0.0');
    
}
}); 

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
    checkProductSchema
}
