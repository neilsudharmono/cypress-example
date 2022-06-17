import { getTestSelector} from "../../support/getTestSelector";
import {PROJECT_API_LINK} from '../../support/baseConst';

const rootTileProjectCompact = 'ctil2';

let clickFirstResult=()=>{
   cy.get(getTestSelector([rootTileProjectCompact], 'name'))   
   .first()
   .click();
}

let getFirstInProgressProjectLink=()=>{
    let href_value = "";
    cy.get(getTestSelector([rootTileProjectCompact], 'link')) 
    .first()
    .invoke('attr', 'href')
      .then(href => {          
        href_value = href.split('/')[3];
        let valid_url = PROJECT_API_LINK+'/'+ href_value;
        const projectid = href_value.toString();
        
        //writefile is used to change the id of the latest project that are chosen.
        cy.writeFile('cypress/fixtures/data/project-detail.json', {
            status:'OK',
            code:200,
            messages:null,
            requestId:null,
            dataType:'ProjectDetail',
            count:1,
            items:[
               {
                  id:projectid,
                  name:'Automation Test Edit Project Metadata',
                  houseNumber:'NUMBER 1',
                  street:'Reprehenderit nostr',
                  suburb:'george town',
                  state:'VIC',
                  country:'Australia',
                  postcode:'3166',
                  inclusionCredit:0.00,
                  inclusionValue:0.00,
                  variationValue:0.00,
                  totalInclusion:0.00,
                  totalVariation:0.00,
                  totalElectrical:0.00,
                  buildingType:'House',
                  projectType:'Renovation',
                  buildingSize:90,
                  buildingNumberOfFloors:'Four',
                  pdfs:[
          
                  ],
                  builder:{
                     id:'ccb2db5a-141a-415f-8928-91d29c460c89',
                     name:'Stobo Homes VIC',
                     primaryAddressSuburb:'george town',
                     primaryAddressState:'VIC',
                     primaryAddressPostcode:'3000',
                     primaryAddressHouseNumber:'NUMBER 1',
                     primaryAddressStreet:'Reprehenderit nostr',
                     logo:{
                        large:'https://clipspecassetsuat.blob.core.windows.net/media/00000000-0000-0000-0000-000000000000/8d7e5063bd71966/download (1).jpg',
                        medium:'https://clipspecassetsuat.blob.core.windows.net/media/00000000-0000-0000-0000-000000000000/8d7e5063bd71966/download (1).jpg',
                        small:'https://clipspecassetsuat.blob.core.windows.net/media/00000000-0000-0000-0000-000000000000/8d7e5063bd71966/download (1).jpg',
                        url:'/media/00000000-0000-0000-0000-000000000000/8d7e5063bd71966/download (1).jpg'
                     },
                     isActive:true,
                     contactUser:null,
                     createdDateTimeUtc:'4/20/2020 8:38:43 AM'
                  },
                  status:{
                     id:'1178c41e-4231-4fef-ab3d-f21d0d7d5505',
                     displayName:'In Progress',
                     displayValue:'InProgress',
                     codeName:'InProgress'
                  },
                  image:{
                     large:'',
                     medium:'',
                     small:'',
                     url:null
                  },
                  createdDateTimeUtc:'20200528T020134Z',
                  lastModifiedDateTimeUtc:'20200203T042625Z',
                  internalNotes:'this information for automation test',
                  preferredContactMethod:'Letter',
                  preferredContactTime:'Afternoon',
                  hasAdditionalContact:false,
                  primaryContact:{
                     id:'20e3adf8-fb8c-422a-aa90-14a5206c39a1',
                     federatedId:null,
                     firstName:'AT First',
                     lastName:'AT Last name',
                     fullName:'AT First AT Last name',
                     state:null,
                     phoneNumber:'0412345678',
                     emailAddress:'sefizece@mailinator.com',
                     userStatus:0,
                     isActive:'false',
                     createdDateTimeUtc:'2020-05-28T02:01:34.9288129',
                     lastModifiedDateTimeUtc:'2020-05-28T02:01:34.9288118'
                  },
                  consultant:null,
                  additionalContact:null,
                  floorPlans:[
                     {
                        id:'c7e84f7f-f0c6-42c2-bd3b-2cbc8cdccabd',
                        name:'Floor-Plan-Example.pdf',
                        url:'https://clipspecassetsuat.blob.core.windows.net/media/155de478-d37b-46ac-ad40-a5e080ce241e/8d802ab0c61f8ac/Floor-Plan-Example.pdf',
                        isPdfToImageProcessed:true,
                        totalPages:2,
                        lastModifiedDateTimeUtc:'5/28/2020 2:02:50 AM'
                     }
                  ],
                  inclusionLists:[
          
                  ]
               }
            ]
          }
        
        );

        cy.readFile('cypress/fixtures/data/project-detail.json').then((proj) => {
           
            expect(proj.items[0].id).to.equal(projectid); // true

            cy.connectToProjectDetailData(valid_url);
            
            let project_href ;
            

            if ( Cypress.env("runShowcase"))  
            {
                project_href = "projects.html" + href ;
            }else
            {
                project_href =  href ;

            }
            cy.visit(project_href);

            // Click no skip project assignment
            cy.skipProjectAssignmentProcess();

            cy.get('.btn-skin-1')
            .should('have.contain','Edit Plan');
          });
        
      });
}

