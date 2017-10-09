// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/biN3v3ef-Y0

var randomList = [];
var word = 0;


function Planet(x, y, radians) {
  this.x = x;
  this.y = y;
  this.radians = radians;
  this.targetX = 255;
  this.targetY = 255;
  this.colorR = Math.floor(Math.random() * 256);
  this.colorG = Math.floor(Math.random() * 256);
  this.colorB = Math.floor(Math.random() * 256);
  this.velocity = 0.02;
  this.speed = 2;

  this.size = Math.floor(Math.random() * 100) + 10;
  this.distance = Math.floor(Math.random() * 5) + 1;

  this.create = function(){



  }


  this.show = function() {


    this.targetX += this.speed * (1/this.size) * 100 * (1/this.distance);
    this.targetY += this.speed * (1/this.size) * 100 * (1/this.distance);

    if(this.targetX >= mouseX){
      this.targetX = mouseX;
      this.radians += this.velocity;
    }

    if(this.targetY >= mouseY){
      this.targetY = mouseY;
      this.radians += this.velocity;
    }

    this.x = this.targetX + Math.cos(this.radians) * this.size * this.distance;
    this.y = this.targetY + Math.sin(this.radians) * this.size * this.distance;



    fill(this.colorR, this.colorG, this.colorB);
    ellipse(this.x, this.y, this.size, this.size);

  
  }







}
