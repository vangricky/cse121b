// Module to fetch and display random dog pictures
const dogAPI = {
  apiKey: "YOUR_API_KEY", // Replace with your actual API key from a dog picture API

  // Function to fetch a random dog picture
  async fetchRandomDog() {
    const apiUrl = `https://dog.ceo/api/breeds/image/random`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data.message; // Returns the URL of the random dog picture
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  },
};

// Function to handle the button click and display a random dog picture
async function handleButtonClick() {
  const dogImage = document.getElementById("dog-pic");
  const randomDogImageURL = await dogAPI.fetchRandomDog();

  if (randomDogImageURL) {
    dogImage.src = randomDogImageURL;
  } else {
    dogImage.src = ""; // Clear the image if there's an error
  }
}

// Event listener for the button click
document
  .getElementById("get-dog-button")
  .addEventListener("click", handleButtonClick);
