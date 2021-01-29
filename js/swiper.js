'use strict';

$(document).ready(function () {

  let heroSlider = new Swiper('.hero-slider', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    }


  });

  let profileSlider = new Swiper('.profile-slider', {
    loop: true,
    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 0,
      shadowScale: 0.94,
      speed: 1000
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  });

  let portfolioSlider = new Swiper('.portfolio-slider', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true
    },
    slidesPerView: 3,
    spaceBetween: 20,
    autoHeight: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      }
    }

  });

});
