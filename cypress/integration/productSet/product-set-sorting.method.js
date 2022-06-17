import { getTestSelector} from "../../support/getTestSelector";
import {checkDefaultPageItemPerPage} from './product-set-listing.method';
import  expectedBuilderName from '../../fixtures/input/productset-input';

const rootSortBy = 'clist';

let chooseSortingBySortItem = (keyword) => {
    // chose sort by dropdown value
    cy.get('[data-testid=options-dropdown]')
    .contains(keyword)
    .click({force:true});

    cy.get(getTestSelector([rootSortBy],'display-text'))
    .contains(keyword)
    .should('be.visible')

    return cy
        .log(`Searching for ${keyword}`)

}


let chooseSortingByBuilderName = (is_descending) => {      
    
    // click on the sort button    
    chooseSortingBySortItem('Sort by builder name (A-Z)').then(() => {
        if (is_descending)
        {
             // click descending button
            cy.get('[data-testid=dir-toggle]')
            .click({force:true}).then(() => {

                // check that correct pagination is applied
                checkDefaultPageItemPerPage();

                // click sort by builder name
                cy.get(getTestSelector([rootSortBy],'display-text'))
                .contains('Sort by builder name (A-Z)')
                .should('be.visible')
                .then(()=> {      
                   // check that correct pagination still applied
                    checkDefaultPageItemPerPage();

                    // check it contains correct sort result
                    cy.get('.cpsit-name')
                    .contains(expectedBuilderName.sort_by_buildername_descending);
                });  
            })
        }else
        {
            // check that correct pagination is applied
            checkDefaultPageItemPerPage();
        
            cy.get(getTestSelector([rootSortBy],'display-text'))
            .contains('Sort by builder name (A-Z)')
            .should('be.visible')
            .then(()=> {      
                // check that correct pagination still applied
                checkDefaultPageItemPerPage();

                // check it contains correct sort result
                cy.get('.cpsit-name')
                .contains(expectedBuilderName.sort_by_buildername_ascending);
            });  
        }
        
    }) 
}

let chooseSortingByBuilderNameZA = (is_descending) => {      
    
    // click on the sort button    
    chooseSortingBySortItem('Sort by builder name (Z-A)').then(() => {
        if (is_descending)
        {
             // click descending button
            cy.get('[data-testid=dir-toggle]')
            .click({force:true}).then(() => {

                // check that correct pagination is applied
                checkDefaultPageItemPerPage();

                // click sort by builder name
                cy.get(getTestSelector([rootSortBy],'display-text'))
                .contains('Sort by builder name (Z-A)')
                .should('be.visible')
                .then(()=> {      
                   // check that correct pagination still applied
                    checkDefaultPageItemPerPage();

                    // check it contains correct sort result
                    cy.get('.cpsit-name')
                    .contains(expectedBuilderName.sort_by_buildername_ascending);
                });  
            })
        }else
        {
            // check that correct pagination is applied
            checkDefaultPageItemPerPage();
        
            cy.get(getTestSelector([rootSortBy],'display-text'))
            .contains('Sort by builder name (Z-A)')
            .should('be.visible')
            .then(()=> {      
                // check that correct pagination still applied
                checkDefaultPageItemPerPage();

                // check it contains correct sort result
                cy.get('.cpsit-name')
                .contains(expectedBuilderName.sort_by_buildername_descending);
            });  
        }
        
    }) 
}

let chooseSortingDateAddedMostRecent = (is_descending) => {      
    
    // click on the sort button    
    chooseSortingBySortItem('Sort by date added (Most Recent)').then(() => {
        if (is_descending)
        {
             // click descending button
            cy.get('[data-testid=dir-toggle]')
            .click({force:true}).then(() => {

                // check that correct pagination is applied
                checkDefaultPageItemPerPage();

                // click sort by date ascending
                cy.get(getTestSelector([rootSortBy],'display-text'))
                .contains('Sort by date added (Most Recent)')
                .should('be.visible')
                .then(()=> {      
                   // check that correct pagination still applied
                    checkDefaultPageItemPerPage();

                    // check it contains correct sort result
                    cy.get('.cpsit-name')
                    .contains(expectedBuilderName.sort_by_modifieddate_descending);
                });  
            })
        }else
        {
            // check that correct pagination is applied
            checkDefaultPageItemPerPage();
        
            cy.get(getTestSelector([rootSortBy],'display-text'))
            .contains('Sort by date added (Most Recent)')
            .should('be.visible')
            .then(()=> {      
                // check that correct pagination still applied
                checkDefaultPageItemPerPage();

                // check it contains correct sort result
                cy.get('.cpsit-name')
                .contains(expectedBuilderName.sort_by_modifieddate_ascending);
            });  
        }
        
    }) 
}

let chooseSortingDateAddedLeastRecent = (is_descending) => {      
    
    // click on the sort button    
    chooseSortingBySortItem('Sort by date added (Least Recent)').then(() => {
        if (is_descending)
        {
             // click descending button
            cy.get('[data-testid=dir-toggle]')
            .click({force:true}).then(() => {

                // check that correct pagination is applied
                checkDefaultPageItemPerPage();

                // click sort by date ascending
                cy.get(getTestSelector([rootSortBy],'display-text'))
                .contains('Sort by date added (Least Recent)')
                .should('be.visible')
                .then(()=> {      
                   // check that correct pagination still applied
                    checkDefaultPageItemPerPage();

                    // check it contains correct sort result
                    cy.get('.cpsit-name')
                    .contains(expectedBuilderName.sort_by_modifieddate_ascending);
                });  
            })
        }else
        {
            // check that correct pagination is applied
            checkDefaultPageItemPerPage();
        
            cy.get(getTestSelector([rootSortBy],'display-text'))
            .contains('Sort by date added (Least Recent)')
            .should('be.visible')
            .then(()=> {      
                // check that correct pagination still applied
                checkDefaultPageItemPerPage();

                // check it contains correct sort result
                cy.get('.cpsit-name')
                .contains(expectedBuilderName.sort_by_modifieddate_descending);
            });  
        }
        
    }) 
}

export {
    chooseSortingByBuilderName,
    chooseSortingByBuilderNameZA,
    chooseSortingDateAddedLeastRecent,
    chooseSortingDateAddedMostRecent
}