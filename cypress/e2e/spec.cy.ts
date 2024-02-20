describe('template spec', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4200/');
    cy.injectAxe();
  })

  it('passes', () => {
    cy.checkPageA11y("http://localhost:4200/");
    //cy.checkA11y();
  })
})