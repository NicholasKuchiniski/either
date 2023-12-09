import { Failure } from "~/Try/Failure";

describe("Failure", () => {
  describe(".isFailure()", () => {
    it("should return true", () => {
      // given
      const failure = new Failure(new Error());

      // then
      expect(failure.isFailure()).toBeTruthy();
    });
  });

  describe(".map()", () => {
    it("should return failure", () => {
      // given
      const error = new Error();
      const failure = new Failure(error).map();

      // then
      expect(failure.isFailure()).toBeTruthy();
      expect(failure.get()).toBe(error);
    });
  });
});
