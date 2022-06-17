// // Test Description : 
// // This test to ensure that user able to project listing page is succesfully loaded
// // and also checking on functionality is working 

// // import {
// //     setStatusDropdownValue,
// //     setBuilderDropdownValue,
// //     setAssigneeDropdownValue,
// //     setLocationDropdownValue,
// //     setDatePickerValue,
// //     dragSliderIntoValues,
// //     tickBuildingTypebyItems,
// //     searchByLocation,
// //     clickApplyButton,
// //     clickResetButton,
// //     checkFilterResultBasedOnProjectName,
// //     checkFilterResultBasedOnProjectNameList,
// //     clickIconFilter,    
// //     setDateFromWithInvalidValue,
// //     setDateToWithInvalidValue,
// //     checkInvalidFilterResult,
// //     checkFilterResultFromProjectList,
// //     checkFilterResultBasedOnProjectStatus,
// //     checkFilterResultBasedOnProjectBuilder,
// //     checkFilterResultFromProjectStatusList,
// //     checkFilterResultFromProjectBuilderList,
// //     checkFilterResultIsExisted,
// //     inclusionValuesSlide

// // } from './projectlist_filter.method'

// import {
//     checkSearchByProjectName,
//     checkSearchByBuildersName,
//     checkSearchByConsultantName,
//     checkSearchByAssigneeName,
//     checkSearchByAddress,
//     checkSearchByClientName,
//     checkSearchBySuburbName,
//     checkInvalidSearchByInvalidText,
//     checkSearchByAllLowerLetter,
//     checkSearchByAllUpperCase,
//     checkSearchByAndBehavior

// } from './projectlist.method'


// import {checkProjectListHeaderLoaded,
//     checkProjectListRowListViewLoaded,
//     checkLoadingAnimationIsFinished
// } from './projectlist.method'

// import {
//     checkProjectListPerPage,    
//     clickNextPaginationButtonThenGoToSecondPage,
//     goToThirdPage,
//     goToSecondPage
// } from './projectlist-pagination.method'

// import {
//     checkLoadingAnimationIsFinished,
//     checkSortByModifiedDateDescendingStubbed

// } from './projectlist.method'

// import {checkLoadingAnimationIsFinished} from './projectlist.method'
// import {clickViewAsGrid} from "./projectlist_global.method";
// import {GETTODAYSDATE} from '../../support/baseConst';
// import {checkProjectListPerPage} from './projectlist-pagination.method'

// describe('Check Filter Project Listing by Status', function () {

//        after(()=> {
//        cy.get('[class="sslid-account-label"]')
//        .click()
        
//        cy.get('[href="/account/dologout"]')
//    })
//       beforeEach(()=>{
//         cy.setCookies();
//     })

//        after(()=> {
//        cy.get('[class="sslid-account-label"]')
//        .click()
        
 //       cy.get('[href="/account/dologout"]')
 //   })
 //      beforeEach(() => {        
//          // it visits project listing url
//          //cy.connectToInternalTestData(); -- disabling this because filter is not working with mock data
//          if ( Cypress.env("runShowcase"))  
//          {
//                 cy.visit("projects.html#/").then(() => {
//                 checkLoadingAnimationIsFinished();
//              })  
//          }else
//          {
//                 //cy.setCookies();
//                 cy.visit("projects").then(() => {
//                 checkLoadingAnimationIsFinished();
//              })  
//          }
         
//     });

    
//     it('check project list header is appear in list view', function () {     
        
//         checkProjectListHeaderLoaded();
//     })
    
//     it('check project list data is appear with list view', function () {        
//         checkProjectListRowListViewLoaded();        
//     })

//     it('filter by one status', function () {   
//         clickIconFilter();
//         setStatusDropdownValue('In Progress');
//         clickApplyButton();
//         checkFilterResultBasedOnProjectStatus('In-Progress');
//     }) 
    
//     it('filter by multiple status', function () {   
//         // make the test showing more data to shows multiple data
//         clickIconFilter();
//         checkProjectListPerPage(60);
//         setStatusDropdownValue('In Progress');
//         setStatusDropdownValue('Created');
//         clickApplyButton();
//         checkFilterResultFromProjectStatusList(['Created','In-Progress']);
//     })

