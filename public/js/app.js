//angular.module('meanMapApp', ['geolocation'])
'use strict'
  var map;
  var marker;
  var currentLatitude;
  var currentLongitude;

// $(function(){
  //onload code goes here


function initMap() {
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

        var userPos = {lat: currentLatitude, lng: currentLongitude};
        //console.log(userPos);
        var marker = new google.maps.Marker ({
          position: userPos,
          map: map,
          animation: google.maps.Animation.DROP
        });
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



$('#barClick').click(function() {
  console.log('bar clicked')

      console.log(currentLatitude);
      console.log(currentLongitude);
      // var accessURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+currentLatitude+","+currentLongitude+"&radius=500&type=bar&opennow=true&key=AIzaSyACoF4rtuIwZ4GdTY3UBqjY8EUASZ3gdg8"
      // $.ajax({
      //   type: "GET",
      //   contentType: "application/json",
      //   url: accessURL,
      //   datatype: 'jsonp',
      //   success: function (data) {
      //
      //     $.each(data.results, function (i, val) {
      //       barId.push(val.id);
      //       barName.push(val.name);
      //     });
      //
      //     console.log(barName);
      //   }
      // })

      var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: currentLatitude, lng: currentLongitude},
        zoom: 15,
        scrollwheel: false
      });
console.log(map);
      var userPos = {lat: currentLatitude, lng: currentLongitude};
      var request = {
        location: userPos,
        radius: '500',
        types: ['bar'],
        opennow: true
      }
console.log(request);
      var service = new google.maps.places.PlacesService(map);
      console.log(service);
      service.nearbySearch(request, function(results, status) {
        console.log('in nearby search')
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            var place = results[i];
            console.log(results[i]);
            marker = new google.maps.Marker({
              map: map,
              position: place.geometry.location,
              animation: google.maps.Animation.DROP
            });
          }
        }
      });
  });
}
// });
