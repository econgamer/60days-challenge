
function Stone(){


  this.selected = false;
  this.x = Math.floor(Math.random() * (width - 0)) + 0;
  this.y = Math.floor(Math.random() * (height - 0)) + 0;
  this.target;
  this.speed = 0;

  this.color = color(165,165,165);
  this.isPlaying = false;


  this.position = createVector(this.x, this.y);


  this.show = function(){
    fill(this.color);
    rectMode(CENTER);

    rect(this.position.x, this.position.y, 20, 20);

  }

  this.changeColor = function(){
    this.color = color(226,185,70);
  }

  this.setTarget = function(targetX, targetY){
    this.target = createVector(targetX, targetY);
  }




}
