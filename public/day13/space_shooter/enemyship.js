// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/biN3v3ef-Y0

function EnemyShip(x, y) {
  this.x = x;
  this.y = y;
  this.lastLoopTime = 0;


  this.xdir = 1;
  this.ydir = 1;

  loop();


  this.move = function() {
    this.x = this.x - this.xdir;
    this.y = this.y - this.ydir;
  }

  this.show = function() {
    noStroke();
    fill(168, 23, 23);

    rect(this.x, this.y, 55, 55);

    if(new Date().getTime() -  this.lastLoopTime> 2000){
      this.ydir *= -1;
      this.lastLoopTime = new Date().getTime();
      
    }

  }


}
