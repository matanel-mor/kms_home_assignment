import { Page, expect } from "@playwright/test";
import logger from "../utils/Logger";
import { certificateCostumer } from "../data/certificateCostumer";

export default class LighthouseUniversityPage {
      constructor(public page: Page) { }

      private readonly url = `${process.env.BASE_URL}kms-lighthouse-university/`;
      private readonly formPlaceholders = {
            firstName: 'First Name',
            lastName: 'Last Name',
            email: 'Professional Email',
            phoneNumber: 'Phone Number',
            companyName: 'Company name',
            message: 'Message'
      };

      // Selectors
      get certificationsCardsApplyButtons() {
            return this.page.locator('div.elementor-loop-container > div').getByText('Reserve Your Spot');
      };
      get formFirstNameInputField() {
            return this.page.locator('input[name="firstname"]');
      };
      get formLastNameInputField() {
            return this.page.locator('input[name="lastname"]');
      };
      get formEmailInputField() {
            return this.page.locator('input[name="email"]');
      };
      get formPhoneNumberInputField() {
            return this.page.locator('input[name="phone"]');
      };
      get formCompanyNameInputField() {
            return this.page.locator('input[name="company"]');
      };
      get formMessageInputField() {
            return this.page.locator('textarea[name="message"]');
      };

      // Actions
      async selectRandomCertificationCard() {
            logger.info("Selecting random certification card.");
            const cards = await this.certificationsCardsApplyButtons.all();
            const randomIndex = Math.floor(Math.random() * cards.length);
            await cards[randomIndex].click();
      };
      async fillCertificateForm() {
            logger.info("Filling certificate form.");
            await this.formFirstNameInputField.fill(certificateCostumer.firstName);
            await this.formLastNameInputField.fill(certificateCostumer.lastName);
            await this.formEmailInputField.fill(certificateCostumer.email);
            await this.formPhoneNumberInputField.fill(certificateCostumer.phoneNumber);
            await this.formCompanyNameInputField.fill(certificateCostumer.companyName);
            await this.formMessageInputField.fill(certificateCostumer.message);
            logger.info("Filled certificate form.");
      };

      // Assertions
      async assertNavigationToKMSUniversityPage() {
            await expect(this.page).toHaveURL(this.url, { timeout: 20000 });
            logger.info("Navigated to KMS University page.");
      };
      async assertFormFieldsAreVisible() {
            logger.info("Asserting form fields are visible.");
            await expect(this.formFirstNameInputField).toBeVisible();
            await expect(this.formFirstNameInputField).toHaveAttribute('placeholder', this.formPlaceholders.firstName);
            await expect(this.formLastNameInputField).toBeVisible();
            await expect(this.formLastNameInputField).toHaveAttribute('placeholder', this.formPlaceholders.lastName);
            await expect(this.formEmailInputField).toBeVisible();
            await expect(this.formEmailInputField).toHaveAttribute('placeholder', this.formPlaceholders.email);
            await expect(this.formPhoneNumberInputField).toBeVisible();
            await expect(this.formPhoneNumberInputField).toHaveAttribute('placeholder', this.formPlaceholders.phoneNumber);
            await expect(this.formCompanyNameInputField).toBeVisible();
            await expect(this.formCompanyNameInputField).toHaveAttribute('placeholder', this.formPlaceholders.companyName);
            await expect(this.formMessageInputField).toBeVisible();
            await expect(this.formMessageInputField).toHaveAttribute('placeholder', this.formPlaceholders.message);
            logger.info("Form fields are visible.");
      };
      async assertFormFieldsAreFilled() {
            logger.info("Asserting form fields are interactable.");
            await expect(this.formFirstNameInputField).toHaveValue(certificateCostumer.firstName);
            await expect(this.formLastNameInputField).toHaveValue(certificateCostumer.lastName);
            await expect(this.formEmailInputField).toHaveValue(certificateCostumer.email);
            await expect(this.formPhoneNumberInputField).toHaveValue(certificateCostumer.phoneNumber);
            await expect(this.formCompanyNameInputField).toHaveValue(certificateCostumer.companyName);
            await expect(this.formMessageInputField).toHaveValue(certificateCostumer.message);
            logger.info("Form fields are interactable.");
      };
};