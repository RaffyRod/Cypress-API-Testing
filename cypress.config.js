const { defineConfig } = require("cypress");

module.exports = defineConfig({

  video: false,
  env:{
    baseUrl: 'https://reqres.in',
    usersEnd: '/api/users?page=2'

  },reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    reportTitle: 'API testing report',
    reportPageTitle: 'API Test Automation Results',
    reportFilename: 'apiReports',
    embeddedScreenshots: true,
    charts: true,
    inline: true,
    overwrite: false,
    autoOpen: false,
    showPending: false,
    showSkipped: true,
    timestamp: "longDate",
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
