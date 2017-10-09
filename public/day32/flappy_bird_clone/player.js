// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/biN3v3ef-Y0

function Player(x, y) {
  // this.x = width/2;
  // this.xdir = 0;
  this.x = x;
  this.y = y;
  this.health = 100;
  this.gameOver = false;
  this.failingSpeed = 1;
  this.height = 22;
  this.width = 35;

  this.score = 0;
  this.check = false;

  this.show = function() {
    noFill();
    noStroke();
    rectMode(CENTER);
    this.y += this.failingSpeed;
    rect(this.x, this.y, this.width, this.height);
  }

  // this.setDir = function(dir) {
  //   this.xdir = dir;
  // }

  this.move = function(speed, dir) {



    if(dir === 'horizontal'){
      this.x += speed;

    }

    if(dir === 'vertical'){
      this.y += speed;
    }

  }


  this.hits = function(barrier) {
      if(barrier){
        if( (this.y + this.height/2) < (barrier.y - barrier.height/2) || (this.y - this.height/2 > (barrier.y + barrier.height/2))
        || ((this.x + this.width/2) < (barrier.x - barrier.width/2))
        || ((this.x - this.width/2) > (barrier.x + barrier.width/2))  ){

          if( !( ((this.x + this.width/2) < (barrier.x - barrier.width/2)) || ((this.x - this.width/2) > (barrier.x + barrier.width/2)) ))
          {

            if(this.check === false ){
              this.score += 1;
              console.log(this.score);
            }
          }




          return false;
        }else{
          return true;
        }
    }else{
      console.log('It Crush!');
    }

  }

}
