/////////////////////////  Page Loader ///////////////////////////
window.addEventListener("load", function () {
  const load = document.querySelector(".load");
  load.className += " hidden";
});

/////////////////////////  ViewPort Calculation ///////////////////////////
// First we get the viewport height and multiply it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);

// We listen to the resize event
window.addEventListener("resize", () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

///// Media Query
const reveal = document.querySelectorAll(".reveal");
const revealResp = document.querySelectorAll(".reveal-resp");
const smallDevice = window.matchMedia("(max-width: 870px)");

smallDevice.addListener(handleDeviceChange);

/////////////////////////  SECTIONS Reveal ///////////////////////////

function handleDeviceChange(e) {
  if (e.matches) {
    /// responsive Reveal
    const revealSection2 = function (entries, observer) {
      const [entry] = entries;
      console.log(entries);
      if (!entry.isIntersecting) return;

      entry.target.classList.remove("section--hidden");
      observer.unobserve(entry.target);
    };

    const sectionObserver2 = new IntersectionObserver(revealSection2, {
      root: null,
      threshold: [0.1],
    });

    revealResp.forEach(function (section) {
      sectionObserver2.observe(section);
      section.classList.add("section--hidden");
    });
  } else {
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

    reveal.forEach(function (section) {
      sectionObserver.observe(section);
      section.classList.add("section--hidden");
    });
  }
}

// Run it initially
handleDeviceChange(smallDevice);
/////////

/////////////////////////  Swiper Js ///////////////////////////

var mySwiper = new Swiper(".swiper-container", {
  //sweper speed
  speed: 900,
  //display timer
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
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
        }, 1000);
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
    delay: 1000,
    disableOnInteraction: false,
  },
  slidesPerView: 10,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    400: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 8,
      spaceBetween: 50,
    },
    1894: {
      slidesPerView: 9,
      spaceBetween: 50,
    },
  },
});

/////////////////////////  Header Reveal ///////////////////////////

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
const about = document.querySelector(".rmw");

about.classList.remove("section--hidden");
