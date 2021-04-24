var mySwiper = new Swiper(".swiper-container", {
  //sweper speed
  speed: 1000,
  //display timer
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// QUOTES CAROUSEL
var swiper = new Swiper(".quote-container", {
  //sweper speed
  speed: 750,
  //display timer
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
  slidesPerView: 10,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // breakpoints: {
  //   0: {
  //     slidesPerView: 1,
  //     spaceBetween: 20,
  //   },
  //   768: {
  //     slidesPerView: 2,
  //     spaceBetween: 40,
  //   },
  //   1024: {
  //     slidesPerView: 3,
  //     spaceBetween: 50,
  //   },
  //   1894: {
  //     slidesPerView: 4,
  //     spaceBetween: 50,
  //   },
  // },
});

///////////////////////////////////////
// Reveal sections main page
const section1 = document.querySelector("#section1");
const header = document.querySelector(".header");
const headerLogo = document.querySelector(".header__logo");

const obsCalback = function (entries, observer) {
  entries.forEach(entry => {
    // console.log(entry);
    if (!entry.isIntersecting) {
      header.classList.add("header--background");
      headerLogo.classList.add("header__logo--size");
    } else {
      header.classList.remove("header--background");
      headerLogo.classList.remove("header__logo--size");
    }
  });
};

const obsOption = {
  root: null,
  threshold: [0.97],
};

const observer = new IntersectionObserver(obsCalback, obsOption);

observer.observe(section1);

///
const allSections = document.querySelectorAll(".s");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entries);
  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: [0.15],
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

const about = document.querySelector(".rmw");

about.classList.remove("section--hidden");

