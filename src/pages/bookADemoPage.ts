import { Page, expect } from "@playwright/test";
import logger from "../utils/Logger";
import { demoCostumer } from "../data/demoCostumer";

export default class BookADemoPage {
      constructor(private page: Page) { }

      private readonly url = `${process.env.BASE_URL}book-a-demo/`;
      private readonly formPlaceholders = {
            firstName: 'First name*',
            lastName: 'Last name*',
            email: 'Professional Email*',
            phoneNumber: 'Phone number*',
            jobTitle: 'Job Title*',
            country: 'Country/Region*',
            message: 'Message:'
      }

      // Selectors
      get firstNameInputField() {
            return this.page.locator('input[name="firstname"]');
      };
      get lastNameInputField() {
            return this.page.locator('input[name="lastname"]');
      };
      get emailInputField() {
            return this.page.locator('input[name="email"]');
      };
      get phoneNumberInputField() {
            return this.page.locator('input[name="phone"]');
      };
      get jobTitleInputField() {
            return this.page.locator('input[name="jobtitle"]');
      };
      get countryInputField() {
            return this.page.locator('select[name="country"]');
      };
      get messageInputField() {
            return this.page.locator('textarea[name="message"]');
      };
      get captchaIframe() {
            return this.page.frameLocator('iframe[title="reCAPTCHA"]');
      };
      get recaptchaText() {
            return this.captchaIframe.locator('span').getByText('reCAPTCHA');
      };
      get submitButton() {
            return this.page.locator('input[type="submit"]');
      };

      // Actions
      async fillDemoForm() {
            await this.firstNameInputField.fill(demoCostumer.firstName);
            await this.lastNameInputField.fill(demoCostumer.lastName);
            await this.emailInputField.fill(demoCostumer.email);
            await this.phoneNumberInputField.fill(demoCostumer.phoneNumber);
            await this.jobTitleInputField.fill(demoCostumer.jobTitle);
            await this.countryInputField.selectOption(demoCostumer.country);
            await this.messageInputField.fill(demoCostumer.message);
      };

      // Assertions
      async assertNavigationToBookADemoPage() {
            this.page.waitForLoadState("domcontentloaded");
            await expect(this.page).toHaveURL(this.url, { timeout: 20000 });
            logger.info("Navigated to book a demo page.");
      };
      async assertDemoFormFieldsAreVisible() {
            logger.info("Asserting booking demo form fields are visible.");
            await expect(this.firstNameInputField).toBeVisible();
            await expect(this.firstNameInputField).toHaveAttribute('placeholder', this.formPlaceholders.firstName);
            await expect(this.lastNameInputField).toBeVisible();
            await expect(this.lastNameInputField).toHaveAttribute('placeholder', this.formPlaceholders.lastName);
            await expect(this.emailInputField).toBeVisible();
            await expect(this.emailInputField).toHaveAttribute('placeholder', this.formPlaceholders.email);
            await expect(this.phoneNumberInputField).toBeVisible();
            await expect(this.phoneNumberInputField).toHaveAttribute('placeholder', this.formPlaceholders.phoneNumber);
            await expect(this.jobTitleInputField).toBeVisible();
            await expect(this.jobTitleInputField).toHaveAttribute('placeholder', this.formPlaceholders.jobTitle);
            await expect(this.countryInputField).toBeVisible();
            await expect(this.countryInputField).toHaveAttribute('placeholder', this.formPlaceholders.country);
            await expect(this.messageInputField).toBeVisible();
            await expect(this.messageInputField).toHaveAttribute('placeholder', this.formPlaceholders.message);
            await expect(this.recaptchaText).toBeVisible();
            await expect(this.submitButton).toBeVisible();
            logger.info("All booking demo form fields are visible.");
      };
      async assertDemoFormFieldsAreFilled() {
            logger.info("Asserting booking demo form fields are interactable.");
            await expect(this.firstNameInputField).toHaveValue(demoCostumer.firstName);
            await expect(this.lastNameInputField).toHaveValue(demoCostumer.lastName);
            await expect(this.emailInputField).toHaveValue(demoCostumer.email);
            await expect(this.phoneNumberInputField).toHaveValue(demoCostumer.phoneNumber);
            await expect(this.jobTitleInputField).toHaveValue(demoCostumer.jobTitle);
            await expect(this.countryInputField).toHaveValue(demoCostumer.country);
            await expect(this.messageInputField).toHaveValue(demoCostumer.message);
            await expect(this.submitButton).toBeEnabled();
            logger.info("All booking demo form fields are interactable.");
      };
};