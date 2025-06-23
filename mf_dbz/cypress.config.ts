// Specify the path to the custom tsconfig for Cypress
/// <reference path="./cypress.tsconfig.json" />

import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
