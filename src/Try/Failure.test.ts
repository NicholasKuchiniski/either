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
});
