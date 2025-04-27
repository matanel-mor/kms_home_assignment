import { test } from '@playwright/test';
import logger from '../utils/Logger';
import HomePage from '../pages/homePage';

test('KMS university apply for certificate form', async ({ page }) => {
      logger.info("------Starting KMS university test-------");

      const homePage = new HomePage(page);
      await homePage.navigateToHomePage();
      await homePage.assertNavigationToHomePage();

      // Page transition to KMS University
      const lightHouseUniversityPage = await homePage.navigateToKMSUniversityPage();
      await lightHouseUniversityPage.assertNavigationToKMSUniversityPage();
      await lightHouseUniversityPage.selectRandomCertificationCard();
      await lightHouseUniversityPage.assertFormFieldsAreVisible();
      await lightHouseUniversityPage.fillCertificateForm();
      await lightHouseUniversityPage.assertFormFieldsAreFilled();
});