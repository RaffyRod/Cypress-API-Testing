describe('Login user Unsuccessful', () => {
  it('Login Unsuccessful', () => {
    cy.request({
      method: 'POST',
      url: Cypress.env('baseUrl') + '/api/login',
      failOnStatusCode: false,
      body:
      {
        "email":"peter@klaven"
      }
    }).then((response) => {
      expect(response.status).to.be.equal(400);
      expect(response.body).to.have.property('error');
      expect(response.body).not.to.be.null;
    });
  })
});