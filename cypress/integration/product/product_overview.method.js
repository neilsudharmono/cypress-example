import { getTestSelector} from "../../support/getTestSelector";
import { inputProductOverview,
    requiredComponents} from "../../fixtures/input/product-overview";
import {PRODUCT_API_LINK,PRODUCT_API_LINK_2} from '../../support/baseConst';

const productOverviewRoot = "pprov";

let getFirstProductLink=()=>{
    let href_value = "";

    let detail_url ;
    cy.get(getTestSelector(['sprli'], 'link')) 
    .first()
    .invoke('attr', 'href')
      .then(href => {          
        href_value = href.split('/')[1];
        let valid_url = PRODUCT_API_LINK_2+'/'+ href_value;

        cy.connectToProductOverviewData(valid_url)
            .then(() => {
                if ( Cypress.env("runShowcase"))  
                {
                    detail_url = "products-admin.html#/" + href_value
                }else
                {
                     detail_url = "masterproducts#/" + href_value
               }          
           
           
              
            cy.visit(detail_url)
        });
        
    });
}

let clickFirstResult=()=>{
    cy.get(getTestSelector(['sprli'], 'catCode'))   
    .first()
    .click();
}

let checkProductHeaderData =()=>{
    cy.get(getTestSelector([productOverviewRoot],'commercialReference'))
    .contains(inputProductOverview.commercialReference);

    cy.get(getTestSelector([productOverviewRoot],'defaultDescription'))
    .contains(inputProductOverview.defaultDescription);

    cy.get(getTestSelector([productOverviewRoot],'category'))
    .contains(inputProductOverview.stdCategory );

    cy.get(getTestSelector([productOverviewRoot],'subcategory'))
    .contains(inputProductOverview.stdSubcategory);

    cy.get(getTestSelector([productOverviewRoot],'catCode'))
    .contains(inputProductOverview.catCode);

    cy.get(getTestSelector([productOverviewRoot],'color'))
    .contains(inputProductOverview.colour);

    cy.get(getTestSelector([productOverviewRoot],'style'))
    .contains(inputProductOverview.style);

    cy.get(getTestSelector([productOverviewRoot],'tradePrice'))
    .contains(inputProductOverview.tradePrice);

    //cy.get(getTestSelector([productOverviewRoot],'functionCode'))
    //.contains(inputProductOverview.functionCode);

    cy.get(getTestSelector([productOverviewRoot],'productImage'))
    .should('be.visible');
}

let checkProductDetailsData =()=>{
    /*
    
    --Status is no showing in page
    cy.get(getTestSelector([productOverviewRoot],'status'))
    .contains(inputProductOverview.status);

    cy.get(getTestSelector([productOverviewRoot],'statusDateTime'))
    .contains(inputProductOverview.statusDateTime);

    cy.get(getTestSelector([productOverviewRoot],'statusInfo'))
    .contains(inputProductOverview.statusInfo);

    --function code is not included in JSON response

    cy.get(getTestSelector([productOverviewRoot],'functionCode'))
    .contains(inputProductOverview.functionCode);
    
    
    */

    cy.get(getTestSelector([productOverviewRoot],'productType'))
    .contains(inputProductOverview.productType);

    /*
    -- Work with style excluded in JSON response
    cy.get(getTestSelector([productOverviewRoot],'workWithStyle'))
    .contains(inputProductOverview.workWithStyle);

    */

    
/*
    -- Work with style excluded in JSON response, NEED TO CHECK THIS

    cy.get(getTestSelector([productOverviewRoot],'maxNumberOfUnitsUsed'))
    .contains(inputProductOverview.maxNumberOfUnitsUsed);

    cy.get(getTestSelector([productOverviewRoot],'numberOfFreeSpots'))
    .contains(inputProductOverview.numberOfFreeSpots);

    cy.get(getTestSelector([productOverviewRoot],'numberOfUpgradeSpot'))
    .contains(inputProductOverview.numberOfUpgradeSpot);

    cy.get(getTestSelector([productOverviewRoot],'exclusions'))
    .contains(inputProductOverview.exclusions);

       cy.get(getTestSelector([productOverviewRoot],'options'))
    .contains(inputProductOverview.options);

    cy.get(getTestSelector([productOverviewRoot],'flyImage'))
    .contains(inputProductOverview.flyImage);

    cy.get(getTestSelector([productOverviewRoot],'flyIcon'))
    .contains(inputProductOverview.flyIcon);
    */

    

 

    cy.get(getTestSelector([productOverviewRoot],'iconQuantity'))
    .contains(inputProductOverview.iconQuantity);

    cy.get(getTestSelector([productOverviewRoot],'watts'))
    .contains(inputProductOverview.watts);

    cy.get(getTestSelector([productOverviewRoot],'amp'))
    .contains(inputProductOverview.amp);

    cy.get(getTestSelector([productOverviewRoot],'voltage'))
    .contains(inputProductOverview.voltage);

    cy.get(getTestSelector([productOverviewRoot],'requiredSeparateCircuit'))
    .contains(inputProductOverview.requiredSeparateCircuit);

    cy.get(getTestSelector([productOverviewRoot],'phases'))
    .contains(inputProductOverview.phases);

    cy.get(getTestSelector([productOverviewRoot],'cosCode'))
    .contains(inputProductOverview.cosCode);

    cy.get(getTestSelector([productOverviewRoot],'barcode'))
    .contains(inputProductOverview.barcode);

    cy.get(getTestSelector([productOverviewRoot],'statisticalIndicator'))
    .contains(inputProductOverview.statisticalIndicator);

    cy.get(getTestSelector([productOverviewRoot],'quantity'))
    .contains(inputProductOverview.Qty);
}

let checkProductComponentData =()=>{
    cy.get(getTestSelector([productOverviewRoot],'image'))
    .contains(requiredComponents.image);

    cy.get(getTestSelector([productOverviewRoot],'consumerIcon'))
    .should('be.visible');

    cy.get(getTestSelector([productOverviewRoot],'tradeIcon'))
    .contains(requiredComponents.tradeIcon);

    cy.get(getTestSelector([productOverviewRoot],'catCode'))
    .contains(requiredComponents.catCode);

    cy.get(getTestSelector([productOverviewRoot],'colour'))
    .contains(requiredComponents.colour);

    cy.get(getTestSelector([productOverviewRoot],'style'))
    .contains(requiredComponents.style);

    cy.get(getTestSelector([productOverviewRoot],'description'))
    .contains(requiredComponents.description);

    cy.get(getTestSelector([productOverviewRoot],'quantity'))
    .contains(requiredComponents.qty);

    cy.get(getTestSelector([productOverviewRoot],'tradePrice'))
    .should('be.visible')
    .contains(requiredComponents.tradePrice);

    cy.get(getTestSelector([productOverviewRoot],'category'))
    .should('be.visible')
    .contains(requiredComponents.standardCategory);
}

export{
    checkProductHeaderData,
    checkProductDetailsData,
    checkProductComponentData,
    getFirstProductLink,
    clickFirstResult
}