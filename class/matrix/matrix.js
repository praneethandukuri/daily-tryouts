export class Matrix {
  #data;
  #rows;
  #cols;

  constructor(data) {
    if (!Array.isArray(data) || !data.every((row) => Array.isArray(row))) {
      throw new Error("Invalid matrix format");
    }

    // Check if the matrix is empty
    if (data.length === 0 || data[0].length === 0) {
      this.#rows = 0;
      this.#cols = 0;
      this.#data = [];
      return;
    }

    this.#rows = data.length;
    this.#cols = data[0].length;
    if (!data.every((row) => row.length === this.#cols)) {
      throw new Error("Rows must have the same length");
    }
    this.#data = data.map((row) => [...row]);
  }

  add(matrix) {
    if (!(matrix instanceof Matrix)) throw new Error("Must be a Matrix");
    if (this.#rows !== matrix.#rows || this.#cols !== matrix.#cols) {
      throw new Error(
        `Matrix dimensions must match: ${this.#rows}x${this.#cols} vs ${
          matrix.#rows
        }x${matrix.#cols}`
      );
    }
    return new Matrix(
      this.#data.map((row, i) =>
        row.map((value, j) => value + matrix.#data[i][j])
      )
    );
  }

  sub(matrix) {
    if (!(matrix instanceof Matrix)) throw new Error("Must be a Matrix");
    if (this.#rows !== matrix.#rows || this.#cols !== matrix.#cols) {
      throw new Error(
        `Matrix dimensions must match: ${this.#rows}x${this.#cols} vs ${
          matrix.#rows
        }x${matrix.#cols}`
      );
    }
    return new Matrix(
      this.#data.map((row, i) =>
        row.map((value, j) => value - matrix.#data[i][j])
      )
    );
  }

  multiply(matrix) {
    if (!(matrix instanceof Matrix)) throw new Error("Must be a Matrix");
    if (this.#cols !== matrix.#rows) {
      throw new Error(
        `Invalid multiplication dimensions: ${this.#cols} vs ${matrix.#rows}`
      );
    }
    const result = Array.from({ length: this.#rows }, () =>
      Array(matrix.#cols).fill(0)
    );
    for (let i = 0; i < this.#rows; i++) {
      for (let j = 0; j < matrix.#cols; j++) {
        for (let k = 0; k < this.#cols; k++) {
          result[i][j] += this.#data[i][k] * matrix.#data[k][j];
        }
      }
    }
    return new Matrix(result);
  }

  transpose() {
    return new Matrix(
      Array.from({ length: this.#cols }, (_, i) =>
        this.#data.map((row) => row[i])
      )
    );
  }

  compare(matrix) {
    if (!(matrix instanceof Matrix)) throw new Error("Must be a Matrix");
    if (this.#rows !== matrix.#rows || this.#cols !== matrix.#cols) {
      throw new Error(
        `Matrix dimensions must match: ${this.#rows}x${this.#cols} vs ${
          matrix.#rows
        }x${matrix.#cols}`
      );
    }
    return this.#data.every((row, i) =>
      row.every((val, j) => val === matrix.#data[i][j])
    );
  }

  scalarMultiply(scalar) {
    if (typeof scalar !== "number") {
      throw new Error("Scalar must be a number");
    }
    return new Matrix(
      this.#data.map((row) => row.map((value) => value * scalar))
    );
  }

  identity(size) {
    const identityMatrix = Array.from({ length: size }, (_, i) =>
      Array.from({ length: size }, (_, j) => (i === j ? 1 : 0))
    );
    return new Matrix(identityMatrix);
  }

  zero(rows, cols) {
    const zeroMatrix = Array.from({ length: rows }, () => Array(cols).fill(0));
    return new Matrix(zeroMatrix);
  }

  toString() {
    return this.#data.map((row) => row.join(" ")).join("\n");
  }
}
