import { test } from '@playwright/test';
import logger from '../utils/Logger';
import HomePage from '../pages/homePage';

test('Terms and privacy policy page', async ({ page }) => {
      logger.info("------Starting Terms and privacy policy test-------");

      const homePage = new HomePage(page);
      await homePage.navigateToHomePage();
      await homePage.assertNavigationToHomePage();

      // Page transition to Terms and privacy policy page
      const termsAndPrivacyPolicyPage = await homePage.navigateToTermsAndPrivacyPolicyPage();
      await termsAndPrivacyPolicyPage.assertNavigationToTermsAndPrivacyPolicyPage();
      await termsAndPrivacyPolicyPage.assertTermsAndPrivacyPolicyTitle();
});   