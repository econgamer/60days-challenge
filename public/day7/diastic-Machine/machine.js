var textfield;
var output;
var submit;
var displayValue;

// var index = s.indexOf("rainbow", 10)
// var newText = s.substring(5,7)
// split(s, " ")

function setup(){
  noCanvas();

  textfield = select('#txt');
  output = select('#output');
  submit = select('#submit');
  seed = select('#seed');
  submit.mousePressed(newText);
  displayValue = [];
}

function newText(){
  //handle seed
  var seedValue = seed.value();
  var seedText = split(seedValue, " ");


  var inputValue = textfield.value();
  //var inputText = split(inputValue, " ");
  inputText = splitTokens(inputValue, ' ,!.?');


  var checkedWords = 0;
  var checkedNum = 0;
  var isChecked = false;
  var moveon = false;


  for(var i = 0; i < inputText.length; i++){
    moveon = false;

    for(var x = 0; x < inputText[i].length; x++){

      isChecked = false;

      if(!moveon){

        while(!isChecked){

          if(seedText.length === checkedWords){
            break;
          }


          if(x == checkedNum && seedText[checkedWords][checkedNum] == inputText[i][x]){
            checkedNum += 1;
            moveon = true;
              if(checkedNum >= seedText[checkedWords].length){ //seedText[checkedWords][checkedNum].length < checkedNum
                checkedWords += 1;
                checkedNum = 0;
              }



              displayValue.push(inputText[i]);


            isChecked = true;
            }else{
              isChecked = true;

            }



        }
      }



    }
  }

  displayValue = displayValue.join(" ");
  output.html(displayValue);
  displayValue = [];





}
