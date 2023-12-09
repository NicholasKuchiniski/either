import { faker } from "@faker-js/faker";
import { Failure } from "~/Try/Failure";
import { Success } from "~/Try/Success";
import { Try } from "~/Try/Try";

describe("Try", () => {
  describe(".getOrThrow()", () => {
    it("should throw error when result is failure", () => {
      // given
      const error = new Error();
      const result: Try<never> = new Failure(error);

      // then
      expect(() => result.getOrThrow()).toThrow(error);
    });

    it("should return value when result is success", () => {
      // given
      const value = faker.number.int();
      const result: Try<number> = new Success(value);

      // then
      expect(result.getOrThrow()).toEqual(value);
    });
  });
});
