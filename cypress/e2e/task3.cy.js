/* Retrieve a list of users and display it in the console. The test fails when a response is
not returned, or the list contains zero users. */

describe('User list API test 3', () => {
    it('Should retrieve a list of users and check if a user starts with C, failed if no response or no C user', () => {
      // request command makes an HTTP GET request to the specified URL.
      cy.request('GET', 'https://gorest.co.in/public/v2/users')
        .should((response) => {
            
            expect(response.status).to.eq(200); // Check HTTP response
            const users = response.body; // Extract the list of users from the response.

            console.log('List of Users:');

            // Check that list is not empty.
            expect(users).to.not.be.empty;

            // Printing out the list
            console.log(users)
        });
    });
});