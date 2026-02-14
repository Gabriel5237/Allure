const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL || "http://localhost:8080",

    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    env: {
  allure: true
}

  },
});





