import {PRODUCT_CATALOGUE_API_LINK_2,PRODUCT_BUILDER_OVERVIEW_API_LINK} from '../../support/baseConst';
import { api } from '../../schemas/index.ts';
import { getTestSelector} from "../../support/getTestSelector";
import {productBuilderListingInput} from "../../fixtures/input/product-builder-listing";
import {openFloorplanPage} from '../floorplan/add_floorplan.method';

const previousButton = 'prev-page';
const nextButton = 'next-page';
const rootPaginationNav = 'sprcl';
const builderID = "d3cee30f-affb-414c-b480-8a7eedba6731"

let checkDefaultPageItemPerPage =() => {
    cy.get("[data-testid=count-showing]")
    .invoke('text')  
    .then(text => {
        cy.get("[data-testid=catalogue-items] > [data-testroot=cprot] > .cprot-tile-container > [data-testid=tile-select-btn]"
        ,{timeout:Cypress.env('asyncTimeout')})  
        .should('have.length', text);
        cy.wait(1000);
    });     
}

let clickEditCanvas=()=>{



    cy.get(getTestSelector(['ctil2'], 'link')) 
    .first()
    .click();

    cy.wait(Cypress.env('floorplanWaitForLoading'));

    // Click no skip project assignment
    cy.skipProjectAssignmentProcess();

    cy.wait(Cypress.env('floorplanWaitForLoading'));
    
    cy.get('button[data-testid=control]') 
    .eq(0)
    .click({force:true});  

    cy.get('[data-testid=manu]')
    .contains('Edit Plan')   
    .first()
    .click();
}

let checkSearchByDescription =()=>{
    // write project name to text box

    cy.get('[data-testid=keyword-search]')
    .clear()
    .type(productBuilderListingInput.search_description);

   
}

let getBuilderID =()=>{
    let builderID = "test";
    cy.url().then(urlString => {
        builderID = urlString.split('#/')[1];
        builderID = builderID.replace('projects/','');
        return builderID;
    });
}

let clickNextPaginationButtonThenGoToSecondPage= ()=> {
    // click next button

    const urlBuilder = PRODUCT_CATALOGUE_API_LINK_2.replace("builderId",builderID)
    cy.log(urlBuilder);
    cy.get(getTestSelector([rootPaginationNav],nextButton))
    .click({force:true})
    .then(()=> {
        // check correct project shown
        checkDefaultPageItemPerPage();                
        
    });
}

let goToThirdPage= ()=> {
    // click page number 3
    cy.get(getTestSelector([rootPaginationNav],nextButton))    
    .click();

    cy.get(getTestSelector([rootPaginationNav],nextButton))    
    .click()
    .then(()=> {
        // check correct project shown
        checkDefaultPageItemPerPage();
    });

 
}

let checkTotalPage= () => {

    cy.get("body").then($body => {
        const total_page=0;
        if ($body.find('[data-testid=total-pages]').length > 0) {   //evaluates as true
            
            total_page = cy.get('[data-testid=total-pages]').invoke('text');
            cy.log(total_page);
    
        }
        
      });



}

let goToSecondPage= () => {
    
    goToThirdPage();

    // click previous button
    cy.get(getTestSelector([rootPaginationNav],previousButton))
    .click()
    .then(()=> {
        // check correct project shown
        checkDefaultPageItemPerPage();
    });  

  
}

let checkDataLoadedCorrectly=()=>{
    return cy.request('POST', PRODUCT_CATALOGUE_API_LINK_2.replace("builderId",builderID),
        {
            "search": "",
            "count": true,
            "pageSize": 12,
            "page": 1,
            "sortBy": ["commercialReference"],
            "sortDir": "desc",
            "filters": [
                
            ]
        }
    )
    .its('body')
    .its('items')
    .then(item => {
        if (item.length > 0)
        {
            api.assertSchema('ProductsResponse', '1.0.0');
        }
    });  
}

let checkProductListElement=()=>{
    cy.get('[data-testid=keyword-search]')
    .should('be.visible');

    cy.get('.sprcf-trigger')
    .should('be.visible');

    cy.get('[data-testid=toggle-dropdown]')
    .should('be.visible');

    cy.get('[data-testid=count-showing]')
    .should('be.visible');

    cy.get('[data-testid=count-total]')
    .should('be.visible');

    cy.get('[data-testid=catalogue-items]')
    .should('be.visible');

    cy.get('[data-testid=defaultDescription]')
    .should('be.visible');

    cy.get('[data-testid=catCode]')
    .should('be.visible');

    cy.get('[data-testid=colour]')
    .should('be.visible');

    cy.get('[data-testid=style]')
    .should('be.visible');

    cy.get('[data-testid=image]')
    .should('be.visible');

    cy.get('[data-testid=prev-page]')
    .should('be.visible');

    cy.get('[data-testid=current-page]')
    .should('be.visible');

    cy.get('[data-testid=total-pages]')
    .should('be.visible');

    cy.get('[data-testid=next-page]')
    .should('be.visible');
}

