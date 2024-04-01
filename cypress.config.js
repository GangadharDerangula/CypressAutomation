const { defineConfig } = require("cypress");
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Mocha Aswesome Report Test-suite',
    reportDir: 'cypress/results',
    embeddedScreenshots: true,
    videoOnFailOnly: true,
    reportFilename : "Moha report",
    inlineAssets: true,
    saveAllAttempts: false,
    autoOpen: true,
    overwrite: false

  },
  e2e: {
    "baseUrl" : "https://opensource-demo.orangehrmlive.com",
    "project1" : {
      "baseUrl" : "https://automationexercise.com",

    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
