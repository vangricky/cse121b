/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
  return number1 + number2;
}

function addNumbers() {
  let addNumber1 = Number(document.querySelector("#add1").value);
  let addNumber2 = Number(document.querySelector("#add2").value);

  document.querySelector("#sum").value = add(addNumber1, addNumber2);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(number1, number2) {
  return number1 - number2;
}

function subtractNumbers() {
  let subtractNumber1 = Number(document.querySelector("#subtract1").value);
  let subtractNumber2 = Number(document.querySelector("#subtract2").value);

  document.querySelector("#difference").value = subtract(
    subtractNumber1,
    subtractNumber2
  );
}

document
  .querySelector("#subtractNumbers")
  .addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */

const multiply = (factor1, factor2) => factor1 * factor2;

const multiplyNumbers = () => {
  let multiplyNumber1 = Number(document.querySelector("#factor1").value);
  let multiplyNumber2 = Number(document.querySelector("#factor2").value);

  document.querySelector("#product").value = multiply(
    multiplyNumber1,
    multiplyNumber2
  );
};

document
  .querySelector("#multiplyNumbers")
  .addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */

const divide = (dividend, divisor) => dividend / divisor;

const divideNumbers = () => {
  let divideNumber1 = Number(document.querySelector("#dividend").value);
  let divideNumber2 = Number(document.querySelector("#divisor").value);

  document.querySelector("#quotient").value = divide(
    divideNumber1,
    divideNumber2
  );
};

document
  .querySelector("#divideNumbers")
  .addEventListener("click", divideNumbers);

/* Decision Structure */

const currentDate = new Date();

let currentYear;
currentYear = currentDate.getFullYear();

document.querySelector("#year").value = currentYear;

/* ARRAY METHODS - Functional Programming */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

/* Output Source Array */
const sourceArray = document.querySelector("#array");
sourceArray.textContent = numbers;

/* Output Odds Only Array */
const oddsArray = document.querySelector("#odds");
const getOdds = numbers.filter((number) => number % 2 === 1);

oddsArray.textContent = getOdds;

/* Output Evens Only Array */
const evenArray = document.querySelector("#evens");
const getEvens = numbers.filter((number) => number % 2 === 0);

evenArray.textContent = getEvens;

/* Output Sum of Org. Array */
const sumWithValue = numbers.reduce((sum, number) => sum + number);

const sumOfArray = document.querySelector("#sumOfArray");
sumOfArray.textContent = sumWithValue;

/* Output Multiplied by 2 Array */
const multiplyByTwo = numbers.map((number) => number * 2);
const timesTwo = document.querySelector("#multiplied");

timesTwo.textContent = multiplyByTwo;

/* Output Sum of Multiplied by 2 Array */
const sumArray = multiplyByTwo.reduce(
  (acc, currentValue) => acc + currentValue
);

const sumOfMultiplied = document.querySelector("#sumOfMultiplied");
sumOfMultiplied.textContent = sumArray;
