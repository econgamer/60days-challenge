function Barrier(x, y, w, h, textureImg) {
  // this.x = width/2;
  // this.xdir = 0;
  this.x = x;
  this.y = y;
  this.width = w;           //20
  this.height = h;          //200
  this.movingSpeed = 2.25;


  this.show = function() {
    this.x -= this.movingSpeed;
    //fill(255);
    fill('#92fc3c');
    rectMode(CENTER);
    //rect(this.x, this.y, this.width, this.height);
    rect(this.x, this.y, this.width, this.height);
  }



}
