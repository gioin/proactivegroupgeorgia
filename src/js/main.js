var mySwiper = new Swiper(".swiper-container", {
  //sweper speed
  speed: 1000,
  //display timer
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
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
  var swiper = new Swiper('.quote-container', {
      //sweper speed
  speed: 750,
  //display timer
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    }
  });