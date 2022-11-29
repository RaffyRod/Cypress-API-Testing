describe('List Resource/Unknown', () => {
  it('List Resource/Unknown from API', () => {
    cy.request(Cypress.env('baseUrl') + '/api/Unknown')
      .then((response) => {
        expect(response.status).to.be.equal(200);
        expect(response.body).to.have.property('total_pages'); // assertion to validate that the response body includes the total_pages property
        expect(response.body).not.to.be.null;
      });
  })
})