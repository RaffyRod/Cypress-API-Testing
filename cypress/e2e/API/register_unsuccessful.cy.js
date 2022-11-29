describe('Register User unsucessful', () => {
  it('Register Unsuccessful', () => {
    cy.request({
      method: 'POST',
      url: Cypress.env('baseUrl') + '/api/register',
      failOnStatusCode: false,
      body:
      {
        "email":"sydney@fife"

      }
    }).then((response) => {
      expect(response.status).to.be.equal(400);
      expect(response.body).to.have.property('error');
      expect(response.body).not.to.be.null;
    });
  })
});