import { Page, expect } from "@playwright/test";
import logger from "../utils/Logger";
import BookADemoPage from "./bookADemoPage";
import LighthouseUniversityPage from "./lighthouseUniversityPage";

export default class HomePage {
      constructor(private page: Page) { }
      private readonly url = `${process.env.BASE_URL}`

      // Selectors
      get bookADemoBtn() {
            return this.page.getByRole("banner").getByRole("link", { name: "Book a demo" });
      };
      get pageTitle() {
            return this.page.locator('h1');
      };
      get aboutBtn() {
            return this.page.locator('li.header_panel__nav-list-item > a').last();
      };
      get lightHouseUniversityBtn() {
            return this.page.getByRole('link', { name: 'Lighthouse University' });
      };

      // Actions
      async navigateToHomePage() {
            await this.page.goto(this.url, { waitUntil: "domcontentloaded" });
      };
      async clickOnBookADemoButton() {
            logger.info("Clicking on book a demo button.");
            await this.bookADemoBtn.click();

            const bookADemoPage = new BookADemoPage(this.page);
            return bookADemoPage;
      };
      async getPageTitleFontSize() {
            return this.pageTitle.evaluate(el => window.getComputedStyle(el).fontSize);
      };
      async ClickOnAboutBtn() {
            await this.aboutBtn.click();
      };
      async ClickOnLightHouseUniversityBtn() {
            await this.lightHouseUniversityBtn.click();
      };
      async navigateToKMSUniversityPage() {
            await this.ClickOnAboutBtn();
            await this.ClickOnLightHouseUniversityBtn();

            const lightHouseUniversityPage = new LighthouseUniversityPage(this.page);
            return lightHouseUniversityPage;
      };

      // Assertions
      async assertNavigationToHomePage() {
            await expect(this.page).toHaveURL(`${process.env.BASE_URL}`);
            logger.info(`Navigated to home page.`);
      };
      async assertBookADemoButtonIsVisible() {
            await expect(this.bookADemoBtn).toBeVisible();
      };
};