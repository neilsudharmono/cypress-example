import {PROJECT_API_LINK_EDIT,PROJECT_API_LINK_2} from '../../support/baseConst';
import { getTestSelector} from "../../support/getTestSelector";
import {inputProjectDetails,updateProjectDetails} from '../../fixtures/input/project-details'

const rootTileProjectCompact = 'ctil2';

let updateAboutTheBuild=()=>{

    cy.get("[name=name]")
    .clear()
    .type(updateProjectDetails.projectName);

    cy.get("[name=buildingSize]")
    .clear()
    .type(updateProjectDetails.buildingSize);

    cy.get('[data-testid="radio-projectType-NewBuild"]')
    .click();
   
    cy.get('[data-testid="radio-buildingNumberOfFloors-One"]')
    .click();

    cy.get('[data-testid="radio-buildingType-House"]')
    .click();

    /*cy.get('[data-testid=radio-tab-option]')
        .each(($item, index, $list) => {
            cy
                .get($item)
                .children()
                .first()
                .invoke('val')
                .then(value => {
                    if(value == updateProjectDetails.project_type || 
                        value ==updateProjectDetails.num_of_floor || 
                        value ==updateProjectDetails.build_type )
                    {
                        cy
                        .get($item)
                        .click();
                    }
                    
                })

        });    */ 
}

let updatePrimaryContactDetails=()=>{
    cy.get("[name='primaryContact.firstName']")
    .clear()
    .type(updateProjectDetails.firstname);

    cy.get("[name='primaryContact.lastName']")
    .clear()
    .type(updateProjectDetails.lastname);

    cy.get("[name='primaryContact.phoneNumber']")
    .clear()
    .type(updateProjectDetails.phone);
    
    cy.get("[name='primaryContact.emailAddress']")
    .clear()
    .type(updateProjectDetails.email);

}

let updateSecondaryContactDetails=()=>{

    cy.get("[name='additionalContact.firstName']")
    .clear()
    .type(updateProjectDetails.firstname);

    cy.get("[name='additionalContact.lastName']")
    .clear()
    .type(updateProjectDetails.lastname);''

    cy.get("[name='additionalContact.phoneNumber']")
    .clear()
    .type(updateProjectDetails.phone);
    
    cy.get("[name='additionalContact.emailAddress']")
    .clear()
    .type(updateProjectDetails.email);
    
}

let checkRetrieveAllData=( )=>{
    cy.get('[data-testid=last-modified]')
    .contains(inputProjectDetails.last_modified);

    cy.get('[data-testid=created-at]')
    .contains(inputProjectDetails.created_date);

    // cy.get("[name='builder.name']")
    // .contains(inputProjectDetails.builderName);

    cy.get("[name=name]")
    .should('have.value',inputProjectDetails.projectName);

    cy.get("[name=buildingSize]")
    .should('have.value',inputProjectDetails.buildingSize);

    cy.get('[data-testid=radio-projectType-NewBuild]')
    .click();
   
    cy.get('[data-testid=radio-buildingNumberOfFloors-One]')
    .click();

    cy.get('[data-testid=radio-buildingType-House]')
    .click();

    cy.get('[name=projectType]')
    .should('have.value',inputProjectDetails.project_type)

    cy.get('[name=buildingNumberOfFloors]')
    .should('have.value',inputProjectDetails.num_of_floor)

    cy.get('[name=buildingType]')
    .should('have.value',inputProjectDetails.build_type)

    cy.get("[name=country]")
    .should('have.value',inputProjectDetails.country);

    cy.get("[name=postcode]")
    .should('have.value',inputProjectDetails.postcode);

    cy.get("[name=state]")
    .should('have.value',inputProjectDetails.state);

    cy.get("[name=houseNumber]")
    .should('have.value',inputProjectDetails.house_number);

    cy.get("[name=street]")
    .should('have.value',inputProjectDetails.street);

    cy.get("[name=suburb]")
    .should('have.value',inputProjectDetails.suburb);
    
    cy.get("[name='primaryContact.firstName']")
    .should('have.value',inputProjectDetails.firstname);

    cy.get("[name='primaryContact.lastName']")
    .should('have.value',inputProjectDetails.lastname);

    cy.get("[name='primaryContact.phoneNumber']")
    .should('have.value',inputProjectDetails.phone);
    
    cy.get("[name='primaryContact.emailAddress']")
    .should('have.value',inputProjectDetails.email);

    cy.get('[name=preferredContactMethod]')
    .should('have.value',inputProjectDetails.prefered_contact_method);
    
    cy.get('[name=preferredContactTime]')
    .should('have.value',inputProjectDetails.contact_time);

    cy.get('[name=internalNotes]')
    .contains(inputProjectDetails.notes);
}

