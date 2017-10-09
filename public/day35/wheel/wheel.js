// diameter = 300
// data = [ 30, 10, 45, 35, 60, 38, 75, 67 ];

function Wheel(diameter, angles) {
  this.lastAngle = 0;
  this.diameter = diameter;
  this.angles = angles;
  this.x = 0;
  this.speed = Math.floor((Math.random() * 30) + 10);
  this.arc1;
  this.arc1Degree;
  this.movement = 0
  this.arc2;
  this.arc2Degree;


  this.show = function(){

    //speed control

    this.speed -= 0.05;
    if(this.speed <= 0){
      this.speed = 0;
    }


    this.movement += this.speed;

    // Movement reset
    if(this.movement >= 360){
      this.movement = 0;

    }

    // degree detecting
    arc1Degree = this.movement;

    if(arc1Degree > 270){
      fill('green');
      textSize(33);
      textAlign(TOP);
      text("Yes" , displayWidth/2 - 28, diameter - 50);
    }else if(90 > arc1Degree){
      fill('green');
      textSize(33);
      textAlign(TOP);
      text("Yes" , displayWidth/2 - 28, diameter - 50);
    }else{
      fill('red');
      textSize(33);
      textAlign(TOP);
      text("No" , displayWidth/2 - 20, diameter - 50);
    }

    //270 to 90 is the field of arc1
    fill('red');
    this.arc1 = arc(displayWidth/2, height/2, this.diameter, this.diameter, radians(0 + this.movement), 0+radians(this.angles[0] + this.movement));



    fill('green');
    this.arc2 = arc(displayWidth/2, height/2, this.diameter, this.diameter,  radians(180 + this.movement),  radians(180 + this.movement) + radians(this.angles[1]));


  }


  this.move = function(){


  }




}
