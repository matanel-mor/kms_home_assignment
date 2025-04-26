import { CertificateCostumer } from '../types/certificateCostumer'
import Generator from '../utils/Generator'

export const certificateCostumer: CertificateCostumer = {
      firstName: Generator.generateFirstName(),
      lastName: Generator.generateLastName(),
      email: Generator.generateEmail(),
      phoneNumber: Generator.generatePhoneNumber(),
      companyName: Generator.generateFirstName(),
      message: Generator.generateMessage()
};