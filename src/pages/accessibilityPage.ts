import { Page, expect } from "@playwright/test";
import Logger from "../utils/Logger";
import HomePage from "./homePage";

export default class AccessibilityPage {
      constructor(private page: Page) { }

      // Selectors
      get accessibilityMenuBtn() {
            return this.page.locator('#acwp-toolbar-btn');
      };
      get contrastToggle() {
            return this.page.locator('#acwp-toggler-contrast');
      };
      get biggerTextToggle() {
            return this.page.locator('#acwp-toggler-incfont');
      };
      get biggerTextLabel() {
            return this.page.locator('label[data-name="incfont"]');
      }
      get dyslexiaFontToggle() {
            return this.page.locator('#acwp-toggler-readable');
      };
      get highlightLinksToggle() {
            return this.page.locator('#acwp-toggler-underline');
      };
      get closeAccessibilityMenuBtn() {
            return this.page.locator('#acwp-close-toolbar');
      }

      // Actions
      async openAccessibilityMenu() {
            Logger.info("Opening accessibility menu.");
            await this.accessibilityMenuBtn.click();
      };
      async clickOnBiggerTextLabel() {
            Logger.info("Clicking bigger text label.");
            await this.biggerTextLabel.click();
      };
      async closeAccessibilityMenu() {
            Logger.info("Closing accessibility menu.");
            await this.closeAccessibilityMenuBtn.click();
            Logger.info("Accessibility menu closed.");
      };

      // Assertions
      async assertDefaultStateOfAccessibilityToggles() {
            Logger.info("Asserting default state of accessibility toggles.");
            await expect(this.contrastToggle).not.toBeChecked();
            await expect(this.biggerTextToggle).not.toBeChecked();
            await expect(this.dyslexiaFontToggle).not.toBeChecked();
            await expect(this.highlightLinksToggle).not.toBeChecked();
            Logger.info("Default state of accessibility toggles asserted.");
      };
      async assertIncreasedFontSize() {
            Logger.info("Asserting increased font size.");
            const homePage = new HomePage(this.page);
            const originalFontSize = Number((await homePage.getPageTitleFontSize()).slice(0, -2));
            await this.openAccessibilityMenu();
            await this.clickOnBiggerTextLabel();
            await expect(this.biggerTextToggle).toBeChecked();
            await this.closeAccessibilityMenu();
            const newFontSize = Number((await homePage.getPageTitleFontSize()).slice(0, -2));
            expect(newFontSize).toBeGreaterThan(originalFontSize);
            Logger.info("Increased font size asserted.");
      };
      async restoreDefaultFontSize() {
            Logger.info("Restoring default font size.");
            const homePage = new HomePage(this.page);
            const originalFontSize = Number((await homePage.getPageTitleFontSize()).slice(0, -2));
            await this.openAccessibilityMenu();
            await this.clickOnBiggerTextLabel();
            await expect(this.biggerTextToggle).not.toBeChecked();
            await this.closeAccessibilityMenu();
            const newFontSize = Number((await homePage.getPageTitleFontSize()).slice(0, -2));
            expect(newFontSize).toBeLessThan(originalFontSize);
            Logger.info("Default font size restored.");
      };
}