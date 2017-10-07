// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/biN3v3ef-Y0






function Tree(root) {

  // this.x = width/2;
  // this.xdir = 0;
  this.x = root.x;
  this.y = root.y;
  this.height = root.height;
  this.position = createVector(root.x,root.y);
  this.velocity = createVector(0,0);
  this.acceleration = createVector(0,-0.01);
  this.evolve = false;
  this.evolveNow = false;

  this.show = function() {



    if(!(this.y - this.position.y >= this.height)){
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
      this.evolve = true;
    }else if(this.evolve){
      this.evolve = false;
      this.evolveNow = true;
    }

    stroke(100,126,80);
    line(this.x, this.y, this.position.x, this.position.y);



  }





}
