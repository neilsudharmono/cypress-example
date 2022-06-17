import {BUILDER_API_LINK,BUILDER_API_LINK_2} from '../../support/baseConst';
import { getTestSelector} from "../../support/getTestSelector";
import inputValidBuilderDetails from '../../fixtures/input/builder-details';

let clickFirstBuilder=()=>{
    cy.get(getTestSelector(['ctil4'], 'name'))   
    .first()
    .click();
}

let goToBuilderDetailsPage=()=>{
    cy.get('[data-testid=link-BuilderDetails]')
    .click();
}

let getFirstBuilderLink=(is_overview)=>{
    /*let href_value = "";
    cy.get(getTestSelector(['cbuit'], 'link')) 
    .first()
    .invoke('attr', 'href')
      .then(href => {          
        href_value = href.split('/')[3];

        let valid_url = BUILDER_API_LINK+'/'+ href_value;
        let builder_href;
        
        
        if ( Cypress.env("runShowcase"))  
        {
            builder_href = "business-accounts.html"+href;
        }else
        {
            builder_href = "businessaccounts"+href;
        }

       //cy.connectToBuilderDetailData(valid_url); 
      // stubbing cause edit process error 500
        cy.visit(builder_href);        
        
    });*/

    cy.get('[data-testid="name"]')
    .first()
    .click()
    
}


let getFirstBuilderLinkStubbed=(is_overview)=>{
    let href_value = "";
    cy.get(getTestSelector(['ctil4'], 'link')) 
    .first()
    .invoke('attr', 'href')
      .then(href => {          
        href_value = href.split('/')[3];
        let builder_href;

        let valid_url = BUILDER_API_LINK_2+'/'+ href_value;

        const builderid = href_value.toString();
        
        //writefile is used to change the id of the latest project that are chosen.
        cy.writeFile('cypress/fixtures/data/builder-detail.json', {
            status:"OK",
            code:200,
            result: "Success",
            messages:null,
            requestId:null,
            dataType:"BuilderDetail",
            count: 1,
            items:[
               {
                  canAdjustProductPrices:true,
                  standardDisclaimer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quam id leo in vitae turpis massa sed elementum. Massa placerat duis ultricies lacus sed turpis tincidunt. ",
                  projectComments:"Viverra justo nec ultrices dui. In hac habitasse platea dictumst vestibulum. Massa vitae tortor condimentum lacinia quis vel eros donec. A cras semper auctor neque vitae tempus. Cursus metus aliquam eleifend mi in nulla. ",
                  id: builderid,
                  businessAccountId:"125bb013-ac0f-4c53-8176-7e4d7a9836dd",
                  name:"Builder Account Test",
                  tradingName:"Builder Account Test",
                  defaultStyle:"Iconic",
                  defaultColour:"Vivid White (VW)",
                  emailAddress:"wisdom@homes.com",
                  phoneNumber:"04123456789",
                  website:"http://wisdomhomes.com",
                  primaryAddressCountry:"Australia",
                  primaryAddressPostcode:"3166",
                  primaryAddressState:"VIC",
                  primaryAddressHouseNumber:"01",
                  primaryAddressStreet:"FULL COMPLETE ADDRESS",
                  primaryAddressSuburb:"melbourne",
                  isPostalPrimaryAddressSame:false,
                  postalAddressCountry: "Other",
                  postalAddressPostcode: "3000",
                  postalAddressstate: "VIC",
                  postalAddressHouseNumber: "332",
                  postalAddressStreet: "this postal address different with primary address",
                  postalAddressSuburb: "george suburb",
                  isActive:true,
                  lastModifiedDateTimeUtc:"20191208T041911Z",
                  lastModifiedBy:"Tony Duan",
                  internalNotes:" this is internal notes ",
                  logo:{
                     large:"https://dummyimage.com/500x370/aaa/fff.png",
                     medium:"https://dummyimage.com/500x370/aaa/fff.png",
                     small:"https://dummyimage.com/500x370/aaa/fff.png"
                  },
                  contactUser:{
                     id:"125bb013-ac0f-4c53-81e1-7e4d7a9836dd",
                     firstName:"Morgan Update",
                     lastName:"Robertson",
                     state:"QLD",
                     phoneNumber:"0412345678",
                     emailAddress:"Morgan@gmail.com"
                  },
                  builderUsers:[
                     {
                        id:"815bb033-ac0f-4c53-12e1-7e4d7a9836dd",
                        firstName:"Morgan",
                        lastName:"Robertson",
                        state:"NSW",
                        phoneNumber:"0412345678",
                        emailAddress:"Morgan@gmail.com"
                     },
                     {
                        id:"815bb013-ac0f-4c53-81e1-7e4d7a9836dd",
                        firstName:"Tony",
                        lastName:"Duan",
                        state:"NSW",
                        phoneNumber:"0412312312",
                        emailAddress:"Tony@Luminary.com"
                     }
                  ]
               }
            ]
          }
        
        );

        cy.readFile('cypress/fixtures/data/builder-detail.json').then((proj) => {
           
            expect(proj.items[0].id).to.equal(builderid); // true
            if ( Cypress.env("runShowcase"))  
            {
                builder_href = "business-accounts.html"+href;
            }else
            {
                 builder_href = "businessaccounts"+href;
            }
    
            
           cy.connectToBuilderDetailData(valid_url); 
            
            cy.visit(builder_href);  
            cy.wait(1000);      
          });


     
        
    });
}

