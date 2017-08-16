var textfield;
var output;
var submit;

function setup(){
  noCanvas();

  textfield = select('#txt');
  output = select('#output');
  submit = select('#submit');
  submit.mousePressed(newText);

}

function newText(){
  var s = textfield.value();
  //var index = s.indexOf('rainbow');
  var store;
  for(var i = s.length; i >= 0; i--){
    var index = s.indexOf("rainbow", i);
    if(index != - 1 && index != store){
      createP(index);
      store = index;
    }

  }

  console.log('length ', s.length);
  //createP(s);
  michaeltang14@gmail.com
  econgamer@gmail.com
  //createP(index);
}
