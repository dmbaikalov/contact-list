import { test } from "../fixtures/fixtures";
import { createScreenshotOnFailure } from "../utils/screenshots.utils";

test.afterEach(async ({ page }) => {
    if (test.info().status === "failed") {
        await createScreenshotOnFailure(page, test.info().title);
    }
});

test.describe.serial("User is able to Sign Up,Login and Logout", async () => {
    test(
        "User is able to Sign Up",
        { tag: "@smoke" },
        async ({ loginPage, signUpPage, contactsPage }) => {
            await loginPage.open();
            await loginPage.clickSignupButton();
            await signUpPage.typeFirstName();
            await signUpPage.typeLastName();
            await signUpPage.typeEmail();
            await signUpPage.typePassword();
            await signUpPage.clickSignUpButton();
            await loginPage.wait(1000);
            await contactsPage.isOpen();
        },
    );

    test(
        "User is able to Login",
        { tag: "@smoke" },
        async ({ loginPage, contactsPage }) => {
            await loginPage.open();
            await loginPage.isOpen();
            await loginPage.typeUserEmail();
            await loginPage.typeUserPassword();
            await loginPage.clickSubmitButton();
            await loginPage.wait(1000);
            await contactsPage.isOpen();
        },
    );

    test(
        "User is able to Logout",
        { tag: "@smoke" },
        async ({ loginPage, contactsPage }) => {
            await contactsPage.open();
            await contactsPage.isOpen();
            await contactsPage.clickLogOutButton();
            await loginPage.wait(1000);
            await loginPage.isOpen(process.env.BASE_URL);
        },
    );
});

test.describe.parallel("Website elements is visible", async () => {
    test(
        "Login page elements is visible",
        { tag: "@functional" },
        async ({ loginPage }) => {
            await loginPage.open();
            await loginPage.isOpen();
            for (const el of loginPage.allPageElements) {
                await loginPage.isElementsVisible(el);
            }
        },
    );

    test(
        "Sign Up page elements is visible",
        { tag: "@functional" },
        async ({ signUpPage }) => {
            await signUpPage.open();
            await signUpPage.isOpen();
            for (const el of signUpPage.allPageElements) {
                await signUpPage.isElementsVisible(el);
            }
        },
    );

    test(
        "Contacts page elements is visible",
        { tag: "@functional" },
        async ({ loginPage, signUpPage, contactsPage }) => {
            await loginPage.open();
            await loginPage.clickSignupButton();
            await signUpPage.typeFirstName();
            await signUpPage.typeLastName();
            await signUpPage.typeEmail();
            await signUpPage.typePassword();
            await signUpPage.clickSignUpButton();
            await signUpPage.wait(1000);
            await contactsPage.isOpen();
            for (const el of contactsPage.allPageElements) {
                await contactsPage.isElementsVisible(el);
            }
        },
    );

    test(
        "Add Contact page elements is visible",
        { tag: "@functional" },
        async ({ loginPage, signUpPage, contactsPage, addContactPage }) => {
            await loginPage.open();
            await loginPage.clickSignupButton();
            await signUpPage.typeFirstName();
            await signUpPage.typeLastName();
            await signUpPage.typeEmail();
            await signUpPage.typePassword();
            await signUpPage.clickSignUpButton();
            await contactsPage.open();
            await contactsPage.isOpen();
            await contactsPage.clickAddNewContactButton();
            await addContactPage.isOpen();
            for (const el of addContactPage.allPageElements) {
                await addContactPage.isElementsVisible(el);
            }
        },
    );
});
