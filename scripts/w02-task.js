/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Ricky Vang";

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const profilePicture = "images/ricky-img.JPG";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */
let foods = [
  "Pizza",
  "Hamburger",
  "Cake",
  "Ice Cream",
  "Chicken",
  "Pork",
  "Beef",
];

foodElement.innerHTML = `<p>${foods}</p>`;

foods.push("Spaghetti", "Pasta", "Chow Mein");
foodElement.innerHTML += `<br>${foods}`;

foods.shift();
foodElement.innerHTML += `<br>${foods}`;

foods.pop();
foodElement.innerHTML += `<br>${foods}`;
