var input;
var seconds = 0;
var minutes = 0;
var hours = 0;
var totalSeconds;
var soundFile;



function preload(){
  soundFormats('ogg', 'mp3');
  soundFile = loadSound(`alarm.mp3`);
}

function setup(){


  createCanvas(windowWidth,windowHeight);
  background(56);

  var params = getURLParams();


  if(params.sec){
    seconds = Number(params.sec);
  }else{
    seconds = 0;

  }

  if(params.min){
    minutes = Number(params.min);
  }else{
    minutes = 0;
  }

  if(params.hr){
    hours = Number(params.hr);
  }else{
    hours = 0;
  }





  totalSeconds = seconds + minutes * 60 + hours * 60 * 60;

}

function draw() {

  background(255);




  textSize(200);
  textStyle(BOLD)
  textAlign(CENTER);


  text(`${nf(hours,2)}:${nf(minutes,2)}:${nf(seconds,2)}`, width/2, height/2);
}


var interval = setInterval(countDown, 1000);

function countDown(){

  if(totalSeconds != 0){
    totalSeconds -= 1;

    hours = Math.floor(totalSeconds / (60 * 60));



    // minutes = Math.floor((totalSeconds / 60));
    minutes = Math.floor((totalSeconds - (hours * 60 * 60)) / 60);
    seconds = Math.floor(totalSeconds - (hours * 60 * 60) - (minutes * 60));


  }else{
    clearInterval(interval);
    soundFile.play();
    console.log('clean');
  }

}
