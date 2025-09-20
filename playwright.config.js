<<<<<<< HEAD
import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 30 * 1000,
  retries: 1,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }]
  ],
  use: {
    baseURL: 'https://playwright.dev',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
  },
  projects: [
    { name: 'Chromium', use: { browserName: 'chromium' } },
    { name: 'Firefox',  use: { browserName: 'firefox'  } },
    { name: 'WebKit',   use: { browserName: 'webkit'   } }
  ]
});
=======
"import { defineConfig } from '@playwright/test';\n\nexport default defineConfig({\n  timeout: 30 * 1000,\n  retries: 1,\n  reporter: [\n    ['list'],\n    ['html', { outputFolder: 'playwright-report', open: 'never' }]\n  ],\n  use: {\n    baseURL: 'https://playwright.dev',\n    headless: true,\n    screenshot: 'only-on-failure',\n    video: 'retain-on-failure',\n    trace: 'on-first-retry'\n  },\n  projects: [\n    { name: 'Chromium', use: { browserName: 'chromium' } },\n    { name: 'Firefox',  use: { browserName: 'firefox'  } },\n    { name: 'WebKit',   use: { browserName: 'webkit'   } }\n  ]\n});" 
>>>>>>> 8ced76316a6d637d3c34bab92b88098673f1d7c3
