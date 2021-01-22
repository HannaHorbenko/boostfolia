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


function initMap() {
  console.log('google maps');
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: {
      lat: 47.09606660321762, 
      lng: 37.54663926136575
    },
    styles: mapStyles
  });

  const marker = new google.maps.Marker({
    position: {
      lat: 47.09606660321762, 
      lng: 37.54663926136575
    },
    map: map,
    icon: 'favicon.png',
    title: 'Boostfolia'
  });

  const infowindow = new google.maps.InfoWindow({
    content: '<b>Boostfolia</b>',
  });

  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });
};