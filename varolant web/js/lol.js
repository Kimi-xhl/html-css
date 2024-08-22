function renderHeader() {
  const topmid = document.getElementById("top-mid");
  const topmidlist = [
    {
      title: "GAME INFO",
      link: "javascript:void(0)",
      submenu: [
        {
          title: "AGENTS",
          link: "javascript:void(0)",
        },
        {
          title: "MAPS",
          link: "javascript:void(0)",
        },
        {
          title: "ARSENAL",
          link: "javascript:void(0)",
        },
        {
          title: "PREMIER",
          link: "javascript:void(0)",
        },
      ],
    },
    {
      title: "MEDIA",
      link: "javascript:void(0)",
    },
    {
      title: "NEWS",
      link: "javascript:void(0)",
    },
    {
      title: "LEADERBOARDS",
      link: "javascript:void(0)",
    },
    {
      title: "SUPPORT",
      link: "javascript:void(0)",
      submenu: [
        {
          title: "SPECS",
          link: "javascript:void(0)",
        },
        {
          title: "SUPPORT",
          link: "javascript:void(0)",
        },
        {
          title: "COMMUNITY CODE",
          link: "javascript:void(0)",
        },
      ],
    },
    {
      title: "OUR SOCIALS",
      link: "javascript:void(0)",
      submenu: [
        {
          title: "Twitter",
          link: "javascript:void(0)",
        },
        {
          title: "YouTube",
          link: "javascript:void(0)",
        },
        {
          title: "Instagram",
          link: "javascript:void(0)",
        },
        {
          title: "Tiktok",
          link: "javascript:void(0)",
        },
        {
          title: "Facebook",
          link: "javascript:void(0)",
        },
        {
          title: "Discord",
          link: "javascript:void(0)",
        },
      ],
    },
    {
      title: "EXPORTS",
      link: "javascript:void(0)",
    },
    {
      title: "PBE SIGNUP",
      link: "javascript:void(0)",
    },
  ];

  let htmlString = "";

  topmidlist.forEach(function (e) {
    htmlString += `
        <li>
          <a href="${e.link}"><strong>${e.title}</strong></a>
        </li>
      `;
  });

  topmid.innerHTML = htmlString;
}

renderHeader();
