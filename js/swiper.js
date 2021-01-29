'use strict';

new Swiper('.hero-slider', {
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
