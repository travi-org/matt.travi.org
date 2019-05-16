describe('Smoke Test', () => {
  it('Visit the root page', () => {
    cy.visit('/');
    cy.waitForRouteChange();
    expect(true).to.equal(true);
  });
});
