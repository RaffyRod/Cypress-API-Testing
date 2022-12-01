describe('Register User unsucessful', () => {
  it('Register Unsuccessful', () => {
    cy.request({ // cypress request using the http POST method
      method: 'POST',
      url: Cypress.env('baseUrl') + '/api/register',
      failOnStatusCode: false, // disable this fail in order to continue negative testing
      body:
      {
        "email":"sydney@fife" // request payload

      }
    }).then((response) => {
      expect(response.status).to.be.equal(400); // assertion to validate that status code is equal to 400
      expect(response.body).to.have.property('error');
      expect(response.body).not.to.be.null; // assertion to validate that response body is not empty
    });
  });
});