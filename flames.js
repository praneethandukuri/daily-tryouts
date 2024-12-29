function removeSpaces(string, index) {
  if (index === string.length) {
    return '';
  }

  if (string[index] === ' ') {
    return removeSpaces(string, index + 1);
  }

  return string[index] + removeSpaces(string, index + 1);
}

function toUpper(string) {
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let upperCasedString = '';

  for (let index = 0; index < string.length; index++) {
    const charIndexOfUpperCase = findIndex(lowerCase, string[index]);
    const isCharLowerCase = charIndexOfUpperCase !== -1;
    upperCasedString += isCharLowerCase ? upperCase[charIndexOfUpperCase] : 
    string[index];
  }
  return upperCasedString;
}

function getName(number) {
  const name = prompt('Enter name' + number + ':');
  const nameWithoutSpaces =  removeSpaces(name, 0);
  return toUpper(nameWithoutSpaces);
}

function slice(string, start, end) {
  if (start > end) {
    return '';
  }

  return string[start] + slice(string, start + 1, end);
}

function findIndexOfChar(string, char, index) {
  if (index === string.length) {
    return -1;
  }

  if (string[index] === char) {
    return index;
  }

  return findIndexOfChar(string, char, index + 1);
}

function findIndex(string, char) {
  return findIndexOfChar(string, char, 0);
}

function removeChar(string, index, reverseOrder) {
  const stringBeforeChar = slice(string, 0, index - 1);
  const stringAfterChar = slice(string, index + 1, string.length - 1);

  if (reverseOrder) {
    return stringAfterChar + stringBeforeChar;
  }

  return stringBeforeChar + stringAfterChar;
}

function getUnmatchedCharsCount(string1, string2) {
  let cString1 = string1;
  let cString2 = string2;
  let index = 0;

  while (index < cString1.length) {
    const charIndex = findIndex(cString2, cString1[index]);
    if (charIndex !== -1) {
      cString1 = removeChar(cString1, index, false);
      cString2 = removeChar(cString2, charIndex, false);
      index--;
    }
    index++;
  }

  return cString1.length + cString2.length;
}

function getResult(count) {
  let flamesResult = 'FLAMES';

  while (flamesResult.length !== 1) {
    let eliminatedIndex = (count % flamesResult.length) - 1;
    if (eliminatedIndex === -1) {
      eliminatedIndex = flamesResult.length - 1;
    }
    flamesResult = removeChar(flamesResult, eliminatedIndex, true);
  }

  return flamesResult;
}

function playFlames() {
  const name1 = getName(1);
  const name2 = getName(2);

  const unmatchedCharsCount = getUnmatchedCharsCount(name1, name2);
  return getResult(unmatchedCharsCount);
}

console.log(playFlames());

// const FLAMES = '
// ⬛⬛⬛⬛⬜⬛⬜⬜⬜⬜⬜⬛⬛⬜⬜⬛⬛⬜⬛⬛⬜⬛⬛⬛⬛⬜⬜⬛⬛⬛
// ⬛⬜⬜⬜⬜⬛⬜⬜⬜⬜⬛⬜⬜⬛⬜⬛⬜⬛⬜⬛⬜⬛⬜⬜⬜⬜⬛⬜⬜⬜
// ⬛⬛⬛⬜⬜⬛⬜⬜⬜⬜⬛⬛⬛⬛⬜⬛⬜⬛⬜⬛⬜⬛⬛⬛⬜⬜⬜⬛⬛⬜
// ⬛⬜⬜⬜⬜⬛⬜⬜⬜⬜⬛⬜⬜⬛⬜⬛⬜⬜⬜⬛⬜⬛⬜⬜⬜⬜⬜⬜⬜⬛
// ⬛⬜⬜⬜⬜⬛⬛⬛⬛⬜⬛⬜⬜⬛⬜⬛⬜⬜⬜⬛⬜⬛⬛⬛⬛⬜⬛⬛⬛⬜
// ⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜
// '