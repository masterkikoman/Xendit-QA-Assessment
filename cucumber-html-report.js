const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./cypress/cucumberReports",
  reportPath: "./cypress/cucumberReports/cucumber-html-report.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "60",
    },
    device: "Local test machine",
    platform: {
      name: "ubuntu",
      version: "16.04",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Xendit-QA-Assessment" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value: "April 7th 2023, 02:30 AM EST" },
      { label: "Execution End Time", value: "April 7th 2023, 04:30 AM EST" },
    ],
  },
});
