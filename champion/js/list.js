const championInform = [
  {
    championName: "Fizz",
    championImgUrl:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/d62b56e6f606e6e225a59879be46e0903a973dd0-496x560.jpg?auto=format&fit=fill&q=80&w=352",
  },
  {
    championName: "Garen",
    championImgUrl:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/2acb7715797d4183b09fdbfb902ff52a0aa4e0cf-496x560.jpg?auto=format&fit=fill&q=80&w=352",
  },
  {
    championName: "Renekton",
    championImgUrl:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/d4650df7a5a7c35394ff0f861838f45028ddc247-496x560.jpg?auto=format&fit=fill&q=80&w=352",
  },
  {
    championName: "Riven",
    championImgUrl:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/0b9fbf46f30aa38d11f61d29430547279368c06a-496x560.jpg?auto=format&fit=fill&q=80&w=352",
  },
  {
    championName: "Mordekaiser",
    championImgUrl:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/1b94f6681d951a6618b4c2db1cc93825af1422eb-496x560.jpg?auto=format&fit=fill&q=80&w=352",
  },
  {
    championName: "Nasus",
    championImgUrl:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/7ad20e92d0da55bcf2fca1a342774841bfa65383-496x560.jpg?auto=format&fit=fill&q=80&w=352",
  },
  {
    championName: "Rumble",
    championImgUrl:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/a02b3b301b201fcf2633cefd676ca609a25a7911-496x560.jpg?auto=format&fit=fill&q=80&w=352",
  },
  {
    championName: "Wukong",
    championImgUrl:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/769013a96f93d25ba79f5c9c9c2ee2caf7160a04-496x560.jpg?auto=format&fit=fill&q=80&w=352",
  },
];

function renderChampionList() {
  const list = document.querySelector(".championList");

  let listHtmlString = "";

  championInform.forEach((e) => {
    listHtmlString += `
        <div class="championListItem">
                <img src="${e.championImgUrl}" alt="#" />
                <p><em>${e.championName.toUpperCase()}</em></p>
            </div>
      `;
  });
  list.innerHTML = listHtmlString;
}

renderChampionList();
