const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navlinks = document.querySelector(".nav-links");
  const navlinksli = document.querySelectorAll(".nav-links li");
  const nav = document.querySelector("nav");

  burger.addEventListener("click", function() {
    navlinks.classList.toggle("nav-active");
  });
};

const scrollToggle = () => {
  window.addEventListener("scroll", function(e) {
    const nav = document.querySelector("nav");
    if (document.documentElement.scrollTop >= 120) {
      nav.classList.add("nav-colored");
      nav.classList.remove("nav-transparent");
    } else {
      nav.classList.add("nav-transparent");
      nav.classList.remove("nav-colored");
    }
  });
};

function checkHeight() {
  console.log(document.documentElement.scrollTop);
}

navSlide();
scrollToggle();
