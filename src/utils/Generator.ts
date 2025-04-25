import { faker } from '@faker-js/faker';

export default class Generator {
      static generateFirstName(length?: number): string {
            const name = faker.person.firstName();
            if (length) {
                  return name.slice(0, length);
            }
            return name;
      };
      static generateLastName(length?: number): string {
            const name = faker.person.lastName();
            if (length) {
                  return name.slice(0, length);
            }
            return name;
      };
      static generateEmail(): string {
            return faker.internet.email();
      };
      static generatePhoneNumber(): string {
            return faker.phone.number().replace(' ', '');
      };
      static generateJobTitle(): string {
            return faker.person.jobTitle();
      };
      static generateCountry(): string {
            return faker.location.country();
      };
      static generateMessage(): string {
            return faker.lorem.sentence();
      };
};