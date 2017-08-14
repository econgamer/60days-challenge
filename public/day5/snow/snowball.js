function Rain(){
  this.x = random(-width/2 + 100, width/2 -100);
  this.y = random(0, -4000);
  this.z = random(-speed, speed);
  this.w = 10;
  this.h = 10;
  var lastLoopTime = 0;
  var contacted = false;


  this.update = function(){
    // this.x = random(-width, width);
      this.y += speed;
      if(new Date().getTime() -  lastLoopTime> 200){
            this.z = random(-10, 10);
            //console.log('hihi');
            lastLoopTime = new Date().getTime();
      }

  }

  // this.x = random(-width, width);
  // this.y = random(-height, height);
  // this.z = random(width);
  // this.pz = this.z;
  //
  // this.update = function() {
  //   this.z = this.z - speed;
  //   if (this.z < 1) {
  //     this.z = width;
  //     this.x = random(-width, width);
  //     this.y = random(-height, height);
  //     this.pz = this.z;
  //   }
  // }

  this.display = function() {
    // var c = color(255, 204, 0);
    // fill(255);

    var targetX = map(this.x + 10, -width, width, -width, width);      //map(value,start1,stop1,start2,stop2)
    var targetY = map(this.y + 10, -height, height, -height, height);
    //stroke(255);
    fill(255);
    rect(this.x + this.z, this.y, this.w, this.h);
    //console.log(this.y);
    //line(this.x,this.y,targetX,this.y);
    //
    // var sx = map(this.x / this.z, 0, 1, 0, width);
    // var sy = map(this.y / this.z, 0, 1, 0, height);
    //
    // var r = map(this.z, 0, width, 16, 0);
    // ellipse(sx, sy, r, r);
    //
    // var px = map(this.x / this.pz, 0, 1, 0, width);
    // var py = map(this.y / this.pz, 0, 1, 0, height);
    //
    // this.pz = this.z;
    //
    // stroke(255);
    // line(px, py, sx, sy);

  }
}
