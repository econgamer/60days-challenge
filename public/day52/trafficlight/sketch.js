var checkRate = 1000;
var timeRate = 0;
var trafficLight;
var currentdate;
var lastLoopTime = 0;

function setup(){
  createCanvas(900, 600);
  background(0);

  trafficLight = new TrafficLight(100,300);
  currentdate = new Date();

  trafficLight.create();
}


function reset(){


}



function draw(){


  if(new Date().getTime() -  lastLoopTime > 4000){


    trafficLight.show();

    lastLoopTime = new Date().getTime();


  }

}

function mousePressed() {
  // firework = new Firework(mouseX,mouseY);
  // fireworks.push(firework);
}
