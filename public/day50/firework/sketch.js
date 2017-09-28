var fireworks = [];
var firework;


function setup(){
  createCanvas(900, 600);
  background(0);

  firework = new Firework(100,300);
}


function reset(){


}



function draw(){
  background(0);

  for(var i = 0; i < fireworks.length; i++){
    fireworks[i].show();
  }


}

function mousePressed() {
  firework = new Firework(mouseX,mouseY);
  fireworks.push(firework);
}
