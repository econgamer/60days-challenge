var map;
var service;
var infowindow;
var pos;


function initialize() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 15
    });
    var infoWindow = new google.maps.InfoWindow({map: map});

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        console.log('lat: ' + pos.lat);
        console.log('lng: ' + pos.lng);


        var pyrmont = new google.maps.LatLng(pos.lat, pos.lng);

        var request = {
          location: pyrmont,
          radius: '500',
          types: ['restaurant']
        };


        service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, callback);


        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        map.setCenter(pos);
        console.log('running');
      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }


  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
  }



}


function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];


      var myLatLng = {lat: place.geometry.viewport.f.b, lng: place.geometry.viewport.b.b};


      console.log(place);



      //testing
      var photos = place.photos;


      var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
        title: place.name,
        icon: photos[0].getUrl({'maxWidth': 100, 'maxHeight': 100})
      });




      $('#output').prepend(`<li id="target" valuelat="${myLatLng.lat}" valuelng="${myLatLng.lng}" >
                              ${place.name}
                            </li><br>`)


      $( "#target" ).click(function(event) {
        //alert( `${event.target.attributes.value1.value}`);



        var passLatLng = {lat: Number(event.target.attributes.valuelat.value), lng: Number(event.target.attributes.valuelng.value)};

        var marker = new google.maps.Marker({
            position: passLatLng,
            map: map,
            title: 'Hello World!'
          });

      });
//
//       var marker = new google.maps.Marker({
//           position: myLatLng,
//           map: map,
//           title: 'Hello World!'
//         });


    }
  }
}
