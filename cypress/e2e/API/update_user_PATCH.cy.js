describe('Update using PATCH', () => {
  it('update user from API using PATCH', () => {
    cy.request({ // cypress request using the PATCH http method
      method: 'PATCH',
      url: Cypress.env('baseUrl') + '/api/users/2', // baseUrl = API_url coming from the cypress.config.js env
      body:
          {
            "name":"morpheus",
            "job":"zion resident"
          }
    }).then((response) => {
      expect(response.status).to.be.equal(200);
      expect(response.body.job).to.be.equal('zion resident'); // assertion to validate that the response body includes job = zion resident
    });
  })
});