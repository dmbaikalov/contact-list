import { Locator } from "@playwright/test";
import { BasePage } from "./base.page";
import { contactData } from "../utils/test.data.generator.utils";
import { step } from "../utils/step.utils";

export class AddContactPage extends BasePage {
    public pagePath = `addContact`;
    private readonly headerText = this.page.getByRole("heading", {
        name: "Add Contact",
    });
    private readonly firstNameField = this.page.getByRole("textbox", {
        name: "* First Name:",
    });
    private readonly lastNameField = this.page.getByRole("textbox", {
        name: "* Last Name:",
    });
    private readonly birthdayDateField = this.page.getByRole("textbox", {
        name: "Date of Birth:",
    });
    private readonly emailField = this.page.getByRole("textbox", {
        name: "Email:",
    });
    private readonly phoneField = this.page.getByRole("textbox", {
        name: "Phone:",
    });
    private readonly streetAddress1Field = this.page.getByRole("textbox", {
        name: "Street Address 1:",
    });
    private readonly streetAddress2Field = this.page.getByRole("textbox", {
        name: "Street Address 2:",
    });
    private readonly cityField = this.page.getByRole("textbox", {
        name: "City:",
    });
    private readonly stateField = this.page.getByRole("textbox", {
        name: "State or Province:",
    });
    private readonly zipcodeField = this.page.getByRole("textbox", {
        name: "Postal Code:",
    });
    private readonly countryField = this.page.getByRole("textbox", {
        name: "Country:",
    });
    private readonly submitButton = this.page.getByRole("button", {
        name: "Submit",
    });
    private readonly cancelButton = this.page.getByRole("button", {
        name: "Cancel",
    });
    private readonly logoutButton = this.page.getByRole("button", {
        name: "Logout",
    });
    readonly allPageElements = [
        this.headerText,
        this.firstNameField,
        this.lastNameField,
        this.birthdayDateField,
        this.emailField,
        this.phoneField,
        this.streetAddress1Field,
        this.streetAddress2Field,
        this.cityField,
        this.stateField,
        this.zipcodeField,
        this.countryField,
        this.submitButton,
        this.cancelButton,
        this.logoutButton,
    ];

    @step("Fillin all required contact fields")
    async fillRequiredFields() {
        await this.firstNameField.fill(contactData.firstName);
        await this.lastNameField.fill(contactData.lastName);
        // await this.birthdayDateField.fill(`${contactData.birthdayDate}`);
        await this.emailField.fill(contactData.email);
        // await this.phoneField.fill(contactData.phone);
        await this.streetAddress1Field.fill(contactData.streetAddress1);
        await this.streetAddress2Field.fill(contactData.streetAddress2);
        await this.cityField.fill(contactData.city);
        await this.stateField.fill(contactData.state);
        await this.zipcodeField.fill(contactData.zipcode);
        await this.countryField.fill(contactData.country);
    }

    @step("Clicking Submit button")
    async clickSubmitButton() {
        await this.submitButton.click();
    }

    @step("Clicking Cancel button")
    async clickCancelButton() {
        await this.cancelButton.click();
    }

    @step("Clicking Log Out button")
    async clickLogOutButton() {
        await this.logoutButton.click();
    }
}
