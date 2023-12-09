import { faker } from "@faker-js/faker";
import { Some } from "~/Maybe/Some";

describe("Some", () => {
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
