describe('Smoke Test', () => {
  it('Visit the root page', () => {
    cy.visit('/');

    cy.get('main h1').should('have.text', 'Matt Travi');
  });

  it('should provide primary navigation', () => {
    cy.visit('/');

    cy.get('header button').click();

    cy.get('div.MuiDrawer-root').should('be.visible');
  });
});
