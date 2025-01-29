import { Matrix } from "./matrix.js";

const A = new Matrix([
  [1, 2],
  [3, 4],
]);

const B = new Matrix([
  [5, 6],
  [7, 8],
]);

console.log("Matrix A:\n" + A.toString());
console.assert(A.toString() === "1 2\n3 4", "Test Case 1 Failed");
console.log("Matrix B:\n" + B.toString());
console.log("A + B:\n" + A.add(B).toString());
console.log("A - B:\n" + A.sub(B).toString());
console.log("A Transpose:\n" + A.transpose().toString());
console.log("A == B:", A.compare(B)); // false
