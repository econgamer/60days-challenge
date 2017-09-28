

function Particle(x, y, color) {

  this.acceleration = createVector(0, 0.05);
  this.velocity = createVector(random(-2, 2), random(-2, 0));
  this.position = createVector(x, y);
  this.lifespan = 255.0;
  this.color = color;


  this.run = function(){
    this.update();
    this.display();
  }



  this.update = function(){
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
  };

  // Method to display
  this.display = function() {

    fill(this.color, this.lifespan);
    //ellipse(this.position.x, this.position.y, 12, 12);
    rect(this.position.x, this.position.y, 3, 10);
  };

    // Is the particle still useful?
    this.isDead = function(){
      if (this.lifespan < 0) {
        return true;
      } else {
        return false;
      }
    };


}
