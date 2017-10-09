// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/biN3v3ef-Y0

var randomList = [];
var word = 0;
var generateLength = 10;

function Line(x, y) {

  // this.x = width/2;
  // this.xdir = 0;
  this.x = x;
  this.y = y;
  this.random = Math.floor(Math.random() * 10);
  this.lineLength = 10;
  randomList = [];
  this.theSize = Math.floor(Math.random() * 20) + 5;
  this.speed = Math.floor(Math.random());

  this.create = function(){

    for(var i = 0; i < this.lineLength; i ++){
      this.times ++;
      this.random = Math.floor(Math.random() * 10);
      text(this.random, this.x, this.speed + i * 10);
      randomList.push(this.random);


    }

  setInterval(this.generateWord,10);


  }

  this.generateWord = function(){

    word = Math.floor(Math.random() * generateLength);

    randomList[word] = Math.floor(Math.random() * 10);


  }



  this.show = function() {
    //text("Money: " + money, 5, 20);
    this.speed += this.theSize * 0.1;
    var randomColor = Math.floor(Math.random() * 50)

    for(var i = 0; i < randomList.length; i ++){
      fill(255,35,35,30 + i * randomColor);
      textSize(this.theSize);
      text(randomList[i], this.x ,this.y + this.speed + i * this.theSize);
    }

    if(this.speed + i * this.theSize > 1200){
      this.reset();
    }


    // fill(255);
    // rectMode(CENTER);
    // rect(this.x, this.y, 20, 20);
  }

  this.reset = function(){
    this.speed = 0;
    this.random = Math.floor(Math.random() * 10);
    this.theSize = Math.floor(Math.random() * 20) + 5;
    this.speed = Math.floor(Math.random());
  }





}