let clearAllData=()=>{

    cy.get("[name=name]")
    .clear();

    cy.get("[name=buildingSize]")
    .clear();

    cy.get("[name=houseNumber]")
    .clear();

    cy.get("[name=street]")
    .clear();

    cy.get("[name=suburb]")
    .clear();

    cy.get("[name='primaryContact.firstName']")
    .clear();

    cy.get("[name='primaryContact.lastName']")
    .clear();

    cy.get("[name='primaryContact.phoneNumber']")
    .clear();
    
    cy.get("[name='primaryContact.emailAddress']")
    .clear();

    // cy.get('[data-testid=button-remove-additional-contact]')
    // .then(($btn)=>{
    //     if($btn.is(":visible")){
    //         cy.get("[name=additionalContactFirstName]")
    //         .clear();
        
    //         cy.get("[name=additionalContactLastName]")
    //         .clear();
        
    //         cy.get("[name=additionalContactPhone]")
    //         .clear();
            
    //         cy.get("[name=additionalContactEmail]")
    //         .clear();
    //     }else{
    //         //you get here if the button DOESN'T EXIST
    //         assert.isOk('everything','everything is OK');
    //     }
    // });       

    // cy.get('[name=preferredContactMethod]')
    // .clear();
    
    // cy.get('[name=preferredContactTime]')
    // .clear();

    cy.get('[name=internalNotes]')
    .clear();
}

let clickSaveChanges=()=>{
    cy.get('[data-testid=button-submit]')
    .click();

    cy.wait(1000);
}

let checkUpdateProcessSuccess=()=>{
    cy.get('[data-testid="notice-msg"]')
    .contains('The Project has been updated successfully!');
}

let goToProjectDetailsPage=()=>{
    // Click no skip project assignment
    cy.skipProjectAssignmentProcess();

    cy.get('[data-testid=link-ProjectDetails]')
    .click();    

    cy.wait(Cypress.env('waitForLoading'));

}


let goToProjectListingPage=()=>{
    cy.get('[data-testid=button-back-to-s]')
    .click({force:true});
}

let checkRequiredFieldsOnProjectMetadata=()=>{
    // TODO NEED TO INVESTIGATE WHY THIS HAPPEN ON AT
    // BUT WORKS ON MANUAL CHECK

    // cy.get('[data-testid=input-building-size] > .input-wrapper > .error-msg')
    // .should('be.visible');

    // cy.get('[data-testid=input-building-house-nr] > .input-wrapper > .error-msg')
    // .should('be.visible');

    // cy.get('[data-testid=input-building-street] > .input-wrapper > .error-msg')
    // .should('be.visible');

    // cy.get('[data-testid=input-building-postcode] > .input-wrapper > .error-msg')
    // .should('be.visible');

    cy.get('[data-testid=input-project-name]')
    .within(()=>{
        cy.get('.error-msg')
        .should('be.visible')
    })  
    
    cy.get('[data-testid=input-building-suburb] > .input-wrapper > .error-msg')
    .should('be.visible');

    cy.get('[data-testid=input-primary-contact-name] > .input-wrapper > .error-msg')
    .scrollIntoView()
    .should('be.visible');

    cy.get('[data-testid=input-primary-contact-last-name] > .input-wrapper > .error-msg')
    .scrollIntoView()
    .should('be.visible');

    cy.get('[data-testid=input-primary-contact-phone] > .input-wrapper > .error-msg')
    .scrollIntoView()
    .should('be.visible');

    cy.get('[data-testid=input-primary-contact-email] > .input-wrapper > .error-msg')
    .scrollIntoView()
    .should('be.visible');
}

let clickAddAdditionalContact=()=>{

    cy.get("body").then($body => {
        if ($body.find('Remove additional Contact Details').length>0) {   //evaluates as true
            cy.get('[class="cprfo-section-header"]')
            .contains('Additional Contact Details')
            .should('exist')
    
        }
        else
        {


            cy.get('[data-testid=button-add-additional-contact]')
            .click();

        }
        
      });
      



    
}

