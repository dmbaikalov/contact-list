import { Locator, Page } from "@playwright/test";
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
        this.addNewContactButton = page.getByRole('button', { name: "Add a New Contact"})
        this.logoutButton = page.getByRole('button', { name: "Logout"})
        this.headerText = page.getByRole('heading', { name: "ContactList"});
    }

    async headerTextIsVisible(){
        await this.isElementVisible(this.headerText);
    }

    async logoutButtonIsVisible(){
        await this.isElementVisible(this.logoutButton);
    }

    async addNewContactButtonIsVisible(){
        await this.isElementVisible(this.addNewContactButton);
    }

    async nameRowIsVisible(){
        await this.isElementVisible(this.nameRow)
    }

    async birthdayRowIsVisible(){
        await this.isElementVisible(this.birthdayRow)
    }

    async emailRowIsVisible(){
        await this.isElementVisible(this.emailRow)
    }

    async phoneRowIsVisible(){
        await this.isElementVisible(this.phoneRow)
    }

    async addressRowIsVisible(){
        await this.isElementVisible(this.addressRow)
    }

    async cityRowIsVisible(){
        await this.isElementVisible(this.cityAndZipCodeRow)
    }

    async countryRowIsVisible(){
        await this.isElementVisible(this.countryRow)
    }

    async clickAddNewContactButton(){
        await this.addNewContactButton.click()
    }

    async clickLogOutButton(){
        await this.logoutButton.click()
    }

}