import { Page, expect } from "@playwright/test";
import logger from "../utils/Logger";
import { termsAndPrivacyPageData } from "../data/termsAndPrivacy";

export default class TermsAndPrivacyPage {
      constructor(public page: Page) { }

      // Selectors
      get termsAndPrivacyTitle() {
            return this.page.locator('h1');
      };

      // Assertions
      async assertNavigationToTermsAndPrivacyPolicyPage() {
            await expect(this.page).toHaveURL(`${process.env.BASE_URL}terms-and-privacy-policy/`);
            logger.info(`Navigated to terms and privacy policy page.`);
      };
      async assertTermsAndPrivacyPolicyTitle() {
            await expect(this.termsAndPrivacyTitle).toBeVisible();
            await expect(this.termsAndPrivacyTitle).toHaveText(termsAndPrivacyPageData.title);
            logger.info("Terms and privacy policy title is visible.");
      };
};