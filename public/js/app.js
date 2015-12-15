var app = angular.module('meanMapApp', ['geolocation'])

  var map;

  window.initMap = function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
      // styles: [{"stylers": [
      //   { saturation: -20 },
      //   { lightness: -20 },
      //   { gamma: 1.51 }
      // ]}]
    });
  }
