
function Scanner(x, y){


  this.x = x;
  this.y = y;

  this.position = createVector(width/2, this.y);

  this.velocity = createVector(0,0);
  this.acceleration = createVector(0,1);
  this.maxSpeed = 5;

  this.move = function(){
    this.velocity.add(this.acceleration);
    this.position.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
  }


  this.show = function(){
    fill(255, 0, 0);
    rectMode(CENTER);
    rect(this.position.x, this.position.y, 1000, 10);
  }

  this.edgeDetect = function(){


    if(this.position.y > height){


      this.position = createVector(width/2, this.y);


    }

  }



}
