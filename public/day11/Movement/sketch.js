var speedX;
var speedY;
var v1;
var velocity;
var adjNum;
var rebound;
var gravity;
var counter;
var mass;

function setup(){
  //slider
  gSlider = createSlider(1, 20, 10);
  gSlider.position(20, 20);

  mSlider = createSlider(1, 100, 20);
  mSlider.position(20, 50);




  createCanvas(900,600);
  background(56);
  adjNum = 0;
  speedX = 0.1 + adjNum;
  speedY = 10 + adjNum;
  v1 = createVector(width/2, height/2);
  velocity = createVector(speedX, speedY);
  rebound = false;
  gravity = 1;
  mass = 2;
}

function keyPressed() {

  if (keyCode === RETURN) {
    v1 = createVector(width/2, height/2);
  }
}


function draw(){
  gravity = gSlider.value() * 0.1;
  mass = mSlider.value() * 0.1;

  background(56);

  text("gravity: " + gravity, gSlider.x * 2 + gSlider.width, 35);
  text("mass: " + mass, mSlider.x * 2 + mSlider.width, 65);
  text("Press Enter to spawn the ball again", 20, 100);



  var initialPoint = height/2 - 200;




  v1.add(velocity);


  if(v1.x > width || v1.x < 0){
    velocity.x *= -1;
  }



  if(v1.y >= height - 30){
    velocity.y *= -0.9 / (mass * gravity);
    v1.y = height - 29;



    rebound = true;

    counter++;
    velocity.x = 0;

  }

  ballUpdate();



  ellipse(v1.x, v1.y, 50, 50);
}


function ballUpdate(){

    if(rebound == true && v1.y <= height){
        velocity.y += 0.14 * 1.5 * gravity;

      }

      // if(velocity.y <= 0.01){
      //   velocity.y = 0;
      // }



}
