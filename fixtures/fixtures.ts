import { test as base } from "@playwright/test";
import { HomePage } from "../pages/home.page";
import { CartPage } from "../pages/cart.page";
import { AuthorizationPage } from "../pages/authorization.page";

interface MyFixtures {
    homePage: HomePage;
    cartPage: CartPage;
    authorizationPage: AuthorizationPage;
};

export const test = base.extend< MyFixtures >({
    
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },

    cartPage: async ({ page }, use) => {
        const cartPage = new CartPage(page);
        await use(cartPage);
    },

    authorizationPage: async ({ page }, use) => {
        const authorizationPage = new AuthorizationPage(page);
        await use(authorizationPage);
    },

});
export { expect } from '@playwright/test';