function Player(x, y){


  this.x = x;
  this.y = y;


  this.position = createVector(width/2 - 200, height/2 - 200);

  this.velocity = createVector(0,0);
  this.accelerationY = createVector(0,0.01);
  this.accelerationX = createVector(0.01,0);
  this.negAccelerationY = createVector(0,-0.01);
  this.negAccelerationX = createVector(-0.01,0);
  this.maxSpeed = 5;




  this.show = function(){
    fill("#eb4d4d");
    ellipseMode(CENTER);
    ellipse(this.position.x, this.position.y, 20, 20);
  }


  this.moveX = function(target){
    if(this.position.x <= target.x){

    this.velocity.add(this.accelerationX);
    this.position.add(this.velocity);
    this.velocity.limit(this.maxSpeed);
  }else{
    this.velocity = createVector(0,0);
    }
  }

  this.moveY = function(target){
    if(this.velocity.x > 0){
      this.velocity = createVector(0,0);
    }


  if(this.position.y <= target.y){
    this.velocity.add(this.accelerationY);
    this.position.add(this.velocity);
    this.velocity.limit(this.maxSpeed);
    }else{
      this.velocity = createVector(0,0);
    }
  }


  this.moveXReverse = function(target){
    if(this.velocity.y > 0){
      this.velocity = createVector(0,0);
    }


  if(this.position.x >= target.x){
    this.velocity.add(this.negAccelerationX);
    this.position.add(this.velocity);
    this.velocity.limit(this.maxSpeed);
    }else{
      this.velocity = createVector(0,0);
    }
  }


  this.moveYReverse = function(target){
    if(this.velocity.x < 0){
      this.velocity = createVector(0,0);
    }


  if(this.position.y >= target.y){
    this.velocity.add(this.negAccelerationY);
    this.position.add(this.velocity);
    this.velocity.limit(this.maxSpeed);
    }else{
      this.velocity = createVector(0,0);
    }
  }





}