let getFirstPreparationProjectLink=()=>{
   let href_value = "";
   cy.get(getTestSelector([rootTileProjectCompact], 'link')) 
   .first()
   .invoke('attr', 'href')
     .then(href => {          
       href_value = href.split('/')[3];
       let valid_url = PROJECT_API_LINK+'/'+ href_value;
       const projectid = href_value.toString();
       
       //writefile is used to change the id of the latest project that are chosen.
       cy.writeFile('cypress/fixtures/data/project-detail.json', {
           status:'OK',
           code:200,
           messages:null,
           requestId:null,
           dataType:'ProjectDetail',
           count:1,
           items:[
              {
                 id:projectid,
                 name:'Automation Test Edit Project Metadata',
                 houseNumber:'NUMBER 1',
                 street:'Reprehenderit nostr',
                 suburb:'george town',
                 state:'VIC',
                 country:'Australia',
                 postcode:'3166',
                 inclusionCredit:0.00,
                 inclusionValue:0.00,
                 variationValue:0.00,
                 totalInclusion:0.00,
                 totalVariation:0.00,
                 totalElectrical:0.00,
                 buildingType:'House',
                 projectType:'Renovation',
                 buildingSize:90,
                 buildingNumberOfFloors:'Four',
                 pdfs:[
         
                 ],
                 builder:{
                    id:'ccb2db5a-141a-415f-8928-91d29c460c89',
                    name:'Stobo Homes VIC',
                    primaryAddressSuburb:'george town',
                    primaryAddressState:'VIC',
                    primaryAddressPostcode:'3000',
                    primaryAddressHouseNumber:'NUMBER 1',
                    primaryAddressStreet:'Reprehenderit nostr',
                    logo:{
                       large:'https://clipspecassetsuat.blob.core.windows.net/media/00000000-0000-0000-0000-000000000000/8d7e5063bd71966/download (1).jpg',
                       medium:'https://clipspecassetsuat.blob.core.windows.net/media/00000000-0000-0000-0000-000000000000/8d7e5063bd71966/download (1).jpg',
                       small:'https://clipspecassetsuat.blob.core.windows.net/media/00000000-0000-0000-0000-000000000000/8d7e5063bd71966/download (1).jpg',
                       url:'/media/00000000-0000-0000-0000-000000000000/8d7e5063bd71966/download (1).jpg'
                    },
                    isActive:true,
                    contactUser:null,
                    createdDateTimeUtc:'4/20/2020 8:38:43 AM'
                 },
                 status:{
                     id:"5d78c41e-4231-4fef-ab3d-f21d0d7d5503",
                     displayName:'Preparation',
                     displayValue:'Preparation',
                     codeName:'Preparation'
                 },
                 image:{
                    large:'',
                    medium:'',
                    small:'',
                    url:null
                 },
                 createdDateTimeUtc:'20200528T020134Z',
                 lastModifiedDateTimeUtc:'20200203T042625Z',
                 internalNotes:'this information for automation test',
                 preferredContactMethod:'Letter',
                 preferredContactTime:'Afternoon',
                 hasAdditionalContact:false,
                 primaryContact:{
                    id:'20e3adf8-fb8c-422a-aa90-14a5206c39a1',
                    federatedId:null,
                    firstName:'AT First',
                    lastName:'AT Last name',
                    fullName:'AT First AT Last name',
                    state:null,
                    phoneNumber:'0412345678',
                    emailAddress:'sefizece@mailinator.com',
                    userStatus:0,
                    isActive:'false',
                    createdDateTimeUtc:'2020-05-28T02:01:34.9288129',
                    lastModifiedDateTimeUtc:'2020-05-28T02:01:34.9288118'
                 },
                 consultant:null,
                 additionalContact:null,
                 floorPlans:[
                    {
                       id:'c7e84f7f-f0c6-42c2-bd3b-2cbc8cdccabd',
                       name:'Floor-Plan-Example.pdf',
                       url:'https://clipspecassetsuat.blob.core.windows.net/media/155de478-d37b-46ac-ad40-a5e080ce241e/8d802ab0c61f8ac/Floor-Plan-Example.pdf',
                       isPdfToImageProcessed:true,
                       totalPages:2,
                       lastModifiedDateTimeUtc:'5/28/2020 2:02:50 AM'
                    }
                 ],
                 inclusionLists:[
         
                 ]
              }
           ]
         }
       
       );

       cy.readFile('cypress/fixtures/data/project-detail.json').then((proj) => {
          
           expect(proj.items[0].id).to.equal(projectid); // true
           cy.connectToProjectDetailData(valid_url);
           let project_href ;
           

           if ( Cypress.env("runShowcase"))  
           {
               project_href = "projects.html" + href ;
           }else
           {
               project_href =  href ;

           }
           cy.visit(project_href);
         });

         // Click no skip project assignment
         cy.skipProjectAssignmentProcess();

         cy.get('[data-testid="add-button"]').invoke('text').then(text => {
            if (text === "Resume adding Inclusions") {   //evaluates as true
               cy.get('[data-testid="add-button"]')
               .should('have.contain','Resume adding Inclusions');
        
            }
            else
            {
               cy.get('[data-testid="add-button"]')
               .should('have.contain','Add Inclusions');
            }
            
          });
          
         
       
     });
}

