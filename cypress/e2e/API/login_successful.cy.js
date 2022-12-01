describe('Login user successful', () => {
  it('Login Successful', () => {
    cy.request({
      method: 'POST',
      url: Cypress.env('baseUrl') + '/api/login',
      body:
      {
        "email":"eve.holt@reqres.in",
        "password": "cityslicka"
      }
    }).then((response) => {
      expect(response.status).to.be.equal(200);
      expect(response.body).to.have.property('token');
      expect(response.body).not.to.be.null;
    });
  });
});