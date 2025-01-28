export const convertNumberToString = function (num) {
  let result = "";
  while (num > 0) {
    num--;
    console.log(num);
    result = String.fromCharCode(65 + (num % 26)) + result;
    num = Math.floor(num / 26);
  }
  return result;
};

const userNumber = +prompt("enter a number: ");
console.log(convertNumberToString(userNumber));
