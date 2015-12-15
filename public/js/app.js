var app = angular.module('meanMapApp', ['geolocation'])

  var map;
  var currentLatitude;
  var currentLongitude;

window.initMap = function initMap() {
  console.log('init map')
  //get location for map
    var getLocation = function() {
      //console.log('running getLocation');
      var success = function(pos) {
        currentLatitude = pos.coords.latitude;
          //console.log(currentLatitude);
        currentLongitude = pos.coords.longitude;
          //console.log(currentLongitude);
map = new google.maps.Map(document.getElementById('map'), mapOptions(currentLatitude, currentLongitude));

        }
      navigator.geolocation.getCurrentPosition(success);
    };
//console.log('this loc ' + coords)
    getLocation()

  //map options
    var mapOptions = function(lat, lng){

    return {
      zoom: 15,
      center: {lat: lat, lng: lng},
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
    }



}
