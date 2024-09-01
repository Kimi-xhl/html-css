let skillsIndex = 0;

const abilities = [
  {
    abilitiesIconUrl:
      "https://ddragon.leagueoflegends.com/cdn/14.13.1/img/passive/Renekton_Passive.png",
    abilitiesName: "Reign of Anger",
    abilitiesVideoUrl:
      "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0058/ability_0058_P1.mp4",
    abilitiesKey: "PASSIVE",
    abilitiesDesc:
      "Renekton's attacks generate Fury, increased when he is low on life. This Fury can empower his abilities with bonus effects.",
  },
  {
    abilitiesIconUrl:
      "https://ddragon.leagueoflegends.com/cdn/14.13.1/img/spell/RenektonCleave.png",
    abilitiesName: "Cull the Meek",
    abilitiesVideoUrl:
      "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0058/ability_0058_Q1.mp4",
    abilitiesKey: "Q",
    abilitiesDesc:
      "Renekton swings his blade, dealing moderate physical damage to all targets around him, and heals for a small portion of the damage dealt. If he has more than 50 Fury, his damage and heal are increased.",
  },
  {
    abilitiesIconUrl:
      "https://ddragon.leagueoflegends.com/cdn/14.13.1/img/spell/RenektonPreExecute.png",
    abilitiesName: "Ruthless Predator",
    abilitiesVideoUrl:
      "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0058/ability_0058_W1.mp4",
    abilitiesKey: "W",
    abilitiesDesc:
      "Renekton slashes his target twice, dealing moderate physical damage and stuns them for 0.75 seconds. If Renekton has more than 50 Fury, he slashes his target three times, destroying damage shields on the target, dealing high physical damage, and stunning them for 1.5 seconds.",
  },
  {
    abilitiesIconUrl:
      "https://ddragon.leagueoflegends.com/cdn/14.13.1/img/spell/RenektonSliceAndDice.png",
    abilitiesName: "Slice and Dice",
    abilitiesVideoUrl:
      "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0058/ability_0058_E1.mp4",
    abilitiesKey: "E",
    abilitiesDesc:
      "Renekton dashes, dealing damage to units along the way. Empowered, Renekton deals bonus damage and reduces the Armor of units hit.",
  },
  {
    abilitiesIconUrl:
      "https://ddragon.leagueoflegends.com/cdn/14.13.1/img/spell/RenektonReignOfTheTyrant.png",
    abilitiesName: "Dominus",
    abilitiesVideoUrl:
      "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0058/ability_0058_R1.mp4",
    abilitiesKey: "R",
    abilitiesDesc:
      "Renekton transforms into the Tyrant form, gaining bonus Health and dealing damage to enemies around him. While in this form, Renekton gains Fury periodically.",
  },
];

function renderAbilities() {
  const left = document.querySelector(".abilitiesLeft .skillsIcon");
  const right = document.querySelector(".abilitiesRight");

  let abilitiesLeftHtmlString = "";
  abilities.forEach(function (a, ai) {
    abilitiesLeftHtmlString += `
      <div class="${
        skillsIndex == ai ? "active" : ""
      }" onclick="changeVideo(${ai})">
        <img src="${a.abilitiesIconUrl}" alt="${a.abilitiesName}" />
        <p>${a.abilitiesName}</p>
      </div>
    `;
  });

  left.innerHTML = abilitiesLeftHtmlString;

  right.innerHTML = `
    <video src="${abilities[skillsIndex].abilitiesVideoUrl}" autoplay muted loop></video>
    <h3>${abilities[skillsIndex].abilitiesName}</h3>
    <span>${abilities[skillsIndex].abilitiesKey}</span>
    <p>${abilities[skillsIndex].abilitiesDesc}</p>
  `;
}

function changeVideo(c) {
  skillsIndex = c;
  renderAbilities();
}

renderAbilities();
