/* Retrieve a list of users and verify that there is at a minimum one user whose name
starts with the letter C. The test fails either when a response is not returned, or no 
usernames match the set criteria. */

describe('User list API test', () => {
    it('Should retrieve a list of users and check if a user starts with C, failed if no response or no C user', () => {
      // request command makes an HTTP GET request to the specified URL.
      cy.request('GET', 'https://gorest.co.in/public/v2/users')
        .should((response) => {
            
            expect(response.status).to.eq(200); // Check HTTP response
            const users = response.body; // Extract the list of users from the response.

            // `find` method searches for a user whose name starts with 'C'.
            const userWithC = users.find((user) => user.name.startsWith('C'));
            // Check that such a user exists.
            expect(userWithC).to.exist;
        });
    });
});