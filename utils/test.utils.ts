import {  randFirstName, randLastName, randEmail, randPassword } from "@ngneat/falso"
import { Page } from "@playwright/test";

interface SignUpData {
    firstName: string,
    lastName: string,
    email: string,
    password: string | any
};



export const signUpData: SignUpData = {
  firstName: randFirstName(),
  lastName: randLastName(),
  email: randEmail(),
  password: randPassword()
    };

export const userLoginData: { email: string, password: string} = {
  email: signUpData.email,
  password: signUpData.password
}

export async function createScreenshotOnFailure(page: Page, testTitle: string) {
  const sanitizedTitle = testTitle.replace(/[^a-zA-Z0-9]/g, '_');
  const screenshotPath = `./screenshots/${sanitizedTitle}.png`;
  await page.screenshot({ path: screenshotPath });
  console.log(`Screenshot saved at: ${screenshotPath}`);
};

