let firstNumber = ''
let secondNumber = ''
let operator = ''


const addition = (a, b) => a + b

const subtraction = (a, b) => a - b

const multiplication = (a, b) => a * b

const division = (a, b) => a / b;

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

const screen = document.querySelector('#screen')

const numbers = document.querySelectorAll('.number')

const operators = document.querySelectorAll('.operator')

const equalButton = document.querySelector('#equal')

const decimalPoint = document.querySelector('#decimal')

numbers.forEach(button => {
  button.addEventListener('click', (e) => {
    const clickedNumber = e.target.textContent;
    screen.textContent += clickedNumber
  })
})