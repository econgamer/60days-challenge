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
  submit.mousePressed(newText);
  displayValue = [];
  dancingWords= [];

  image = loadStrings('https://source.unsplash.com/1600x900/?nature,water');
}

function newText(){


  var inputValue = input.value();
  console.log(inputValue)
  var text = inputValue.split(/\W+/);
  console.log(text);

  for(var i = 0; i < text.length; i++){
    var textSpan = createSpan(text[i]);
    textSpan.parent(output);



    //
    // if(textSpan.html() === "stone"){
    //   textSpan.html('<img src="stone.png"></img>');
    // }

    if(/a-zA-Z/){

      arraylist.push(textSpan.html());
      console.log(arraylist);

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
  }


}
