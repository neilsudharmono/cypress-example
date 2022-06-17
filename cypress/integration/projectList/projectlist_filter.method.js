/// <reference types="Cypress" />

import { getTestSelector} from "../../support/getTestSelector";

const rootTileProjectCompact = 'ctil2';
const rootTileProjectCard = 'ctil1';
const search_root = 'sprfi';
const filter_root = 'cmult';
const filter_icon = 'text-icon-button';
const date_from = 'minDate';
const date_to = 'maxDate';
const building_type_item = 'building-type-checkbox';
const search_text_box = 'search-input';
const state_dropdown = 'toggle-dropdown';
const search_input = 'location-search';
const variation_slider = 'inclusions-range-slider';
const inclusion_slider = 'variations-range-slider';
const total_electrical = 'total-electrical-range-slider';

let chooseDropdownByItem = (testroot, testid, keyword) => {
    // choose dropdown by dropdown value
    cy.get(getTestSelector([testroot],testid))
    .contains(keyword)
    .click({force:true});

    return cy
        .log(`Searching for ${keyword}`)

}

let clickCompleteTab=()=>{
    cy.get('.ctrba-link')
    .contains('Completed')
    .click();
        
}

let setStatusDropdownValue= (expected_status)=> {
    chooseDropdownByItem(search_root,'toggle-dropdown',expected_status)
}

let clickIconFilter=()=>{
    cy.get(getTestSelector([search_root],'text-icon-button'))
    .click();

    cy.get('.sprfi-advanced-filters')
    .should('have.class','is-visible')
    .should('be.visible');

    cy.get('[data-testid="clear-filters"]')
    .click({force:true});

    cy.get(getTestSelector([search_root],'text-icon-button'))
    .click();
}

let collapseFilter=()=>{
    cy.get(getTestSelector([search_root],'text-icon-button'))
    .click();
}

let setBuilderDropdownValue= (expected_builder)=> {
    chooseDropdownByItem(search_root,'builder-dropdown',expected_builder)
}

let setAssigneeDropdownValue= (expected_assignee)=> {
    chooseDropdownByItem(search_root,'assignee-dropdown',expected_assignee)
}

let setLocationDropdownValue= (expected_location)=> {
    chooseDropdownByItem(search_root,'state-dropdown',expected_location)
}

let setDatePickerValue=(date_from, date_to) =>{
    
   
    // set date from
    cy.get('[name="minDate"]')
    .type(date_from);

    cy.get('[name="maxDate"]')
    .type(date_to);

    clickApplyButton();
  
}

let setDateFromWithInvalidValue=(date_from)=>{
    cy.get('input[name="minDate"]')
    .type(date_from)
    .type('{enter}')
    .trigger('input');

    cy
    .get('input[name="minDate"]')
    .invoke('text')  
    .then(text => {
        assert.notEqual(date_from, text, 'vals not equal')
    });    
}

let setDateToWithInvalidValue=(date_to)=>{
    cy.get('input[name="maxDate"]')
    .type(date_to)
    .type('{enter}')
    .trigger('input');

    cy
    .get('input[name="maxDate"]')
    .invoke('text')  
    .then(text => {
        assert.notEqual(date_to, text, 'vals not equal')
    });
    
}

let dragSliderIntoValues=(slider_type, min_value, max_value)=>{
    var locator = '[data-testid='+slider_type+']';

    cy.get(locator)
    .find('.input-wrapper')
    .find('[data-testid=range-slider-track]')
    .find('[data-testid=range-slider-handle]')
    .first()
    .invoke('attr', 'aria-valuenow', min_value)
    .invoke('attr', 'aria-valuemax', max_value);

    cy.get(locator)
    .find('.input-wrapper')
    .find('[data-testid=range-slider-track]')
    .find('[data-testid=range-slider-handle]')
    .last()
    .invoke('attr', 'aria-valuenow', max_value)
    .invoke('attr', 'aria-valuemin', min_value);     
}

let tickBuildingTypebyItems=(building_name)=>{
    cy.get(getTestSelector([search_root],building_type_item))
    .next()
    .contains(building_name)
    .click();
}

let searchByLocation =(keyword)=>{
    // search by location
    cy.get(getTestSelector([search_root],'location-search'))
    .clear()
    .type(keyword);
}

let clickApplyButton =()=>{
    cy.get(getTestSelector([search_root],'apply-filter-btn'))
    .click();
    cy.wait(1000);
}

