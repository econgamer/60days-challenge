
function Melody(rms){


  this.position = createVector(width/2, height/2);

  this.velocity = createVector(0,0);
  this.acceleration = createVector(0.01,0.01);
  this.maxSpeed = 5;

  this.move = function(){
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.velocity.limit(this.maxSpeed);
  }

  this.show = function(){
    fill('#ffffff');
    line(30 + movement * 1.5, 30 + movement * 1.5, 40 + movement * 1.5, 50 + movement * 1.5);
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
