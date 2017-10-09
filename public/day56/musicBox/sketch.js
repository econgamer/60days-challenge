var notes = [];
var soundFile = [];
var scanner;
var numberOfNotes = 12;

function preload() {

  soundFormats('ogg', 'mp3');
  soundFile[0] = loadSound(`./A/C3.mp3`);
  soundFile[1] = loadSound(`./A/D3.mp3`);
  soundFile[2] = loadSound(`./A/Db3.mp3`);
  soundFile[3] = loadSound(`./A/E3.mp3`);
  soundFile[4] = loadSound(`./A/Eb3.mp3`);
  soundFile[5] = loadSound(`./A/F3.mp3`);
  soundFile[6] = loadSound(`./A/G3.mp3`);
  soundFile[7] = loadSound(`./A/Gb3.mp3`);
  soundFile[8] = loadSound(`./A/A3.mp3`);
  soundFile[9] = loadSound(`./A/Ab3.mp3`);
  soundFile[10] = loadSound(`./A/B3.mp3`);
  soundFile[11] = loadSound(`./A/Bb3.mp3`);



}



function setup(){

  createCanvas(900,600);
  background(56);
  //soundFile[].setVolume(0.1);
  scanner = new Scanner();
  notes.push(new Note(soundFile[0]));

}

function draw() {


  background(56);

  for(var i = 0; i < notes.length; i++){
    notes[i].show();

  }


  scanner.move();
  scanner.show();
  scanner.edgeDetect();
  // textSize(20);
  // textStyle(BOLD)
  // textAlign(CENTER);
  // text("Music Box - Click your left mouse button", width/2, height/2);
  scannerDetect();

  if(mouseIsPressed){
    for(var i = 0; i < numberOfNotes; i++){
      if(mouseX <= (75 * i + 75)){
        notes.push(new Note(mouseX, mouseY, soundFile[i]));
        break;
      }
    }
  }

}


function mousePressed() {

  for(var i = 0; i < numberOfNotes; i++){
    if(mouseX <= (75 * i + 75)){
      notes.push(new Note(mouseX, mouseY, soundFile[i]));
      break;
    }
  }

}

function scannerDetect(){
  for(var i = 0; i < notes.length; i++){
    if(scanner.position.y === notes[i].position.y){

      if(notes[i] != null){
        notes[i].play();
      }

    }


  }

}
