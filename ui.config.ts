import { chromium, PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    timeout: 60000,
    retries: 1,
    testDir: './tests',
    use: {
        baseURL: `https://thinking-tester-contact-list.herokuapp.com/`,
        headless: true,
        viewport: { width: 1920, height: 1080 },
        actionTimeout: 10000,
        ignoreHTTPSErrors: true,
        trace: 'retain-on-failure',
        screenshot: 'on-first-failure',
        
    },
    reporter:[
        [
            'allure-playwright', 
            {
                detail: true,
                outputFolder: 'allure-results',
                suiteTitle: true,
            }
        ]],
    projects: [
    {
        name: 'chrome',
        use: { browserName: 'chromium' },
    },
    {
        name: 'firefox',
        use: { browserName: 'firefox' },
    },
    {
        name: 'webkit',
        use: { browserName: 'webkit' },
    },
    ]
};

export default config;