Cypress.Commands.add('checkStatusCode', (method, path, statusCode) =>
    cy.request(method, path).should((response) => {
        expect(response.status).to.eq(statusCode)
    }));
