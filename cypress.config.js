const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/tests',
    viewportWidth: 1280,
    viewportHeight: 1024
  },
});
