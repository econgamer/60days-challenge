var textfield;
var output;
var submit;
var displayValue;
var input;
var dancingWords;
var image;

var arraylist = [];

function setup(){
  noCanvas();

  input = select('#txt');
  output = select('#output');
  submit = select('#submit');
  inform = select('#inform');
  submit.mousePressed(newText);
  displayValue = [];
  dancingWords= [];

  image = loadStrings('https://source.unsplash.com/1600x900/?nature,water');
}

function newText(){

  inform.html("<p>Please click the word(s)</p>");
  var inputValue = input.value();
  var text = inputValue.split(/(\W+)/);

  for(var i = 0; i < text.length; i++){
    var textSpan = createSpan(text[i]);
    textSpan.parent(output);



    //
    // if(textSpan.html() === "stone"){
    //   textSpan.html('<img src="stone.png"></img>');
    // }

    if(/w+/){

      textSpan.mouseOver(hover);
      textSpan.pressed = false;
      textSpan.mousePressed(textEffect);
    }

  }
}


function hover(){
  this.style('cursor', 'pointer');
}

function textEffect(){
  if(!this.pressed){
    this.html(`<img src="https://source.unsplash.com/featured/?${this.html()}"></img></br></br>
                <textarea id="" placeholder="Your story begin..."></textarea>`);
    //this.html(`<img src="${this.html()}.png"></img>`);

    this.pressed = true;

    inform.html("");
  }


}
