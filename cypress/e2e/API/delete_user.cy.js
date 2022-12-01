describe('Delete from API', () => {
  it('Delete user from API ', () => {
    cy.request({ // cypress request using the DELETE http method
      method: 'DELETE',
      url: Cypress.env('baseUrl') + '/api/users/2'
    }).then((response) => {
      expect(response.status).to.be.equal(204);
      expect(response.body).to.be.equal(''); // assertion to validate that after deleting the body is empty
    });
  });
});