let getFirstReadyForComsultationProjectLink=()=>{
   let href_value = "";
   cy.get(getTestSelector([rootTileProjectCompact], 'link')) 
   .first()
   .invoke('attr', 'href')
     .then(href => {          
       href_value = href.split('/')[3];
       let valid_url = PROJECT_API_LINK+'/'+ href_value;
       const projectid = href_value.toString();
       
       //writefile is used to change the id of the latest project that are chosen.
       cy.writeFile('cypress/fixtures/data/project-detail.json', {
           status:'OK',
           code:200,
           messages:null,
           requestId:null,
           dataType:'ProjectDetail',
           count:1,
           items:[
              {
                 id:projectid,
                 name:'Automation Test Edit Project Metadata',
                 houseNumber:'NUMBER 1',
                 street:'Reprehenderit nostr',
                 suburb:'george town',
                 state:'VIC',
                 country:'Australia',
                 postcode:'3166',
                 inclusionCredit:0.00,
                 inclusionValue:0.00,
                 variationValue:0.00,
                 totalInclusion:0.00,
                 totalVariation:0.00,
                 totalElectrical:0.00,
                 buildingType:'House',
                 projectType:'Renovation',
                 buildingSize:90,
                 buildingNumberOfFloors:'Four',
                 pdfs:[
         
                 ],
                 builder:{
                    id:'ccb2db5a-141a-415f-8928-91d29c460c89',
                    name:'Stobo Homes VIC',
                    primaryAddressSuburb:'george town',
                    primaryAddressState:'VIC',
                    primaryAddressPostcode:'3000',
                    primaryAddressHouseNumber:'NUMBER 1',
                    primaryAddressStreet:'Reprehenderit nostr',
                    logo:{
                       large:'https://clipspecassetsuat.blob.core.windows.net/media/00000000-0000-0000-0000-000000000000/8d7e5063bd71966/download (1).jpg',
                       medium:'https://clipspecassetsuat.blob.core.windows.net/media/00000000-0000-0000-0000-000000000000/8d7e5063bd71966/download (1).jpg',
                       small:'https://clipspecassetsuat.blob.core.windows.net/media/00000000-0000-0000-0000-000000000000/8d7e5063bd71966/download (1).jpg',
                       url:'/media/00000000-0000-0000-0000-000000000000/8d7e5063bd71966/download (1).jpg'
                    },
                    isActive:true,
                    contactUser:null,
                    createdDateTimeUtc:'4/20/2020 8:38:43 AM'
                 },
                 status:{
                     id:'1178c41e-4231-4fef-ab3d-f21d0d7d5504',
                     displayName:'Ready for Consultation',
                     displayValue:'ReadyForConsultation',
                     codeName:'ReadyForConsultation'
                 },
                 image:{
                    large:'',
                    medium:'',
                    small:'',
                    url:null
                 },
                 createdDateTimeUtc:'20200528T020134Z',
                 lastModifiedDateTimeUtc:'20200203T042625Z',
                 internalNotes:'this information for automation test',
                 preferredContactMethod:'Letter',
                 preferredContactTime:'Afternoon',
                 hasAdditionalContact:false,
                 primaryContact:{
                    id:'20e3adf8-fb8c-422a-aa90-14a5206c39a1',
                    federatedId:null,
                    firstName:'AT First',
                    lastName:'AT Last name',
                    fullName:'AT First AT Last name',
                    state:null,
                    phoneNumber:'0412345678',
                    emailAddress:'sefizece@mailinator.com',
                    userStatus:0,
                    isActive:'false',
                    createdDateTimeUtc:'2020-05-28T02:01:34.9288129',
                    lastModifiedDateTimeUtc:'2020-05-28T02:01:34.9288118'
                 },
                 consultant:null,
                 additionalContact:null,
                 floorPlans:[
                    {
                       id:'c7e84f7f-f0c6-42c2-bd3b-2cbc8cdccabd',
                       name:'Floor-Plan-Example.pdf',
                       url:'https://clipspecassetsuat.blob.core.windows.net/media/155de478-d37b-46ac-ad40-a5e080ce241e/8d802ab0c61f8ac/Floor-Plan-Example.pdf',
                       isPdfToImageProcessed:true,
                       totalPages:2,
                       lastModifiedDateTimeUtc:'5/28/2020 2:02:50 AM'
                    }
                 ],
                 inclusionLists:[
         
                 ]
              }
           ]
         }
       
       );

       cy.readFile('cypress/fixtures/data/project-detail.json').then((proj) => {
          
           expect(proj.items[0].id).to.equal(projectid); // true
           cy.connectToProjectDetailData(valid_url);
           let project_href ;
           

           if ( Cypress.env("runShowcase"))  
           {
               project_href = "projects.html" + href ;
           }else
           {
               project_href =  href ;

           }
           cy.visit(project_href);

           // Click no skip project assignment
            cy.skipProjectAssignmentProcess();

           cy.get('.btn-skin-1')
           .should('have.contain','Start Consultation');
         });
       
     });
}

