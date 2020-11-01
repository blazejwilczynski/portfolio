$(document).ready(function () {
  smoothScrool(1000);
});

function smoothScrool(duration) {
  $('a[href^="#"]').on("click", function (event) {
    var target = $($(this).attr("href"));

    if (target.length) {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: target.offset().top,
        },
        duration
      );
    }
  });
}

buttonRedCircle = document.getElementById("red-circle");
buttonRedCircle.addEventListener("click", function () {
  console.log(`Red button click`);
  bodyGrab = document.querySelector("body");
  console.log(bodyGrab);
  bodyGrab.style.display = "none";
});

const slogan1Changer = document.getElementById("slogan-1-changer");
let counter = 0;

function change() {
  const sloganOneWords = [
    "websites",
    "html/css",
    "javascript",
    "uxui",
    "design",
    "writing",
    "websites",
  ];
  slogan1Changer.textContent = sloganOneWords[counter];
  counter++;
  if (counter >= sloganOneWords.length) {
    counter = 0;
  }
}
setInterval(change, 3500);
