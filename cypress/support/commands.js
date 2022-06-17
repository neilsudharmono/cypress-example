import {PROJECT_API_LINK,BUILDER_API_LINK, BUSSINESS_API_LINK,SURCHARGES_API_LINK, SURCHARGES_API_LINK_2, PROJECT_API_LINK_2, BUILDER_API_LINK_2} from '../support/baseConst';
import DndSimulatorDataTransfer from './DndSimulatorDataTransfer';
import 'cypress-file-upload';
import {getTestSelector} from './getTestSelector';

Cypress.Commands.add('setCookies', function() {
    if ( Cypress.env("runShowcase"))  
    {
          cy.handleShowcasePassword();
    }else
    {
        const options = {
          username: Cypress.env('username'),
          password: Cypress.env('password'),
          loginUrl: Cypress.env('appUrl'),
          postLoginSelector: '.display-extra-large',
          headless: true,
          logs: false
        }

        const options2 = {
          username: Cypress.env('username2'),
          password: Cypress.env('password'),
          loginUrl: Cypress.env('appUrl'),
          postLoginSelector: '.display-extra-large',
          headless: true,
          logs: false
        }

        const options3 = {
          username: Cypress.env('username3'),
          password: Cypress.env('password'),
          loginUrl: Cypress.env('appUrl'),
          postLoginSelector: '.display-extra-large',
          headless: true,
          logs: false
        }
    
      cy.task('checkFileStatus', 'cookies.json')
        .then(fileExists => {
          if(fileExists){ 
            cy.readFile('cookies.json').then((json) => {
              json.forEach(cookie => {
                cy.setCookie(cookie.name, cookie.value, {
                  domain: cookie.domain,
                  expiry: cookie.expires,
                  httpOnly: cookie.httpOnly,
                  path: cookie.path,
                  secure: cookie.secure
                })
                Cypress.Cookies.preserveOnce(cookie.name) 
            })
            })
          } else {

            let noUser = Math.floor(Math.random() * 3) + 1;
            cy.log(noUser)
            if(noUser === 1)
            {
                cy.task('IDMSLogin', options).then(result => {
                  cy.clearCookies();
                  let returnedCookies= [];
            
                  result.cookies.forEach(cookie => {
                    returnedCookies.push(cookie);
                    cy.setCookie(cookie.name, cookie.value, {
                      domain: cookie.domain,
                      expiry: cookie.expires,
                      httpOnly: cookie.httpOnly,
                      path: cookie.path,
                      secure: cookie.secure
                    })
                    Cypress.Cookies.preserveOnce(cookie.name)
                  })
            
                  cy.writeFile('cookies.json', JSON.stringify(returnedCookies));
              })
            }
            else if(noUser === 2)
            {
                cy.task('IDMSLogin', options2).then(result => {
                  cy.clearCookies();
                  let returnedCookies= [];
            
                  result.cookies.forEach(cookie => {
                    returnedCookies.push(cookie);
                    cy.setCookie(cookie.name, cookie.value, {
                      domain: cookie.domain,
                      expiry: cookie.expires,
                      httpOnly: cookie.httpOnly,
                      path: cookie.path,
                      secure: cookie.secure
                    })
                    Cypress.Cookies.preserveOnce(cookie.name)
                  })
            
                  cy.writeFile('cookies.json', JSON.stringify(returnedCookies));
              })
            }
            else
            {
                cy.task('IDMSLogin', options3).then(result => {
                  cy.clearCookies();
                  let returnedCookies= [];
            
                  result.cookies.forEach(cookie => {
                    returnedCookies.push(cookie);
                    cy.setCookie(cookie.name, cookie.value, {
                      domain: cookie.domain,
                      expiry: cookie.expires,
                      httpOnly: cookie.httpOnly,
                      path: cookie.path,
                      secure: cookie.secure
                    })
                    Cypress.Cookies.preserveOnce(cookie.name)
                  })
            
                  cy.writeFile('cookies.json', JSON.stringify(returnedCookies));
              })
            }
  
        } 
      })

    }
  
})

