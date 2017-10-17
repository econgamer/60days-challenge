// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/C3EwsSNJeOE

var story = {
  "start": "#[hero:#character#]story#",
  "character": ["dragon", "unicorn", "rainbow"],
  "story": "#adj#",
  "adj": ["desire", "night", "awakening", "surrender", "obsession", "vision", "proposition", "game", "promise", "arrangement", "treasure", "dream", "embrace", "struggle", "pleasure",
  "discovery", "wish", "need", "apple","muscled", "sexy", "dark", "well dressed", "masculine", "dramatic", "dramatically lit", "boyish", "burly", "handsome", "erotic","purred", "whispered", "said", "murmurred", "growled",
  "space station", "film studio", "70s nightclub","cup of chamomile tea", "glass of milk", "shot of vodka", "dry martini",
  "fuzzy navel", "appletini", "double shot of gin", "campari", "glass of champagne", "metal", "electofunk", "jazz", "salsa", "klezmer", "zydeco",
  "blues", "mariachi", "flamenco", "pop", "rap", "soul", "gospel", "buegrass", "swing", "folk","yielding", "firm", "joyful", "catchy", "folksy",
  "harsh", "strong", "soaring", "rising", "falling",
  "fading", "frantic", "calm", "childlike", "rough", "sensual", "erotic", "frightened", "sorrowful", "gruff", "smooth"],
  "noun": ["apple"]
}

var grammar;
var result;
var keyCodePressed;
var displayNow = true;
var displayWord;
var highlightWord = "a";


//time handler
var input;
var seconds = 3;
var minutes = 1;
var hours = 0;
var totalSeconds;
var soundFile;
var bullet = new Bullet();
var bullets = [];
var bg;

//score
var score = -1;




function preload(){
  soundFormats('ogg', 'mp3');
  soundFile = loadSound(`alarm.mp3`);
  fireSound = loadSound('gunshot-sound.mp3');

  img = loadImage("bullethole.png");
  bg = loadImage("bg.jpg");
}

function setup(){

  createCanvas(900,600);
  background(bg);

  grammar = tracery.createGrammar(story);
  result = grammar.flatten("#story#");


  displayWord = result;

  totalSeconds = seconds + minutes * 60 + hours * 60 * 60;

  bullets.push(bullet);

}

//slice, index = 0


function keyPressed(){
  keyCodePressed = String.fromCharCode(keyCode).toLowerCase();




}



function draw(){

  background(bg);
  fill(255, 255, 255);
  textSize(50);
  text(result, 900/2 - 100, 100);


  for(var i = 0; i < bullets.length; i++){
    bullets[i].show();
  }


  // if(displayNow){
  //   background(56);
  //   text(result, 100, 100);
  //   displayNow = false;
  // }

  if(displayNow){
    //background(56);
    fill(0, 0, 0);
    //text(result, 100, 100);
    displayNow = false;
    score += 1;
  }


  if(result[0] === keyCodePressed && result.length > 0){
    fireSound.play();
    var newBullet = new Bullet();
    bullets.push(newBullet);
    result = result.slice(1,result.length);
    displayNow = true;
    keyCodePressed = '';
  }


  if(result.length <= 0){
    result = grammar.flatten("#story#");
    // i = -1;
  }


  // time handler
  fill(0, 0, 0);
  textSize(35);


  // text(`${nf(minutes,2)}:${nf(seconds,2)}`, 5, 35);
  if(minutes != null && !isNaN(minutes) && !isNaN(seconds)){
    if(seconds < 10){
      text(`0${minutes}:0${seconds}`, 5, 35);
    }else{
      text(`0${minutes}:${seconds}`, 5, 35);
    }
  }



  fill(0, 0, 0);
  textSize(35);
  text('Score:' + score, 5, 65);



}


var interval = setInterval(countDown, 1000);


function countDown(){

  if(totalSeconds != 0){
    totalSeconds -= 1;


    // minutes = Math.floor((totalSeconds / 60));
    minutes = Math.floor((totalSeconds) / 60);
    seconds = Math.floor(totalSeconds - (minutes * 60));



  }else{
    clearInterval(interval);
    //soundFile.play();

    //score
    result = "Your score is " + score;


    noLoop();
  }

}
