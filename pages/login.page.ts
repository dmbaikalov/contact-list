import { Locator } from "@playwright/test";
import { BasePage } from "./base.page";
import { userLoginData as credentials } from "../utils/test.data.generator.utils";
import { step } from "../utils/step.utils";

export class LoginPage extends BasePage {
    public pagePath = `login`;
    private readonly headerText = this.page.getByRole("heading", {
        name: "Contact List App",
    });
    private readonly loginEmailField = this.page.getByRole("textbox", {
        name: "Email",
    });
    private readonly loginPasswordField = this.page.getByRole("textbox", {
        name: "Password",
    });
    private readonly loginSubmitButton = this.page.getByRole("button", {
        name: "Submit",
    });
    private readonly signUpButton = this.page.getByRole("button", {
        name: "Sign up",
    });
    private readonly footerLogo = this.page.locator("img");
    private readonly linkToApiDocumentation = this.page.getByRole("link", {
        name: "here",
    });
    readonly allPageElements = [
        this.headerText,
        this.linkToApiDocumentation,
        this.loginEmailField,
        this.loginPasswordField,
        this.loginSubmitButton,
        this.signUpButton,
        this.footerLogo,
    ];

    @step("Filling Email field")
    async typeUserEmail() {
        await this.loginEmailField.fill(credentials.email);
    }

    @step("Filling Password field")
    async typeUserPassword() {
        await this.loginPasswordField.fill(credentials.password);
    }

    @step("Clicking Submit button")
    async clickSubmitButton() {
        await this.loginSubmitButton.click();
    }

    @step("Clicking Signup button")
    async clickSignupButton() {
        await this.signUpButton.click();
    }
}
