// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/biN3v3ef-Y0

function Bullet(x, y) {
  this.x = x;
  this.y = y;
  this.r = 8;
  this.toDelete = false;

  this.show = function() {
    noStroke();
    fill(150, 0, 255);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }

  this.evaporate = function() {
    this.toDelete = true;
  }

  this.hits = function(ship) {
    var d = dist(this.x, this.y, ship.x, ship.y);
    if (d < this.r + ship.r - 5) {
      return true;
    } else {
      return false;
    }
  }

  this.move = function() {
    this.x = this.x + 5;
  }

}
