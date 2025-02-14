import { PlaywrightTestConfig } from "@playwright/test";
import dotenv from 'dotenv'; dotenv.config();

const config: PlaywrightTestConfig = {
    timeout: 60000,
    retries: process.env.CI ? 2 : 0,
    testDir: './tests',
    workers: process.env.CI ? 4 : undefined,
    
    use: {
        baseURL: `${process.env.BASE_URL}`,
        headless: true,
        viewport: { width: 1920, height: 1080 },
        actionTimeout: 10000,
        ignoreHTTPSErrors: true,
        trace: 'on',
        screenshot: 'on-first-failure',
        
    },
    reporter:[
        ['allure-playwright', 
            {
                detail: true,
                suiteTitle: true,
                open: "never",
            }
        ] 
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