import { Locator } from "@playwright/test";
import { BasePage } from "./base.page";
import { step } from "../utils/step.utils";

export class ContactsPage extends BasePage {
    public pagePath = `contactList`;
    private readonly nameRow = this.page
        .locator(".contactTable")
        .getByText("Name");
    private readonly birthdayRow = this.page
        .locator(".contactTable")
        .getByText("Birthdate");
    private readonly emailRow = this.page
        .locator(".contactTable")
        .getByText("Email");
    private readonly phoneRow = this.page
        .locator(".contactTable")
        .getByText("Phone");
    private readonly addressRow = this.page
        .locator(".contactTable")
        .getByText("Address");
    private readonly cityAndZipCodeRow = this.page
        .locator(".contactTable")
        .getByText("City, State/Province, Postal Code");
    private readonly countryRow = this.page
        .locator(".contactTable")
        .getByText("Country");
    private readonly addNewContactButton = this.page.getByRole("button", {
        name: "Add a New Contact",
    });
    private readonly logoutButton = this.page.getByRole("button", {
        name: "Logout",
    });
    private readonly headerText = this.page.getByRole("heading", {
        name: "Contact List",
    });
    readonly allPageElements = [
        this.headerText,
        this.nameRow,
        this.birthdayRow,
        this.emailRow,
        this.phoneRow,
        this.addressRow,
        this.cityAndZipCodeRow,
        this.countryRow,
        this.addNewContactButton,
        this.logoutButton,
    ];

    @step("Clicking Add New Contact button")
    async clickAddNewContactButton() {
        await this.addNewContactButton.click();
    }

    @step("Clicking Logout Button")
    async clickLogOutButton() {
        await this.logoutButton.click();
    }
}
