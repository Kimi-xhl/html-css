const parts = document.querySelectorAll(".container > div");
const html = document.documentElement;

document.addEventListener("scroll", function () {
  let scrolled = html.scrollTop / (html.scrollHeight - html.clientHeight);
  let total = 1 / parts.length;

  for (let i = 0; i < parts.length; i++) {
    let start = total * i;
    let end = total * (i + 1);
    let progress = (scrolled - start) / (end - start);

    if (progress >= 1) {
      progress = 1;
    }
    if (progress < 0) {
      progress = 0;
    }

    parts[i].style.setProperty("--progress", progress);
  }
});
