// Combined Tasks 1,2 and 3

describe('User list API testing', () => {
    
    const userUrl = Cypress.env('userUrl');

    // TEST 1: Retrieve a list of users and verify that at least one user is being returned.
    it('Should retrieve a list of users, failed if no response or empty list', () => {

        cy.request('GET', userUrl)
          .should((response) => {
            
            expect(response.status).to.eq(200); // Check that the HTTP status code is 200.
            
            // Check that the response body contains a non-empty `data` property, which represents the list of users.
            expect(response.body).to.not.be.empty;
        });
    });

    // TEST 2: Retrieve a list of users and verify that there is at least one user whose name starts with 'C'.
    it('Should retrieve a list of users and check if a user starts with C, failed if no response or no C user', () => {

        cy.request('GET', userUrl)
          .should((response) => {
            
            expect(response.status).to.eq(200); // Check HTTP response
            const users = response.body; // Extract the list of users from the response.

            // Check that list is not empty.
            expect(users).to.not.be.empty;
  
            /* This is a basic version of search where only first symbol is getting checked:
            const userWithC = users.find((user) => user.name.startsWith('C'));
            */

            /* This is a more advanced version where each word is checked. 
            Now, I am aware this system might misfire on a title or something else, but it
            should catch any names that are written after titles.
            */
            const wordStartsWithC = (str) => {
                const words = str.split(' ');
                return words.some(word => /^C/i.test(word));
            };
            // Check if any word in the name starts with 'C'
            const userWithC = users.find((user) => wordStartsWithC(user.name));
                    
            if (userWithC) {
              console.log("At least one user with a starting 'C' in their name, for example: ", userWithC);
            } else {
              console.log("No users with a name starting with 'C'");
            }

            // Check that such a user exists.
            expect(userWithC).to.exist;
          });
    });

    // TEST 3: Retrieve a list of users and display it in the console.
    it('Should retrieve a list of users, than print it out in console. Failed if no response or empty list', () => {

        cy.request('GET', userUrl)
          .should((response) => {
             
            expect(response.status).to.eq(200); // Check HTTP response
            const users = response.body; // Extract the list of users from the response.
      
            console.log('List of Users:');
      
            // Check that list is not empty.
            expect(users).to.not.be.empty;
      
            // Printing out the list in the browser console
            console.log(users)

            // Printing out the list, per-user
            var num = 1;
            console.log('List of Users:');
            users.forEach((user) => {
              console.log(num++, user.name);
            });
          });
    });
});