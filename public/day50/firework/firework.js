// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/biN3v3ef-Y0






function Firework(x, y) {

  // this.x = width/2;
  // this.xdir = 0;
  this.x = x;
  this.y = y;
  this.position = createVector(x,y);
  this.velocity = createVector(0,-2);
  this.acceleration = createVector(0,0.01);
  this.particleSystem = [];
  this.explosionAmount = 100;
  this.randomRed = Math.floor((Math.random() * 255));
  this.randomGreen = Math.floor((Math.random() * 255));
  this.randomBlue = Math.floor((Math.random() * 255));

  this.color = color(this.randomRed, this.randomGreen, this.randomBlue, this.velocity.y * 250 + 500);
  console.log(this.randomRed);
  this.create = function(){
  }





  this.show = function() {

    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);

    if(this.velocity.y >= -0.1){
      this.velocity.y = 0;

      if(this.explosionAmount > 0){
        this.particleSystem.push(new Particle(this.position.x, this.position.y, this.color));
        this.checkFireworkExplosion();
      }else{
        this.checkFireworkExplosion();
      }



      this.explosionAmount --;
    }else{
      colorMode(HSB, 255);
      this.color = color(this.randomRed, this.randomGreen, this.randomBlue, this.velocity.y * 250 + 500);
      fill(this.color);
      //fill(255, this.velocity.y * 250 + 500);
      //ellipse(this.position.x, this.position.y, 20, 20);
      rect(this.position.x, this.position.y, 5, 20);

    }



  }



  this.checkFireworkExplosion = function(){
    for (var i = this.particleSystem.length-1; i >= 0; i--) {
      var p = this.particleSystem[i];
      p.run();
      if (p.isDead()) {
        this.particleSystem.splice(i, 1);
      }
  }
}



}
