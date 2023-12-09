import { faker } from "@faker-js/faker";
import { Success } from "~/Try/Success";

describe("Success", () => {
  describe(".map()", () => {
    it("should return the mapped value", () => {
      // given
      const value = 1;
      const maybe = new Success<number>(value);

      // then
      expect(maybe.map((value) => value * 2).get()).toBe(2);
    });
  });

  describe(".isSuccess()", () => {
    it("should return true", () => {
      // given
      const value = faker.lorem.words();
      const success = new Success(value);

      // then
      expect(success.isSuccess()).toBeTruthy();
      expect(success.get()).toEqual(value);
    });
  });
});
