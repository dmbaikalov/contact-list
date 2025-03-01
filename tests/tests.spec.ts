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
        { tag: ["@smoke"] },
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
        { tag: ["@smoke"] },
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
        { tag: ["@smoke"] },
        async ({ loginPage, contactsPage }) => {
            await contactsPage.open();
            await contactsPage.isOpen();
            await contactsPage.clickLogOutButton();
            await loginPage.wait(1000);
            await loginPage.isOpen(`${process.env.BASE_URL}`);
        },
    );
});

test.describe.parallel("Website elements is visible", async () => {
    test(
        "Login page elements is visible",
        { tag: ["@visibility"] },
        async ({ page, loginPage }) => {
            await page.video();
            await loginPage.open();
            await loginPage.isOpen();
            loginPage.allPageElements.forEach((el) =>
                loginPage.isElementsVisible(el),
            );
        },
    );

    test(
        "Sign Up page elements is visible",
        { tag: ["@visibility"] },
        async ({ signUpPage }) => {
            await signUpPage.open();
            await signUpPage.isOpen();
            signUpPage.allPageElements.forEach((el) =>
                signUpPage.isElementsVisible(el),
            );
        },
    );

    test(
        "Contacts page elements is visible",
        { tag: ["@visibility"] },
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
            contactsPage.allPageElements.forEach((el) =>
                contactsPage.isElementsVisible(el),
            );
        },
    );

    test(
        "Add Contact page elements is visible",
        { tag: ["@visibility"] },
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
            addContactPage.allPageElements.forEach((el) =>
                addContactPage.isElementsVisible(el),
            );
        },
    );
});