let clickApplyButton =()=>{
    cy.get('[class="sprcf-btn btn-skin-1"]')
    .contains("Apply")
    .click();
    cy.wait(1000);
}

let filterByCategory=(keyword)=>{
    cy.get('[data-testid=category-dropdown] > .input-wrapper > [data-testid=toggle-dropdown]')
    .click();

    cy.get("[data-testid=multiple-options-dropdown]")
    .contains(keyword)
    .click({force:true});

    
   
}

let filterByRange=()=>{
    cy.get(".sprcf-trigger")
    .click();

    cy.get(".checkbox-item > label")
    .contains("Iconic")
    .siblings()
    .click();
    
    clickApplyButton();

}


let filterByColour=()=>{
    cy.get(".sprcf-trigger")
    .click();

    // get first colour available in this data

        cy.get('[class="checkbox-item-colour"]')   
        .find('[data-testid="building-type-checkbox"]').then((color) => {
            
            
            for(let i=0;i<color.length;i++)
            {
              
                    if (color.eq(i).hasClass('disabled')) 
                    {
                        cy.log('disabled');
                    }
                    else
                    {
                        cy.get('[class="checkbox-item-colour"]')   
                        .find('[data-testid="building-type-checkbox"]')
                        .eq(i)
                        .check({force:true})
                    }
              
               
            }


        })
        
        clickApplyButton();
    
      
           
 

    
}

let ChooseProjectStatusAsPartOfPrerequisition=()=>{
    let search_root = 'sprfi';

    cy.wait(2000);

    cy.get('[data-testid=status-dropdown] > .input-wrapper > [data-testid=toggle-dropdown]')
    .click()
    .get('.cmult-option-label-text')
    .contains("In-Progress")
    .click({force:true});

    cy.get('[data-testid=builder-dropdown] > .input-wrapper > [data-testid=toggle-dropdown]')
    .click()
    .get('.cmult-option-label-text')
    .contains(Cypress.env("builderName"))
    .click({force:true});
    
    cy.get(getTestSelector([search_root],'apply-filter-btn'))
    .click();

    cy.wait(Cypress.env("waitForLoading"));

}


let clearAllFilter=()=>{
   
    cy.setCookies();
    cy.get("body").then($body => {
        if ($body.find('[class="sprcf-active-filter no-cross"]').length > 0) {   //evaluates as true
            cy.get('[class="sprcf-active-filter no-cross"]')
            .contains("Clear all")
            .click();
    
        }
        
      });
    cy.log("Done");


}

let checkSchemaProductListLeftNavigation=()=>{
   
    //cy.setCookies();

    cy.request('POST', PRODUCT_CATALOGUE_API_LINK_2.replace("builderId",builderID),
    {
        "search": "",
        "count": true,
        "pageSize": 12,
        "page": 1,
        "sortBy": ["commercialReference"],
        "sortDir": "desc",
        "filters":  [ ]
    
    })
    .wait(2000)
    .its('body')
    .its('items')
    .then(item => {
        if (item.length > 0)
        {
            api.assertSchema('ProductsResponse', '1.0.0');
        }
    });


    cy.request( 'POST', PRODUCT_CATALOGUE_API_LINK_2.replace("builderId",builderID),
    {
        "search": "",
        "count": true,
        "pageSize": 12,
        "page": 1,
        "sortBy": ["commercialReference"],
        "sortDir": "desc",
        "filters":  [ {field: "style", values: ["Iconic"], operator: "eq", dataType: "string"}]
    }
    )
    .its('body')
    .its('items')
    .then(item => {
    if (item.length > 0)
    {
        api.assertSchema('ProductsResponse', '1.0.0');
    }
    });  

    cy.request('POST', PRODUCT_CATALOGUE_API_LINK_2.replace("builderId",builderID),
            {
                "search": "",
                "count": true,
                "pageSize": 12,
                "page": 1,
                "sortBy": ["commercialReference"],
                "sortDir": "desc",
                "filters":  [{field: "stdCategory", values: ["Component"], operator: "eq", dataType: "string"}]
            
        })
        .its('body')
        .its('items')
        .then(item => {
            if (item.length > 0)
            {
                api.assertSchema('ProductsResponse', '1.0.0');
            }
        });  

}


export {
    goToSecondPage,
    goToThirdPage,
    clickNextPaginationButtonThenGoToSecondPage,
    clickEditCanvas,
    checkSearchByDescription,
    checkProductListElement,
    checkDataLoadedCorrectly,
    filterByCategory,
    filterByRange,
    filterByColour,
    ChooseProjectStatusAsPartOfPrerequisition,
    clearAllFilter,
    checkTotalPage,
    checkSchemaProductListLeftNavigation
}
