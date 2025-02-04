import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { SignUpPage } from "../pages/signup.page";
import { ContactsPage } from "../pages/contacts.page"
import { AddContactPage } from "../pages/add.contact.page"

interface MyFixtures {
    loginPage: LoginPage;
    signUpPage: SignUpPage;
    contactsPage: ContactsPage;
    addContactPage: AddContactPage;
};

export const test = base.extend< MyFixtures >({
    
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },

    signUpPage: async ({ page }, use) => {
        const signUpPage = new SignUpPage(page);
        await use(signUpPage);
    },

    contactsPage: async ({ page }, use) => {
        const contactsPage = new ContactsPage(page);
        await use(contactsPage);
    },

    addContactPage: async ({ page }, use) => {
        const addContactPage = new AddContactPage(page);
        await use(addContactPage);
    },

});
export { expect } from '@playwright/test';