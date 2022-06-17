/// <reference types="Cypress" />

import { api } from '../../schemas/index.ts';
import {PROJECT_API_LINK} from '../../support/baseConst';

it('validates the response project data against the schema object', () => {
   cy.fixture('data/example-project.json')
   .then(api.assertSchema('ProjectListResponse', '1.0.0'));
})

it ('validates against api call' , () => {
    cy.task('deleteFile','cookies.json');
    cy.setCookies();
   cy.request('GET', PROJECT_API_LINK )
  .its('body')
  .its('items')
  .then(item => {
      if (item.length > 0)
      {
          api.assertSchema('ProjectListResponse', '1.0.0');
      }
  }); 
})
