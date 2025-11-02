import { parkInfoTemplate , footerTemplate} from "./templates.mjs";


function setHeaderInfo(data) {
  const disclaimer = document.querySelector(".disclaimer > a");
  disclaimer.href = data.url;
  disclaimer.innerHTML = data.fullName;

  const coverPictureText = document.querySelector(".cover-picture-text");
  coverPictureText.innerHTML = parkInfoTemplate(data);

  document.title = data.name;

  const coverPicture = document.querySelector(".cover-picture > img");
  const images = data.images;
  let currentImage = 5;

  function changeCoverPicture() {
      coverPicture.src = images[currentImage].url;
      currentImage = (currentImage + 1) % images.length;
  }

  changeCoverPicture();
  setInterval(changeCoverPicture, 10000);
}

function setFooter(data) {
    const footerElement = document.querySelector("#park-footer");
    footerElement.insertAdjacentHTML("afterbegin", footerTemplate(data));
}
function setHeaderFooter(parkData) {
    setHeaderInfo(parkData);
    setFooter(parkData);
}


export { setHeaderFooter };
