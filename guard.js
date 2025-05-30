/**
 * @param {number} num1
 * @param {number} num2
 * @returns {number} the product of `num1` and `num2`
 * @returns `NaN` if either argument is not a number
 */
export function multiply(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return NaN;
  }
  return num1 * num2;
}

/**
 * @param {number} age
 * @returns {string} "Age not valid." if `age` is not a number
 * @returns {string} "You must be 18 or older to vote." if `age` is less than 18
 * @returns {string} "Who would you like to vote for?" if `age` is 18 or older
 */
export function vote(age) {
  // TODO
}

/**
 * @param {string} str1
 * @param {string} str2
 * @returns {string} the concatenation of `str1` and `str2`
 * @returns `undefined` if either argument is not a string
 */
export function concatenateStrings(str1, str2) {
  // TODO
}

function greet(name) {
  if (!name || typeof name !== "string") {
    return "Invalid name";
  }
  return `Hello, ${name}!`;
}

function divide(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Invalid input";
  }
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
}

module.exports = { greet, divide };
