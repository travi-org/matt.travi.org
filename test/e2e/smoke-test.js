describe('Smoke Test', () => {
  it('Visit the root page', () => {
    cy.visit('/');

    cy.get('main h1').should('have.text', 'Matt Travi');
  });
});