let fillOutPreferencesDetails=()=>{

    cy.get('[name=preferredContactMethod]')
    .select(updateProjectDetails.prefered_contact_method);
    
    cy.get('[name=preferredContactTime]')
    .select(updateProjectDetails.contact_time);

    cy.get('[name=internalNotes]')
    .clear()
    .type(updateProjectDetails.notes);

    cy.get('[name=buildingSize]')
    .clear()
    .type(updateProjectDetails.buildingSize);
}

let getFirstProjectLink=()=>{
    let href_value = "";
    cy.get(getTestSelector([rootTileProjectCompact], 'link')) 
    .first()
    .invoke('attr', 'href')
      .then(href => { 
          cy.log(href)         
        href_value = href.split('/')[3];
        let valid_url = PROJECT_API_LINK_2+'/'+ href_value;
        const projectid = href_value.toString();
        
        //writefile is used to change the id of the latest project that are chosen.
        cy.writeFile('cypress/fixtures/data/project-detail.json', {
            code: 200,
            status: "OK",
            result: "Success",
            messages: null,
            requestId: null,
            dataType: "ProjectDetail",
            count: 1,
            items: [{
                id: projectid,
                name:'Automation Test Edit Project Metadata',
                houseNumber:'NUMBER 1',
                street:'Level 1, 195 Little Collins St',
                suburb:'george town',
                state:'VIC',
                country:'Australia',
                postcode:'3166',
                defaultStyle: "Iconic",
                defaultColour: "VW",
                inclusionInitialValue: 0.00,
                inclusionValue: 35.00,
                variationValue: 160.00,
                breakdownInclusionSubtotal: 31.82,
                breakdownVariationSubtotal: 145.45,
                breakdownElectricalSubtotal: 0.0,
                breakdownInclusionTax: 3.18,
                breakdownVariationTax: 14.55,
                breakdownElectricalTax: 17.73,
                breakdownInclusionTotal: 35.00,
                breakdownVariationTotal: 160.00,
                breakdownElectricalTotal: 195.00,
                buildingType: "Villa",
                projectType: "NewBuild",
                buildingSize: 250.00,
                buildingNumberOfFloors: "Two",
                pdfs: [],
                builder: {
                    id: "87e1a454-5208-42b8-903a-5f72e4c0e312",
                    name: "Stobo Homes VIC",
                    primaryAddressSuburb: "Melbourne ",
                    primaryAddressstate: "VIC",
                    primaryAddressPostcode: "3000",
                    primaryAddressHouseNumber: "Georges Building",
                    primaryAddressStreet: "Level 1, 195 Little Collins St",
                    logo: {
                        large: "https://clipspec-assets-dev.luminary.delivery/media/87e1a454-5208-42b8-903a-5f72e4c0e312/8d8e1d55241ca56/pngkit_bay-bridge-png_3587140.png",
                        medium: "https://clipspec-assets-dev.luminary.delivery/media/87e1a454-5208-42b8-903a-5f72e4c0e312/8d8e1d55241ca56/pngkit_bay-bridge-png_3587140.png",
                        small: "https://clipspec-assets-dev.luminary.delivery/media/87e1a454-5208-42b8-903a-5f72e4c0e312/8d8e1d55241ca56/pngkit_bay-bridge-png_3587140.png",
                        url: "/media/87e1a454-5208-42b8-903a-5f72e4c0e312/8d8e1d55241ca56/pngkit_bay-bridge-png_3587140.png"
                    },
                    isActive: true,
                    builderSettingSummary: {
                        isSelectionCentre: false,
                        autoSendBookingEmail: true
                    },
                    contactUser: null,
                    createdDateTimeUtc: "20210308T015559Z",
                    isSelectionCentre: false
                },
                status: {
                    id: "1178c41e-4231-4fef-ab3d-f21d0d7d5505",
                    displayName: "In-Progress",
                    displayValue: "InProgress",
                    codeName: "InProgress"
                },
                image: {
                    large: null,
                    medium: null,
                    small: null,
                    url: null
                },
                createdDateTimeUtc:'20200528T020134Z',
                lastModifiedDateTimeUtc:'20200203T042625Z',
                internalNotes:'this information for automation test',
                preferredContactMethod: "Phone",
                preferredContactTime: "Morning",
                hasAdditionalContact: false,
                primaryContact: {
                    id: "406f79cf-fc68-4f54-3764-08d8249ce514",
                    federatedId: "gb004c0a-6d60-ff75-d078-78a9f4dfc844",
                    firstName: "AT First",
                    lastName: "AT Last name",
                    fullName: "filya mustikawati",
                    state: null,
                    phoneNumber: "N/A",
                    emailAddress: "filya@luminary.com",
                    userStatus: "Active",
                    isDeleted: false,
                    createdDateTimeUtc: "20200710T064554Z",
                    lastModifiedDateTimeUtc: "20210406T074527Z",
                    lastLoginDateTime: "20210406T074527Z",
                    userRoles: null
                },
                consultant: {
                    id: "d2d136e8-b1c5-45b8-e9c4-08d818de1c59",
                    federatedId: "gb005f43-ec69-9c1f-3f9d-025c787cfdaa",
                    firstName: "Admin",
                    lastName: "CSPEC",
                    fullName: "Admin CSPEC",
                    state: null,
                    phoneNumber: "N/A",
                    emailAddress: "administrator.clipspec@yopmail.com",
                    userStatus: "Active",
                    isDeleted: false,
                    createdDateTimeUtc: "20200625T080924Z",
                    lastModifiedDateTimeUtc: "20210416T025714Z",
                    lastLoginDateTime: "20210416T025714Z",
                    userRoles: null
                },
                additionalContact: null,
                projectSetting: {
                    defaultStyle: "AG",
                    defaultColour: "AG",
                    defaultColourGroupName: "Grey",
                    bomColumnsInclusionQty: true,
                    bomColumnsVariationQty: true,
                    bomColumnsUnitPrice: true,
                    bomColumnsInclusionPrice: true,
                    bomColumnsVariationPrice: true,
                    bomColumnsTotalPrice: true,
                    bomRowsInclusionPrice: true,
                    bomRowsVariationPrice: true,
                    bomRowsTotalPrice: true,
                    bomContractorColumnsUnitPrice: true,
                    bomContractorColumnsTotalPrice: true,
                    bomContractorRowsTotalPrice: true,
                    bomContractorColumnsInclusionQty: true,
                    bomContractorColumnsVariationQty: true,
                    bomContractorColumnsInclusionPrice: true,
                    bomContractorColumnsVariationPrice: true,
                    bomContractorRowsInclusionPrice: true,
                    bomContractorRowsVariationPrice: true,
                    bomContractorValues: "All",
                    bomValues: "All",
                    isDeleted: false,
                    managedBySelectionCentreId: null
                },
                projectComments: "New Builder External",
                lastModifiedBy: "filya mustikawati",
                createdBy: "filya mustikawati",
                isDeleted: false,
                lastSentAppointmentEmail: null,
                lastSentAppointmentDateTimeUtc: null,
                projectAppointmentStatus: null,
                appointment: null,
                isTemplate: false,
                isTemplateReady: false,
                discontinuedProductCount: null,
                latestBomTotal: null,
                inclusionType: "IncludedProducts",
                managedByAccountId: "125bb013-ac0f-4c53-8176-7e4d7a9836dd",
                accountType: "External",
                isInclusionInDraft: false,
                floorPlans: [{
                    id: "06b4d2f3-23d9-4234-8c08-af09bdd235ef",
                    name: "pngkit_bay-bridge-png_3587140.png",
                    url: "https://clipspec-assets-dev.luminary.delivery/media/532b8e19-6a20-42d1-a21c-079f89b9e30e/8d8e1d76c040a8c/pngkit_bay-bridge-png_3587140.png",
                    isPdfToImageProcessed: true,
                    totalPages: 1,
                    lastModifiedDateTimeUtc: "20210308T021102Z"
                }],
                inclusionLists: []
            }]
        }
        
        );

        cy.readFile('cypress/fixtures/data/project-detail.json').then((proj) => {
           
            expect(proj.items[0].id).to.equal(projectid); // true
            cy.log(valid_url)
            cy.connectToProjectDetailData(valid_url);
            let project_href;
            
            if ( Cypress.env("runShowcase"))  
            {
                project_href = "projects.html" + href +'/details';
            }else
            {
                project_href =  href +'/details';
            }

            cy.visit(project_href);
          });
        
      });
}

