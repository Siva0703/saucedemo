const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "chromeWebSecurity": false,
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: "https://www.saucedemo.com",
  },
  video: false
});
