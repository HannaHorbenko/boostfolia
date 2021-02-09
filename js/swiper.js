'use strict';

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


