import { test, expect } from "../fixtures/fixtures";
import { createScreenShotOnFailure } from "../utils/test.utils";

test.afterEach(async ({ page }) => {
  if (test.info().status === 'failed') {
    await createScreenShotOnFailure(page, test.info().title);
    }
});

test.describe.serial('User is able to Sign Up,Login and Logout', async () => {
  
  test('User is able to Sign Up', async ({ loginPage, signUpPage }) => {
    await loginPage.open()
    await loginPage.clickSignupButton();
    await signUpPage.typeFirstName();
    await signUpPage.typeLastName();
    await signUpPage.typeEmail();
    await signUpPage.typePassword();
    await signUpPage.clickSignUpButton()
  });

  test('User is able to Login', async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.isOpen();
    await loginPage.typeUserEmail();
    await loginPage.typeUserPassword();
    await loginPage.clickSubmitButton();
  });

  test('User is able to Logout', async ({ loginPage, contactsPage }) => {
    await contactsPage.open()
    await contactsPage.isOpen();
    await contactsPage.clickLogOutButton();
    await loginPage.wait(1000)
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

  test.describe.serial('Contacts page elements is visible', async () => {

    test('Signing Up a new user', async ({ loginPage, signUpPage }) => {
      await loginPage.open()
      await loginPage.clickSignupButton();
      await signUpPage.typeFirstName();
      await signUpPage.typeLastName();
      await signUpPage.typeEmail();
      await signUpPage.typePassword();
      await signUpPage.clickSignUpButton();
    });

    test('Checking page Contact page elements', async ({ contactsPage}) => {
      await contactsPage.open()
      await contactsPage.isOpen();
      for(const el of contactsPage.allPageElements) {
        await contactsPage.isElementVisible(el);
      }
    });
  });

  test.describe.serial('Contacts page elements is visible', async () => {
      
      test('SignUp a new user', async ({ loginPage, signUpPage }) => {
        await loginPage.open()
        await loginPage.clickSignupButton();
        await signUpPage.typeFirstName();
        await signUpPage.typeLastName();
        await signUpPage.typeEmail();
        await signUpPage.typePassword();
        await signUpPage.clickSignUpButton();
      });

      test('Add Contact page elements is visible', async ({ contactsPage, addContactPage }) => {
        await contactsPage.open();
        await contactsPage.isOpen();
        await contactsPage.clickAddNewContactButton();
        await addContactPage.isOpen();
        for(const el of addContactPage.allPageElements) {
          await addContactPage.isElementVisible(el);
        }
      });
  });
});

