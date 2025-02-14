import {  randFirstName, randLastName, randEmail, randPassword } from "@ngneat/falso"
import { promises as fs } from 'fs';
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
  };

export async function createScreenshotOnFailure(page: Page, testTitle: string) {
  const sanitizedTitle = testTitle.replace(/[^a-zA-Z0-9]/g, '_');
  const screenshotDir = './screenshots';
  const screenshotPath = `${screenshotDir}/${sanitizedTitle}.png`;

  await fs.mkdir(screenshotDir, { recursive: true });
  await page.screenshot({ path: screenshotPath });
  console.log(`Screenshot saved at: ${screenshotPath}`);
};

