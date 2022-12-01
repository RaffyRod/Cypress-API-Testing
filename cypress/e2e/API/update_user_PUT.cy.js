describe('Update using PUT', () => {
  it('update user from API using PUT', () => {
    cy.request({ // cypress request using the PUT http method
      method: 'PUT',
      url: Cypress.env('baseUrl') + '/api/users/2', // baseUrl = API_url coming from the cypress.config.js env
      body:
          {"name":"morpheus",
            "job":"zion resident"}
    }).then((response) => {
      expect(response.status).to.be.equal(200); // assertion to validate that the response includes status code 200
      expect(response.body.job).to.be.equal('zion resident');
    });
  });
});