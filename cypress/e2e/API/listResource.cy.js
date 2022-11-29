describe('List Resource/Unknown', () => {
  it('List Resource/Unknown from API', () => {
    cy.request(Cypress.env('baseUrl') + '/api/Unknown')
      .then((response) => {
        expect(response.status).to.be.equal(200);
        expect(response.body).to.have.property('total_pages');
        expect(response.body).not.to.be.null;
        cy.log('The amount of registries brought by this request is: '+ response.body.total);
      });
  })
})