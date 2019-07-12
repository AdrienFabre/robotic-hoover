import Navigator from "./navigator";

describe("Navigator", () => {
  let navigator;

  describe("with correct directions", () => {
    beforeEach(() => {
      navigator = new Navigator("input.txt");
      navigator.executeDrivingInstructions();
    });
    it("Can return the hoover final position", () => {
      expect(navigator.finalPosition()).toBe("1 3");
    });
    it("Can return the number of dirt cleaned up", () => {
      expect(navigator.cleanedDirt()).toBe("1");
    });
  });
  describe("with incorrect directions", () => {
    it("Throws error if the directions lead outside of the room", () => {
      navigator = new Navigator("inputWrongDirections.txt");
      expect(() => {
        navigator.executeDrivingInstructions();
      }).toThrow(
        "The directions lead into the wall! Please change directions."
      );
    });
  });
});
