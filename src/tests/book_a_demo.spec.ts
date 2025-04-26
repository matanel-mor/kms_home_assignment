import { test } from "@playwright/test";
import HomePage from "../pages/homePage";
import logger from "../utils/Logger";

test("Navigate to Book a demo page and assert the form fields", async ({ page }) => {
      logger.info("------Starting Book a demo test-------");

      const homePage = new HomePage(page);
      await homePage.navigateToHomePage();
      await homePage.assertNavigationToHomePage();
      await homePage.assertBookADemoButtonIsVisible();

      // Page transition to Book a demo page
      const bookADemoPage = await homePage.clickOnBookADemoButton();
      await bookADemoPage.assertNavigationToBookADemoPage();
      await bookADemoPage.assertDemoFormFieldsAreVisible();
      await bookADemoPage.fillDemoForm();
      await bookADemoPage.assertDemoFormFieldsAreFilled();
});