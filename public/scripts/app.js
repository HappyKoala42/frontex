const navSlide = function() {
  const burger = document.querySelector(".burger");
  const navLinksLi = document.querySelectorAll(".nav-links li");
  const navLinks = document.querySelectorAll(".nav-links");
  const nav = document.querySelector("nav");

  burger.addEventListener("click", function() {
    nav.classList.toggle("nav-active");
    nav.classList.toggle("nav-colored");
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
