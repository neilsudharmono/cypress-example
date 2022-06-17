import newInvitedUser from '../../fixtures/input/invite-user'

let clickBuilderUsers =()=>{
  cy.get("[data-testid=link-UserAccounts]")
  .click();
  cy.wait(Cypress.env('waitForLoading'));
}

let clickTestBuilder =()=>{
  cy.get('[data-testid=name]')
  .contains('Test Builder For AT')
  .click();
}

let generateRandomNumber = ()=>{
  var min = 100;
  var max = 10000;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let inviteNewUser =()=>{
  cy.get('[data-testid=invite-user-btn]')
  .click()

  cy.get('[name=userRoleCode]')
  .select(newInvitedUser.userRole)

  const name= newInvitedUser.FirstName + generateRandomNumber();
  const email= generateRandomNumber() + newInvitedUser.Email ;

  cy.get('[name=firstName]')
  .type(name)

  cy.get('[name=lastName]')
  .type(newInvitedUser.LastName)

  cy.get('[name=phoneNumber]')
  .type(newInvitedUser.Phone)

  cy.get('[name=emailAddress]')
  .type(email)

  clickSaveChanges();

  cy.wait(Cypress.env('waitInviteUser'));

  checkCorrectResult(email)

}

let clickSaveChanges=()=>{
  cy.get('[data-testid=control-next]')
  .click(); 
}

let checkCorrectResult=(expected_email)=>{
  successMessageAppear();

  checkAppearOnTheList(expected_email);
}


let successMessageAppear=()=>{
  cy.get('[data-testid=notice-msg]')
  .should('contain','has been invited to')
}

let checkAppearOnTheList=(expected_email)=>{
  cy.get('[data-testid=email]')
  .should('contain',expected_email)
}

let searchUsers=(expected_email)=>{
  cy.get('[data-testid=keyword-search]')
  .type(expected_email);

  cy.get('[data-testid=apply-filter-btn]')
  .click();

  checkAppearOnTheList(expected_email);

}

let filterByActive=()=>{
  cy.get('[data-testid=toggle-dropdown]')
  .click();

  cy.get('[class=cmult-option-label-text]')
  .contains('Active Users')
  .click();

  cy.get('[data-testid=apply-filter-btn]')
  .click();

  cy.get('[data-testid=status]')
  .contains('Active')
  .should('be.visible')

}

let filterByPending=()=>{
  cy.get('[data-testid=toggle-dropdown]')
  .click();

  cy.get('[class=cmult-option-label-text]')
  .contains('Pending Users')
  .click();

  cy.get('[data-testid=apply-filter-btn]')
  .click();

  cy.get('[data-testid=status]')
  .contains('Pending')
  .should('be.visible')

}

let searchByName=()=>{

  cy.get('[data-testid=keyword-search]')
  .clear()
  .type(newInvitedUser.FirstName)

  cy.get('[data-testid=apply-filter-btn]')
  .click();

  cy.get('[data-testid=name]')
  .contains(newInvitedUser.FirstName)
  .should('be.visible')
}

let searchByEmail=()=>{

  cy.get('[data-testid=keyword-search]')
  .clear()
  .type(newInvitedUser.Email)

  cy.get('[data-testid=apply-filter-btn]')
  .click();

  cy.get('[data-testid=email]')
  .contains(newInvitedUser.Email)
  .should('be.visible')
}

export{
    clickBuilderUsers,
    clickSaveChanges,
    clickTestBuilder,
    checkCorrectResult,
    filterByActive,
    filterByPending,
    inviteNewUser,
    searchByName,
    searchByEmail
}