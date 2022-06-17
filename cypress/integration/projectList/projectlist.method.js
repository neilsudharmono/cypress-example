/// <reference types="Cypress" />

import { getTestSelector} from "../../support/getTestSelector";
import {DEFAULT_ITEM_PER_PAGE,PROJECT_API_LINK} from "../../support/baseConst";
import {clickViewAsGrid,click_A_Z_SortingIcon} from "./projectlist_global.method";
import expectedProjectResult from '../../fixtures/input/project-input';
import {testingInput,inputInProgress} from "../Project/project_addnew.method";
import inputValidBuilderDetails from '../../fixtures/input/builder-details';
// Define all the test roots
const rootTileProjectCompact = 'ctil2';
const rootTileProjectCompactHeader = 'ctil2-header';
const rootSortBy = 'clist';
const rootTileProjectCard = 'ctil1';
const rootToggleControl = 'ctogg';
const rootUtilityMenu = 'cutil';
const rootLoadingScreen = 'sload';
const rootProjectListing = 'sproj';
const rootSearch = 'ssear';
const searchTextBox = 'keyword-search';
const applyButton = 'apply-filter-btn';
const sortOptionItem = 'options-dropdown';

let checkProjectListHeaderLoaded= ()=> {
    // check project table header
    cy.get(getTestSelector([rootTileProjectCompactHeader]))
    .children()
    .contains('Project');

    cy.get(getTestSelector([rootTileProjectCompactHeader]))
    .children()
    .contains('Status');

    cy.get(getTestSelector([rootTileProjectCompactHeader]))
    .children()
    .contains('Builder Name');

    cy.get(getTestSelector([rootTileProjectCompactHeader]))
    .children()
    .contains('Client Name');

    cy.get(getTestSelector([rootTileProjectCompactHeader]))
    .children()
    .contains('Last Modified');

    cy.get(getTestSelector([rootTileProjectCompactHeader]))
    .children()
    .contains('Created Date');

    // check sort menu is appear
    cy.get(getTestSelector([rootSortBy], 'display-text'))
    .should('be.visible');

    // check change view menu is appear
    // cy.get(getTestSelector([rootToggleControl]))
    // .should('be.visible');

    cy.get('[data-testid=text]')
    .should('be.visible');

}

let checkProjectListRowListViewLoaded= ()=> {
    // check row is appear with correct style with list view
    cy.get(getTestSelector([rootTileProjectCompact]))
    .should('be.visible');

    cy.get(getTestSelector([rootTileProjectCompact], 'name'))
    .should('be.visible');

    cy.get(getTestSelector([rootTileProjectCompact], 'projectStatus'))
    .should('be.visible');

    cy.get(getTestSelector([rootTileProjectCompact], 'builderName'))
    .should('be.visible');

    cy.get(getTestSelector([rootTileProjectCompact], 'clientName'))
    .should('be.visible');

    cy.get(getTestSelector([rootTileProjectCompact], 'link'))
    .should('be.visible');

   // this is not showing on tablet mode
    cy.get(getTestSelector([rootTileProjectCompact], 'modifiedAtUtc'))
    .should('be.exist');

    cy.get(getTestSelector([rootTileProjectCompact], 'createdAtUtc'))
    .should('be.exist');

    cy.get(getTestSelector([rootUtilityMenu]))
    .should('be.exist');

    // right side menu ...
    // check menu in each row is appear
    cy.get(getTestSelector([rootUtilityMenu], 'control'))
    .first()
    .click();

    // Check that row's menu is appear
    cy.get(getTestSelector([rootUtilityMenu]))
    .first()
    .should('have.class','is-menu-active');

    cy.get(getTestSelector([rootUtilityMenu], 'control'))
    .first()
    .should('be.visible');

    // Check that link to view , edit, download and copy project is appear
    cy.get(getTestSelector([rootUtilityMenu], 'manu'))
    .first()
    .children()
    .contains('View Project')
    .and('have.attr', 'href');

    /*cy.get(getTestSelector([rootUtilityMenu], 'manu'))
    .first()
    .children()
    .contains('Duplicate Project')*/
    // this feature in not developed yet
    //.and('have.attr', 'href');

    // cy.get(getTestSelector([rootUtilityMenu], 'manu'))
    // .first()
    // .children()
    // .contains('Downloads')
    // .and('have.attr', 'href');

    // Need to revisit this based on Project Status
    // cy.get(getTestSelector([rootUtilityMenu], 'manu'))
    // .first()
    // .children()
    // .contains('Edit Plan')
    // .and('have.attr', 'href');

    // check hover state in row
    cy.get(getTestSelector([rootTileProjectCompact], 'link'));

   // check the tile is clickable
   cy.get(getTestSelector([rootTileProjectCompact], 'link'))
   .first()
   .and('have.attr', 'href');

}

