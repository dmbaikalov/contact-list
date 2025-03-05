import { expect, test } from "../fixtures/fixtures";
import { createScreenshotOnFailure } from "../utils/screenshots.utils";

test.afterEach(async ({ page }) => {
    if (test.info().status === "failed") {
        await createScreenshotOnFailure(page, test.info().title);
    }
});

test.describe.parallel("End to end tests", async () => {
    test(
        "User is able to Add a Contact on Contact Page",
        { tag: ["@regression"] },
        async ({ loginPage, signUpPage, contactsPage, addContactPage }) => {
            await loginPage.open();
            await loginPage.clickSignupButton();
            await signUpPage.wait(1000);
            await signUpPage.fillingRequiredFields();
            await signUpPage.clickSignUpButton();
            await contactsPage.clickAddNewContactButton();
            await addContactPage.fillRequiredFields();
            await addContactPage.clickSubmitButton();
            await contactsPage.wait(1000);
            await contactsPage.isOpen();
        },
    );

    test(
        "User is able to Sign Up",
        { tag: ["@smoke", "@regression"] },
        async ({ loginPage, signUpPage, contactsPage }) => {
            await loginPage.open();
            await loginPage.clickSignupButton();
            await signUpPage.fillingRequiredFields();
            await signUpPage.clickSignUpButton();
            await loginPage.wait(1000);
            await contactsPage.isOpen();
        },
    );

    test(
        "User is able to Login",
        { tag: ["@smoke", "@regression"] },
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
        { tag: ["@smoke", "@regression"] },
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
        { tag: ["@visibility", "@regression"] },
        async ({ loginPage }) => {
            await loginPage.open();
            await loginPage.isOpen();
            loginPage.allPageElements.forEach((el) =>
                loginPage.isElementsVisible(el),
            );
        },
    );

    test(
        "Sign Up page elements is visible",
        { tag: ["@visibility", "@regression"] },
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
        { tag: ["@visibility", "@regression"] },
        async ({ contactsPage }) => {
            await contactsPage.open();
            await contactsPage.isOpen();
            contactsPage.allPageElements.forEach((el) =>
                contactsPage.isElementsVisible(el),
            );
        },
    );

    test(
        "Add Contact page elements is visible",
        { tag: ["@visibility", "@regression"] },
        async ({ addContactPage }) => {
            await addContactPage.open();
            await addContactPage.isOpen();
            addContactPage.allPageElements.forEach((el) =>
                addContactPage.isElementsVisible(el),
            );
        },
    );
});
