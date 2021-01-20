$(document).ready(function(){
    $('.slider').slick({
        fade: true,
        speed: 1000,
        arrows: true
    });

});

$(document).ready(function () {

    var mySwiper = new Swiper('.swiper-container', {
        effect: 'cube',
        grabCursor: true,
        cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
        speed: 1000
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        }
      })
});
