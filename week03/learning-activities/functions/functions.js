// Check Your Understanding

//step 1
let firstName = "Ricky";
let lastName = "Vang";

function fullName(firstName, lastName) {
  return `Hello there, ${firstName} ${lastName}!`;
}

fullName();

//Step 2
const fullName = function (first, last) {
  return `${firstName} ${lastName}`;
};

//step 3 , arrow function
const fullName = (firstName, lastName) => `${firstName} ${lastName}`;

//step 4, call fullName function indom
document.querySelector("#fullName").innerHTML = fullName(firstName, lastName);
