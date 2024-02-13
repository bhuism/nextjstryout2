describe('Navigation', () => {
  it('should show login button', () => {
    cy.visit('http://localhost:3000/');
    cy.get('button').contains('Login');

    // cy.url().should('include', '/testpage');
    // cy.get('p').contains('Test Page');
  });
});
