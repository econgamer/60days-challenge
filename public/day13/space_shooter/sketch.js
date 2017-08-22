var player;
var playerx;
var playery;


var enemies = [];
var enemyx;
var enemyy;
var enemyAmount = 100;
var enemyFirstwave = 10;

// var enemyShip = [];
// var enemyShipx;
// var enemyShipy;
// var enemyShipAmount = 20;


var bullet = [];
var bulletAmount = 0;


var explosion = [];
var explosionObj;

var song;
var song2;


var friendly = []

function preload(){
  song = loadSound('explosion-sound.mp3');
  song2 = loadSound('player-sound.mp3');
  song2.setVolume(0);
}

function setup(){

  song2.setVolume(0,0);
  createCanvas(900, 600);


  background(0,255,0);



  //Player Setup
  playerx = width/2;
  playery = height/2;
  player = new Player(playerx, playery);


  //Enemies setup
  //enemy-rock
  // for(var i = 0; i < enemyFirstwave; i ++){
  //   enemyx = width + (Math.random(1) * 500 );
  //   enemyy = 0;
  //
  //   enemies[i] = new Enemy(enemyx, enemyy + (i * 3));
  //   // console.log('create');
  // }


  for(var i = 0; i < enemyAmount; i ++){
    enemyx = width + (Math.random(1) * 500 );
    enemyy = 0;

    enemies[i] = new Enemy(enemyx, enemyy + (i * 10));
  }

  //enemy-ship
  // for(var z = 0; z < enemyShipAmount; z ++){
  //   enemyShipx = width - (Math.random(50) * 100 ) + 300;
  //   enemyShipy = 0 + 10 + (Math.random() * 5 );
  //
  //   enemyShip[z] = new EnemyShip(enemyShipx, enemyShipy + (z * 50));
  //
  // }


}

function draw(){
  background(51);
  //Player
  playerMovement();
  player.show();


  for(var e = 0; e < enemies.length; e ++){
    if(player.hits(enemies[e])){
      background('rgba(253,173,173, 0.25)');
    }
  }




  //enemy
  for(var e = 0; e < enemies.length; e ++){
    enemies[e].show();
    enemies[e].move();
  }

  // for(var e = 0; e < enemyShip.length; e ++){
  //   enemyShip[e].show();
  //   enemyShip[e].move();
  // }

  //bullet

    for(var b = 0; b < bullet.length; b++){

      bullet[b].show();
      bullet[b].move();


      for(var s = 0; s< enemies.length; s ++){


        if(bullet[b].hits(enemies[s])){
          bullet[b].evaporate();
          enemies[s].attacked();
          explosionObj = new Explosion(bullet[b].x, bullet[b].y);
          explosionObj.show();
          explosion.push(explosionObj);
          song.play();
        }
      }

    }



  for (var i = bullet.length-1; i >= 0; i--) {
    if (bullet[i].toDelete) {
      bullet.splice(i, 1);
    }
  }

  textSize(10);
  textStyle(BOLD)
  text("health: " + player.health , 10, 30);
  text("Arrow Keys to move, Enter to Fire ", 10, 60);




  if(player.gameOver){
    textSize(50);
    textStyle(BOLD)
    textAlign(CENTER);
    text("GAME OVER", width/2, height/2);
    noloop();
  }


}



function keyPressed() {
  if (keyCode === RETURN) {
    var newbullet = new Bullet(player.x, player.y);
    bullet.push(newbullet);
  }
}

function playerMovement(){

  if (keyIsDown(LEFT_ARROW))
   player.move(-5, 'horizontal');

 if (keyIsDown(RIGHT_ARROW))
   player.move(5, 'horizontal');

 if (keyIsDown(UP_ARROW))
   player.move(-5, 'vertical');

 if (keyIsDown(DOWN_ARROW))
   player.move(5, 'vertical');
}
