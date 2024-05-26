const { defineConfig } = require("cypress");
require('dotenv').config()

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  chromeWebSecurity: false,
  defaultCommandTimeout: 4 * 1000,
  // retries: 2,

  env : {
    SITE_URL: process.env.UI_URL,
    UI_USERNAME: process.env.UI_USERNAME,
    UI_PASSWORD: process.env.UI_PASSWORD,
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
    baseUrl: 'https://techglobal-training.com',
    video: true
  },
});
