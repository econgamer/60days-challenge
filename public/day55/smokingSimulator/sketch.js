

var smoke_texture;
var smoke;
var strength = 0;
var consumed = 0;

var value = 0;
var colorValue = 183;

function preload() {
    smoke_texture = loadImage("smokeTexture.jpg");
}

function setup(){
  createCanvas(900, 600);
  background(0,255,0);

  smoke = new ParticleSystem(0,createVector(120, -40),smoke_texture);
}



function draw(){
  background(0);
  translate(width/2, height/2);

  if(consumed < 2){
    textSize(15);
    text(`How much cigarettes you have consumed? ${consumed}`, 30, 50);
  }else if(consumed < 3){
    textSize(15);
    text(`Alright, that's enough`, 30, 50);
  }else if(consumed < 4){
    textSize(15);
    text(`Please, don\'t`, 30, 50);
  }else if(consumed < 5){
    textSize(15);
    text(`Your final warning`, 30, 50);
  }else if(consumed < 6){
    textSize(15);
    text(`Bye`, 30, 50);
  }else if(consumed < 8){
    alert("I will stop you");
  }


  //rectangle
  // A rectangle
  rectMode(CENTER);
  fill(255);
  // var a = atan2(mouseY-height/2, mouseX-width/2);
  // rotate(a);
  rect(60, 0, 120, 40);
  rect(0, 0, 20, 40);

  fill(colorValue, 0, 0);
  ellipse(120, 0, 45, 45);



    //var dx = map(mouseX,0,width,-0.2,0.2);
    strength = value;

    // var wind = createVector(strength/5,0);
    //
    // smoke.applyForce(wind);
    smoke.run();


    for (var i = 0; i < strength; i++) {
        smoke.addParticle();
    }

    if (mouseIsPressed){
      value += 0.1;
      colorValue -= 1;

      if (value > 10) {
        value = 0;
      }

      if(colorValue < 30){
        consumed ++;
        colorValue = 183;
        value = -2.5;
      }

    }



}

function mousePressed() {

}
