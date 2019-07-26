const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navlinks = document.querySelector(".nav-links");
  const navlinksli = document.querySelectorAll(".nav-links li");
  const nav = document.querySelector("nav");

  burger.addEventListener("click", function () {
    navlinks.classList.toggle("nav-active");
    //burger animation
    burger.classList.toggle("toggleBurger");
  });

  for (let i = 0; i < navlinksli.length; i++) {
    navlinksli[i].addEventListener("click", function () {
      navlinks.classList.toggle("nav-active");
      //burger animation
      burger.classList.toggle("toggleBurger");
    });
  }
};

const scrollToggle = () => {
  window.addEventListener("scroll", function (e) {
    const nav = document.querySelector("nav");
    const burger = document.querySelector(".burger");
    const about = document.querySelector(".about-img");
    const mission = document.querySelector(".mission-img");
    const testimony = document.querySelector(".testimony-img");
    const pricing = document.querySelector(".pricing-img");
    const contact = document.querySelector(".contact-img");

    // Navbar
    if (document.documentElement.scrollTop >= 120) {
      nav.classList.add("nav-colored");
      nav.classList.remove("nav-transparent");
    } else {
      nav.classList.add("nav-transparent");
      nav.classList.remove("nav-colored");
    }
    // Fade about section
    if (document.documentElement.scrollTop >= 730) {
      about.classList.add("fadeinAnim");
    }
    // Fade mission section
    if (document.documentElement.scrollTop >= 1314) {
      mission.classList.add("fadeinAnim");
    }
    // Fade testimony section
    if (document.documentElement.scrollTop >= 2427) {
      testimony.classList.add("fadeinAnim");
    }
    // Fade pricing section
    if (document.documentElement.scrollTop >= 3275) {
      pricing.classList.add("fadeinAnim");
    }

    // Fade contact section
    if (document.documentElement.scrollTop >= 3797) {
      contact.classList.add("fadeinAnim");
    }

  });
};

function checkHeight() {
  window.addEventListener("scroll", function (e) {
    console.log(document.documentElement.scrollTop);
  });
}

navSlide();
scrollToggle();
// checkHeight();

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles', 'public/scripts/particles.json', function () {
  console.log('callback - particles.js config loaded');
});