let getLastBuilderLink=()=>{
    let href_value = "";
    cy.get(getTestSelector(['ctil4'], 'link')) 
    .last()
    .invoke('attr', 'href')
      .then(href => {          
        href_value = href.split('/')[3];

        let valid_url = BUILDER_API_LINK+'/'+ href_value;
        let builder_href

        if ( Cypress.env("runShowcase"))  
        {
            builder_href = "business-accounts.html"+href;
        }else
        {
             builder_href = "businessaccounts"+href;
        }

       
        cy.connectToBuilderNoPostalData(valid_url);        
        
        cy.visit(builder_href);    
        
        cy.wait(1000);
        
    });
}


let checkBuilderDetailName= ()=> {
    cy.get('[data-testid=builderTradingName]')
    .contains(inputValidBuilderDetails.builderTradingName);
    cy.get('[data-testid=builderDisplayName]')
    .contains(inputValidBuilderDetails.builderDisplayName);
    cy.get('[data-testid=builderAddress]')
    .contains(inputValidBuilderDetails.builderAddress);
    cy.get('[data-testid=builderAddress]')
    .contains(inputValidBuilderDetails.builderAddressCountry);
    cy.get('[data-testid=builderAddress]')
    .contains(inputValidBuilderDetails.builderAddressCode);
    cy.get('[data-testid=builderAddress]')
    .contains(inputValidBuilderDetails.builderState);
    
    cy.get('[data-testid=logoImage]')
    .invoke('attr', 'src').then((nextSrc) => {
        expect(nextSrc).equal(inputValidBuilderDetails.logoImage)
    });

    //cy.get('[data-testid=defaultStyle]')
    //.contains(inputValidBuilderDetails.defaultStyle);
    //cy.get('[data-testid=defaultColor]')
    //.contains(inputValidBuilderDetails.defaultColor);
}

let checkContactDetailsData= ()=> {
    cy.get('[data-testid=contactName]')
    .contains(inputValidBuilderDetails.contactName);
    cy.get('[data-testid=contactPhone]')
    .contains(inputValidBuilderDetails.contactPhone);
    cy.get('[data-testid=contactEmail]')
    .contains(inputValidBuilderDetails.contactEmail);
}

let checkBuilderDetailsData= ()=> {
    cy.get('[data-testid=builderPhoneNumber]')
    .contains(inputValidBuilderDetails.builderPhoneNumber);
    cy.get('[data-testid=builderWebsite]')
    .contains(inputValidBuilderDetails.builderWebsite);
    cy.get('[data-testid=builderEmail]')
    .contains(inputValidBuilderDetails.builderEmail);
}

let checkPostalAddressData= ()=> {
    cy.get('[data-testid=postalAddress]')
    .contains(inputValidBuilderDetails.postalAddress);
}

let checkPostalEmptyAddressData= ()=> {
    cy.get('[data-testid=postalAddress]')
    .contains('N/A');
}

let checkUserAccountHeader= ()=> {
    // check add user account button
    cy.get('[data-testid=inviteUserBtn]')
    .should('be.visible');
}

let checkUserAccountListData= ()=> {
    // check user account name
    cy.get('[data-testid=name]')
    .should('be.visible');
    // check state
    cy.get('[data-testid=state]')
    .should('be.visible');
    // check contact name
    cy.get('[data-testid=email]')
    .should('be.visible');
    // check contract phone
    cy.get('[data-testid=contactPhone]')
    .should('be.visible');
    // check row navigation
    cy.get(getTestSelector(['cutil'], 'manu'))
     .first()
     .children()
     .contains('View User Account')
     //.and('have.attr', 'href'); -- UNCOMMENT THIS WHEN HREF IS ADDED
    .and('have.attr', 'type');   

    
    // this is removed in FED Site
    //  cy.get(getTestSelector(['cutil'], 'manu'))
    //  .first()
    //  .children()
    //  .contains('Revoke User Account')
    //  //.and('have.attr', 'href'); -- UNCOMMENT THIS WHEN HREF IS ADDED
    //  .and('have.attr', 'type'); 

    //  cy.get(getTestSelector(['cutil'], 'manu'))
    //  .first()
    //  .children()
    //  .contains('Deactivate User Account')
    //  .and('have.attr', 'href');

    
}

let checkInternalNotes =()=>{
    cy.get('[name=internalNotes]')
    .contains(inputValidBuilderDetails.internalNotes);
    // cy.get('[data-testid=builderWebsite]')
    // .should(inputValidBuilderDetails.builderWebsite);
}


export{
    clickFirstBuilder,
    goToBuilderDetailsPage,
    getFirstBuilderLink,
    checkBuilderDetailName,
    checkContactDetailsData,
    checkBuilderDetailsData,
    checkPostalAddressData,
    checkUserAccountHeader,
    checkUserAccountListData,
    checkInternalNotes,
    checkPostalEmptyAddressData,
    getLastBuilderLink,
    getFirstBuilderLinkStubbed
}