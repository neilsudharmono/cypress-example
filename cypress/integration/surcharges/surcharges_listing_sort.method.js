import { getTestSelector} from "../../support/getTestSelector";
import {checkSurchargesListPerPage} from './surcharges_listing_pagination.method';
import {surchargeSorting} from '../../fixtures/input/surcharges_admin';
import { clickYesButton } from "../inclusions/product_inclusion_setup_form.method";

const rootSortBy = 'clist';
const item_name = '.csuri-name';
const rootListing = 'lside';

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

let clickPaginationToShowAllData=()=>{
    var item_perpage_text = "60 items per page";

    // click option to choose how many items showing per page
    cy.get(getTestSelector([rootListing]))
    .children()
    .contains(item_perpage_text)
    .click({force:true});
    
}

let chooseSortingBySurchargeName = (is_descending) => {      
    
    // click on the sort button    
    chooseSortingBySortItem('Sort by surcharge name').then(() => {
        //cy.log('click descending button');
        if (is_descending)
        {
            cy.log('click descending button');

             // click descending button
            cy.get('[data-testid=dir-toggle]')
            .click({force:true}).then(() => {

                // check that correct pagination is applied
                clickPaginationToShowAllData();

                // click sort by surcharge name
                cy.get(getTestSelector([rootSortBy],'display-text'))
                .contains('Sort by surcharge name')
                .should('be.visible')
                .then(()=> {      
                   // check that correct pagination still applied
                   clickPaginationToShowAllData();

                   cy.wait(2000);
                    // check it contains correct sort result
                    cy.get(item_name)
                    .first()
                    .contains(surchargeSorting.surcharge_az);
                });  
            })
        }else
        {
            // check that correct pagination is applied
            clickPaginationToShowAllData();
        
            cy.get(getTestSelector([rootSortBy],'display-text'))
            .contains('Sort by surcharge name')
            .should('be.visible')
            .then(()=> {      
                // check that correct pagination still applied
                clickPaginationToShowAllData();

                // check it contains correct sort result
                cy.get(item_name)
                .first()
                .contains(surchargeSorting.surcharge_za);
            });  
        }
        
    }) 
}

export default chooseSortingBySurchargeName;
