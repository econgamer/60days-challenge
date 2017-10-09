
var speed;
var result = [];
var horses = [];
var horsesNum = 6;
var money = 100;

var bet;
var betAmount;

var finished = false;
var checked = false;


function setup(){


  createCanvas(900, 600);
  background(0,255,0);


  bet = select('#bet');
  bet.mousePressed(function(){betHorse(0)});

  bet1 = select('#bet1');
  bet1.mousePressed(function(){betHorse(1)});

  bet2 = select('#bet2');
  bet2.mousePressed(function(){betHorse(2)});

  bet3 = select('#bet3');
  bet3.mousePressed(function(){betHorse(3)});

  bet4 = select('#bet4');
  bet4.mousePressed(function(){betHorse(4)});

  bet5 = select('#bet5');
  bet5.mousePressed(function(){betHorse(5)});

  speed1 = Math.floor((Math.random() * 20) + 5);
  speed2 = Math.floor((Math.random() * 20) + 5);
  speed3 = Math.floor((Math.random() * 20) + 5);
  speed4 = Math.floor((Math.random() * 20) + 5);
  speed5 = Math.floor((Math.random() * 20) + 5);
  speed6 = Math.floor((Math.random() * 20) + 5);


  //Horse Setup
  for(var i = 0; i < horsesNum; i++){
    var horse = new Horse(0, 100 * i + 50, i);
    horses.push(horse);
  }

}


function reset(){
  horses = [];
  result = [];

  finished = false;
  checked = false;


  speed1 = Math.floor((Math.random() * 10) + 1);
  speed2 = Math.floor((Math.random() * 10) + 1);
  speed3 = Math.floor((Math.random() * 10) + 1);
  speed4 = Math.floor((Math.random() * 10) + 1);
  speed5 = Math.floor((Math.random() * 10) + 1);
  speed6 = Math.floor((Math.random() * 10) + 1);


  //Horse Setup
  for(var i = 0; i < horsesNum; i++){
    var horse = new Horse(0, 100 * i + 50, i);
    horses.push(horse);
  }

}



function draw(){
  background(51);


  for(var i = 0; i < horses.length; i++){
    horses[i].show();
  }


  horses[0].move(speed1);
  horses[1].move(speed2);
  horses[2].move(speed3);
  horses[3].move(speed4);
  horses[4].move(speed5);
  horses[5].move(speed6);

  for(var i = 0; i < horses.length; i++){
    if(horses[i].x > 900 && horses[i].finished === false){
      horses[i].finished = true;
      result.push(horses[i]);
    }
  }

  if(result.length === horsesNum && !checked){
    finished = true;

  }

  if(finished){
    checkStatus();
  }


  //Text handler
  text("Money: " + money, 5, 20);


}

function checkStatus(){
  var firstPlace = result[0].name;
  for(var i = 0; i < horses.length; i++){
    if(horses[i].name === firstPlace){
      money += (horses[i].bet * 6);
    }
  }
  finished = false;
  checked = true;

  console.log(`money is delivered, First place is ${firstPlace}`);
}

function betHorse(horseNum){
  reset();

  if(money > 0){
    betAmount = parseInt(select('#betAmount').value());
    for(var i = 0; i < horses.length; i++){
      if(horses[i].name === horseNum && money >= betAmount){
        horses[i].bet += betAmount;
        money -= betAmount;
      }
    }


  }


}