let getFirstCreatedProjectLink=()=>{
   let href_value = "";
   cy.get(getTestSelector([rootTileProjectCompact], 'link')) 
   .first()
   .invoke('attr', 'href')
     .then(href => {          
       href_value = href.split('/')[3];
       let valid_url = PROJECT_API_LINK+'/'+ href_value;
       const projectid = href_value.toString();
       
       //writefile is used to change the id of the latest project that are chosen.
       cy.writeFile('cypress/fixtures/data/project-detail.json', {
           status:'OK',
           code:200,
           messages:null,
           requestId:null,
           dataType:'ProjectDetail',
           count:1,
           items:[
              {
                 id:projectid,
                 name:'Automation Test Edit Project Metadata',
                 houseNumber:'NUMBER 1',
                 street:'Reprehenderit nostr',
                 suburb:'george town',
                 state:'VIC',
                 country:'Australia',
                 postcode:'3166',
                 inclusionCredit:0.00,
                 inclusionValue:0.00,
                 variationValue:0.00,
                 totalInclusion:0.00,
                 totalVariation:0.00,
                 totalElectrical:0.00,
                 buildingType:'House',
                 projectType:'Renovation',
                 buildingSize:90,
                 buildingNumberOfFloors:'Four',
                 pdfs:[
         
                 ],
                 builder:{
                    id:'ccb2db5a-141a-415f-8928-91d29c460c89',
                    name:'Stobo Homes VIC',
                    primaryAddressSuburb:'george town',
                    primaryAddressState:'VIC',
                    primaryAddressPostcode:'3000',
                    primaryAddressHouseNumber:'NUMBER 1',
                    primaryAddressStreet:'Reprehenderit nostr',
                    logo:{
                       large:'https://clipspecassetsuat.blob.core.windows.net/media/00000000-0000-0000-0000-000000000000/8d7e5063bd71966/download (1).jpg',
                       medium:'https://clipspecassetsuat.blob.core.windows.net/media/00000000-0000-0000-0000-000000000000/8d7e5063bd71966/download (1).jpg',
                       small:'https://clipspecassetsuat.blob.core.windows.net/media/00000000-0000-0000-0000-000000000000/8d7e5063bd71966/download (1).jpg',
                       url:'/media/00000000-0000-0000-0000-000000000000/8d7e5063bd71966/download (1).jpg'
                    },
                    isActive:true,
                    contactUser:null,
                    createdDateTimeUtc:'4/20/2020 8:38:43 AM'
                 },
                 status:{
                     id:'5d78c41e-4231-4fef-ab3d-f21d0d7d5502',
                     displayName:'Created',
                     displayValue:'Created',
                     codeName:'Created'
                 },
                 image:{
                    large:'',
                    medium:'',
                    small:'',
                    url:null
                 },
                 createdDateTimeUtc:'20200528T020134Z',
                 lastModifiedDateTimeUtc:'20200203T042625Z',
                 internalNotes:'this information for automation test',
                 preferredContactMethod:'Letter',
                 preferredContactTime:'Afternoon',
                 hasAdditionalContact:false,
                 primaryContact:{
                    id:'20e3adf8-fb8c-422a-aa90-14a5206c39a1',
                    federatedId:null,
                    firstName:'AT First',
                    lastName:'AT Last name',
                    fullName:'AT First AT Last name',
                    state:null,
                    phoneNumber:'0412345678',
                    emailAddress:'sefizece@mailinator.com',
                    userStatus:0,
                    isActive:'false',
                    createdDateTimeUtc:'2020-05-28T02:01:34.9288129',
                    lastModifiedDateTimeUtc:'2020-05-28T02:01:34.9288118'
                 },
                 consultant:null,
                 additionalContact:null,
                 floorPlans:[
                    {
                       id:'c7e84f7f-f0c6-42c2-bd3b-2cbc8cdccabd',
                       name:'Floor-Plan-Example.pdf',
                       url:'https://clipspecassetsuat.blob.core.windows.net/media/155de478-d37b-46ac-ad40-a5e080ce241e/8d802ab0c61f8ac/Floor-Plan-Example.pdf',
                       isPdfToImageProcessed:true,
                       totalPages:2,
                       lastModifiedDateTimeUtc:'5/28/2020 2:02:50 AM'
                    }
                 ],
                 inclusionLists:[
         
                 ]
              }
           ]
         }
       
       );

       cy.readFile('cypress/fixtures/data/project-detail.json').then((proj) => {
          
           expect(proj.items[0].id).to.equal(projectid); // true
           cy.connectToProjectDetailData(valid_url);
           let project_href ;
           

           if ( Cypress.env("runShowcase"))  
           {
               project_href = "projects.html" + href ;
           }else
           {
               project_href =  href ;

           }
           cy.visit(project_href);
         });

         cy.wait(6000);

         // Click no skip project assignment
         cy.skipProjectAssignmentProcess();

         cy.get('.btn-skin-1')
         .should('have.contain','Add Floor Plans');

       
     });
}