let checkProjectListRowGridViewLoaded= ()=> {
    // click toggle grid view
    // cy.get(getTestSelector([rootToggleControl]))
    // .click();
    cy.get('[data-testid=text]')
    .should('be.visible');

    // check the tile is clickable
   cy.get(getTestSelector([rootTileProjectCard], 'link'))
   .should('have.class','ctil1-link');

   cy.get(getTestSelector([rootTileProjectCard], 'link'))
   .should('have.class','ctil1-link')
   .first()
   .and('have.attr', 'href');

    // check it changed to grid view
    cy.get(getTestSelector([rootTileProjectCard]))
      .should('have.class','c-tile-project-card')
     .should('be.visible');

     cy.get(getTestSelector([rootTileProjectCompact]))
    .should('not.exist');

    // check it has image
     cy.get(getTestSelector([rootTileProjectCard], 'image'))
     .should('be.visible');

     // check different style applied
     cy.get(getTestSelector([rootTileProjectCard], 'name'))
     .should('be.visible')
     .first()
     .should('have.class', 'ctil1-text')
     .and('have.class','title')
     ;
    // ensure grid view on project status, different style applied
     cy.get(getTestSelector([rootTileProjectCard], 'projectStatus'))
     .should('be.visible')
     ;

     // ensure View project button shown on grid list
     cy.get('[data-testid=link]')
     .contains('View Project');

     cy.get(getTestSelector([rootTileProjectCard], 'builderName'))
     .should('be.visible')
     .first()
     .should('have.class', 'ctil1-text')
     .and('have.class','builder');

     cy.get(getTestSelector([rootTileProjectCard], 'modifiedAtUtc'))
     .should('be.visible')
     .first()
     .should('have.class', 'ctil1-text')
     .and('have.class','modified');

    //  cy.get(getTestSelector([rootTileProjectCard], 'createdAtUtc'))
    //  .should('not.exist');

     /*cy.get(getTestSelector([rootUtilityMenu], 'manu'))
     .first()
     .should('have.class','cutil-menu')
     .should('be.exist');

     // right side menu ...
     // check menu in each row is appear
     cy.get(getTestSelector([rootUtilityMenu], 'control'))
     .first()
     .click();

    // check on every rows menu
     cy.get(getTestSelector([rootUtilityMenu]))
     .first()
     .should('be.exist')
     .should('have.class','is-menu-active')
     .and('have.class','c-utility-menu');

     cy.get(getTestSelector([rootUtilityMenu], 'control'))
     .first()
     .should('be.visible');

     // Check that link to view , edit, download and copy project is appear
     cy.get(getTestSelector([rootUtilityMenu], 'manu'))
     .first()
     .children()
     .contains('View Project')
     .and('have.attr', 'href');

     cy.get(getTestSelector([rootUtilityMenu], 'manu'))
     .first()
     .children()
     .contains('Duplicate Project')
     .and('have.attr', 'type');
     //.and('have.attr', 'href'); NO HREF YET 
     
     cy.get(getTestSelector([rootUtilityMenu], 'manu'))
     .first()
     .children()
     .contains('Attachments')*/



}