let filterByProjectStatus=(expected_Status)=>{
    cy.wait(Cypress.env('waitForLoading'));
    cy.get('[data-testid=status-dropdown] > .input-wrapper > [data-testid=toggle-dropdown]')
    .click()
    .get('.cmult-option-label-text')
    .contains(expected_Status)
    .click({force:true});
}

let clickResetButton =()=>{
    cy.get('[data-testid=reset-button]')
    .click();
}

let checkFilterResultIsExisted=()=>{
    // Check that filter has a result
    assert.isNotNull(cy.get(getTestSelector([rootTileProjectCompact], 'name')).
    first());

}

let checkFilterResultBasedOnProjectName=(expected_project_name)=>{
     // Check that filter result contains keyword
     cy.get(getTestSelector([rootTileProjectCompact], 'name'))   
     .first()
     .should('have.contain', expected_project_name);

}

let checkFilterResultBasedOnProjectStatus=(expected_project_name)=>{
    // Check that filter result contains keyword
    cy.get(getTestSelector([rootTileProjectCompact], 'projectStatus'))   
    .should('have.contain', expected_project_name);
}

let checkFilterResultBasedOnProjectBuilder=(expected_project_name)=>{
    // Check that filter result contains keyword
    cy.get(getTestSelector([rootTileProjectCompact], 'builderName'))   
    .should('have.contain', expected_project_name);
}

let checkFilterResultFromProjectList=(expected_project_name_list)=>{
    // check that result contains project name
    expected_project_name_list.forEach(($name, index, $list) => {
        cy
            .get(getTestSelector([rootTileProjectCompact], 'name'))
            .contains($name);
    }   )
}

let checkFilterAsigneeResultFromProjectList=(expected_project_name_list)=>{
    // check that result contains project name
    expected_project_name_list.forEach(($name, index, $list) => {
        cy
            .get('[data-testid=consultantName]')
            .invoke('attr', 'data-testvalue').then((text1) => {
               expect(text1).to.contains($name);
            })     
    }   )
}

let checkFilterResultFromProjectStatusList=(expected_project_name_list)=>{
    // check that result contains project name
    cy.wait(2000);
    expected_project_name_list.forEach(($name, index, $list) => {
        cy
            .get(getTestSelector([rootTileProjectCompact], 'projectStatus'))
            .contains($name);
    }   )
}

let checkFilterResultFromProjectBuilderList=(expected_project_name_list)=>{
    // check that result contains project name
    expected_project_name_list.forEach(($name, index, $list) => {
        cy
            .get(getTestSelector([rootTileProjectCompact], 'builderName'))
            .contains($name);
    }   )
}


let inclusionValuesSlide=()=>{
    //cy.clearCookies();
    /*cy.get('[data-testid=range-slider-handle]')
    .first()
    .invoke('attr','aria-valuenow',3805)
    .invoke('attr','style','position: absolute; z-index: 1; cursor: grab; user-select: none; touch-action: none; transform: translate(105.931px, -6px);')
    .trigger()
*/


    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,'value').set
    const changeRangeInputValue = $range => value => {
                nativeInputValueSetter.call($range[0], value)
                $range[0].dispatchEvent(new Event('change', { value, bubbles: true }))}

    cy.get('[data-testid=range-slider-handle]')
    .first()
    .invoke('val', 855)
    .trigger('change')
    //.then(input => changeRangeInputValue(input)(855))

}


let checkInvalidFilterResult=()=>{


     // Check that search result contains keyword
    cy.get('[data-testid=listing-container]')   
    .first()
    .should('have.contain', '0 Results Found')
    
}


export{
    setStatusDropdownValue,
    setBuilderDropdownValue,
    setAssigneeDropdownValue,
    setLocationDropdownValue,
    setDatePickerValue,
    dragSliderIntoValues,
    tickBuildingTypebyItems,
    searchByLocation,
    clickApplyButton,
    clickResetButton,
    checkFilterResultBasedOnProjectName,
    clickIconFilter,
    setDateFromWithInvalidValue,
    setDateToWithInvalidValue,
    checkInvalidFilterResult,
    checkFilterResultFromProjectList,
    checkFilterResultBasedOnProjectStatus,
    checkFilterResultBasedOnProjectBuilder,
    checkFilterResultFromProjectStatusList,
    checkFilterResultFromProjectBuilderList,
    checkFilterResultIsExisted,
    inclusionValuesSlide,
    clickCompleteTab,
    collapseFilter,
    checkFilterAsigneeResultFromProjectList,
    filterByProjectStatus
}


