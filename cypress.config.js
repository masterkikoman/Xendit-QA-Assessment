const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));
  // const getCompareSnapshotsPlugin = require("cypress-image-diff-js/dist/plugin");
  const getCompareSnapshotsPlugin = require("cypress-visual-regression/dist/plugin");
  getCompareSnapshotsPlugin(on, config);
  return config;
}

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  env: {
    url: "https://www.online-calculator.com/full-screen-calculator/",
  },
  projectId: "63jick",
  video: false,
  screenshotOnRunFailure: true,
  e2e: {
    hideXHRInCommandLog: true,
    chromeWebSecurity: false,
    blockHosts: "https://www.online-calculator.com/full-screen-calculator/",
    setupNodeEvents,
    specPattern: "cypress/integration/tests/*.feature",
    screenshotsFolder: "./cypress/snapshots/actual",
    trashAssetsBeforeRuns: true,
  },
});