let checkLoadingAnimationIsFinished= ()=> {
    // check loading is not appear
    cy.get(getTestSelector([rootProjectListing, rootLoadingScreen], 'text-msg'))
    .should('not.exist');
    // project listing section is appear
    let testroot = 'sproj';
    cy.get(getTestSelector([rootProjectListing], 'listing-container'))
    .should('be.visible');

}

let checkSortByClientNameIsWorkingAscending= ()=> {
    let before_sort = [];
    let my_sort = [];

    cy.get(getTestSelector([rootTileProjectCompact], 'clientName'))
    .each(($item, index, $list) => {
        cy
            .get($item)
            .invoke('text').then((text1) => {
                before_sort.push(text1);        
            })           
    });     

    // click on the sort button
    chooseSortingBySortItem('Client Name');
    cy.get(getTestSelector([rootSortBy],'display-text')).first()
    .click();

    cy.get(getTestSelector([rootSortBy],'display-text'))
    .contains('Client Name')
    .should('be.visible')
    .then((text1) => {
        //Check that first Row has applied sorting
        let after_sort = "";
        cy.get(getTestSelector([rootTileProjectCompact], 'clientName'))   
        .first()
        .invoke('text').then((text1) => {      
            debugger;
            after_sort = text1;
            
            // sort alphabetically previous list
            my_sort = before_sort.sort();

            //check that after sort then 
            assert.equal(my_sort[0], after_sort, 'current client name ' + after_sort 
            + "it should be started with "+ my_sort[0]);
        })   
    });
    
}

let checkSortByClientNameIsWorkingDescending= ()=> {
    let before_sort = [];
    let my_sort = [];

    cy.get(getTestSelector([rootTileProjectCompact], 'clientName'))
    .each(($item, index, $list) => {
        cy
            .get($item)
            .invoke('text').then((text1) => {
                before_sort.push(text1);        
            })           
    });   

    // click on the sort button
    chooseSortingBySortItem('Sorting by Client Name');

    // choose descending
    click_A_Z_SortingIcon()
    .then(()=>{
        //Check that first Row has applied sorting
        let after_sort = "";
        cy.get(getTestSelector([rootTileProjectCompact], 'clientName'))   
        .first()
        .invoke('text').then((text1) => {
            after_sort = text1;
            
            // sort alphabetically previous list
            my_sort = before_sort.sort();

            let expected_value = my_sort.slice(-1)[0] ;

            //check that after sort then 
            assert.equal(expected_value, after_sort, 'current client name ' + after_sort 
            + "it should be started with "+ expected_value);
        })   
    });
}

let checkSortByProjectNameIsWorkingAscending= ()=> {
    let before_sort = [];
    let my_sort = [];

    cy.get(getTestSelector([rootTileProjectCompact], 'name'))
    .each(($item, index, $list) => {
        cy
            .get($item)
            .invoke('text').then((text1) => {
                before_sort.push(text1);        
            })           
    });   

    // click on the sort button
    chooseSortingBySortItem('Sorting by Project Name');

    //Check that first Row has applied sorting
    let after_sort = "";
    cy.get(getTestSelector([rootTileProjectCompact], 'name'))   
    .first()
    .invoke('text').then((text1) => {
        after_sort = text1;
        
        // sort alphabetically previous list
        my_sort = before_sort.sort();
        
        //check that after sort then 
        assert.equal(my_sort[0], after_sort, 'current project name ' + after_sort 
        + "it should be started with "+ my_sort[0]);
    })   
}

let checkSortByProjectNameIsWorkingDescending= ()=> {
    let before_sort = [];
    let my_sort = [];

    cy.get(getTestSelector([rootTileProjectCompact], 'name'))
    .each(($item, index, $list) => {
        cy
            .get($item)
            .invoke('text').then((text1) => {
                before_sort.push(text1);        
            })           
    });   

    // click on the sort button
    chooseSortingBySortItem('Sorting by Project Name');

    // choose descending
    click_A_Z_SortingIcon()
    .then(()=> {
        //Check that first Row has applied sorting
        let after_sort = "";
        cy.get(getTestSelector([rootTileProjectCompact], 'name'))   
        .first()
        .invoke('text').then((text1) => {
            after_sort = text1;
            
            // sort alphabetically previous list
            my_sort = before_sort.sort();

            let expected_value = my_sort.slice(-1)[0] ;

            //check that after sort then 
            assert.equal(expected_value, after_sort, 'current project name ' + after_sort 
            + "it should be started with "+ expected_value);
        }) 
    });
}

