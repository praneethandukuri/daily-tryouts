class Calculator {
  #a;
  #b;
  #history;

  constructor(a, b) {
    this.#a = a;
    this.#b = b;
    this.#history = [];
  }

  add() {
    return this.#logOperation("add", this.#a + this.#b);
  }

  subtract() {
    return this.#logOperation("subtract", this.#a - this.#b);
  }

  multiply() {
    return this.#logOperation("multiply", this.#a * this.#b);
  }

  divide() {
    this.#checkDivisionByZero();
    return this.#logOperation("divide", this.#a / this.#b);
  }

  #logOperation(operation, result) {
    this.#history.push({
      operation,
      operands: { a: this.#a, b: this.#b },
      result,
    });
    return result;
  }

  #checkDivisionByZero() {
    if (this.#b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
  }

  getHistory() {
    return this.#history;
  }

  displayHistory() {
    console.table(
      this.#history.map((entry) => ({
        Operation: entry.operation,
        Operand_A: entry.operands.a,
        Operand_B: entry.operands.b,
        Result: entry.result,
      }))
    );
  }
}

const calculator = new Calculator(5, 3);
console.log("Addition:", calculator.add());
console.log("Subtraction:", calculator.subtract());
console.log("Multiplication:", calculator.multiply());
console.log("Division:", calculator.divide());

try {
  const zeroCalculator = new Calculator(5, 0);
  console.log("Division by zero:", zeroCalculator.divide());
} catch (error) {
  console.error(error.message);
}

console.log("Operation History:");
calculator.displayHistory();
