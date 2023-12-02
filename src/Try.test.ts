import { faker } from "@faker-js/faker";
import { Failure, Success, Try } from "~/Try";

describe("Test", () => {
  describe(".isSuccess()", () => {
    it("should return true when task result is a success", async () => {
      // given
      const value = faker.lorem.words();
      const task = await Try(async () => Success(value));

      // then
      expect(task.isSuccess()).toBeTruthy();
      expect(task.isFailure()).toBeFalsy();
      expect(task.get()).toEqual(value);
    });
  });

  describe(".isFailure()", () => {
    it("should return true when task result is a failure", async () => {
      // given
      const error = new Error();
      const task = await Try(async () => Failure(error));

      // then
      expect(task.isFailure()).toBeTruthy();
      expect(task.isSuccess()).toBeFalsy();
      expect(task.get()).toEqual(error);
    });
  });
});
