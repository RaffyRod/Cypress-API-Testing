describe('Register User', () => {
  it('Register Successful', () => {
    cy.request({
      method: 'POST',
      url: Cypress.env('baseUrl') + '/api/register',
      body:
      {
        "email": "eve.holt@reqres.in",
        "password": "pistol"
      }
    }).then((response) => {
      expect(response.status).to.be.equal(200);
      expect(response.body).to.have.property('token');
      expect(response.body).not.to.be.null;
    });
  })
});