// Task 4

describe('Shopping Cart Test', function() {
    it('should navigate, login, buy an item and checkout', function() {
        /* Navigate to the site. "v1/index.html" was added to bypass certain authentication measures on 
        the demo site. "https://www.saucedemo.com" kept returning 401 Auth error.*/
        cy.visit('https://www.saucedemo.com/v1/index.html')
        
        // Step 1: Ensure the login page is loaded
        cy.get('.login_logo').should('be.visible')

        // Login
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        // Step 2: Assert we're on the products page
        cy.contains('Products').should('be.visible')

        // Step 3: Buy an item and check if cart shows it was added (chosen the first one for simplicity)
        cy.get('.btn_inventory:first').click()
        cy.get('.shopping_cart_badge').should('contain', '1')

        // Go to the cart and checkout
        cy.get('.shopping_cart_link').click()
        cy.get('.checkout_button').click()

        // Fill in checkout details
        cy.get('#first-name').type('Joe')
        cy.get('#last-name').type('Tester')
        cy.get('#postal-code').type('21000')
        cy.get('.cart_button').click()

        // Confirm checkout
        cy.get('.cart_button').click()

        // Step 4: Ensure checkout is complete
        cy.contains('THANK YOU FOR YOUR ORDER').should('be.visible')

        // Step 5: Cypress will automatically close the browser if the "run" command is used
        // "cypress run --browser chrome --headed --spec .\cypress\e2e\BuyUserStory.cy.js"
    })
})
