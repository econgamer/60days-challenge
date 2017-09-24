
var numOfLine = 100;
var line;
var lines = [];
var randomHeight;


function setup(){


  createCanvas(900, 600);
  background(0,255,0);

  for(var i = 0; i < numOfLine; i++){
    randomHeight = Math.floor(Math.random() * 500) - 200;
    line = new Line(0 + i * 10,randomHeight);
    line.create();
    lines.push(line);
  }


}


function reset(){


}



function draw(){
  background(0);



  for(var i = 0; i < lines.length; i++){
    lines[i].show();
  }

}
