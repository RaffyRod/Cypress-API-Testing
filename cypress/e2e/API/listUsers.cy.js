describe('First Get for API', () => {
  it('List users from API', () => {
    cy.request(Cypress.env('baseUrl') + '/api/users?page=2')
      .then((response) => {
        expect(response.status).to.be.equal(200);
        expect(response.body).not.to.be.null;
        cy.log('The amount of pages brought by this request is: '+ response.body.page);
      });
  })
})