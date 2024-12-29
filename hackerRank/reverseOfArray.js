function reverse(array) {
  const reversedArray = [];

  for (let index = array.length - 1; index >= 0; index--) {
    reversedArray.push(array[index]);
  }

  return reversedArray;
}


function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }

  return true;
}

function getMark(areArraysEqual) {
  return areArraysEqual ? "✅" : "❌";
}

function makeMessage(array, result, expected, areArraysEqual) {
  const markStatus = getMark(areArraysEqual);
  const expectedSegment = ` reverse of "[${array}]" should be "[${expected}]"`;
  const actualSegment = ` and is "[${result}]"`;
  const message = markStatus + expectedSegment + actualSegment;

  console.log(message);
}

function testReverse(array, expected) {
  const result = reverse(array);
  const areArraysEqual = areEqual(result, expected);
  makeMessage(array, result, expected, areArraysEqual);
}

function testAll() {
  testReverse([1], [1]);
  testReverse([1, 2], [2, 1]);
  testReverse([1, 2, 3, 4], [4, 3, 2, 1]);
  testReverse([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]);
  testReverse([], []);
}

testAll();