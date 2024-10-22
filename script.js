let firstNumber = ''
let secondNumber = ''
let operator = ''


const addition = function (a, b) {
  return a + b
};

const subtraction = function (a, b) {
  return a - b
}

const multiplication = function (a, b) {
  return a * b
}

const division = function (a, b) {
  return a / b
}

const operate = function(operator, num1, num2) {
  if (operator === '+') {
    return addition(num1, num2)
  } else if (operator === '-') {
    return subtraction(num1, num2)
  } else if (operator === '*') {
    return multiplication(num1, num2)
  } else {
    return division(num1, num2)
  }
}