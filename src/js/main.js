var mySwiper = new Swiper(".swiper-container", {
  //sweper speed
  speed: 1000,
  //display timer
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    //reverseDirection: true,
    waitForTransition: true,
  },

  on: {
    slideChange: function (e) {
      const element =
        e.el.children[0].children[e.activeIndex].children[0].children[0];
      const element2 =
        e.el.children[0].children[e.previousIndex].children[0].children[0];

      console.log(e.activeIndex);
      // 1, 2, 3, 4, 1 2, 3, 4, 1 2, 3, 4, 1 2, ...
      if (e.activeIndex === 1) {
        setTimeout(function () {
          element.classList.remove("textimg--hide");
        }, 100);
      } else {
        setTimeout(function () {
          element.classList.remove("textimg--hide");
        }, 650);
      }

      if (element.classList !== "textimg--hide" && e.previousIndex != 1) {
        setTimeout(function () {
          element2.classList.add("textimg--hide");
        }, 6000);
      }

      console.log(e);
    },
  },

  // scrolbarr
  scrollbar: {
    lockClass: "swiper-scrollbar-lock",
  },
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
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
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
// Header Reveal
const section1 = document.querySelector("#section1");
const header = document.querySelector(".header");
const headerLogo = document.querySelector(".header__logo");
const navButton = document.querySelector(".navigation__button");
const navBackground = document.querySelector(".navigation__background");
const frontTexts = document.querySelectorAll(".front-textimg");

const obsCalback = function (entries, observer) {
  entries.forEach(entry => {
    // console.log(entry);
    if (!entry.isIntersecting) {
      header.classList.add("header--background");
      headerLogo.classList.add("header__logo--size");
      navBackground.classList.add("navigation__button--transform");
      navButton.classList.add("navigation__background--transform");
    } else {
      header.classList.remove("header--background");
      headerLogo.classList.remove("header__logo--size");
      navBackground.classList.remove("navigation__button--transform");
      navButton.classList.remove("navigation__background--transform");
    }
  });
};

const obsOption = {
  root: null,
  threshold: [0.97],
};

const observer = new IntersectionObserver(obsCalback, obsOption);

observer.observe(section1);

//////////////////////////////////////
/// sections Reveal
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

//////////////////////////////////////
/// sections Reveal

///////////////////
const about = document.querySelector(".rmw");

about.classList.remove("section--hidden");