Cypress.Commands.add("checkCookies", () => {
 
  

  cy.get("body").then($body => {
    // check if the username or password textbox appear
    if ($body.find('Please wait').length > 0) { //evaluates as true
      cy.task('deleteFile','cookies.json');
      cy.setCookies();
      cy.reload();
    }
  
  });
})
  

Cypress.Commands.add("openTestingEnvironment", (showcaseURL, devURL) => {
  // this to open testing page
  if ( Cypress.env("runShowcase"))  
      {
         cy.visit(showcaseURL);
      }else
      {
         cy.visit(devURL)
        
     
         // to check if the user id error is appear
         //cy.checkCookies();
      }
      cy.wait(Cypress.env('userWaitForLoading'));
})
  
Cypress.Commands.add("handleShowcasePassword", () => {
  // visit showcase site
  cy.visit(Cypress.env('showcase'));

  cy.get("body").then($body => {
    // check if the username or password textbox appear
    if ($body.find("[name=password]").length > 0) {   //evaluates as true
        cy.get("[name=password]")
        .type(Cypress.env('NetiflyPass'));

        cy.get('button').contains('Submit')
        .click();
    }
  });
})
  


Cypress.Commands.add("waitProjectListToLoad", (username,password) => {
  cy.finishedLoadingAnimation();
  // check project list is loaded
  cy.get('[data-testid=link]')
  .should('be.visible');
  // check project name is appear
  cy.get('[data-testid=name]')
  .should('be.visible');
  // check project row's utility menu is appear
  cy.get('[data-testid=control]')
  .should('be.visible');
})



// Function to create the test element selector based on test root(s)
// and a test id (optional)
Cypress.Commands.add("getTestSelector", (testroots,testid) => {
    
    const rootSelector = testroots.reduce((selectorString, rootVal) => {
        return selectorString += ` [data-testroot="${rootVal}"]`;
    }, '');
    if (testid) {
        return `${rootSelector} *:not([data-testroot]) [data-testid="${testid}"], ${rootSelector} > [data-testid="${testid}"]`;
    }
    return `${rootSelector}`;
})

Cypress.Commands.add("generateRandomNumber", (testroots,testid) => {    
    const min = 100;
    const max = 10000;
    return Math.floor(Math.random() * (max - min + 1)) + min;
})

Cypress.Commands.add("skipProjectAssignmentProcess", (testroots,testid) => {    
    cy.wait(5000)
    
    cy.get("body").then($body => {
      if ($body.find(".c-overlay").length > 0) {   //evaluates as true
        cy.get('[data-testid=overlay]').then(el => {
            if (el.hasClass('is-visible')){
                cy.get('button')
                .contains('No, skip')
                .click();
            }
        })
  
      }
      
    });
})

Cypress.Commands.add("filterProjectByNameAndStatus", (projectName,projectStatus) => {   

   // type search by project name
   cy.get('[data-testid=keyword-search]')
   .clear()
   .type(projectName,{delay:100});

   // choose dropdown by dropdown value
   cy.get('[data-testid=status-dropdown] > .input-wrapper > [data-testid=toggle-dropdown]')
   .click()
   .get('.cmult-option-label-text')
   .contains(projectStatus)
   .click({force:true});

   // click apply button
   cy.get(getTestSelector(['sprfi'],'apply-filter-btn'))
   .click();

   return cy
       .log(`Searching for ${projectStatus} ${projectName}`)
})

Cypress.Commands.add("finishedLoadingAnimation", () => {
  // check loading is not appear
  const rootLoadingScreen = 'sload';
  const rootProjectListing = 'sproj';
  cy.wait(Cypress.env('userWaitForLoading'));
  cy.get(getTestSelector([rootProjectListing, rootLoadingScreen], 'text-msg'))
  .should('not.exist');

})