let checkSortByModifiedDateIsWorkingAscending= ()=> {
    let before_sort = [];
    let my_sort = [];

    cy.get(getTestSelector([rootTileProjectCompact], 'modifiedAtTimestamp'))
    .each(($item, index, $list) => {
        cy
            .get($item)
            .invoke('attr', 'data-testvalue').then((text1) => {
                before_sort.push(parseInt(text1));
            })           
    });   

    // click on the sort button
    chooseSortingBySortItem('Sorting by Most recent');

    // choose descending
    click_A_Z_SortingIcon()
    .then(()=>{
        //Check that first Row has applied sorting
        let after_sort = "";
        cy.get(getTestSelector([rootTileProjectCompact], 'modifiedAtTimestamp'))   
        .first()
        .invoke('attr', 'data-testvalue').then((text1) => {
            after_sort = parseInt(text1);
            
            // sort alphabetically previous list
            my_sort = before_sort.sort();

            //check that after sort then 
            assert.equal(my_sort[0], after_sort, ' current modified date ' + after_sort 
            + " it should be started with "+ my_sort[0]);
        })   
    });

}

let checkSortByModifiedDateIsWorkingDescending= ()=> {
    let before_sort = [];
    let my_sort = [];

    cy.get(getTestSelector([rootTileProjectCompact], 'modifiedAtTimestamp'))
    .each(($item, index, $list) => {
        cy
            .get($item)
            .invoke('attr', 'data-testvalue').then((text1) => {
                before_sort.push(parseInt(text1));
            })           
    });       

    chooseSortingBySortItem('Sorting by Most recent');

    // cy.get('[data-testid=dir-toggle]')
    // .click({force:true});

    //Check that first Row has applied sorting
    let after_sort = "";
    cy.get(getTestSelector([rootTileProjectCompact], 'modifiedAtTimestamp'))   
    .first()
    .invoke('attr', 'data-testvalue').then((text1) => {
        after_sort = parseInt(text1);
        
        // sort alphabetically previous list
        my_sort = before_sort.sort();

        let expected_value = my_sort.slice(-1)[0] ;

        //check that after sort then 
        assert.equal(expected_value, after_sort, ' current modified date ' + after_sort 
        + " it should be started with "+ expected_value);
    })  

}

let checkSortByConsultantNameIsWorkingAscending= ()=> {
    let before_sort = [];
    let my_sort = [];

    cy.get(getTestSelector([rootTileProjectCompact], 'consultantName'))
    .each(($item, index, $list) => {
        cy
            .get($item)
            .invoke('attr', 'data-testvalue').then((consultant_name) => {
                before_sort.push(consultant_name);
            });
                     
    });   

    chooseSortingBySortItem('Sorting by Consultant');

    //Check that first Row has applied sorting
    let after_sort = "";
    cy.get(getTestSelector([rootTileProjectCompact], 'consultantName'))   
    .first()
    .invoke('attr', 'data-testvalue').then((text1) => {
        after_sort = text1;
        
        // sort alphabetically previous list
        my_sort = before_sort.sort();

        //check that after sort then 
        assert.equal(my_sort[0], after_sort, 'current consultant name ' + after_sort 
        + "it should be started with "+ my_sort[0]);
    })   
}

