// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/biN3v3ef-Y0

function Horse(x, y, name) {

  // this.x = width/2;
  // this.xdir = 0;
  this.x = x;
  this.y = y;
  this.name = name;
  this.finished = false;
  this.bet = 0;
  this.random = (Math.random() * 10);

  this.show = function() {
    fill(255);
    rectMode(CENTER);
    rect(this.x, this.y, 20, 20);
  }


  this.move = function(speed) {
      this.x += speed + this.random;
  }




}
