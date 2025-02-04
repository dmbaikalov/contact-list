import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base.page";


export class AddContactPage extends BasePage{
    public pagePath = '/addUser'

    constructor(page: Page){
        super(page);
    }

}