let checkSortByConsultantNameIsWorkingDescending= ()=> {
    let before_sort = [];
    let my_sort = [];

    cy.get(getTestSelector([rootTileProjectCompact], 'consultantName'))
    .each(($item, index, $list) => {
        cy
            .get($item)
            .invoke('attr', 'data-testvalue').then((consultant_name) => {
                before_sort.push(consultant_name);
            });
                     
    });     

    chooseSortingBySortItem('Sorting by Consultant');

    // choose descending
    click_A_Z_SortingIcon()
    .then(()=>{
        //Check that first Row has applied sorting
        let after_sort = "";
        cy.get(getTestSelector([rootTileProjectCompact], 'consultantName'))   
        .first()
        .invoke('attr', 'data-testvalue').then((text1) => {
            after_sort = text1;
            
            // sort alphabetically previous list
            my_sort = before_sort.sort();

            let expected_value = my_sort.slice(-1)[0] ;

            //check that after sort then 
            assert.equal(expected_value, after_sort, 'current consultant name ' + after_sort 
            + "it should be started with "+ expected_value);
        })  
    });
}

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

let checkSortByClientNameAscendingStubbed = () => {  

    // click on the sort button    
    chooseSortingBySortItem('Sorting by Client Name').then(() => {
        checkDefaultPageItemPerPage();

        // assert that 'AAA Tester' is the correct result
        // project name is AAA Lot 243 Edmondson ave Austral
        // since client name is not showing on grid view
        cy.get(getTestSelector([rootTileProjectCard], 'name')
        ,{timeout:Cypress.env('asyncTimeout')})   
        .first()
        .should('be.contain.text', expectedProjectResult.sort_by_clientname_ascending);
    }) 

}

let checkSortByClientNameDescendingStubbed = () => {
    // click on the sort button
    chooseSortingBySortItem('Sorting by Client Name');

    // choose descending
    cy.get('[data-testid=dir-toggle]')
    .click({force:true})
    .then(()=> {
        //assert that 'ZZZ WN46725' is the correct result
        //as the client name not showing in the grid view
        //check the project name instead
        // "projectName": "ZZZ WN46725",
        // "builderName": "ZZZ Firstyle Homes NSW",
        // "clientName": "ZZZ Damara Darnbrough",
        checkDefaultPageItemPerPage();

        cy.get(getTestSelector([rootTileProjectCard], 'name')
        ,{timeout:Cypress.env('asyncTimeout')})   
        .first()
        .should('have.contain', expectedProjectResult.sort_by_clientname_descending)
    });    

}

let checkSortByProjectNameAscendingStubbed = () => {
    // click on the sort button
    chooseSortingBySortItem('Sorting by Project Name');

    
    cy.get(getTestSelector([rootSortBy],'display-text'))
    .contains('Sorting by Project Name')
    .should('be.visible')
    .then(()=> {      
         //assert that '0001 Newest Project' is the correct result
         checkDefaultPageItemPerPage();

        cy.get(getTestSelector([rootTileProjectCard], 'name')
        ,{timeout:Cypress.env('asyncTimeout')})   
        .first()
        .should('have.contain', expectedProjectResult.sort_by_projectname_ascending)
    });  
}

let checkSortByProjectNameDescendingStubbed = () => {
    // click on the sort button

    chooseSortingBySortItem('Sorting by Project Name');

    // choose descending
    cy.get('[aria-label="Toggle sorting order"]')
    .click()
    .wait(1000)

    cy.get('[aria-label="Toggle sorting order"]')
    .click()
    .wait(1000)

    cy.get('[aria-label="Toggle sorting order"]')
    .click()
    .wait(1000)

    checkDefaultPageItemPerPage();

    cy.get(getTestSelector([rootTileProjectCard], 'name')
    ,{timeout:Cypress.env('asyncTimeout')})   
    .first()
    .should('have.contain', expectedProjectResult.sort_by_projectname_descending);
}

let checkSortByConsultantNameAscendingStubbed = () => {

    // click on the sort button
    chooseSortingBySortItem('Sorting by Consultant');

    //assert that 'AAA George' is the correct result
    checkDefaultPageItemPerPage();

    cy.get(getTestSelector([rootTileProjectCard], 'consultantName')
    ,{timeout:Cypress.env('asyncTimeout')})   
    .first()   
    .should('have.attr', 'data-testvalue', expectedProjectResult.sort_by_consultant_ascending);
    

}

