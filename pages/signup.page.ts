import { Page, Locator, expect } from "@playwright/test";
import { signUpData } from "../utils/test.utils";
import { BasePage } from "./base.page";

export class SignUpPage extends BasePage{
    public pagePath = `addUser`

    readonly allPageElements: Locator[];
    readonly signUpHeaderText: Locator;
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly signUpEmailField: Locator;
    readonly signUpPasswordField: Locator;
    readonly signUpSubmitButton: Locator;
    readonly signUpCancelButton: Locator;

    constructor(page: Page){
        super(page);
        this.signUpHeaderText = page.getByRole('heading', { name: "Add User"})
        this.firstNameField = page.getByRole('textbox', { name: "First Name"})
        this.lastNameField = page.getByRole('textbox', { name: "Last Name"})
        this.signUpEmailField = page.getByRole('textbox', { name: "Email"})
        this.signUpPasswordField = page.getByRole('textbox', { name: "Password"})
        this.signUpSubmitButton = page.getByRole('button', { name: "Submit"})
        this.signUpCancelButton = page.getByRole('button', { name: "Cancel"})
        this.allPageElements = [
            this.signUpHeaderText,
            this.firstNameField,
            this.lastNameField,
            this.signUpEmailField,
            this.signUpPasswordField,
            this.signUpSubmitButton,
            this.signUpCancelButton
        ];

    };
    
    async typeFirstName(){
        await this.firstNameField.fill(signUpData.firstName);
    }
    
    async typeLastName(){
        await this.lastNameField.fill(signUpData.lastName);
    }

    async typeEmail(){
        await this.signUpEmailField.fill(signUpData.email);
    }

    async typePassword(){
        await this.signUpPasswordField.fill(signUpData.password);
    }
    
    async clickSignUpButton(){
        await this.signUpSubmitButton.click();
    }

    async clickCancelSignUpButton(){
        await this.signUpCancelButton.click();
    }

    async signUpIsSuccesful(){
        expect(this.page.url()).toBe(`${this.pagePath}/contactList`)
    }
}
