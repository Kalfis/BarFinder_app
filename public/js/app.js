//angular.module('meanMapApp', ['geolocation'])
'use strict'
  var map;
  var barMap;
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
barMap = new google.maps.Map(document.getElementById('map'), barSearch(currentLatitude, currentLongitude));
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

    var barSearch = function(lat, lng) {
      // var accessURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="currentLatitude,currentLongitude"&radius=500&type=bar&opennow=true&key=AIzaSyACoF4rtuIwZ4GdTY3UBqjY8EUASZ3gdg8"
      // $.ajax({
      //   type: "GET",
      //   contentType: "application/json",
      //   url: accessURL,
      //   datatype: 'jsonp',
      //   success: return(data)
      // })
    }

}
