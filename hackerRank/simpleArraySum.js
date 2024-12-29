function simpleArraySum(array) {
  let sum = 0;

  for (let index = 0; index < array.length; index++) {
    sum += array[index];
  }

  return sum;
}

function getMark(actual, expected) {
  return actual === expected ? "✅" : "❌";
}

function makeMessage(array, result, expected) {
  const markStatus = getMark(result, expected);
  const expectedSegment = ` sum of "[${array}]" should be "${expected}"`;
  const actualSegment = ` and is "${result}"`;
  const message = markStatus + expectedSegment + actualSegment;

  console.log(message);
}

function testSimpleArraySum(array, expected) {
  const result = simpleArraySum(array);
  makeMessage(array, result, expected);
}

function testAll() {
  testSimpleArraySum([1, 2, 3, 4, 10, 11], 31);
  testSimpleArraySum([1, 2, 3, 4], 10);

}

testAll();