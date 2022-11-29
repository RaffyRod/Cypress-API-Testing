describe('Register User', () => {
  it('Register Successful', () => {
    cy.request({
      method: 'POST',
      url: Cypress.env('baseUrl') + '/api/register', // basedURL = API_url coming from cypress.config.js env
      body:
      {
        "email": "eve.holt@reqres.in", // request payload
        "password": "pistol"
      }
    }).then((response) => {
      expect(response.status).to.be.equal(200); // assertion to validate that status code is equal to 200
      expect(response.body).to.have.property('token'); // assertion to validate that response is including the token property
      expect(response.body).not.to.be.null; // assertion to validate that response body is not empty
    });
  })
});