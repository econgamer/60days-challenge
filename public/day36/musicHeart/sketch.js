var melody = [];
var soundFile = [];

var song, analyzer;
var rotationSpeed = 0;

function preload() {
  song = loadSound('song/Beethovens5.mp3');
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  img = loadImage("heart.png");
  song.loop();

  // create a new Amplitude analyzer
  analyzer = new p5.Amplitude();

  // Patch the input to an volume analyzer
  analyzer.setInput(song);
}

function draw() {
  background('#000000');


  // Get the average (root mean square) amplitude
  var rms = analyzer.getLevel();

  imageMode(CENTER);
  image(img, displayWidth/2, displayHeight/2 , img.width + rms * 400, img.height + rms * 400);


  fill(127);
  stroke(0);

  // Draw an ellipse with size based on volume

}
