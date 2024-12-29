function longestWord(array) {
  let longestWord = array[0];

  for (let index = 1; index < array.length; index++) {
    if (array[index].length > longestWord.length) {
      longestWord = array[index];
    }
  }

  return longestWord;
}

function getMark(actual, expected) {
  return actual === expected ? "✅" : "❌";
}

function makeMessage(array, result, expected) {
  const markStatus = getMark(result, expected);
  const expectedSegment = ` long word in "[${array}]" should be "${expected}"`;
  const actualSegment = ` and is "${result}"`;
  const message = markStatus + expectedSegment + actualSegment;

  console.log(message);
}

function testLongestWord(array, expected) {
  const result = longestWord(array);
  makeMessage(array, result, expected);
}

function testAll() {
  testLongestWord(["ab", "abc"], "abc");
  testLongestWord(["aba", "abc"], "aba");
}

testAll();