let checkSortByConsultantNameDescendingStubbed = () => {

    // click on the sort button

    chooseSortingBySortItem('Sorting by Consultant');

    // choose descending
    cy.get('[data-testid=dir-toggle]')
    .click({force:true})
    .then(()=> {
        //assert that 'ZZZ Anatola Stears' is the correct result
        checkDefaultPageItemPerPage();

        cy.get(getTestSelector([rootTileProjectCard], 'consultantName')
        ,{timeout:Cypress.env('asyncTimeout')})   
        .first()    
        .should('have.attr', 'data-testvalue', expectedProjectResult.sort_by_consultant_descending);  
    });
}

let checkSortByModifiedDateAscendingStubbed = () => {
    // click grid view to make it easier to check
    clickViewAsGrid();

    // click on the sort button

    chooseSortingBySortItem('Sorting by Most Recently Created');   
            
    cy.get(getTestSelector([rootTileProjectCompact], 'name')
    ,{timeout:Cypress.env('asyncTimeout')})   
    .first()
    .should('have.contain', 'Newest Project')

    // choose descending icon
    cy.get('[data-testid=dir-toggle]')
    .click({force:true})
    .then(() => {               

        cy.get(getTestSelector([rootTileProjectCompact], 'name')
        ,{timeout:Cypress.env('asyncTimeout')})   
        .first()
        .should('have.contain', expectedProjectResult.sort_by_modified_ascending)
    }); 

}

let checkDefaultPageItemPerPage =() => {
    cy.get(getTestSelector([rootTileProjectCard], 'name')
        ,{timeout:Cypress.env('asyncTimeout')})  
        .should('have.length', DEFAULT_ITEM_PER_PAGE);
    cy.wait(1000);
}

let checkSortByModifiedDateDescendingStubbed = () => {
     // click grid view to make it easier to check
     clickViewAsGrid();

    // click on the sort button

    chooseSortingBySortItem('Sorting by Most Recently Modified');
    cy.get('[data-testid="dir-toggle"]')
    .click();

    // sorting by oldest

   
    
    // choose descending icon
    cy.get('[data-testid=dir-toggle]')
    .click({force:true})
    .then(() => {               

        cy.get('[data-testid="link"]'
        ,{timeout:Cypress.env('asyncTimeout')})   
        .first()
        .should('have.contain', expectedProjectResult.sort_by_modified_descending)
    }); 

}  

let writeKeywordToTextBox=(keyword)=>{
    cy.get('[data-testid=keyword-search]')
    .clear()
    .type(keyword);

    cy.get('[data-testid=apply-filter-btn]')
    .click();

    cy.wait(1000);

    checkLoadingAnimationIsFinished();
}

let checkSearchByProjectName=()=>{
    // write project name to text box
    writeKeywordToTextBox(testingInput.project_name_prefix);

    // Check that search result contains keyword
    cy.get(getTestSelector([rootTileProjectCard], 'name'))   
    .should('have.contain', testingInput.project_name_prefix)
}

let checkSearchByProjectNameNonStub=()=>{
    // write project name to text box
    writeKeywordToTextBox(expectedProjectResult.search_projectname_nonstub);

    // Check that search result contains keyword
    cy.get('[data-testid="name"]')   
    .first()
    .should('have.contain', expectedProjectResult.search_projectname_nonstub)
}

let checkSearchByInput=(inputKeyword)=>{
    // write project name to text box
    writeKeywordToTextBox(inputKeyword);

    // Check that search result contains keyword
    cy.get(getTestSelector([rootTileProjectCard], 'name'))   
    .first()
    .should('have.contain',inputKeyword)
}

let checkSearchByConsultantName=()=>{
    // write project name to text box
    writeKeywordToTextBox(inputInProgress.search_consultant_name);

    // // Check that search result contains keyword

    cy.get(getTestSelector([rootTileProjectCard], 'name'))       
    .should('have.contain', inputInProgress.search_consultant_name)
}

let checkSearchByBuildersName=()=>{
    

    // write project name to text box
    writeKeywordToTextBox(inputValidBuilderDetails.builderDisplayName);

     // Check that search result contains keyword
    cy.get('[data-testid="builderName"]')
    .first()
    .should('have.contain', inputValidBuilderDetails.builderDisplayName)
    
}

