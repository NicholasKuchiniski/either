import { faker } from "@faker-js/faker";
import { Failure, Success } from "~/Try";

describe("Success", () => {
  describe(".isSuccess()", () => {
    it("should return true", async () => {
      // given
      const value = faker.lorem.words();
      const success = new Success(value);

      // then
      expect(success.isSuccess()).toBeTruthy();
      expect(success.get()).toEqual(value);
    });
  });

  describe(".isFailure()", () => {
    it("should return false", async () => {
      // given
      const value = faker.lorem.words();
      const success = new Success(value);

      // then
      expect(success.isFailure()).toBeFalsy();
    });
  });
});

describe("Failure", () => {
  describe(".isFailure()", () => {
    it("should return true", async () => {
      // given
      const error = new Error();
      const failure = new Failure(error);

      // then
      expect(failure.isFailure()).toBeTruthy();
      expect(failure.get()).toEqual(error);
    });
  });

  describe(".isSuccess()", () => {
    it("should return false", async () => {
      // given
      const error = new Error();
      const failure = new Failure(error);

      // then
      expect(failure.isSuccess()).toBeFalsy();
    });
  });
});
