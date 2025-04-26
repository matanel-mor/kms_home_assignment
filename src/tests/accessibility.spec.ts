import { test } from '@playwright/test';
import logger from '../utils/Logger';
import HomePage from '../pages/homePage';
import AccessibilityPage from '../pages/accessibilityPage';

test.beforeEach(async ({ page }) => {
      // Navigate to Home page
      const homePage = new HomePage(page);
      await homePage.navigateToHomePage();
});

test('Accessibility test - Check accessibility toggles default state', async ({ page }) => {
      logger.info("------Starting toggles default state test-------");

      const accessibilityPage = new AccessibilityPage(page);
      await accessibilityPage.openAccessibilityMenu();
      await accessibilityPage.assertDefaultStateOfAccessibilityToggles();
});

test('Accessibility test - Increase font size and restore to default', async ({ page }) => {
      logger.info("------Starting increase font size test-------");

      const accessibilityPage = new AccessibilityPage(page);
      await accessibilityPage.assertIncreasedFontSize();
      await accessibilityPage.restoreDefaultFontSize();
});