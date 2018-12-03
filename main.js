'use strict';

var sel = document.querySelector('#position');
sel.addEventListener('click', getMyLocation);
var output = document.querySelector("#map");


function getMyLocation() {
  if (navigator.geolocation) {
    console.log('getPos');
    output.style.display = 'block';
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  else {
    output.innerHTML = "Keine Geolocation-API verfügbar!";
  }
}

function showPosition(position) {
  console.log('showPos');
  var lat = position.coords.latitude;
  var lng = position.coords.longitude;
  var myLatLng = {lat: lat, lng: lng};

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    scrollwheel: false,
    zoom: 8 //je höher, desto genauer
  });

  // Create a marker and set its position.
  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    title: 'Hello World!'
  });
}