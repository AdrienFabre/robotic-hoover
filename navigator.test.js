import Navigator from "./navigator";

describe("Navigator", () => {
  let navigator;

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
