let championIndex = 0;
const champion = [
  {
    title: "ASSASSINS",
    iconImageUrl: "../image/assassins.webp",
    bgImageUrl: "../image/bgassassins.webp",
    championName: "AKALI",
    championImageUrl: "../image/akali.webp",
    desc: "The Rogue Assassin",
  },
  {
    title: "FIGHTERS",
    iconImageUrl: "../image/fighter.webp",
    bgImageUrl: "../image/bgfighters.webp",
    championName: "YASOU",
    championImageUrl: "../image/yasuo.webp",
    desc: "The Unforgiven",
  },
  {
    title: "Mages",
    iconImageUrl: "../image/mages.webp",
    bgImageUrl: "../image/bgmages.webp",
    championName: "LUX",
    championImageUrl: "../image/lux.webp",
    desc: "The Lady of Luminosity",
  },
  {
    title: "MARKSMEN",
    iconImageUrl: "../image/marksmen.webp",
    bgImageUrl: "../image/bgmarksmen.svg",
    championName: "JINX",
    championImageUrl: "../image/jinx.webp",
    desc: "The Loose Cannon",
  },
  {
    title: "SUPPORTS",
    iconImageUrl: "../image/supports.webp",
    bgImageUrl: "../image/bgsupports.png",
    championName: "THRESH",
    championImageUrl: "../image/thresh.webp",
    desc: "The Chain Warden",
  },
  {
    title: "TANKS",
    iconImageUrl: "../image/tanks.webp",
    bgImageUrl: "../image/bgtanks.png",
    championName: "LEONA",
    championImageUrl: "../image/leona.webp",
    desc: "The Radiant Dawn",
  },
];

function renderChampion() {
  const left = document.getElementById("left");
  const right = document.getElementById("right");

  let leftHtmlString = "";

  champion.forEach(function (c, ci) {
    leftHtmlString += `
      <div class="leftitem ${championIndex === ci ? "active" : ""}" 
           onclick="changeChampion(${ci})">
        <img src="${c.iconImageUrl}" alt="${c.title}">
        <strong>${c.title}</strong>
      </div>
    `;
  });
  left.innerHTML = leftHtmlString;

  right.innerHTML = `
    <img src="${champion[championIndex].championImageUrl}" alt="${champion[championIndex].championName}">
    <div class="text">
      <h2>${champion[championIndex].championName}</h2>
      <span>${champion[championIndex].desc}</span>
    </div>
  `;
}

function changeChampion(index) {
  championIndex = index;

  const leftItems = document.querySelectorAll(".left .leftitem");
  leftItems.forEach(function (e, ci) {
    if (championIndex === ci) {
      e.classList.add("active");
    } else {
      e.classList.remove("active");
    }
  });

  const rightImage = document.querySelector(".right > img");
  rightImage.setAttribute("src", champion[championIndex].championImageUrl);

  const championName = document.querySelector(".right .name");
  championName.innerText = champion[championIndex].championName;

  const desc = document.querySelector(".right .desc");
  desc.innerText = champion[championIndex].desc;

  const championBg = document.querySelector(".championbg > img");
  championBg.setAttribute("src", champion[championIndex].bgImageUrl);
}

renderChampion();
