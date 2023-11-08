let homeElement = document.getElementById("home-count");
let homeCount = Number(homeElement.innerHTML);

let guestElement = document.getElementById("guest-count");
let guestCount = Number(guestElement.innerHTML);

function addPoints(points, team) {
  if (team == "home") {
    homeCount += points;
    homeElement.innerHTML = homeCount;
  } else if (team == "guest") {
    guestCount += points;
    guestElement.innerHTML = guestCount;
  }
}
function resetCount() {
  guestCount = 0;
  guestElement.innerHTML = guestCount;
  homeCount = 0;
  homeElement.innerHTML = homeCount;
}

function saveCount() {
  let elem = document.createElement("p");
  elem.textContent = homeCount + ":" + guestCount;
  document.getElementById("results").appendChild(elem);
  resetCount();
}

function clearHistory() {
  let results = document.getElementById("results");
  while (results.firstChild) {
    results.removeChild(results.firstChild);
  }
}
