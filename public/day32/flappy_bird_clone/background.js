function BackScreen(x, y) {
  // this.x = width/2;
  // this.xdir = 0;
  this.x = x;
  this.y = y;
  this.movingSpeed = 2.25;


  this.show = function() {
    this.x -= this.movingSpeed;
    fill(255);
    rectMode(CENTER);
    //rect(this.x, this.y, this.width, this.height);
    rect(this.x, this.y, this.width, this.height);
  }



}