Cypress.Commands.add("connectToInternalTestData", () => {
    // Setup server and fixture response for /projects requests
    // Use alias getProjects for the custom response
    
    cy.fixture('data/project-listing.json').as('project-listing')
    cy.intercept('GET', PROJECT_API_LINK, {fixture:'data/project-listing.json'})
})


Cypress.Commands.add("connectToInternalBuilderData", () => {
  // Setup server and fixture response for /projects requests
  // Use alias getProjects for the custom response
  
  cy.fixture('data/builder-listing.json').as('builder-listing')
  cy.intercept('GET', BUILDER_API_LINK_2, {fixture:'data/builder-listing.json'})

})

Cypress.Commands.add("connectToBuilderSummaryData", () => {
  // Setup server and fixture response for /projects requests
  // Use alias getProjects for the custom response
  
  cy.fixture('data/product-builder-set.json').as('product-builder-set')
  cy.intercept('GET', BUILDER_API_LINK_2, {fixture:'data/product-builder-set.json'})

})

Cypress.Commands.add("connectToProjectDetailData", (project_detail_url) => {
  // Setup server and fixture response for /projects requests
  // Use alias getProjects for the custom response
  
  cy.fixture('data/project-detail.json').as('project-detail')
  cy.intercept('GET', project_detail_url, {fixture:'data/project-detail.json'})

})

Cypress.Commands.add("connectToBusinessOverviewData", (business_detail_url) => {
  // Setup server and fixture response for /projects requests
  // Use alias getProjects for the custom response
  
  cy.fixture('data/business-detail.json').as('business-detail')
  cy.intercept('GET', business_detail_url, {fixture:'data/business-detail.json'})

})

Cypress.Commands.add("connectToBusinessExpired", (business_detail_url) => {
  // Setup server and fixture response for /projects requests
  // Use alias getProjects for the custom response
  
  cy.fixture('data/business-edit-expired.json').as('business-edit-expired')
  cy.intercept('GET', business_detail_url, {fixture:'data/business-edit-expired.json'})

})

Cypress.Commands.add("connectToBusinessDetailData", (business_detail_url) => {
  // Setup server and fixture response for /projects requests
  // Use alias getProjects for the custom response
  
  cy.fixture('data/business-edit.json').as('business-detail')
  cy.intercept('GET', business_detail_url, {fixture:'data/business-edit.json'})

})


Cypress.Commands.add("connectToBuilderDetailData", (builder_detail_url) => {
  // Setup server and fixture response for /projects requests
  // Use alias getProjects for the custom response
  
  cy.fixture('data/builder-detail.json').as('builder-detail')
  cy.intercept('GET', builder_detail_url, {fixture:'data/builder-listing.json'})

})

Cypress.Commands.add("connectToBuilderNoPostalData", (builder_detail_url) => {
  // Setup server and fixture response for /projects requests
  // Use alias getProjects for the custom response
  
  cy.fixture('data/builder-detail-nopostal.json').as('builder-no-postal-detail')
  cy.intercept('GET', builder_detail_url, {fixture:'data/builder-detail-nopostal.json'})

})

Cypress.Commands.add("connectToBuilderOverviewData", (builder_detail_url) => {
  // Setup server and fixture response for /projects requests
  // Use alias getProjects for the custom response
  
  cy.fixture('data/builder-overview.json').as('builder-overview')
  cy.intercept('GET', business_detail_url, {fixture:'data/builder-overview.json'})

})

Cypress.Commands.add("connectToSurchargesListingData", () => {

  // Setup server and fixture response for /surcharges requests
  // Use alias getsurcharges for the custom response
  
  cy.fixture('data/surcharges-listing.json').as('surcharges-listing')
  cy.intercept('POST', SURCHARGES_API_LINK_2, {fixture:'data/surcharges-listing.json'})

})

