import { Page, Locator } from "@playwright/test";
import { LoginPage } from "./login.page";


export class SignUpPage extends LoginPage{
    public pagePath = '/addUser'
    // private readonly firstName: Locator;
    // private readonly lastName: Locator;
    // private readonly emailField: Locator;
    // private readonly submitButton: Locator;
    // private readonly contactsText: Locator;
    // private readonly addContactButton: Locator;
    // private readonly birthdayField: Locator;
    // private readonly phoneField: Locator;
    // private readonly addressField1: Locator;
    // private readonly addressField2: Locator;
    // private readonly cityField: Locator;
    // private readonly provinceField: Locator;
    // private readonly postalCodeField: Locator;
    // private readonly countryField: Locator;
    // private readonly headerText: Locator;
    // private readonly lastTableRecord: Locator;
    // private readonly deleteButton: Locator;
    // private readonly logoutButton: Locator;
    // private readonly editContactButton: Locator;
    // private readonly returnButton: Locator;


    constructor(page: Page){
        super(page);
        // this.firstName = page.locator('#firstName')
        // this.lastName = page.locator('#lastName')
        // this.emailField = page.locator('#email')
        // this.submitButton = page.locator('#submit')
        // this.contactsText = page.locator('//*[(text()="Click on any contact to view the Contact Details")]')
        // this.addContactButton = page.locator('#add-contact')
        // this.birthdayField = page.locator('#birthdate')
        // this.phoneField = page.locator('#phone')
        // this.addressField1 = page.locator('#street1')
        // this.addressField2 = page.locator('#street2')
        // this.cityField = page.locator('#city')
        // this.provinceField = page.locator('#stateProvince')
        // this.postalCodeField = page.locator('#postalCode')
        // this.countryField = page.locator('#country')
        // this.headerText = page.locator('//h1');
        // this.lastTableRecord = page.locator('//table/tr[last()]')
        // this.deleteButton = page.locator('#delete')
        // this.logoutButton = page.locator('#logout')
        // this.editContactButton = page.locator('#edit-contact')
        // this.returnButton = page.locator('#return')
    }

    async sometest(){
        const loginPage = new LoginPage(this.page)
        await loginPage.open()
    }

}
