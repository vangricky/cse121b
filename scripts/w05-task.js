/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("html");
templeList = [];

const displayTemples = (temples) => {
  forEach(temples);
  {
    const articleCreation = document.createElement("article");
    const headingThree = document.createElement("h3");
    headingThree.textContent = templeList.templeName;
    const image = document.createElement("img");
    image.setAttribute("src", templeList.imageUrl);
    image.setAttribute("alt", templeList.location);

    articleCreation.appendChild(headingThree);
    templesElement.appendChild(articleCreation);
  }
};

/* async displayTemples Function */

/* async getTemples Function using fetch()*/
const getTemples = async () => {
  const response = await fetch(
    "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"
  );
};

/* reset Function */

/* sortBy Function */

getTemples();

/* Event Listener */
