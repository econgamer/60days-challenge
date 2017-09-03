function Bullet(){
  //max = 800, min= 0

  this.x = Math.floor(Math.random() * (800 - 0)) + 0;

  //max = 500, min 0
  this.y = Math.floor(Math.random() * (500 - 100)) + 100;

  this.multiplier = Math.floor(Math.random() * (10 - 8)) + 8;

  this.show = function(){
    return image(img, this.x, this.y, img.width/this.multiplier, img.height/this.multiplier);
  }

}
