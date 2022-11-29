describe('First update for API', () => {
  it('update user from API using PUT', () => {
    cy.request({
      method: 'PUT',
      url: Cypress.env('baseUrl') + '/api/users/2',
      body:
          {"name":"morpheus",
            "job":"zion resident"}
    }).then((response) => {
      expect(response.status).to.be.equal(200);
      expect(response.body.job).to.be.equal('zion resident');
    });
  })
});