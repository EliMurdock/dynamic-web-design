import { getParkData, getInfoLinks } from "./parkService.mjs";
import { setHeaderFooter } from "./setHeaderFooter.js";
import { mediaCardTemplate } from "./templates.mjs";



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


function enableNavigation() {
  const menuButton = document.querySelector("#menu-toggle");
  const nav = document.querySelector(".global-nav");

  menuButton.addEventListener("click", () => {
    nav.classList.toggle("show");

    const expanded = nav.classList.contains("show");
    menuButton.setAttribute("aria-expanded", expanded);
  });
}

async function init() {
  const parkData = await getParkData();
  const links = getInfoLinks(parkData.images);
  setHeaderFooter(parkData);
  setParkIntro(parkData);
  setParkInfoLinks(links);
  enableNavigation();
}

init();