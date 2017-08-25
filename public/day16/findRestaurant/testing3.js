var map;
var service;
var infowindow;
var pos;
var places = [];
var photos = [];

function initialize() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 17,
      scale: 50
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
          types: ['restaurant'],
          rankby: 'prominence'
        };


        service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, callback);


        //infoWindow.setPosition(pos);
        //infoWindow.setContent('Location found.');
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

var counter = 0;


function callback(results, status, pagination) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {

    console.log(pagination);
    //console.log(results);

    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      places.push(place);
      //testing
      // var photos = place.photos;

       console.log(counter);

      $('#output').prepend(`<p id="target" value=${counter}>
                              ${places[counter].name}
                              <a target="_blank" href="https://www.google.com.hk/search?q=${places[counter].name}">   g</a>
                            </p>`)

      $( "#target" ).click((event) => {
        //alert( `${event.target.attributes.value1.value}`);

        var placeNum = Number(event.target.attributes.value.value);

        console.log(places[placeNum]);

        // if(places[placeNum].photos){
        //   var marker = new google.maps.Marker({
        //     map: map,
        //     position: places[placeNum].geometry.location,
        //     title: places[placeNum].name,
        //     icon: places[placeNum].photos[0].getUrl({'maxWidth': 60, 'maxHeight': 60})
        //   });
        // }else{
          var marker = new google.maps.Marker({
            map: map,
            position: places[placeNum].geometry.location,
            title: places[placeNum].name
          });

      });
      counter++;
//
//       var marker = new google.maps.Marker({
//           position: myLatLng,
//           map: map,
//           title: 'Hello World!'
//         });


    }
  }

  // if(next_page_token.hasNextPage == true){
  //
  //   var pyrmont = new google.maps.LatLng(pos.lat, pos.lng);
  //
  //   var request = {
  //     location: pyrmont,
  //     radius: '500',
  //     pagetoken: next_page_token
  //   };
  //
  //   service.nearbySearch(request, callback);
  //
  //   console.log("next page call");
  // }

  if (pagination.hasNextPage) {

       pagination.nextPage();
       console.log('next Page');

     };





}
