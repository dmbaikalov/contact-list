import { test } from "../fixtures/fixtures";
import { createScreenshotOnFailure } from "../utils/screenshots.utils";
import * as allure from "allure-js-commons";

test.afterEach(async ({ page }) => {
  if (test.info().status === 'failed') {
    await createScreenshotOnFailure(page, test.info().title);
    }
});

test.describe.serial('User is able to Sign Up,Login and Logout', async () => {
  test('User is able to Sign Up', async ({ loginPage, signUpPage, contactsPage }) => {
    
    await loginPage.open()
    await loginPage.clickSignupButton();
    await signUpPage.typeFirstName();
    await signUpPage.typeLastName();
    await signUpPage.typeEmail();
    await signUpPage.typePassword();
    await signUpPage.clickSignUpButton();
    await loginPage.wait(1000);
    await contactsPage.isOpen();

  });

  test('User is able to Login', async ({ loginPage, contactsPage }) => {
    await loginPage.open();
    await loginPage.isOpen();
    await loginPage.typeUserEmail();
    await loginPage.typeUserPassword();
    await loginPage.clickSubmitButton();
    await loginPage.wait(1000)
    await contactsPage.isOpen();
  });

  test('User is able to Logout', async ({ loginPage, contactsPage }) => {
    await contactsPage.open()
    await contactsPage.isOpen();
    await contactsPage.clickLogOutButton();
    await loginPage.wait(1000);
    await loginPage.isOpen(process.env.BASE_URL);
  })
})

test.describe.parallel('Website elements is visible', async () => {

  test('Login page elements is visible', async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.isOpen();
    for(const el of loginPage.allPageElements) {
      await loginPage.isElementVisible(el);
    }
  });

  test('Sign Up page elements is visible', async ({ loginPage, signUpPage }) => {
    await signUpPage.open();
    await signUpPage.isOpen();
    for(const el of signUpPage.allPageElements) {
      await signUpPage.isElementVisible(el);
    }
  });

  test('Contacts page elements is visible', async ({ loginPage, signUpPage, contactsPage }) => {
    await loginPage.open()
    await loginPage.clickSignupButton();
    await signUpPage.typeFirstName();
    await signUpPage.typeLastName();
    await signUpPage.typeEmail();
    await signUpPage.typePassword();
    await signUpPage.clickSignUpButton();
    await signUpPage.wait(1000)
    await contactsPage.isOpen();
    for(const el of contactsPage.allPageElements) {
      await contactsPage.isElementVisible(el);
    }
  });

  test('Add Contact page elements is visible', async ({ loginPage, signUpPage, contactsPage, addContactPage }) => {
    await loginPage.open()
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
    for(const el of addContactPage.allPageElements) {
      await addContactPage.isElementVisible(el);
    }
  });
});


