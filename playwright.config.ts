import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv'; dotenv.config();

export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 5 : 5,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter:[
    [
        'allure-playwright', 
        {
            detail: true,
            outputFolder: 'allure-results',
            suiteTitle: true,
        }
    ]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    baseURL: `${process.env.BASE_URL}`,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'retain-on-failure',
  },

  /* Configure projects for major browsers */
  projects: [

    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'],
        // storageState: process.env.UNAUTHORIZED_MODE === 'true' ? undefined : 'playwright/.auth/user.json'
       },
      
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'],
        // storageState: process.env.UNAUTHORIZED_MODE === 'true' ? undefined : 'playwright/.auth/user.json'
       },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'],
        // storageState: process.env.UNAUTHORIZED_MODE === 'true' ? undefined : 'playwright/.auth/user.json'
       },
      
    },

    // {
    //   name: 'Unauthorized Chromium',
    //   use: { ...devices['Desktop Chrome'],
    //     storageState: process.env.UNAUTHORIZED_MODE === 'true' ? undefined : 'playwright/.auth/user.json' 
    //    },
      
    // }

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
