
function Note(x, y, soundFile){

  this.sound = soundFile;

  this.x = x;
  this.y = y;

  this.randomNumRed = Math.floor(Math.random() * (255 - 0)) + 0;
  this.randomNumGreen = Math.floor(Math.random() * (255 - 0)) + 0;
  this.randomNumBlue = Math.floor(Math.random() * (255 - 0)) + 0;

  this.randomColor = color(this.randomNumRed,this.randomNumGreen,this.randomNumBlue);
  this.isPlaying = false;


  this.position = createVector(this.x, this.y);

  this.velocity = createVector(0,0);
  this.acceleration = createVector(0.01,0.01);
  this.maxSpeed = 5;




  this.show = function(){
    fill(this.randomColor);
    rectMode(CENTER);
    rect(this.position.x, this.position.y, 20, 20);
  }

  this.play = function(){

      if(this.sound != null){
        this.sound.play();
      }


  }



}
