const swiper = new Swiper(".swiper-services-list", {
  loop: true,
  speed: 500,
  grabCursor: true,
  slidesPerView: "auto",
  spaceBetween: 32,
  initialSlide: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    // prevEl: ".swiper-button-prev",
  },
});

const swiper2 = new Swiper(".swiper-reviews", {
  loop: true,
  speed: 1000,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 64,
  initialSlide: 0,
  navigation: {
    nextEl: ".swp-button-next",
    prevEl: ".swp-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    direction: "horizontal",
  },
});

const swiper3 = new Swiper(".swiper-about_us", {
  loop: true,
  speed: 1000,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 64,
  initialSlide: 0,
  // Navigation arrows
  navigation: {
    nextEl: ".s-button-next",
    prevEl: ".s-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    direction: "horizontal",
  },
});
