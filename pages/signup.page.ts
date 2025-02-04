import { Page, Locator, expect } from "@playwright/test";
import { signUpData as credentials } from "../utils/test.utils";
import { BasePage } from "./base.page";

export class SignUpPage extends BasePage{
    public pagePath = '/addUser'
    readonly signUpHeaderText: Locator;
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly signUpEmailField: Locator;
    readonly signUpPasswordField: Locator;
    readonly signUpSubmitButton: Locator;
    readonly signUpCancelButton: Locator;

    constructor(page: Page){
        super(page);

    }

    async signUpEmailFieldIsVisible(){
        await this.isElementVisible(this.signUpEmailField);
    }
    
    async signUpPasswordFieldIsVisible(){
        await this.isElementVisible(this.signUpPasswordField);
    }
    
    async submitButtonIsVisible(){
        await this.isElementVisible(this.signUpSubmitButton);
    }
    
    async signUpHeaderTextIsVisible(){
        await this.isElementVisible(this.signUpHeaderText);
    }
    
    async typeFirstName(){
        await this.firstNameField.fill(credentials.firstName);
    }
    
    async typeLastName(){
        await this.lastNameField.fill(credentials.lastName);
    }

    async typeEmail(){
        await this.signUpEmailField.fill(credentials.email);
    }

    async typePassword(){
        await this.signUpPasswordField.fill(credentials.password);
    }
    
    async clickSubmitSignUpButton(){
        await this.signUpSubmitButton.click();
    }

    async clickCancelSignUpButton(){
        await this.signUpCancelButton.click();
    }

    async signUpIsSuccesful(){
        expect(this.page.url()).toBe(`${this.pagePath}/contactList`)
    }
}
