import { Page, expect } from "@playwright/test";
import logger from "../utils/Logger";
import BookADemoPage from "./bookADemoPage";

export default class HomePage {
      constructor(private page: Page) { }

      // Selectors
      get bookADemoBtn() {
            return this.page.getByRole("banner").getByRole("link", { name: "Book a demo" });
      };

      // Actions
      async navigateToHomePage() {
            if (!process.env.BASE_URL) {
                  logger.error("BASE_URL is not defined in the environment configuration.");
                  throw new Error("BASE_URL is not defined in the environment configuration.");
            }

            await this.page.goto(process.env.BASE_URL, { waitUntil: "domcontentloaded" });
      };
      async clickOnBookADemoButton() {
            logger.info("Clicking on book a demo button.");
            await this.bookADemoBtn.click();

            const bookADemoPage = new BookADemoPage(this.page);
            return bookADemoPage;
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