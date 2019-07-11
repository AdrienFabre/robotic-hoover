import Navigator from "./navigator";

describe("Navigator", () => {
  let navigator;

  beforeEach(() => {
    navigator = new Navigator("input.txt");
  });
  it("Can return the hoover final position", () => {
    expect(navigator.finalPosition()).toBe("1 3");
  });
});
