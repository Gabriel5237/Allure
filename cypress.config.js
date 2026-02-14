const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL || "http://localhost:3000",
    
    setupNodeEvents(on, config) {
      require("@shelex/cypress-allure-plugin/writer")(on, config);
      return config;
    }
  }
});



