import { getParkData , getAlerts, getVisitorCenterData} from "./parkService.mjs";
import { setHeaderFooter } from "./setHeaderFooter.js";
import { alertTemplate, visitorCenterTemplate} from "./templates.mjs";

function setAlerts(alerts) {
  const alertsContainer = document.querySelector(".alerts > ul");
  alertsContainer.innerHTML = "";
  const hmtl = alerts.map(alertTemplate);
  alertsContainer.insertAdjacentHTML("beforeend", hmtl.join(""));
}

function setVisitorCenters(visitorCenters) {
  const vcContainer = document.querySelector(".visitor-centers > ul");
  vcContainer.innerHTML = "";
  const hmtl = visitorCenters.map(visitorCenterTemplate);
  vcContainer.insertAdjacentHTML("beforeend", hmtl.join(""));
}

function setActivites(activities) {
  const activitiesContainer = document.querySelector(".activities > ul");
  activitiesContainer.innerHTML = "";
  const activityItems = activities.map((activity) => `<li>${activity.name}</li>`);
  activitiesContainer.insertAdjacentHTML("beforeend", activityItems.join(""));
}

async function init() {
  const parkData = await getParkData();
  const alerts = await getAlerts(parkData.parkCode);
  const visitorCenters = await getVisitorCenterData(parkData.parkCode);
  console.log(parkData);
  setHeaderFooter(parkData);
  setAlerts(alerts);
  setVisitorCenters(visitorCenters);
  setActivites(parkData.activities);
}

init();