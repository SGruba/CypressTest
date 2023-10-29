const { defineConfig } = require("cypress");


module.exports = defineConfig({
  // video: true,
  env: {
    userUrl: 'https://gorest.co.in/public/v2/users',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

