import { None } from "~/Maybe/None";

describe("None", () => {
  describe(".map()", () => {
    it("should return none when original value is empty", () => {
      // given
      const maybe = new None<number>(null);

      // then
      expect(maybe.map((value) => value * 2)).toBeInstanceOf(None);
    });
  });
});
