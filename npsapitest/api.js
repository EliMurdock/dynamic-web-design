// api.js
const baseUrl = "https://developer.nps.gov/api/v1/";

async function getJson(endpoint) {
  // replace this with your actual key
  const apiKey = "rQibpD1S8bOX69gNh3D0kE9wFVnW99ZBCMxpNCB7";
  // construct the url: baseUrl + endpoint + parameters
  const url = baseUrl + endpoint;
  // set the options. The important one here is the X-Api-Key
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": apiKey
      }
  }
  // make the request
  const response = await fetch(url, options)
  const data = await response.json()
  console.log(data)
  return data;
}

async function renderClimbingList() {
    const endpoint = "activities/parks?id=B12FAAB9-713F-4B38-83E4-A273F5A43C77"
    const listElement = document.getElementById("outputList")
    const data = await getJson(endpoint)
    const parks = data.data[0].parks
    console.log(parks);
    const listHTML = parks.map(listTemplate).join("")
    console.log(listHTML);
    listElement.innerHTML = listHTML;
}

function listTemplate(item) {
    return `<li><a href="${item.url}">${item.fullName}</a> ${item.states}</li>`
}

renderClimbingList();

// getJson('alerts?parkCode=acad,dena');