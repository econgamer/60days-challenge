// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/biN3v3ef-Y0

function Explosion(x, y) {
  this.x = x;
  this.y = y;
  this.r = 30;

  this.xdir = 1;

  this.explose = function() {
    this.r = this.r + 1000;
    setTimeout("this.r = this.r - 100;", 5000);

  }

  var finished = function(){
    this.r = this.r - 100;
  }

  // this.shiftDown = function() {
  //   this.xdir *= -1;
  //   //this.y += this.r;
  // }


  // this.move = function() {
  //   this.x = this.x - this.xdir;
  // }

  this.show = function() {
    noStroke();
    fill(255, 218, 218, 190);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }

}
