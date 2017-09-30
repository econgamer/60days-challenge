// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/biN3v3ef-Y0





function TrafficLight(x, y) {

  // this.x = width/2;
  // this.xdir = 0;
  this.x = x;
  this.y = y;
  this.isRed = true;
  this.isGreen = false;


  this.create = function(){

    //grey color
    fill("#808080");
    ellipse(400,100,100,100);
    ellipse(400,250,100,100);
    ellipse(400,400,100,100);
    // this.red();
    // this.yellow();
    // this.green();





  }



  this.show = function() {
    if(this.isRed){
      setTimeout(this.red, 1000);
      setTimeout(this.yellow, 2500);
      setTimeout(this.green, 3000);
      this.isRed = false;
      this.isGreen = true;
    }else if(this.isGreen){
      setTimeout(this.green, 1000);
      setTimeout(this.yellow, 2500);
      setTimeout(this.red, 3000);
      this.isRed = true;
      this.isGreen = false;
    }

  }



  this.red = function(){
    fill("#FF0000");
    ellipse(400,100,100,100);
    yellowGrey();
    greenGrey();
  }

  redGrey = function(){
    fill("#808080");
    ellipse(400,100,100,100);
  }

  this.yellow = function(){
    fill("#FFFF00");
    ellipse(400,250,100,100);
    redGrey();
    greenGrey();
  }

  yellowGrey = function(){
    fill("#808080");
    ellipse(400,250,100,100);
  }

  this.green = function(){
    fill("#00FF00");
    ellipse(400,400,100,100);
    yellowGrey();
    redGrey();
  }

  greenGrey = function(){
    fill("#808080");
    ellipse(400,400,100,100);
  }





  this.checkFireworkExplosion = function(){

  }



}
