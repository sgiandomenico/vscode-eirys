import { hsl } from "../src/color.js";

describe("hsl", () => {
  describe("angle", () => {
    test("red", () => expect(hsl(0, 1, 0.5)).toEqual("#ff0000"));
    test("green", () => expect(hsl(120, 1, 0.5)).toEqual("#00ff00"));
    test("blue", () => expect(hsl(240, 1, 0.5)).toEqual("#0000ff"));

    test("yellow", () => expect(hsl(60, 1, 0.5)).toEqual("#ffff00"));
    test("cyan", () => expect(hsl(180, 1, 0.5)).toEqual("#00ffff"));
    test("magenta", () => expect(hsl(300, 1, 0.5)).toEqual("#ff00ff"));
  });

  describe("saturation", () => {
    test("grey 1", () => expect(hsl(0, 0, 0.5)).toEqual("#808080"));
    test("grey 2", () => expect(hsl(30, 0, 0.5)).toEqual("#808080"));
    test("grey 3", () => expect(hsl(120, 0, 0.5)).toEqual("#808080"));
  });

  describe("lightness", () => {
    test("white 1", () => expect(hsl(0, 1, 1)).toEqual("#ffffff"));
    test("white 2", () => expect(hsl(30, 1, 1)).toEqual("#ffffff"));
    test("white 3", () => expect(hsl(120, 1, 1)).toEqual("#ffffff"));

    test("black 1", () => expect(hsl(0, 1, 0)).toEqual("#000000"));
    test("black 2", () => expect(hsl(30, 1, 0)).toEqual("#000000"));
    test("black 3", () => expect(hsl(120, 1, 0)).toEqual("#000000"));
  });
});
