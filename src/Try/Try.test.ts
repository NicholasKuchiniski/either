import { faker } from "@faker-js/faker";
import { Failure } from "~/Try/Failure";
import { Success } from "~/Try/Success";
import { Try } from "~/Try/Try";

describe("Try", () => {
  describe(".getOrThrow()", () => {
    it("should throw when result is failure", () => {
      // when
      const error = new Error();
      const failure: Try<unknown> = new Failure(error);

      // then
      expect(() => failure.getOrThrow()).toThrow(error);
    });

    it("should return value when result is success", () => {
      // when
      const value = faker.number.int();
      const failure: Try<number> = new Success(value);

      // then
      expect(failure.getOrThrow()).toEqual(value);
    });
  });
});