//     it('filter by one builder', function () {   
//         setBuilderDropdownValue('Automation');
//         clickApplyButton();
//         checkFilterResultBasedOnProjectBuilder('Automation');
//     }) 
    
//     it('filter by multiple builders', function () {   
//         checkProjectListPerPage(48);
//         setBuilderDropdownValue('Clever Homes');
//         setBuilderDropdownValue('Wisdom Homes');
//         clickApplyButton();
//         checkFilterResultFromProjectBuilderList(['Clever Homes','Wisdom Homes']);
//     })

//     it('filter by one building type', function () {   
//         clickIconFilter();
//         tickBuildingTypebyItems('Apartment');
//         clickApplyButton();
//         //checkFilterResultBasedOnProjectName('Lot 4005 Barber Way');
//         checkFilterResultIsExisted();
//     }) 
    
//     it('filter by multiple building type', function () {   
//         clickIconFilter();
//         tickBuildingTypebyItems('Duplex');
//         tickBuildingTypebyItems('Villa');
//         clickApplyButton();
//         //checkFilterResultFromProjectList(['AAA George','0404 BRE']);
//         checkFilterResultIsExisted();
//     })

//     it('filter by one state', function () {   
//         clickIconFilter();
//         setLocationDropdownValue('Queensland');
//         clickApplyButton();
//         //checkFilterResultFromProjectList(['5829 Nguyen']);
//         checkFilterResultIsExisted();
//     }) 
    
//     it('filter by multiple states', function () {   
//         clickIconFilter();
//         setLocationDropdownValue('New South Wales');
//         setLocationDropdownValue('Queensland');
//         clickApplyButton();
//         //checkFilterResultFromProjectList(['5829 Nguyen','5800 Shelly']);
//         checkFilterResultIsExisted();
//     })

//     it('filter by valid previous month to current month', function () {  
//         clickIconFilter();
//         setDatePickerValue('01/01/2020',GETTODAYSDATE);
//         //checkFilterResultFromProjectList(['Newest Project']);
//         checkFilterResultIsExisted();
//     })

//     /* TODO FIX THIS FAILED TESTS
//     it('Search by project name', function () {
//         checkSearchByProjectName();
//     })

//     it('Search by builders  name', function () {
//         checkSearchByBuildersName();
//     })

//     it('Search by address', function () {
//         checkSearchByAddress();
//     })    

//     it('Search by suburb', function () {
//         checkSearchBySuburbName();
//     })

//     it('Search with case not sensitive', function () {
//         checkSearchByAllLowerLetter();
//         checkSearchByAllUpperCase();
//     })*/

//     it('Search by invalid text then show error message', function () {
//         checkInvalidSearchByInvalidText();
//     })   

//     /* TODO FIX THIS FAILED TESTS
//     it('Search with AND behavior by searching more than two keywords', function () {
//         checkSearchByAndBehavior();
//     })

//     it('is able to navigate to the next page', function () {    
//         clickNextPaginationButtonThenGoToSecondPage();
//     })    

//     it('is able to navigate into X page by clicking number of page', function () {    
//         goToThirdPage();
//     })

//     it('is able to navigate to previous page', function () {   
//         goToSecondPage();
//     })

//     it('is still applied when project sorted by oldest', function () {    
        
//         checkSortByModifiedDateDescendingStubbed();  
//         checkProjectListPerPage(24,true);  
//     })*/

//     it('show only 12 items per page in list view', function () {   
//         checkProjectListPerPage(12);
//     })
    
//     it('show only 24 items per page in list view', function () {        
//         checkProjectListPerPage(24);  
//     })

//     it('show only 36 items per page in list view', function () {    
//         checkProjectListPerPage(36);
//     })

//     it('show only 48 items per page in list view', function () {    
//         checkProjectListPerPage(48);
//     })

//     /* TODO FIX THIS FAILED TESTS
//     it('when project view is changed to Grid View', function () {    
//         clickViewAsGrid(); 
//         checkProjectListPerPage(24,false);
//     })  

//     it('check grid view appear', function () {           
//         checkProjectListRowGridViewLoaded();       
//     })

//     it('Sort By Modified Date Ascending', function () {           
//         checkSortByModifiedDateAscendingStubbed();
//     })

//     it('Sort By Modified Date Descending', function () {         
//         checkSortByModifiedDateDescendingStubbed();       
//     })
//     */
// })


