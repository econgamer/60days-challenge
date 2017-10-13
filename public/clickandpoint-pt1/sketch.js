var stones = [];
var stone;
var stoneNum = 10;

function preload() {

}



function setup(){

  createCanvas(900,600);
  background(56);

  for(var i = 0; i < stoneNum; i ++){
    stone = new Stone();
    stones.push(stone);
  }

}

function draw() {
  background(56);
  for(var i = 0; i < stoneNum; i ++){
    stones[i].show();
  }
}


function mousePressed() {
  console.log(mouseX, mouseY);


  for(var i = 0; i < stoneNum; i ++){
    if((mouseX >= (stones[i].x - 10)) && (mouseX <= (stones[i].x) + 10)
        && (mouseY >= (stones[i].y - 10)) && (mouseY <= (stones[i].y + 10))
      ){
      console.log("change color");
      stones[i].changeColor();

      if(stones[i].selected === false){
        stones[i].selected = true;
      }

    }
  }

  for(var i = 0; i < stoneNum; i ++){
    if(stones[i].selected === true){
      stones[i].setTarget(mouseX,mouseY);
    }
  }



}
