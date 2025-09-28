import { getParkData, getParkInfoLinks } from "./parkService.mjs";
import { setHeaderFooter } from "./setHeaderFooter.js";
import { mediaCardTemplate } from "./templates.mjs";

const parkData = getParkData();
const parkInfoLinks = getParkInfoLinks();

function setParkIntro(data) {
  const introElement = document.querySelector(".intro");
  introElement.innerHTML = `<h1>${data.fullName}</h1><p>${data.description}</p>`;
}

function setParkInfoLinks(data) {
  const infoElement = document.querySelector(".info");
  // turn data into html strings
  const html = data.map(mediaCardTemplate);
  // combine html strings
  infoElement.insertAdjacentHTML("afterbegin", html.join(""));
}


setHeaderFooter(parkData);
setParkIntro(parkData);
setParkInfoLinks(parkInfoLinks);

