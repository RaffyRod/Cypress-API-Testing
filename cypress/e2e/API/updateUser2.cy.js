describe('Update using PATCH', () => {
  it('update user from API using PATCH', () => {
    cy.request({
      method: 'PATCH',
      url: Cypress.env('baseUrl') + '/api/users/2',
      body:
          {
            "name":"morpheus",
            "job":"zion resident"
          }
    }).then((response) => {
      expect(response.status).to.be.equal(200);
      expect(response.body.job).to.be.equal('zion resident');
    });
  })
});