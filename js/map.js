function initMap() {
  console.log('google maps');
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
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