let checkSearchByAssigneeName=()=>{
    // write project name to text box
    writeKeywordToTextBox(expectedProjectResult.search_assignee_name);

     // Check that search result contains keyword

    cy.get(getTestSelector([rootTileProjectCard], 'name'))   
    .first()
    .should('have.contain', expectedProjectResult.search_assignee_name)
}

let checkSearchByAddress=()=>{
    // write project name to text box
    writeKeywordToTextBox(inputInProgress.address_line1);

     // Check that search result contains keyword

    cy.get(getTestSelector([rootTileProjectCard], 'name'))   
    .should('have.contain',inputInProgress.project_name_prefix )
}

let checkSearchByClientName=()=>{

   
    // write project name to text box
    writeKeywordToTextBox('Client Name');

     // Check that search result contains keyword

    cy.get(getTestSelector([rootTileProjectCard], 'name'))   
    .should('have.contain',expectedProjectResult.search_client_name)
}

let checkSearchBySuburbName=()=>{
    // write project name to text box
    writeKeywordToTextBox(inputInProgress.suburb);

     // Check that search result contains keyword

    cy.get(getTestSelector([rootTileProjectCard], 'name'))   
    .should('have.contain', inputInProgress.project_name_prefix)
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
    writeKeywordToTextBox(String(inputInProgress.project_name_prefix).toLowerCase());

     // Check that search result contains keyword

    cy.get(getTestSelector([rootTileProjectCard], 'name'))   
    .should('have.contain', inputInProgress.project_name_prefix)
}

let checkSearchByAllUpperCase=()=>{
    // write project name to text box

    writeKeywordToTextBox(String(inputInProgress.project_name_prefix).toUpperCase());

     // Check that search result contains keyword

    cy.get(getTestSelector([rootTileProjectCard], 'name'))   
    .should('have.contain', inputInProgress.project_name_prefix)
}

let checkSearchByAndBehavior=()=>{
    // write project name to text box
    writeKeywordToTextBox(String(inputInProgress.project_name_prefix).toLowerCase());

     // Check that search result contains keyword

    cy.get(getTestSelector([rootTileProjectCard], 'name'))   
    .should('have.contain', inputInProgress.project_name_prefix)
}

let clickFirstResult=()=>{
    cy.get(getTestSelector([rootTileProjectCompact], 'name'))   
    .first()
    .click();
}


export {checkProjectListHeaderLoaded,
    checkProjectListRowListViewLoaded,
    checkProjectListRowGridViewLoaded,
    checkLoadingAnimationIsFinished,
    checkSortByClientNameIsWorkingAscending,
    checkSortByClientNameIsWorkingDescending,
    checkSortByProjectNameIsWorkingAscending,
    checkSortByProjectNameIsWorkingDescending,
    checkSortByModifiedDateIsWorkingAscending,
    checkSortByModifiedDateIsWorkingDescending,
    checkSortByConsultantNameIsWorkingAscending,
    checkSortByConsultantNameIsWorkingDescending,
    checkSortByClientNameAscendingStubbed,
    checkSortByClientNameDescendingStubbed,
    checkSortByProjectNameAscendingStubbed,
    checkSortByProjectNameDescendingStubbed,
    checkSortByConsultantNameAscendingStubbed,
    checkSortByConsultantNameDescendingStubbed,
    checkSortByModifiedDateAscendingStubbed,
    checkSortByModifiedDateDescendingStubbed,
    checkSearchByProjectName,
    checkSearchByBuildersName,
    checkSearchByConsultantName,
    checkSearchByAssigneeName,
    checkSearchByAddress,
    checkSearchByClientName,
    checkSearchBySuburbName,
    checkInvalidSearchByInvalidText,
    checkSearchByAllLowerLetter,
    checkSearchByAllUpperCase,
    checkSearchByAndBehavior,
    checkDefaultPageItemPerPage,
    clickFirstResult,
    checkSearchByInput,
    writeKeywordToTextBox,
    checkSearchByProjectNameNonStub
}