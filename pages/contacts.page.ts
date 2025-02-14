import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class ContactsPage extends BasePage {
    public pagePath = `contactList`
    readonly allPageElements: Locator[];
    private readonly nameRow: Locator;
    private readonly birthdayRow: Locator;
    private readonly emailRow: Locator;
    private readonly phoneRow: Locator;
    private readonly addressRow: Locator;
    private readonly cityAndZipCodeRow: Locator;
    private readonly countryRow: Locator;
    private readonly addNewContactButton: Locator;
    private readonly logoutButton: Locator;
    private readonly headerText: Locator;

    constructor(page: Page){
        super(page);
        this.headerText = page.getByRole('heading', { name: "Contact List"});
        this.nameRow = page.locator('.contactTable').getByText("Name");
        this.birthdayRow = page.locator('.contactTable').getByText("Birthdate");
        this.emailRow = page.locator('.contactTable').getByText("Email");
        this.phoneRow = page.locator('.contactTable').getByText("Phone");
        this.addressRow = page.locator('.contactTable').getByText("Address");
        this.cityAndZipCodeRow = page.locator('.contactTable').getByText("City, State/Province, Postal Code");
        this.countryRow = page.locator('.contactTable').getByText("Country");
        this.addNewContactButton = page.getByRole('button', { name: "Add a New Contact"});
        this.logoutButton = page.getByRole('button', { name: "Logout"});
        this.allPageElements = [
            this.headerText,
            this.nameRow,
            this.birthdayRow,
            this.emailRow,
            this.phoneRow,
            this.addressRow,
            this.cityAndZipCodeRow,
            this.countryRow,
            this.addNewContactButton,
            this.logoutButton
        ];
    };

    async clickAddNewContactButton(){
        await this.addNewContactButton.click();
    };

    async clickLogOutButton(){
        await this.logoutButton.click();
    };

}