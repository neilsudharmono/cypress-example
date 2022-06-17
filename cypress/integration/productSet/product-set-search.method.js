let writeKeywordToTextBox=(keyword)=>{
    cy.get('[data-testid=keyword-search]')
    .clear()
    .type(keyword, {delay:100});

    cy.get('[data-testid=apply-filter-btn]')
    .click();

    cy.finishedLoadingAnimation();
}

let checkSearchByKeywords =(search_keyword)=>{
    
     // write project name to text box
     writeKeywordToTextBox(search_keyword);

     checkDataLoadedCorrectly(search_keyword);
}

let checkSearchByAddress =(address, expected_builder)=>{
    
    // write project name to text box
    writeKeywordToTextBox(address);

    checkDataLoadedCorrectly(expected_builder);
}

let checkDataLoadedCorrectly=(search_keyword)=>{
    cy.get('.cpsit-name')
    .contains(search_keyword);
}

let checkInvalidSearchByInvalidText=()=>{
    // write project name to text box
    writeKeywordToTextBox('INVALIDKEYWORDFOR TEST');

    // Check that search result contains keyword
    cy.get('[data-testid=listing-container]')   
    .first()
    .should('have.contain', '0 Results Found');

}

export{
    writeKeywordToTextBox,
    checkSearchByKeywords,
    checkDataLoadedCorrectly,
    checkSearchByAddress,
    checkInvalidSearchByInvalidText
}
