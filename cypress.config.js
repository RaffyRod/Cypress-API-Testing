const { defineConfig } = require("cypress");

module.exports = defineConfig({

  env:{
    baseUrl: 'https://reqres.in',
    usersEnd: '/api/users?page=2'

  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
