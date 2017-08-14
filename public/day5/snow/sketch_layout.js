// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/17WoOqgXsRM

var rains = [];
var amountOfRain = 200;
var speed = 1;
var ground;
var Ground = function(x, y, w, h, c) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.c = c;
};
var contacted = false;
var count = amountOfRain;

function setup(){
  console.log(displayWidth);
  createCanvas(displayWidth, 900);
  ground = new Ground(0, height, width, height/2, 0.1);
  for(var i = 0; i < amountOfRain; i++){
    rains[i] = new Rain();
  }

}

function draw(){

  // if(new Date().getTime() -  lastLoopTime> 40){
  //       console.log('hihi');
  //       lastLoopTime = new Date().getTime();
  // }

  background(0);
  textSize(10);
  textAlign(TOP);
  text("Snow ball left: " + count, 10, 30);

  ground.display();
  translate(width / 2, height / 2);


    textSize(13);
    text("Snow Simulation", -32, 0);

  // if(new Date().getTime() -  lastLoopTime> 40){
  //       console.log('hihi');
  //       lastLoopTime = new Date().getTime();
  // }

  for(var i = 0; i < rains.length; i++){
    rains[i].display();
    rains[i].update();

      if (ground.contains(rains[i]) && !rains[i].contacted) {
        // console.log(rains[i].contacted);
        rains[i].contacted = true;
        // console.log('ground.h = ', ground.h);
        ground.y -= 0.5;
        count--;

      }

  }




}

// Is the Mover in the Liquid?
Ground.prototype.contains = function(m) {
  l = m;
  // console.log('ball.y = ', l.y);
  // console.log('ground.y = ', this.y)
  console.log(ground.y - ground.h);
  return l.y > ground.y - ground.h;
  // return l.x > this.x && l.x < this.x + this.w &&
  //        l.y > this.y && l.y < this.y + this.h;
};



Ground.prototype.display = function() {
  noStroke();
  fill(255);
  rect(this.x, this.y, this.w, this.h);
};
