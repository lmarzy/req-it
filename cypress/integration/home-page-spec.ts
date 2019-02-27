describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('clicking "About" navigates to a new url', () => {
    cy.contains('About').click();

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/about');
  });

  it('clicking "Experience" navigates to a new url', () => {
    cy.contains('Experience').click();

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/experience');
  });

  it('clicking "Technology" navigates to a new url', () => {
    cy.contains('Technology').click();

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/technology');
  });
});
