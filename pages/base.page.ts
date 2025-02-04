import { test, expect, Locator, Page } from '@playwright/test'


export class BasePage {
    public pagePath = '/';
	page: Page;

	constructor(page: Page) {
		this.page = page
	}

	async open() {
		await this.page.goto(this.pagePath)
	}

	async isOpen() {
		this.page.url().includes(this.pagePath);
	}

	async getTitle() {
		return await this.page.title()
	}

	async getUrl() {
		return this.page.url()
	}

	async wait(milliseconds: number) {
		console.log(`Test runner is in a waiting state for ${(milliseconds / 1000)} seconds`)
		this.page.waitForTimeout(milliseconds)
	}

	async waitForPageLoad() {
		await this.page.waitForLoadState('domcontentloaded')
	}

	async takeScreenShot() {
		expect(await this.page.screenshot()).toMatchSnapshot(
			`${new Date().toISOString().slice(0, 19).replace('T', ', time -> ')} - ${test.info().title.replace(/[^a-zA-Z0-9]/g, '_')}.png`
		)
	}

	async verifyElementContainsText(selector: Locator, text: string) {
		const locatorText = await selector.textContent()
		await expect(locatorText).toBe(text)
	}

	async selectValueFromDropdown(selector: Locator, text: string) {
		await selector.selectOption({ value: text })
	}

	async isElementVisible(selector: Locator) {
		await selector.isVisible();

	}

	async isElementNotVisible(selector: Locator) {
		expect(selector).toBeHidden()
	}


}