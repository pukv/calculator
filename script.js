let firstNumber = ''
let secondNumber = ''
let operator = ''


const addition = (a, b) => a + b

const subtraction = (a, b) => a - b

const multiplication = (a, b) => a * b

const division = (a, b) => a / b;

const operate = function(operator, num1, num2) {
  num1 = parseFloat(num1)
  num2 = parseFloat(num2)

  let result;

  if (operator === '+') {
    result = addition(num1, num2)
  } else if (operator === '-') {
    result = subtraction(num1, num2)
  } else if (operator === 'x') {
    result = multiplication(num1, num2)
  } else if (operator === '/' && num2 === 0) {
    return 'Nice try smart guy, go back to school.'
  } else {
    result = division(num1, num2)
  }

  return Math.round((result + Number.EPSILON) * 100) / 100;

}

const screen = document.querySelector('#screen')
const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const equalButton = document.querySelector('#equal')
const decimalPoint = document.querySelector('#decimal')
const clearScreen = document.querySelector('#clear')
const bottomNumber = document.querySelector('.bottom-number')
const topNumber = document.querySelector('.top-number')

numbers.forEach(button => {
  button.addEventListener('click', (e) => {
    const clickedNumber = e.target.textContent;
    bottomNumber.textContent += clickedNumber
  })
})

operators.forEach(button => {
  button.addEventListener('click', (e) => {
    if (firstNumber === '') {
      firstNumber = bottomNumber.textContent;
    } else {
      secondNumber = bottomNumber.textContent
      bottomNumber.textContent = operate(operator, firstNumber, secondNumber)
      firstNumber = bottomNumber.textContent;
    }

    operator = e.target.textContent;
    topNumber.textContent = `${firstNumber} ${operator}`
    bottomNumber.textContent = ''
  })
})

clearScreen.addEventListener('click', () => {
  bottomNumber.textContent = ''
  topNumber.textContent = ''
  firstNumber = ''
  secondNumber = ''
  operator = ''
})

equalButton.addEventListener('click', () => {
  if (firstNumber === '' || operator === '') return;
  secondNumber = bottomNumber.textContent;

  bottomNumber.textContent = operate(operator, firstNumber, secondNumber)
  topNumber.textContent = `${firstNumber} ${operator} ${secondNumber}` 
  firstNumber = bottomNumber.textContent
  operator = ''
})

decimalPoint.addEventListener('click', () => {
  if (!bottomNumber.textContent.includes('.')) { 
    bottomNumber.textContent += '.';
  }
});
