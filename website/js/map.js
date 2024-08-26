let mapIndex = 0;
const map = [
  {
    moduleName: "ARENA",
    moduleIcon: "../image/map/ARAM.webp",
    moduleVideo: "../videos/arenaV.mp4",
    moduleTitle: "CALLING ALL DYNAMIC DUOS",
    moduleDesc:
      "Throw down across a series of maps, draft augments and items, and climb to the top with your partner in this 2v2v2v2v2v2v2v2 tournament.",
  },
  {
    moduleName: "SUMMONER'S RIFT",
    moduleIcon: "../image/map/SR.webp",
    moduleVideo: "../videos/SRV.mp4",
    moduleTitle: "THE MOST POPULAR GAME MODE",
    moduleDesc:
      "Clear your lane, dive into epic 5v5 team fights, and destroy the enemy nexus before they destroy yours.",
  },
  {
    moduleName: "ARAM",
    moduleIcon: "../image/map/ARAM.webp",
    moduleVideo: "../videos/ARAMV.mp4",
    moduleTitle: "ALL RANDOM, ALL MID",
    moduleDesc:
      "Battle across an icy bridge as your team of random champions charge toward the enemy Nexus in this chaotically fun 5v5 game mode.",
  },
  {
    moduleName: "TEAMFIGHT TACTICS",
    moduleIcon: "../image/map/TT.webp",
    moduleVideo: "../videos/TTV.mp4",
    moduleTitle: "A FREE-FOR-ALL WAR FOR SUPREMACY",
    moduleDesc:
      "Assemble a squad of champions that battle on your behalf. Outlast all seven of your opponents and become the last person standing.",
  },
];

function renderMap() {
  const left = document.getElementById("mapleft");
  const right = document.getElementById("mapright");

  let mapLeftHtmlString = "";
  map.forEach(function (m, mi) {
    mapLeftHtmlString += `
      <div class="module ${
        mapIndex == mi ? "active" : ""
      }" onclick="changeMap(${mi})">
        <img src="${m.moduleIcon}" alt="#" />
        <span>${m.moduleName}</span>
      </div>
    `;
  });

  left.innerHTML = mapLeftHtmlString;

  right.innerHTML = `
    <video src="${map[mapIndex].moduleVideo}" autoplay muted loop></video>
    <h2><i>${map[mapIndex].moduleTitle}</i></h2>
    <span><i>${map[mapIndex].moduleDesc}</i></span>
  `;
}

function changeMap(mi) {
  mapIndex = mi;

  const mapItems = document.querySelectorAll(".mapleft .module");
  mapItems.forEach(function (e, i) {
    if (mapIndex === i) {
      e.classList.add("active");
    } else {
      e.classList.remove("active");
    }
  });

  const videoElement = document.querySelector("#mapright video");
  videoElement.setAttribute("src", map[mapIndex].moduleVideo);

  const titleElement = document.querySelector("#mapright h2 i");
  titleElement.innerText = map[mapIndex].moduleTitle;

  const descElement = document.querySelector("#mapright span i");
  descElement.innerText = map[mapIndex].moduleDesc;
}

renderMap();