Cypress.Commands.add("connectToBusinessListingData", (business_listing) => {

  // Setup server and fixture response for /projects requests
  // Use alias getProjects for the custom response
  
  cy.fixture('data/business-listing.json').as('business-listing')
  cy.intercept('GET', business_listing, {fixture:'data/business-listing.json'}) 

})

Cypress.Commands.add("connectToProductOverviewData", (product_detail_url) => {
  // Setup server and fixture response for /projects requests
  // Use alias getProjects for the custom response
  ;
  cy.fixture('data/product-overview.json').as('product-overview')
  cy.intercept('GET', product_detail_url, {fixture:'data/product-overview.json'})

})

Cypress.Commands.add("connectToProjectListData", (projectlist_detail_url) => {
  // Setup server and fixture response for /projects requests
  // Use alias getProjects for the custom response
  ;
  cy.fixture('data/project-listing.json').as('project-listing')
  cy.intercept('GET', projectlist_detail_url, {fixture:'data/project-listing.json'})

})

Cypress.Commands.add("connectToProductBuilderOverviewData", (product_detail_url) => {
  // Setup server and fixture response for /projects requests
  // Use alias getProjects for the custom response
  ;
  cy.fixture('data/product-builder-overview.json').as('product-builder-overview')
  cy.intercept('GET', product_detail_url, {fixture:'data/product-builder-overview.json'})

})

Cypress.Commands.add("writeKeywordToTextBox", (keyword) => {

  cy.get('[data-testid=keyword-search]')
  .clear()
  .type(keyword);

  cy.get('[data-testid=apply-filter-btn]')
  .click();

  cy.wait(1000);

  cy.finishedLoadingAnimation();

})

Cypress.Commands.add('doDragIntoElement', 
  {prevSubject: 'element',},
  (sourceSelector, targetSelector, options) => {
      const dataTransfer = new DndSimulatorDataTransfer();
      const opts = {
        offsetX: 50,
        offsetY: 50,
        ...(options || {})
      };        
                  
      cy.wrap(sourceSelector.get(0))
        .trigger('dragstart', { dataTransfer, })
        .trigger('drag', {});
    
      cy.get(targetSelector).then($el => {
        const {
          x,
          y,
        } = $el.get(0).getBoundingClientRect();
      
      cy.wrap($el.get(0))
          .trigger('dragover', { dataTransfer, })
          .trigger('drop', {
            dataTransfer,
            clientX: x + opts.offsetX,
            clientY: y + opts.offsetY,
            
          }) 
          .trigger('dragend', {
            dataTransfer,
          });
      })
});

Cypress.Commands.add('doDrawLineIntoElement', 
  {prevSubject: 'element',},
  (sourceSelector, targetSelector, options) => {
      const dataTransfer = new DndSimulatorDataTransfer();
      const opts = {
        offsetX: 50,
        offsetY: 50,
        ...(options || {})
      };   

      cy.get('body').type('{alt}', {release: false}) ; 

      cy.wrap(sourceSelector.get(0))
        .trigger('dragstart', { dataTransfer, })
        .trigger('drag', {});
    
      cy.get(targetSelector).then($el => {
        const {
          x,
          y,
        } = $el.get(0).getBoundingClientRect();
      
      cy.get('body').type('{alt}', {release: false}) ;
      
      cy.wrap($el.get(0))
          .trigger('dragover', { dataTransfer, })
          .trigger('drop', {
            dataTransfer,
            clientX: x + opts.offsetX,
            clientY: y + opts.offsetY,
            
          }) 
          .trigger('dragend', {
            dataTransfer,
          });
      })
});


Cypress.Commands.add("parseRotateElement", (a) => {
  cy.log(a);
  var b={};
  for (var i in a = a.match(/(\w+\((\-?\d+\.?\d*e?\-?\d*,?)+\))+/g))
  {
      var c = a[i].match(/[\w\.\-]+/g);
      b[c.shift()] = c;
  }
  return b;

})

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
