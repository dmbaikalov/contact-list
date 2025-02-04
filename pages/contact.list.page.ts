import { Locator, Page } from "@playwright/test";
import { SignUpPage } from "./signup.page";
import { BasePage } from "./base.page";



export class ContactsPage extends BasePage {
    public pagePath = '/contactList'

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
        super(page)
        this.nameRow = page.getByRole('columnheader', { name: "Name"})
        this.birthdayRow = page.getByRole('columnheader', { name: "Birthday"})
        this.emailRow = page.getByRole('columnheader', { name: "Email"})
        this.phoneRow = page.getByRole('columnheader', { name: "Phone"})
        this.addressRow = page.getByRole('columnheader', { name: "Address"})
        this.cityAndZipCodeRow = page.getByRole('columnheader', { name: "City, State/Province, Postal Code"})
        this.countryRow = page.getByRole('columnheader', { name: "Country"})
        this.addNewContactButton
        this.logoutButton = page.getByRole('button', { name: "Logout"})
        this.headerText

    }
}