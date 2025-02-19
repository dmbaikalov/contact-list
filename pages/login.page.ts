import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base.page";
import { userLoginData as credentials } from "../utils/test.data.generator.utils";
import { step } from "../utils/step.utils";

export class LoginPage extends BasePage {
    public pagePath = `login`;
    readonly allPageElements: Locator[];
    readonly headerText: Locator;
    readonly loginEmailField: Locator;
    readonly loginPasswordField: Locator;
    readonly loginSubmitButton: Locator;
    readonly signUpButton: Locator;
    readonly footerLogo: Locator;
    readonly linkToApiDocumentation: Locator;

    constructor(page: Page) {
        super(page);
        this.headerText = page.getByRole("heading", {
            name: "Contact List App",
        });
        this.linkToApiDocumentation = page.getByRole("link", { name: "here" });
        this.loginEmailField = page.getByRole("textbox", { name: "Email" });
        this.loginPasswordField = page.getByRole("textbox", {
            name: "Password",
        });
        this.loginSubmitButton = page.getByRole("button", { name: "Submit" });
        this.signUpButton = page.getByRole("button", { name: "Sign up" });
        this.footerLogo = page.locator("img");
        this.allPageElements = [
            this.headerText,
            this.linkToApiDocumentation,
            this.loginEmailField,
            this.loginPasswordField,
            this.loginSubmitButton,
            this.signUpButton,
            this.footerLogo,
        ];
    }

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
