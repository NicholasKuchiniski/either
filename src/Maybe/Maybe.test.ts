import { faker } from "@faker-js/faker";
import { Maybe } from "~/Maybe/Maybe";

describe("Maybe", () => {
  describe(".map()", () => {
    it("should return the mapped value", () => {
      // given
      const value = 1;
      const maybe = Maybe<number>(value);

      // then
      expect(maybe.map((value) => value * 2).getOrThrow()).toBe(2);
    });

    it("should return none when original value is empty", () => {
      // given
      const value = 1;
      const maybe = Maybe<number>(null);

      // then
      expect(maybe.map((value) => value * 2).getOrElse(() => value)).toBe(
        value,
      );
    });
  });

  describe(".getOrElse()", () => {
    it("should return value when value is not empty", () => {
      // given
      const value = faker.lorem.words();
      const maybe = Maybe(value);

      // then
      expect(maybe.getOrElse(() => "")).toBe(value);
    });

    it("should return else when value is empty", () => {
      // given
      const value = faker.lorem.words();
      const maybe = Maybe<string>(null);

      // then
      expect(maybe.getOrElse(() => value)).toBe(value);
    });
  });

  describe(".getOrThrow()", () => {
    it("should return value when value is not empty", () => {
      // given
      const value = faker.lorem.words();
      const maybe = Maybe(value);

      // then
      expect(maybe.getOrThrow()).toBe(value);
    });

    it("should throw error when value is empty", () => {
      // given
      const maybe = Maybe<string>(null);

      // then
      expect(() => maybe.getOrThrow()).toThrow("Value is not defined.");
    });
  });

  describe(".isDefined()", () => {
    it("should return true when value is defined", () => {
      // given
      const value = faker.lorem.words();
      const maybe = Maybe(value);

      // then
      expect(maybe.isDefined()).toBeTruthy();
    });

    it("should return false when value is empty", () => {
      // given
      const maybe = Maybe(null);

      // then
      expect(maybe.isDefined()).toBeFalsy();
    });
  });

  describe(".isEmpty()", () => {
    it("should return false when value is empty", () => {
      // given
      const maybe = Maybe(null);

      // then
      expect(maybe.isEmpty()).toBeTruthy();
    });

    it("should return false when value is not empty", () => {
      // given
      const value = faker.lorem.words();
      const maybe = Maybe(value);

      // then
      expect(maybe.isEmpty()).toBeFalsy();
    });
  });
});
