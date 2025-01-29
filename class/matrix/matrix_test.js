import { Matrix } from "./matrix.js";
import { assertEquals, assertThrows } from "jsr:@std/assert";
import { describe, it } from "jsr:@std/testing/bdd";

describe("Matrix Class Tests", () => {
  let A, B, C, D, E;

  it("should throw an error for matrix addition with different dimensions", () => {
    const F = new Matrix([
      [1, 2],
      [3, 4],
    ]);
    const G = new Matrix([
      [1, 2, 3],
      [4, 5, 6],
    ]);
    assertThrows(() => F.add(G), Error, "Matrix dimensions must match");
  });

  it("should throw an error for matrix subtraction with different dimensions", () => {
    const F = new Matrix([
      [1, 2],
      [3, 4],
    ]);
    const G = new Matrix([
      [1, 2, 3],
      [4, 5, 6],
    ]);
    assertThrows(() => F.sub(G), Error, "Matrix dimensions must match");
  });

  it("should throw an error for matrix multiplication with invalid dimensions", () => {
    const F = new Matrix([
      [1, 2],
      [3, 4],
    ]);
    const G = new Matrix([
      [1, 2],
      [3, 4],
      [5, 6],
    ]);
    assertThrows(
      () => F.multiply(G),
      Error,
      "Invalid multiplication dimensions"
    );
  });

  it("should throw an error for comparing matrices with different dimensions", () => {
    const F = new Matrix([
      [1, 2],
      [3, 4],
    ]);
    const G = new Matrix([
      [1, 2, 3],
      [4, 5, 6],
    ]);
    assertThrows(() => F.compare(G), Error, "Matrix dimensions must match");
  });

  it("should throw an error for invalid transposing an empty matrix", () => {
    const F = new Matrix([]);
    const expected = new Matrix([]);
    const result = F.transpose();
    assertEquals(result.toString(), expected.toString());
  });

  it("should throw an error for invalid creation of a non-array matrix", () => {
    assertThrows(
      () => new Matrix("not an array"),
      Error,
      "Invalid matrix format"
    );
  });

  it("should throw an error for invalid creation of a matrix with non-array rows", () => {
    assertThrows(() => new Matrix([1, 2, 3]), Error, "Invalid matrix format");
  });

  it("should add identity matrix correctly", () => {
    const identityMatrix = new Matrix([
      [1, 0],
      [0, 1],
    ]);

    A = new Matrix([
      [5, 6],
      [7, 8],
    ]);

    const result = A.add(identityMatrix);
    const expectedResult = "6 6\n7 9";
    assertEquals(result.toString(), expectedResult);
  });

  it("should subtract identity matrix correctly", () => {
    const identityMatrix = new Matrix([
      [1, 0],
      [0, 1],
    ]);
    const result = A.sub(identityMatrix);
    const expectedResult = "4 6\n7 7";
    assertEquals(result.toString(), expectedResult);
  });

  it("should multiply by identity matrix correctly", () => {
    const identityMatrix = new Matrix([
      [1, 0],
      [0, 1],
    ]);
    const result = A.multiply(identityMatrix);
    const expectedResult = "5 6\n7 8";
    assertEquals(result.toString(), expectedResult);
  });

  it("should transpose a 1xN matrix correctly", () => {
    const H = new Matrix([[1, 2, 3]]);
    const transposedH = H.transpose();
    const expectedH = "1\n2\n3";
    assertEquals(transposedH.toString(), expectedH);
  });

  it("should transpose an Nx1 matrix correctly", () => {
    const H = new Matrix([[1], [2], [3]]);
    const transposedH = H.transpose();
    const expectedH = "1 2 3";
    assertEquals(transposedH.toString(), expectedH);
  });
});
