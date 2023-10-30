// Combined Tasks 1,2 and 3

describe('User list API testing', () => {
    
    const userUrl = Cypress.env('userUrl');
    let users;

    beforeEach(() => {
        cy.request('GET', userUrl).then((response) => {
            expect(response.status).to.eq(200);
            users = response.body;
        });
    });

    // TEST 1:
    it('Should retrieve a list of users, failed if no response or empty list', () => {

        expect(users).to.not.be.empty;
    });

    // TEST 2:
    it('Should retrieve a list of users and check if a user starts with C, failed if no response or no C user', () => {

        expect(users).to.not.be.empty;
  
        /* Commented below is a basic version of search where only first symbol is getting checked:
        const userWithC = users.find((user) => user.name.startsWith('C'));
        */

        const anyWordStartsWithC = (str) => {
            const words = str.split(' ');
            return words.some(word => /^C/i.test(word));
        };
        // Check if any word in the name starts with 'C'
        const userWithC = users.find((user) => anyWordStartsWithC(user.name));
                
        if (userWithC) {
          console.log("At least one user with a starting 'C' in their name, for example: ", userWithC);
        } else {
          console.log("No users with a name starting with 'C'");
        }

        expect(userWithC).to.exist;

    });

    // TEST 3:
    it('Should retrieve a list of users, than print it out in console. Failed if no response or empty list', () => {

        expect(users).to.not.be.empty;
    
        console.log('List of Users:');
      
        console.log(users)

        // Additionally printing out the list, per-user, in the browser console
        var num = 1;
        console.log('List of Users:');
        users.forEach((user) => {
          console.log(num++, user.name);
        });
    });
});