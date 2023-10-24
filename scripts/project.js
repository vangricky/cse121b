const dogAPI = {
  async fetchRandomDog() {
    const apiUrl = `https://dog.ceo/api/breeds/image/random`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data.message;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  },
};

async function handleButtonClick() {
  const dogImage = document.getElementById("dog-pic");
  const randomDogImageURL = await dogAPI.fetchRandomDog();

  if (randomDogImageURL) {
    dogImage.src = randomDogImageURL;
  } else {
    dogImage.src = "";
  }
}

document
  .getElementById("get-dog-button")
  .addEventListener("click", handleButtonClick);
