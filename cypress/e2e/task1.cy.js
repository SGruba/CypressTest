/* Retrieve a list of users and verify that at least one user 
is being returned. The test failswhen a response is not 
returned, or the list contains zero users. */

describe('User list API test', () => {
    it('Should retrieve a list of users, failed if no response or empty list', () => {
      // request command makes an HTTP GET request to the specified URL.
      cy.request('GET', 'https://gorest.co.in/public-api/users')
        .should((response) => {
          // Inside this `.should` block, we perform assertions on the HTTP response.
          
          // Check that the HTTP status code is 200.
          expect(response.status).to.eq(200);
          
          // Check that the response body contains a non-empty `data` property, which represents the list of users.
          expect(response.body.data).to.not.be.empty;
        });
    });
});