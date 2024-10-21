describe('Demoblaze Test Suite', () => {
  before(() => {
    cy.visit('https://www.demoblaze.com/');
  });

  it('Should register a new user', () => {
    cy.get('#signin2').click();
    cy.get('#sign-username').type('testUser');
    cy.get('#sign-password').type('password123');
    cy.get('#signInModal .btn-primary').click();
    cy.get('.sweet-alert.visible').contains('Sign up successful.');
    cy.get('.sweet-alert .confirm').click();
  });

  it('Should login', () => {
    cy.get('#login2').click();
    cy.get('#loginusername').type('testUser');
    cy.get('#loginpassword').type('password123');
    cy.get('#logInModal .btn-primary').click();
    cy.get('.sweet-alert.visible').contains('Welcome testUser');
    cy.get('.sweet-alert .confirm').click();
  });

  it('Should add Samsung Galaxy S6 to the cart', () => {
    cy.get('.hrefch').contains('Samsung Galaxy S6').click();
    cy.get('.btn.btn-success.btn-lg').click();
    cy.get('#cartur').click();
    cy.get('.success').contains('Samsung Galaxy S6');
  });
});
