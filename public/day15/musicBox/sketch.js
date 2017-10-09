var melody = [];
var soundFile = [];

function preload() {

  var randomNum1 = Math.floor(Math.random() * (26 - 1)) + 1;
  var randomNum2 =  Math.floor(Math.random() * (26 - 1)) + 1;
  var randomNum3 =  Math.floor(Math.random() * (26 - 1)) + 1;
  var randomNum4 =  Math.floor(Math.random() * (26 - 1)) + 1;
  var randomNum5 =  Math.floor(Math.random() * (26 - 1)) + 1;
  var randomNum6 =  Math.floor(Math.random() * (26 - 1)) + 1;
  var randomNum7 =  Math.floor(Math.random() * (26 - 1)) + 1;
  var randomNum8 =  Math.floor(Math.random() * (26 - 1)) + 1;
  var randomNum9 =  Math.floor(Math.random() * (26 - 1)) + 1;
  var randomNum10 =  Math.floor(Math.random() * (26 - 1)) + 1;
  var randomNum11 =  Math.floor(Math.random() * (26 - 1)) + 1;
  var randomNum12 =  Math.floor(Math.random() * (26 - 1)) + 1;
  var randomNum13 =  Math.floor(Math.random() * (26 - 1)) + 1;
  var randomNum14 =  Math.floor(Math.random() * (26 - 1)) + 1;
  var randomNum15 =  Math.floor(Math.random() * (26 - 1)) + 1;
  var randomNum16 =  Math.floor(Math.random() * (26 - 1)) + 1;
  var randomNum17 =  Math.floor(Math.random() * (26 - 1)) + 1;
  var randomNum18 =  Math.floor(Math.random() * (26 - 1)) + 1;
  var randomNum19 =  Math.floor(Math.random() * (26 - 1)) + 1;
  var randomNum20 =  Math.floor(Math.random() * (26 - 1)) + 1;
  var randomNum21 =  Math.floor(Math.random() * (26 - 1)) + 1;
  var randomNum22 =  Math.floor(Math.random() * (26 - 1)) + 1;
  var randomNum23 =  Math.floor(Math.random() * (26 - 1)) + 1;
  var randomNum24 =  Math.floor(Math.random() * (26 - 1)) + 1;
  var randomNum25 =  Math.floor(Math.random() * (26 - 1)) + 1;
  var randomNum26 =  Math.floor(Math.random() * (26 - 1)) + 1;


  soundFormats('ogg', 'mp3');
  soundFile[0] = loadSound(`A/1.mp3`);
  soundFile[1] = loadSound(`A/${randomNum1}.mp3`);
  soundFile[2] = loadSound(`A/${randomNum2}.mp3`);
  soundFile[3] = loadSound(`A/${randomNum3}.mp3`);
  soundFile[4] = loadSound(`A/${randomNum4}.mp3`);
  soundFile[5] = loadSound(`A/${randomNum5}.mp3`);
  soundFile[6] = loadSound(`A/${randomNum6}.mp3`);
  soundFile[7] = loadSound(`A/${randomNum7}.mp3`);
  soundFile[8] = loadSound(`A/${randomNum8}.mp3`);
  soundFile[9] = loadSound(`A/${randomNum9}.mp3`);
  soundFile[10] = loadSound(`A/${randomNum10}.mp3`);
  soundFile[11] = loadSound(`A/${randomNum11}.mp3`);
  soundFile[12] = loadSound(`A/${randomNum12}.mp3`);
  soundFile[13] = loadSound(`A/${randomNum13}.mp3`);
  soundFile[14] = loadSound(`A/${randomNum14}.mp3`);
  soundFile[15] = loadSound(`A/${randomNum15}.mp3`);
  soundFile[16] = loadSound(`A/${randomNum16}.mp3`);
  soundFile[17] = loadSound(`A/${randomNum17}.mp3`);
  soundFile[18] = loadSound(`A/${randomNum18}.mp3`);
  soundFile[19] = loadSound(`A/${randomNum19}.mp3`);
  soundFile[20] = loadSound(`A/${randomNum20}.mp3`);
  soundFile[21] = loadSound(`A/${randomNum21}.mp3`);
  soundFile[22] = loadSound(`A/${randomNum22}.mp3`);
  soundFile[23] = loadSound(`A/${randomNum23}.mp3`);
  soundFile[24] = loadSound(`A/${randomNum24}.mp3`);
  soundFile[25] = loadSound(`A/${randomNum25}.mp3`);
  soundFile[26] = loadSound(`A/${randomNum26}.mp3`);

}



function setup(){

  createCanvas(900,600);
  background(56);
  //soundFile[].setVolume(0.1);
  //melody.push(new Melody(soundFile[0]));



}

function draw() {


  background(56);

  for(var i = 0; i < melody.length; i++){
    melody[i].move();
    melody[i].show();
    melody[i].edgeDetect();
  }

  textSize(20);
  textStyle(BOLD)
  textAlign(CENTER);
  text("Music Box - Click your left mouse button", width/2, height/2);


}


function mousePressed() {

  var num = Math.floor(Math.random() * (26 - 0)) + 0;

  melody.push(new Melody(soundFile[num]));
}
