var swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  watchSlidesProgress: true,
  watchOverflow: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 90,
    },
    1200: {
      // slidesPerView: 3,
    },
    1024: {
      spaceBetween: 30,
      slidesPerView: 4,
    },
  },
});
