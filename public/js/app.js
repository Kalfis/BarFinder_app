var app = angular.module('meanMapApp', ['geolocation'])

  var map;
  var currentLatitude;
  var currentLongitude;



window.initMap = function initMap() {
console.log('init map')
//get location for map
  var getLocation = function() {
    var success = function(pos) {
      currentLatitude = pos.coords.latitude;
        console.log(currentLatitude);
      currentLongitude = pos.coords.longitude;
        console.log(currentLongitude);
        }
      navigator.geolocation.getCurrentPosition(success);
  };
  getLocation();


//map options
  var mapOptions = {
    zoom: 15,
    center: {lat: 40.7400874, lng: -73.9897743},
    panControl: false,
    panControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_LEFT
    },
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.LARGE,
      position: google.maps.ControlPosition.RIGHT_CENTER
    },
    scaleControl: false

    };

map = new google.maps.Map(document.getElementById('map'), mapOptions);

}
