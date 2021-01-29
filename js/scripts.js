// $(document).ready(function () {

//   var mySwiper = new Swiper('.swiper-container', {
//     effect: 'cube',
//     grabCursor: true,
//     cubeEffect: {
//       shadow: true,
//       slideShadows: true,
//       shadowOffset: 20,
//       shadowScale: 0.94,
//       speed: 1000
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     }
//   })
// });


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
function isInViewport(elem) {
  let bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.top + bounding.height / 2 <= (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
function checkItems() {
  let items = document.querySelectorAll('.animate');

  items.forEach(item => {
    if (isInViewport(item)) {
      let animateMode = item.getAttribute('data-animate'),
        delay = item.getAttribute('data-delay'),
        speed = item.getAttribute('data-speed');
      item.classList.add('animate__animated', 'animate__zoomIn');

      if (animateMode) {
        item.classList.add('animate__animated', 'animate__' + animateMode);

      }
      if (delay) {
        item.classList.add(`animate__delay-${delay}s`);
      }

      if (speed) {
        item.classList.add('animate__animated', 'animate__' + speed);
      }
      item.classList.remove('animate');
    }
  })
}
checkItems();
window.addEventListener('scroll', function (e) {
  checkItems();
})