let getFirstCompleteProjectLink=()=>{
   let href_value = "";
   cy.get(getTestSelector([rootTileProjectCompact], 'link')) 
   .first()
   .invoke('attr', 'href')
     .then(href => {          
       href_value = href.split('/')[3];
       let valid_url = PROJECT_API_LINK+'/'+ href_value;
       const projectid = href_value.toString();
       
       //writefile is used to change the id of the latest project that are chosen.
       cy.writeFile('cypress/fixtures/data/project-detail.json', {
           status:'OK',
           code:200,
           messages:null,
           requestId:null,
           dataType:'ProjectDetail',
           count:1,
           items:[
              {
                 id:projectid,
                 name:'Automation Test Edit Project Metadata',
                 houseNumber:'NUMBER 1',
                 street:'Reprehenderit nostr',
                 suburb:'george town',
                 state:'VIC',
                 country:'Australia',
                 postcode:'3166',
                 inclusionCredit:0.00,
                 inclusionValue:0.00,
                 variationValue:0.00,
                 totalInclusion:0.00,
                 totalVariation:0.00,
                 totalElectrical:0.00,
                 buildingType:'House',
                 projectType:'Renovation',
                 buildingSize:90,
                 buildingNumberOfFloors:'Four',
                 pdfs:[
         
                 ],
                 builder:{
                    id:'ccb2db5a-141a-415f-8928-91d29c460c89',
                    name:'Stobo Homes VIC',
                    primaryAddressSuburb:'george town',
                    primaryAddressState:'VIC',
                    primaryAddressPostcode:'3000',
                    primaryAddressHouseNumber:'NUMBER 1',
                    primaryAddressStreet:'Reprehenderit nostr',
                    logo:{
                       large:'https://clipspecassetsuat.blob.core.windows.net/media/00000000-0000-0000-0000-000000000000/8d7e5063bd71966/download (1).jpg',
                       medium:'https://clipspecassetsuat.blob.core.windows.net/media/00000000-0000-0000-0000-000000000000/8d7e5063bd71966/download (1).jpg',
                       small:'https://clipspecassetsuat.blob.core.windows.net/media/00000000-0000-0000-0000-000000000000/8d7e5063bd71966/download (1).jpg',
                       url:'/media/00000000-0000-0000-0000-000000000000/8d7e5063bd71966/download (1).jpg'
                    },
                    isActive:true,
                    contactUser:null,
                    createdDateTimeUtc:'4/20/2020 8:38:43 AM'
                 },
                 status:{
                     id:'1178c41e-4231-4fef-ab3d-f21d0d7d5502',
                     displayName:'Complete',
                     displayValue:'Complete',
                     codeName:'Complete'
                 },
                 image:{
                    large:'',
                    medium:'',
                    small:'',
                    url:null
                 },
                 createdDateTimeUtc:'20200528T020134Z',
                 lastModifiedDateTimeUtc:'20200203T042625Z',
                 internalNotes:'this information for automation test',
                 preferredContactMethod:'Letter',
                 preferredContactTime:'Afternoon',
                 hasAdditionalContact:false,
                 primaryContact:{
                    id:'20e3adf8-fb8c-422a-aa90-14a5206c39a1',
                    federatedId:null,
                    firstName:'AT First',
                    lastName:'AT Last name',
                    fullName:'AT First AT Last name',
                    state:null,
                    phoneNumber:'0412345678',
                    emailAddress:'sefizece@mailinator.com',
                    userStatus:0,
                    isActive:'false',
                    createdDateTimeUtc:'2020-05-28T02:01:34.9288129',
                    lastModifiedDateTimeUtc:'2020-05-28T02:01:34.9288118'
                 },
                 consultant:null,
                 additionalContact:null,
                 floorPlans:[
                    {
                       id:'c7e84f7f-f0c6-42c2-bd3b-2cbc8cdccabd',
                       name:'Floor-Plan-Example.pdf',
                       url:'https://clipspecassetsuat.blob.core.windows.net/media/155de478-d37b-46ac-ad40-a5e080ce241e/8d802ab0c61f8ac/Floor-Plan-Example.pdf',
                       isPdfToImageProcessed:true,
                       totalPages:2,
                       lastModifiedDateTimeUtc:'5/28/2020 2:02:50 AM'
                    }
                 ],
                 inclusionLists:[
         
                 ]
              }
           ]
         }
       
       );

       cy.readFile('cypress/fixtures/data/project-detail.json').then((proj) => {
          
           expect(proj.items[0].id).to.equal(projectid); // true
           cy.connectToProjectDetailData(valid_url);
           let project_href ;
           

           if ( Cypress.env("runShowcase"))  
           {
               project_href = "projects.html" + href ;
           }else
           {
               project_href =  href ;

           }
           cy.visit(project_href);

           // Click no skip project assignment
            cy.skipProjectAssignmentProcess();

         });
       
     });
}
export {
   getFirstInProgressProjectLink,
   getFirstPreparationProjectLink,
   getFirstReadyForComsultationProjectLink,
   getFirstCreatedProjectLink,
   getFirstCompleteProjectLink,
   clickFirstResult
}