# Matrix Class 📊

Welcome to the Matrix Class project! This JavaScript class provides various functionalities for matrix operations, including addition, subtraction, multiplication, and more. Below is an overview of its capabilities and usage examples.

## Table of Contents 📑

- [Features](#features-✨)
- [Usage](#usage-🛠️)
- [Methods](#methods-📚)
- [Testing](#testing-🧪)

## Features ✨

- ➕ Matrix addition
- ➖ Matrix subtraction
- ✖️ Matrix multiplication
- 🔄 Transpose a matrix
- 🔍 Compare two matrices for equality
- 🔢 Scalar multiplication
- 🟢 Create identity matrices
- ⬜ Create zero matrices
- 📄 String representation of matrices

## Usage 🛠️

Here’s how to use the Matrix class:

```javascript
import { Matrix } from "./matrix.js";

// Creating a matrix
const matrixA = new Matrix([
  [1, 2],
  [3, 4],
]);
const matrixB = new Matrix([
  [5, 6],
  [7, 8],
]);

// Adding matrices
const resultAdd = matrixA.add(matrixB);
console.log(resultAdd.toString()); // Output: "6 8\n10 12"

// Subtracting matrices
const resultSub = matrixA.sub(matrixB);
console.log(resultSub.toString()); // Output: "-4 -4\n-4 -4"

// Multiplying matrices
const resultMul = matrixA.multiply(matrixB);
console.log(resultMul.toString()); // Output: "19 22\n43 50"

// Transposing a matrix
const transposed = matrixA.transpose();
console.log(transposed.toString()); // Output: "1 3\n2 4"

// Comparing matrices
const isEqual = matrixA.compare(matrixB);
console.log(isEqual); // Output: false
```

## Methods 📚

### Constructor

- `Matrix(data)` - Initializes a new matrix with the provided data, validating its format.

### Instance Methods

- ➕ `add(matrix)` - Adds the given matrix to the current matrix.
- ➖ `sub(matrix)` - Subtracts the given matrix from the current matrix.
- ✖️ `multiply(matrix)` - Multiplies the current matrix by the given matrix.
- 🔄 `transpose()` - Returns a new matrix that is the transpose of the current matrix.
- 🔍 `compare(matrix)` - Checks if the current matrix is equal to the given matrix.
- 🔢 `scalarMultiply(scalar)` - Multiplies the current matrix by a scalar.
- 🟢 `identity(size)` - Returns an identity matrix of the specified size.
- ⬜ `zero(rows, cols)` - Returns a zero matrix with the specified dimensions.
- 📄 `toString()` - Returns a string representation of the matrix.

## Testing 🧪

**Run the tests**:

```bash
deno test
```
