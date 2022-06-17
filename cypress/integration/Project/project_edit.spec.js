import {
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
} from './project_edit.method';



describe('Retrieve Project details', function () {
         after(()=> {
        cy.get('[class="sslid-account-label"]')
        .click()
        
        cy.get('[href="/account/dologout"]').click()

    })
       beforeEach(() => {        
            // Handle login on DEV or Netifly on Showcase
            cy.session('user', ()=>{
                cy.task('deleteFile','cookies.json');
                cy.setCookies(); 
                
              })
              cy.openTestingEnvironment("projects.html#/","projects#/active") ;
              cy.wait(Cypress.env("waitForLoading"));
              
              
        })
        
    
      it('Check user able to retrieve all project metadata ', function () {   
            // TODO : 
            // SET BACK TIME CHECK  at 10:25 pm once we know how to handle the timezone  
            getFirstProjectLink();
            checkRetrieveAllData();
            // go to next scenario : check validation
            clearAllData();
            clickSaveChanges();
            checkRequiredFieldsOnProjectMetadata();
      }) 

      if( Cypress.env('runProjectTest'))
      {
          it('Check user able to update project details', function () {  

                  cy.filterProjectByNameAndStatus('Automation Test','Created')
                  clickFirstResult();
                  goToProjectDetailsPage();    
                
                updateAboutTheBuild();
                filloutBuildLocation();
                updatePrimaryContactDetails();
                clickAddAdditionalContact();
                updateSecondaryContactDetails();
                fillOutPreferencesDetails();
                clickSaveChanges();
                checkUpdateProcessSuccess();
                goToProjectListingPage();
                clickFirstResult();
                //goToProjectDetailsPage();  
                //checkRetrieveUpdatedAllData();
          }) 
    }
    

})
