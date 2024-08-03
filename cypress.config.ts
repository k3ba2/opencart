import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    chromeWebSecurity: false,
    baseUrl: 'https://demo.opencart.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      console.log(on, config);
    },
  },
});