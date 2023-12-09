import { faker } from "@faker-js/faker";
import { Some } from "~/Maybe/Some";

describe("Some", () => {
  describe(".map()", () => {
    it("should return the mapped value", () => {
      // given
      const value = 1;
      const maybe = new Some<number>(value);

      // then
      expect(maybe.map((value) => value * 2).getOrThrow()).toBe(2);
    });
  });

  describe(".get", () => {
    it("should return the value", () => {
      // given
      const value = faker.lorem.words();
      const some = new Some(value);

      // then
      expect(some.get()).toEqual(value);
    });
  });
});
