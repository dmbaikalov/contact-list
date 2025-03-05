import { Locator, expect } from "@playwright/test";
import { signUpData } from "../utils/test.data.generator.utils";
import { BasePage } from "./base.page";
import { step } from "../utils/step.utils";

export class SignUpPage extends BasePage {
    public pagePath = `addUser`;
    private readonly signUpHeaderText = this.page.getByRole("heading", {
        name: "Add User",
    });
    private readonly firstNameField = this.page.getByRole("textbox", {
        name: "First Name",
    });
    private readonly lastNameField = this.page.getByRole("textbox", {
        name: "Last Name",
    });
    private readonly signUpEmailField = this.page.getByRole("textbox", {
        name: "Email",
    });
    private readonly signUpPasswordField = this.page.getByRole("textbox", {
        name: "Password",
    });
    private readonly signUpSubmitButton = this.page.getByRole("button", {
        name: "Submit",
    });
    private readonly signUpCancelButton = this.page.getByRole("button", {
        name: "Cancel",
    });
    readonly allPageElements = [
        this.signUpHeaderText,
        this.firstNameField,
        this.lastNameField,
        this.signUpEmailField,
        this.signUpPasswordField,
        this.signUpSubmitButton,
        this.signUpCancelButton,
    ];

    @step("Filling required fields to Sign Up new user")
    async fillingRequiredFields() {
        await this.firstNameField.fill(signUpData.firstName);
        await this.lastNameField.fill(signUpData.lastName);
        await this.signUpEmailField.fill(signUpData.email);
        await this.signUpPasswordField.fill(signUpData.password);
    }

    @step("Clicking Submit button")
    async clickSignUpButton() {
        await this.signUpSubmitButton.click();
    }

    @step("Clicking Cancel button")
    async clickCancelSignUpButton() {
        await this.signUpCancelButton.click();
    }

    @step("Checking that user Signup was successful")
    async signUpIsSuccesful() {
        expect(this.page.url()).toBe(`${this.pagePath}/contactList`);
    }
}
