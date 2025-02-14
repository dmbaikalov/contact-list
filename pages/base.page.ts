import { test, expect, Locator, Page } from '@playwright/test'


export class BasePage {
    public pagePath = `/`;
	page: Page;

	constructor(page: Page) {
		this.page = page;
	};

	async open() {
		await this.page.goto(this.pagePath)
	};

	async isOpen(expected_url?: string) {
		expect(this.page.url()).toBe(expected_url || `${process.env.BASE_URL}${this.pagePath}`);
	};

	async getTitle() {
		return await this.page.title();
	};

	async getUrl() {
		return this.page.url();
	};

	async wait(milliseconds: number) {
		// console.log(`Test runner is in a waiting state for ${(milliseconds / 1000)} seconds`);
		await this.page.waitForTimeout(milliseconds);
	};

	async waitForPageLoad() {
		await this.page.waitForLoadState('domcontentloaded');
	};

	async takeScreenShot() {
		const sreenshotPath = `screenshots/${new Date().toISOString().slice(0, 10).replace("T", '_time_')}_${test.info().title.replace(/[^a-zA-Z0-9]/g, '_')}.png`;
		await this.page.screenshot({ path: sreenshotPath });
	};

	async verifyElementContainsText(selector: Locator, text: string) {
		const locatorText = await selector.textContent();
		await expect(locatorText).toBe(text);
	};

	async selectValueFromDropdown(selector: Locator, text: string) {
		await selector.selectOption({ value: text });
	};

	async isElementVisible(selector: Locator) {
		await expect(selector).toBeVisible();

	};

	async isElementNotVisible(selector: Locator) {
		expect(selector).toBeHidden();
	};
}