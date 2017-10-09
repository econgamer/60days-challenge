$(document).ready(function() {

//get time zone https://api.timezonedb.com/v2/get-time-zone?key=D6CS82E8J1VM&format=json&by=position&lat=10&lng=10

getLocation();
setTimeout(getSunRise, 1000);
setTimeout(getTimeZone, 2000);

var x = $('#output');
var lat;
var lng;
var sunRiseTime;
var sunSetTime;
var sunRiseTimeConvert;
var sunSetTimeConvert;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.html("Geolocation is not supported by this browser.");
    }
}
function showPosition(position) {
    lat = position.coords.latitude;
    lng = position.coords.longitude;
    x.html(`Loading...`);
}


function getSunRise(){
  var searchDate = $('#searchDate').val();
  var searchCurrency = $('#searchCurrency').val();
  var searchAmount = $('#searchAmount').val();

  var url = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`;

  $.ajax({
    type:"GET",
    url:url,
    async:false,
    dataType:"json",
    success: function(data){

      sunRiseTime = data.results.sunrise;
      sunSetTime = data.results.sunset;

    },
    error: function(e){
      alert("Error");
    }
  });

}


function getTimeZone(){
  var urlTime = `https://api.timezonedb.com/v2/get-time-zone?key=D6CS82E8J1VM&format=json&by=position&lat=${lat}&lng=${lng}`;

  $.ajax({
    type:"GET",
    url:urlTime,
    async:false,
    dataType:"json",
    success: function(data){

      var sunRiseTimeConvert;
      var sunSetTimeConvert;
      var sunRisePeriodOffset = 0;
      var sunSetPeriodOffset = 0;

      var sunRiseTimePeriod = sunRiseTime.charAt(sunRiseTime.length - 2);

      var sunSetTimePeriod = sunSetTime.charAt(sunSetTime.length - 2);

      

      var timeOffset = parseInt(data.gmtOffset) / 60 / 60;

      if(sunRiseTimePeriod === "P"){
        sunRisePeriodOffset = 12;
      }

      if(sunSetTimePeriod === "P"){
        sunSetPeriodOffset = 12;
      }

      sunRiseTimeConvert = (parseInt(sunRiseTime.substring(0, sunRiseTime.indexOf(':'))) + timeOffset + sunRisePeriodOffset) % 24;


      sunSetTimeConvert = (parseInt(sunSetTime.substring(0, sunSetTime.indexOf(':'))) + timeOffset + sunSetPeriodOffset) % 24;

      var sunRiseTimeRemaining = sunRiseTime.substring(sunRiseTime.indexOf(':'), 8);
      var sunSetTimeRemaining = sunSetTime.substring(sunSetTime.indexOf(':'), 8);

      $("#output").html(`Your location(${data.countryName}), today <br> SunRise Time: ${sunRiseTimeConvert}${sunRiseTimeRemaining} </br> SunSet Time: ${sunSetTimeConvert}${sunSetTimeRemaining}`);




    },
    error: function(e){
      alert("Error");
    }
  });


}


});
