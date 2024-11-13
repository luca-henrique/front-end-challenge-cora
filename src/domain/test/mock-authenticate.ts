import { faker } from "@faker-js/faker";
import { AuthenticationParams } from "../use-cases/autentication";

export const mockAuthentication = (): AuthenticationParams => {
  return { email: faker.internet.email(), password: faker.internet.password() };
};
