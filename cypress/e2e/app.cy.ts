describe('Navigation', () => {
  it('should navigate to the test page', () => {
    cy.visit('http://localhost:3000/');
    cy.get('span').contains('Test Page').click();
    cy.url().should('include', '/testpage');
    cy.get('p').contains('Test Page');
  });
});
