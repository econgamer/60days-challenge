var player;
var playerx;
var playery;

var barrier;
var barrierX;
var barrierY;
var barriers = [];


var backScreenX;
var backScreenY;

var offset = 100;

var pause = false;

var frame = 0;
var rate = 10;

var level = 1;


function preload(){

}

function setup(){

  createCanvas(900, 600);

  //img Setup
  img = loadImage("img/space.jpeg");
  playerImg = loadImage("img/player_plane.png");
  barrierTexture = loadImage("img/asteroid.png");

  //Player Setup
  playerx = width/2;
  playery = height/2;
  player = new Player(playerx, playery);

  barrierX = width - offset;
  barrierY = height - offset;

  barrier = new Barrier(barrierX, barrierY, 20, 200, barrierTexture);
  barriers.push(barrier);

  backScreenX = -width;
  backScreenY = 0;



}


function draw(){
  background(51);


  //background
  backScreenX -= 0.05;


  image(img, backScreenX, backScreenY, img.width/2, img.height/2);

  image(playerImg, player.x - 25, player.y, img.width/100, img.height/100);


  // score
  text("Score: " + player.score, 10, 60);
  text("Level " + level, 10, 100);
  //Player
  playerMovement();
  player.show();

  // barrier
  for(var i = 0; i < barriers.length; i++){
    barriers[i].show();
  }

  //Collision Detection
  for(var i = 0; i < barriers.length; i++){
    if(player.hits(barriers[i])){
      gameOver();
    }
  }

  // remove barrier
  for(var i = 0; i < barriers.length; i++){
    if(barriers[i].x < 0){
      barriers.splice(i, 1);
    }
  }

  //frame control
  frame += rate;
  if(frame >= 1800){
    pause = true;
    frame = 0;
  }

  // level handling
  if(player.score > 100 && level === 1){
    rate = 50;
    level++;
  }else if(player.score > 200 && level === 2){
    rate = 1000;
    level++;
  }
}


setInterval(loop, 1500);





function loop(){

  if(pause){
    var w = Math.floor((Math.random() * 20) + 40);
    var h = Math.floor((Math.random() * 250) + 200);

    var w2 = Math.floor((Math.random() * 20) + 40);
    var h2 = Math.floor((Math.random() * 250) + 200);

    barriers.push(new Barrier(barrierX, barrierY, w, h, barrierTexture));
    barriers.push(new Barrier(barrierX, 0, w2, h2, barrierTexture));
    pause = false;
  }else{
    pause = false;
  }




}

function keyPressed() {
  if (keyCode === 32) {
    player.move(-25, 'vertical');
  }

}

function gameOver(){
  textSize(50);
  textStyle(BOLD)
  textAlign(CENTER);
  text("GAME OVER", width/2, height/2);
  noLoop();
}

function playerMovement(){


 //
 //  if (keyIsDown(LEFT_ARROW))
 //   player.move(-5, 'horizontal');
 //
 // if (keyIsDown(RIGHT_ARROW))
 //   player.move(5, 'horizontal');
 //
 // if (keyIsDown(UP_ARROW))
 //   player.move(-5, 'vertical');
 //
 // if (keyIsDown(DOWN_ARROW))
 //   player.move(5, 'vertical');
}
