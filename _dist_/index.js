import { registerPicture } from "./lazy.js";

const ENDPOINT = "https://randomfox.ca/images";

const addPictureButton = document.getElementById("add-picture-button");
const picturesContainer = document.getElementById("pictures");

const getRandomNumber = () => {
  const min = 1;
  const max = 122;

  const random = Math.floor(Math.random() * (max - min)) + min;

  return random;
}

const buttonEventListener = () => {
  const pictureNumber = getRandomNumber();
  const newPictureURL = `${ENDPOINT}/${pictureNumber}.jpg`;

  const pictureWrapperElement = document.createElement("div");
  pictureWrapperElement.classList.add("p-4");

  const pictureElement = document.createElement("img");
  pictureElement.dataset.src = newPictureURL;
  pictureElement.alt = `fox #${pictureNumber}`;
  pictureElement.classList.add("mx-auto");
  pictureElement.width = "320";

  pictureWrapperElement.append(pictureElement);

  picturesContainer.append(pictureWrapperElement);
  registerPicture(pictureElement);
}

addPictureButton.addEventListener("click", buttonEventListener);
