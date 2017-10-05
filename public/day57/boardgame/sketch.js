var imgs;
var randomNum = 1;
var totalNum = 0;
var titles = [];
var pushed = false;
var player;
var target = null;
var life = ['You are born', 'You learn how to walk', 'You have acquired a new family member - a sister', 'Today, is your first school day', 'You meet your crush',
'You achieve the first rank in your class', 'You become a drug addict', 'Your heart is broken','You are waiting for someone', 'You enter University',
'You have graduated', 'You have found a job', 'You are having a wonderful dinner' ,'You are crying as bad things happened', 'You are fucking',
'Your Friends start getting married','Working', 'You are at funeral','Working','You are depressed','You got promoted',
'You are retired', 'You are at funeral', 'You are missing her/him','You are missing them', 'You are dead']


function preload() {

}



function setup(){

  createCanvas(900,600);
  background(56);
  imgs = [];
  imgs[0] = loadImage("img/dice-1.png");

  for(var i = 1; i <= 6 ; i++){
    imgs[i] = loadImage(`img/dice-${i}.png`);
  }

  player = new Player();

  // horizontal
  for(var i = 0; i <= 7 ; i ++){
    rectMode(CENTER);
    noFill();
    var title = rect(i * 60 + width/2 - 200, height/2 - 200, 60, 60);
    titles.push({x: i * 60 + width/2 - 200, y: height/2 - 200});
  }

  //vertical
  for(var i = 0; i < 5 ; i ++){
    rectMode(CENTER);
    noFill();
    var title = rect(220 + width/2, height/2 - 140 + (60 * i), 60, 60);
    titles.push({x: 220 + width/2, y: height/2 - 140 + (60 * i)});
  }

  // horizontal
  for(var i = 0; i <= 7 ; i ++){
    rectMode(CENTER);
    noFill();
    var title = rect(670 - i * 60, height/2 - 140 + (300), 60, 60);
    titles.push({x: 670 - i * 60, y: height/2 - 140 + (300)});
  }

  //vertical
  for(var i = 0; i < 5 ; i ++){
    rectMode(CENTER);
    noFill();
    var title = rect(width/2 - 200, 400 - (60 * i), 60, 60);
    titles.push({x: width/2 - 200, y: 400 - (60 * i)});
  }

}

function draw() {


  background(56);
  imageMode(CENTER);
  image(imgs[randomNum], width/2, height/2, imgs[randomNum].width/2, imgs[randomNum].height/2);

  // horizontal
  for(var i = 0; i <= 7 ; i ++){
    rectMode(CENTER);
    noFill();
    var title = rect(i * 60 + width/2 - 200, height/2 - 200, 60, 60);
  }

  //vertical
  for(var i = 0; i < 5 ; i ++){
    rectMode(CENTER);
    noFill();
    var title = rect(220 + width/2, height/2 - 140 + (60 * i), 60, 60);
  }

  // horizontal
  for(var i = 0; i <= 7 ; i ++){
    rectMode(CENTER);
    noFill();
    var title = rect(670 - i * 60, height/2 - 140 + (300), 60, 60);
  }

  //vertical
  for(var i = 0; i < 5 ; i ++){
    rectMode(CENTER);
    noFill();
    var title = rect(width/2 - 200, 400 - (60 * i) , 60, 60);
  }

  //player
  player.show();

  if(target && totalNum <= 7){
    player.moveX(target);

  }else if(target && totalNum <= 13){
    if(player.position.x <= 670){
      player.moveX(target);
    }else{
      player.moveY(target);
    }
  }else if(target && totalNum <= 20){
    if(player.position.y <= 460){
      player.moveY(target);
    }else{
      player.moveXReverse(target);
    }
  }else if(target && totalNum <= 40){
    if(player.position.x >= 250){
      player.moveXReverse(target);
    }else{
      player.moveYReverse(target);
    }
  }

  textSize(15);
  fill("#ffffff");
  textAlign(CENTER);
  text(`${life[totalNum]}`, width/2, height/2 - 120);


}


function mousePressed() {
  randomNum = Math.floor(Math.random() * (3 - 1) + 1);
  totalNum += randomNum;




  if(totalNum >= 25){
    totalNum = 25;
  }

  target = titles[totalNum];
}
