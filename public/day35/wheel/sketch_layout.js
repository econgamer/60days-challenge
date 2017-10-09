// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/17WoOqgXsRM

var angles = [ 180, 180 ];
var temperature = Math.floor((Math.random() * 255));
var diameter = 300;

function setup(){

  createCanvas(displayWidth, 900);
  wheel = new Wheel(diameter, angles);

}

function draw(){



  background('#000000');

  wheel.move();
  wheel.show();

  fill('#ffffff');
  triangle(displayWidth/2, diameter, displayWidth/2 + 20 , diameter - 20, displayWidth/2 - 20, diameter - 20);




  // fill('black');
  // textSize(20);
  // text("Yes or no", 100, 100);


}




// When the user clicks the mouse
function mousePressed() {
// Check if mouse is inside the circle

  var d = dist(mouseX, mouseY, displayWidth/2, height/2);
  if (d < diameter/2) {
    // Pick new random color values
    wheel = new Wheel(diameter, angles);
  }
}
