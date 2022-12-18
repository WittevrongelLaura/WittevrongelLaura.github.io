import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    
    testIsolation: false,
    
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
    },
  },
  env: {
    NODE_ENV: 'e2e',
    APP_URL: 'http://localhost:5173',
    USER:"Test",
    EMAIL: 'test@howest.be',
    FIREBASE_EMULATOR_URL: 'http://localhost:9099',
    PASSWORD: '123456',

  },
});
