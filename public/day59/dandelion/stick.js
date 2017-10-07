// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/biN3v3ef-Y0






function Stick(root) {

  // this.x = width/2;
  // this.xdir = 0;
  this.x = root.x;
  this.y = root.y;
  this.height = root.height * Math.random() * 1.2;
  this.position = createVector(root.x,root.y);
  this.velocity = createVector(0,0);
  this.acceleration = createVector((Math.random() * 0.04) - 0.01,-0.01);
  this.evolve = false;
  this.evolveNow = false;


  // this.x = root.x;
  // this.y = root.y;
  // this.height = root.height;
  this.positionAnother = createVector(root.x,root.y);
  this.velocityAnother = createVector(0,0);
  this.accelerationAnother = createVector((Math.random() * 0.01) + -0.01,-0.01);




  this.show = function() {



    if(!(this.y - this.position.y >= this.height)){
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
      this.evolve = true;
    }else if(this.evolve){
      this.evolve = false;
      this.evolveNow = true;
    }

    stroke(255);
    line(this.x, this.y, this.position.x, this.position.y);
    this.showAnother();
  }


  this.showAnother = function(){

    if(!(this.y - this.positionAnother.y >= this.height)){
      this.velocityAnother.add(this.accelerationAnother);
      this.positionAnother.add(this.velocityAnother);
      this.evolve = true;
    }else if(this.evolve){
      this.evolve = false;
      this.evolveNow = true;
    }

    stroke(255);
    line(this.x, this.y, this.positionAnother.x, this.positionAnother.y);


    this.positionAnother = this.positionAnother;


  }





}
