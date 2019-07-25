window.addEventListener("scroll", function(e) {
  var nav = document.querySelector("nav");
  if (document.documentElement.scrollTop >= 120) {
    nav.classList.add("nav-colored");
    nav.classList.remove("nav-transparent");
  } else {
    nav.classList.add("nav-transparent");
    nav.classList.remove("nav-colored");
  }
});

function checkHeight() {
  console.log(document.documentElement.scrollTop);
}
