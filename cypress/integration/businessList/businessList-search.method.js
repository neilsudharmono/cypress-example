/// <reference types="Cypress" />

import { getTestSelector} from "../../support/getTestSelector";

// Define all the test roots
const rootTileProjectCard = 'cbuit';

let writeKeywordToTextBox=(keyword)=>{
    cy.get('[data-testid=keyword-search]')
    .clear()
    .type(keyword);

    cy.get('[data-testid=apply-filter-btn]')
    .click();

    cy.wait(2000);

}

let checkSearchByKeywords =(search_keyword, expected_keyword)=>{
    
     // write project name to text box
     writeKeywordToTextBox(search_keyword);

     // Check that search result contains keyword
     cy.get(getTestSelector([rootTileProjectCard], 'businessName'))   
     .should('have.contain', expected_keyword)
}

let checkSearchByContactName =(expected_keyword)=>{
    // write project name to text box
    writeKeywordToTextBox(expected_keyword);

    // Check that search result contains keyword
    cy.get(getTestSelector([rootTileProjectCard], 'contactName'))   
    .first()
    .should('have.contain', expected_keyword)
}

let checkInvalidSearchByInvalidText=()=>{
    // write project name to text box
    writeKeywordToTextBox('INVALID TEST');

     // Check that search result contains keyword

    cy.get('[data-testid=listing-container]')   
    .first()
    .should('have.contain', '0 Results Found')
}

let checkSearchByAllLowerLetter=()=>{
    // write project name to text box
    writeKeywordToTextBox('metricon');

     // Check that search result contains keyword

    cy.get(getTestSelector([rootTileProjectCard], 'businessName'))   
    .first()
    .should('have.contain', 'METRICON')
}

let checkSearchByAllUpperCase=()=>{
    // write project name to text box
    writeKeywordToTextBox('LOWER CASE BUSINESS NAME');

     // Check that search result contains keyword

    cy.get(getTestSelector([rootTileProjectCard], 'businessName'))   
    .first()
    .should('have.contain', 'LOWER CASE business name')
}

let checkSearchByAndBehavior=()=>{
    // write project name to text box
    writeKeywordToTextBox('lower name');

     // Check that search result contains keyword

    cy.get(getTestSelector([rootTileProjectCard], 'businessName'))   
    .first()
    .should('have.contain', 'LOWER')

    cy.get(getTestSelector([rootTileProjectCard], 'contactName'))   
    .first()
    .should('have.contain', 'NAME')
}

export {
    checkSearchByKeywords,
    checkSearchByAllLowerLetter,
    checkSearchByAllUpperCase,
    checkSearchByAndBehavior,
    checkInvalidSearchByInvalidText,
    checkSearchByContactName
}
