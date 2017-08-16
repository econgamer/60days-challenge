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
  var withoutSpace = s.replace(/ /g,"");
  var newlength = withoutSpace.length;
  output.html('Words count: ' + newlength);
  
  }


  //createP(s);

  //createP(index);
