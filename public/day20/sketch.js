var soundFile;
var relax;
var study;
var sleep;

function preload(){
  soundFormats('ogg', 'mp3');
  soundFile = loadSound(`Simply-noise-rain.mp3`);
  soundFile1 = loadSound(`Rain-sleep.mp3`);
  soundFile2 = loadSound(`Rain-study-sounds.mp3`);

  relax = select('#relax');
  relax.mouseReleased(relaxRain);

  study = select('#study');
  study.mouseReleased(studyRain);

  sleep = select('#sleep');
  sleep.mouseReleased(sleepRain);
}

function setup(){



  //heavy.mouseReleased(heavyRain);

}


function studyRain(){
  soundFile1.stop();
  soundFile2.stop();
  soundFile.stop();
  soundFile2.loop();
}

function relaxRain(){
  soundFile1.stop();
  soundFile2.stop();
  soundFile.stop();
  soundFile.loop();
}

function sleepRain(){
  soundFile1.stop();
  soundFile2.stop();
  soundFile.stop();
  soundFile1.loop();
}
