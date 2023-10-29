// Combined Tasks 1,2 and 3

describe('User list API testing', () => {
    // TEST 1: Retrieve a list of users and verify that at least one user is being returned.
    it('Should retrieve a list of users, failed if no response or empty list', () => {

      cy.request('GET', 'https://gorest.co.in/public/v2/users')
        .should((response) => {
            expect(response.status).to.eq(200); // Check that the HTTP status code is 200.
            
            // Check that the response body contains a non-empty `data` property, which represents the list of users.
            expect(response.body).to.not.be.empty;
        });
    });

    // TEST 2: Retrieve a list of users and verify that there is at least one user whose name starts with 'C'.
    it('Should retrieve a list of users and check if a user starts with C, failed if no response or no C user', () => {

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

    // TEST 3: Retrieve a list of users and display it in the console.
    it('Should retrieve a list of users, than print it out in console. Failed if no response or empty list', () => {

      cy.request('GET', 'https://gorest.co.in/public/v2/users')
        .should((response) => {
            
            expect(response.status).to.eq(200); // Check HTTP response
            const users = response.body; // Extract the list of users from the response.
  
            console.log('List of Users:');
  
            // Check that list is not empty.
            expect(users).to.not.be.empty;
  
            // Printing out the list in the browser console
            console.log(users)
        });
    });
});