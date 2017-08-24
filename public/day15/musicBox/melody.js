
function Melody(soundFile){

  this.sound = soundFile;

  this.randomNumRed = Math.floor(Math.random() * (255 - 0)) + 0;
  this.randomNumGreen = Math.floor(Math.random() * (255 - 0)) + 0;
  this.randomNumBlue = Math.floor(Math.random() * (255 - 0)) + 0;

  this.randomColor = color(this.randomNumRed,this.randomNumGreen,this.randomNumBlue);
  console.log(this.randomColor);
  this.isPlaying = false;

  //this.position = p5.Vector.random2D();
  this.position = createVector(width/2, height/2);

  this.velocity = createVector(0,0);
  this.acceleration = createVector(0.01,0.01);
  this.maxSpeed = 5;


  // this.position.x *= width/2;
  // if(this.position.x < 0){
  //   this.position.x *= -1;
  // }

  // this.position.y *= height/2;
  // if(this.position.y < 0){
  //   this.position.y *= -1;
  // }



  this.move = function(){
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.velocity.limit(this.maxSpeed);
  }

  this.show = function(){
    fill(this.randomColor);
    rectMode(CENTER);
    rect(this.position.x, this.position.y, 20, 20);
  }

  this.edgeDetect = function(){
    if(this.position.x > width - 10 || this.position.x < 0 + 10){
      this.velocity.x *= -1;
      this.acceleration.x *= -1;

      background(this.randomColor);

      this.sound.play();




    }

    if(this.position.y > height || this.position.y < 0){
      this.velocity.y *= -1;
      this.acceleration.y *= -1;

      background(this.randomColor);

      this.sound.play();




    }

  }



}
