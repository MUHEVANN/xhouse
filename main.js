import "./style.css";
import Swiper from "swiper";
import "swiper/css";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close"),
  navOverlay = document.getElementById("nav-overlay");

if (navToggle) {
  navToggle.addEventListener("click", function () {
    navMenu.classList.add("show__nav");
    navOverlay.classList.add("show__overlay");
  });
}

if (navClose) {
  navClose.addEventListener("click", function () {
    navMenu.classList.remove("show__nav");
    navOverlay.classList.remove("show__overlay");
  });
}
if (navOverlay) {
  navOverlay.addEventListener("click", function () {
    navMenu.classList.remove("show__nav");
    navOverlay.classList.remove("show__overlay");
  });
}

// Hide when Click nav item

const navItem = document.querySelectorAll(".nav__item");

navItem.forEach((item) =>
  item.addEventListener("click", function () {
    navMenu.classList.remove("show__nav");
    navOverlay.classList.remove("show__overlay");
  })
);

// swiper
const swiperCard = new Swiper(".feature__swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  spaceBetween: 10,
  grabCursor: true,
  slidesPerView: 4,
  // If we need pagination
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  modules: [Pagination, Navigation],
});
const swiperTesti = new Swiper(".testimonial__swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".testi-button-next",
    prevEl: ".testi-button-prev",
  },
  modules: [Pagination, Navigation, Autoplay],
});
