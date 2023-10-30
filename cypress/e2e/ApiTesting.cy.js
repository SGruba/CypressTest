// Combined Tasks 1,2 and 3

describe('User list API testing', () => {
    
    const userUrl = Cypress.env('userUrl');
    let users;

    beforeEach(() => {
        // Before each test, make the GET request and store the response in the users variable.
        cy.request('GET', userUrl).then((response) => {
            expect(response.status).to.eq(200); // Check that the HTTP status code is 200.
            users = response.body;
        });
    });

    // TEST 1:
    it('Should retrieve a list of users, failed if no response or empty list', () => {
        // Check that list of users is not empty.
        expect(users).to.not.be.empty;
    });

    // TEST 2:
    it('Should retrieve a list of users and check if a user starts with C, failed if no response or no C user', () => {

        expect(users).to.not.be.empty;
  
        /* Commented below is a basic version of search where only first symbol is getting checked:
        const userWithC = users.find((user) => user.name.startsWith('C'));
        */

        // This will check every word in Name, so that titles don't intervene with the check.
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

    // TEST 3:
    it('Should retrieve a list of users, than print it out in console. Failed if no response or empty list', () => {

        expect(users).to.not.be.empty;
    
        console.log('List of Users:');
      
        // Printing out the list in the browser console
        console.log(users)

        // Printing out the list, per-user, in the browser console
        var num = 1;
        console.log('List of Users:');
        users.forEach((user) => {
          console.log(num++, user.name);
        });
    });
});