let filloutBuildLocation=()=>{
    cy.get('[name=country]')
    .select(updateProjectDetails.country, {delay:50})
    .scrollIntoView()
    .should('have.value',updateProjectDetails.country);

    cy.wait(3000)

    cy.get('[name=state]')
    .select(updateProjectDetails.state);

    cy.get('[name=postcode]')
    .clear()
    .type(updateProjectDetails.postcode);

    cy.get('[name=houseNumber]')
    .clear()
    .type(updateProjectDetails.house_number);

    cy.get('[name=street]')
    .clear()    
    .type(updateProjectDetails.street);

    cy.get('[name=suburb]')
    .clear()
    .type(updateProjectDetails.suburb);
    
}

let checkRetrieveUpdatedAllData=( )=>{
    cy.get('[data-testid=last-modified]')
    .contains(updateProjectDetails.last_modified);

    // cy.get('[data-testid=created-at]')
    // .contains(created_date);

    cy.get("[name=name]")
    .should('have.value',updateProjectDetails.projectName);

    cy.get("[name=buildingSize]")
    .should('have.value',updateProjectDetails.buildingSize);
   
    cy.get('[data-testid="radio-projectType-NewBuild"]')
    .click();
   
    cy.get('[data-testid="radio-buildingNumberOfFloors-One"]')
    .click();

    cy.get('[data-testid="radio-buildingType-House"]')
    .click();
    /*
    cy.get('[data-testid=radio-tab-option]')
    .each(($item, index, $list) => {
        cy
            .get($item)
            .children()
            .first()
            .invoke('val')
            .then(value => {
                if(value == updateProjectDetails.project_type || 
                    value == updateProjectDetails.num_of_floor || 
                    value == updateProjectDetails.build_type )
                {
                    // get element that refer to radio button
                    cy
                    .get($item)
                    .children()
                    .first()
                    .should('have.attr','checked')
                }
                
            })

    }); */

    cy.get("[name=country]")
    .should('have.value',updateProjectDetails.country);

    cy.get("[name=postcode]")
    .should('have.value',updateProjectDetails.postcode);

    cy.get("[name=state]")
    .should('have.value',updateProjectDetails.state);

    cy.get("[name=houseNumber]")
    .should('have.value',updateProjectDetails.house_number);

    cy.get("[name=street]")
    .should('have.value',updateProjectDetails.street);

    cy.get("[name=suburb]")
    .should('have.value',updateProjectDetails.suburb);
    
    cy.get("[name='primaryContact.firstName']")
    .should('have.value',updateProjectDetails.firstname);

    cy.get("[name='primaryContact.lastName']")
    .should('have.value',updateProjectDetails.lastname);

    cy.get("[name='primaryContact.phoneNumber']")
    .should('have.value',updateProjectDetails.phone);
    
    cy.get("[name='primaryContact.emailAddress']")
    .should('have.value',updateProjectDetails.email);

    cy.get("[name='additionalContact.firstName']")
    .should('have.value',updateProjectDetails.firstname);

    cy.get("[name='additionalContact.lastName']")
    .should('have.value',updateProjectDetails.lastname);

    cy.get("[name='additionalContact.phoneNumber']")
    .should('have.value',updateProjectDetails.phone);
    
    cy.get("[name='additionalContact.emailAddress']")
    .should('have.value',updateProjectDetails.email);

    cy.get('[name=preferredContactMethod]')
    .should('have.value',updateProjectDetails.prefered_contact_method);
    
    cy.get('[name=preferredContactTime]')
    .should('have.value',updateProjectDetails.contact_time);

    cy.get('[name=internalNotes]')
    .contains(updateProjectDetails.notes);
}

let clickFirstResult=()=>{
    cy.get(getTestSelector([rootTileProjectCompact], 'name'))   
    .first()
    .click();
}
export{
    updateAboutTheBuild,
    updatePrimaryContactDetails,
    updateSecondaryContactDetails,
    checkRetrieveAllData,
    clearAllData,
    clickSaveChanges,
    checkUpdateProcessSuccess,
    goToProjectDetailsPage,
    checkRequiredFieldsOnProjectMetadata,
    clickAddAdditionalContact,
    fillOutPreferencesDetails,
    goToProjectListingPage,
    getFirstProjectLink,
    filloutBuildLocation,
    checkRetrieveUpdatedAllData,
    clickFirstResult
}

