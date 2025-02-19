import { test, expect, Locator, Page } from "@playwright/test";
import { step } from "../utils/step.utils";

export class BasePage {
    public pagePath = `/`;
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    @step("Navigating to _PageName_")
    async open() {
        await this.page.goto(this.pagePath);
    }

    @step("Validation that _PageName_ is open")
    async isOpen(expected_url?: string) {
        expect(this.page.url()).toBe(
            expected_url || `${process.env.BASE_URL}${this.pagePath}`,
        );
    }

    @step("Getting _PageName_ title")
    async getTitle() {
        return await this.page.title();
    }

    @step("Getting _PageName_ url")
    async getUrl() {
        return this.page.url();
    }

    @step("Runner is in a waiting state for ${0 / 1000} second(s)")
    async wait(milliseconds: number) {
        await this.page.waitForTimeout(milliseconds);
    }

    @step("Waiting for _PageName_ to load")
    async waitForPageLoad() {
        await this.page.waitForLoadState("domcontentloaded");
    }

    @step("Taking screenshot")
    async takeScreenShot() {
        const sreenshotPath = `screenshots/${new Date().toISOString().slice(0, 10).replace("T", "_time_")}_${test.info().title.replace(/[^a-zA-Z0-9]/g, "_")}.png`;
        await this.page.screenshot({ path: sreenshotPath });
    }

    @step("Verifying visibility of element on _PageName_:")
    async isElementsVisible(selector: Locator) {
        await expect(selector).toBeVisible();
    }

    @step("Verifying that element on _PageName_ is not visibile:")
    async isElementNotVisible(selector: Locator) {
        expect(selector).toBeHidden();
    }
}
