var numberOfPlanet = 10;
var planet;
var planets = [];

function setup(){


  createCanvas(1500, 800);
  background(0,0,0);

  for(var i = 0; i < numberOfPlanet; i++){
    var randomRadians = Math.floor(Math.random() * 256);
    planet = new Planet(240,240,randomRadians);
    planets.push(planet);
  }

}


function reset(){


}



function draw(){

  background(0,0,0);
  for(var i = 0; i < numberOfPlanet; i++){
    planets[i].show();
  }

}
