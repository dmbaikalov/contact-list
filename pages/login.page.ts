import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base.page";
import { userLoginData as credentials } from "../utils/test.utils";

export class LoginPage extends BasePage {
    public pagePath = '/';
    private readonly headerText: Locator;
    private readonly loginEmailField: Locator;
    private readonly loginPasswordField: Locator;
    private readonly loginSubmitButton: Locator;
    private readonly loginToSignupButton: Locator;
    private readonly footerLogo: Locator;
    private readonly linkToApiDocumentation: Locator;



    constructor(page: Page){
        super(page);
        this.headerText = page.getByRole('heading', { name: "Contact List App"});
        this.linkToApiDocumentation = page.getByRole('link', { name: "here"})
        this.loginEmailField = page.getByRole('textbox', { name: "Email"})
        this.loginPasswordField = page.getByRole('textbox', { name: "Password" })
        this.loginSubmitButton = page.getByRole('button', { name: "Submit"})
        this.loginToSignupButton = page.getByRole('button', { name: "Sign up"})
        this.footerLogo = page.getByRole('paragraph').locator('img')
    }


async userloginEmailFieldIsVisible(){
    await this.isElementVisible(this.loginEmailField);
}

async userloginPasswordFieldIsVisible(){
    await this.isElementVisible(this.loginPasswordField);
}

async loginSubmitButtonIsVisible(){
    await this.isElementVisible(this.loginSubmitButton);
}

async loginToSignupButtonIsVisible(){
    await this.isElementVisible(this.loginToSignupButton);
}

async headerTextIsVisible(){
    await this.isElementVisible(this.headerText)
}

async footerLogoIsVisible(){
    await this.isElementVisible(this.footerLogo)
}

async linkToApiDocumentationIsVisible(){
    await this.isElementVisible(this.linkToApiDocumentation)
}

async typeEmailInloginEmailField(){
    await this.loginEmailField.fill(credentials.email);
}

async typePasswordInloginPasswordField(){
    await this.loginPasswordField.fill(credentials.password);
}

async clickloginSubmitButton(){
    await this.loginSubmitButton.click();
}

async clickloginToSignupButton(){
    await this.loginToSignupButton.click();
}
};