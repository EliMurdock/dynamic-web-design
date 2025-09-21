import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;


function parkInfoTemplate(info) {
  return `<a href="/" class="cover-picture-title">${info.name}</a>
  <p class="cover-picture-subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
  </p>`;
}

const coverPictureText = document.querySelector(".cover-picture-text");
coverPictureText.innerHTML = parkInfoTemplate(parkData);

document.title = parkData.name;

const coverPicture = document.querySelector(".cover-picture > img");
const images = parkData.images;
let currentImage = 0;

function changeCoverPicture() {
    coverPicture.src = images[currentImage].url;
    currentImage = (currentImage + 1) % images.length;
}

changeCoverPicture();
setInterval(changeCoverPicture, 10000);
