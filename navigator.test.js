import Navigator from "./navigator";

global.console = {
  log: jest.fn(),
  info: jest.fn(),
  error: jest.fn()
};

describe("Navigator", () => {
  let navigator;

  describe("with directions in the room", () => {
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

    it("Can return the report in STDOUT", () => {
      navigator.report();
      expect(global.console.log).toHaveBeenCalledWith("1 3\n1");
    });
  });
  describe("with directions outside the room", () => {
    it("Can drive into a South wall and stay on track", () => {
      navigator = new Navigator("inputExtraDirectionsN.txt");
      navigator.executeDrivingInstructions();
      expect(navigator.finalPosition()).toBe("1 5");
    });
    it("Can drive into a South wall and stay on track", () => {
      navigator = new Navigator("inputExtraDirectionsS.txt");
      navigator.executeDrivingInstructions();
      expect(navigator.finalPosition()).toBe("1 0");
    });
    it("Can drive into a South wall and stay on track", () => {
      navigator = new Navigator("inputExtraDirectionsE.txt");
      navigator.executeDrivingInstructions();
      expect(navigator.finalPosition()).toBe("5 3");
    });
    it("Can drive into a West wall and stay on track", () => {
      navigator = new Navigator("inputExtraDirectionsW.txt");
      navigator.executeDrivingInstructions();
      expect(navigator.finalPosition()).toBe("0 3");
    });
  });
});
