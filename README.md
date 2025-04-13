## Installation

Clone the repository and install dependencies:

```
git clone https://github.com/dmbaikalov/contact-list.git
cd contact-list
npm install
```

## Running Tests

### Local Execution

Run Playwright tests locally:

```
        npm run tests:ui:chromium        # headless mode only in chromium
        npm run tests:ui:firefox         # headless mode only in firefox
        npm run tests:ui:webkit          # headless mode only in webkit
        npm run tests:ui:all             # headless mode in all browsers
        npm run tests:ui:chrome:visual   # headed mode in chromium
        npm run tests:ui:firefox:visual  # headed mode in firefox
        npm run tests:ui:webkit:visual   # headed mode in webkit
        npm run report                   # generate allure report

```

## Linting & Formatting

Ensure your code follows the project's standards by running:

```
npm run lint
npm run format
```

## Structure

```
interview-ui-framework-showcase-main/
│── tests/               # Playwright test suits and test cases
│── pages/               # POM files
│── utils/               # Utility functions
│── playwright.config.ts # Default pw configuration
│── ui.config.ts         # Custom config to run specifically UI tests
│── Dockerfile           # Dockerfile
│── docker-compose.yml   # Docker Compose configuration
│── package.json         # Dependencies and scripts
│── .eslintrc.js         # ESLint configuration
│── .prettierrc          # Prettier configuration
```
