import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base.page";


export class AddContactPage extends BasePage{
    public pagePath = `addContact`

    readonly allPageElements: Locator[];
    private readonly headerText: Locator;
    private readonly firstNameField: Locator;
    private readonly lastNameField: Locator;
    private readonly birthdayDateField: Locator;
    private readonly emailField: Locator;
    private readonly phoneField: Locator;
    private readonly streetAddress1Field: Locator;
    private readonly streetAddress2Field: Locator;
    private readonly cityField: Locator;
    private readonly stateField: Locator;
    private readonly zipcodeField: Locator;
    private readonly countryField: Locator;
    private readonly submitButton: Locator;
    private readonly cancelButton: Locator;
    private readonly logoutButton: Locator;

    constructor(page: Page){
        super(page);
        this.headerText = page.getByRole('heading', { name: "Add Contact"});
        this.firstNameField = page.getByRole('textbox', { name: "First Name:"});
        this.lastNameField = page.getByRole('textbox', { name: "Last Name:"});
        this.birthdayDateField = page.getByRole('textbox', { name: "Date of Birth:"});
        this.emailField = page.getByRole('textbox', { name: "Email:"});
        this.phoneField = page.getByRole('textbox', { name: "Phone:"});
        this.streetAddress1Field = page.getByRole('textbox', { name: "Street Address 1:"});
        this.streetAddress2Field = page.getByRole('textbox', { name: "Street Address 2:"});
        this.cityField = page.getByRole('textbox', { name: "City:"});
        this.stateField = page.getByRole('textbox', { name: "State of PRovince"});
        this.zipcodeField = page.getByRole('textbox', { name: "Postal Code:"});
        this.countryField = page.getByRole('textbox', { name: "Country:"});
        this.submitButton = page.getByRole('button', { name: "Submit"});
        this.cancelButton = page.getByRole('button', { name: "Cancel"});
        this.logoutButton = page.getByRole('button', { name: "Logout"});
        this.allPageElements = [
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
            this.logoutButton
        ]
    }

}
