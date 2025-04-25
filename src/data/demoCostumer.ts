import { DemoCostumer } from "../types/demoCostumer";
import Generator from "../utils/Generator";

export const demoCostumer: DemoCostumer = {
      firstName: Generator.generateFirstName(),
      lastName: Generator.generateLastName(),
      email: Generator.generateEmail(),
      phoneNumber: Generator.generatePhoneNumber(),
      jobTitle: Generator.generateJobTitle(),
      country: Generator.generateCountry(),
      message: Generator.generateMessage()
};