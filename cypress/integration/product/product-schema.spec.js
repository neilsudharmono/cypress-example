/// <reference types="Cypress" />

import { api } from '../../schemas/index.ts';
import {PRODUCT_API_LINK_2} from '../../support/baseConst';

it('validates the response data against the schema object', () => {
   cy.fixture('data/example-product.json')
   .then(api.assertSchema('ProductsResponse', '1.0.0'));
})


it ('validates against api call' , () => {
    cy.setCookies();
   cy.request('POST',PRODUCT_API_LINK_2,
      {
          "count": true,
          "search": "",
          "page": 1,
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
          api.assertSchema('ProductsResponse', '1.0.0');
      }
  }); 
})