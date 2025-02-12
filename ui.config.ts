import { PlaywrightTestConfig } from "@playwright/test";
import dotenv from 'dotenv'; dotenv.config();

const config: PlaywrightTestConfig = {
    timeout: 60000,
    retries: process.env.CI ? 2 : 0,
    testDir: './tests',
    
    use: {
        baseURL: `${process.env.BASE_URL}`,
        headless: true,
        viewport: { width: 1920, height: 1080 },
        actionTimeout: 10000,
        ignoreHTTPSErrors: true,
        trace: 'on',
        screenshot: 'on',
        
    },
    reporter:[
        process.env.CI ? 
        ['allure-playwright', 
            {
                detail: true,
                suiteTitle: true,
                open: "never",
                outputFolder: 'playwright-results',
            }] 
        : 
        ['blob']
        ],
    projects: [
    {
        name: 'chromium',
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