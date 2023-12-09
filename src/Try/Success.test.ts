import { faker } from "@faker-js/faker";
import { Success } from "~/Try/Success";

describe("Success", () => {
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

  describe(".map()", () => {
    it("should return the mapped value", () => {
      // given
      const value = faker.lorem.words();
      const mappedValue = faker.lorem.words();
      const success = new Success(value).map(() => mappedValue);

      // then
      expect(success.isSuccess()).toBeTruthy();
      expect(success.get()).toEqual(mappedValue);
    });
  });
});
