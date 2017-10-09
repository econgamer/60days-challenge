// var txt;

// function preload(){
//   txt = loadStrings("hihi.txt");
// }

function loadFile(){
  loadStrings("hihi.txt", fileLoaded);
}

function fileLoaded(data){
  // txt = data;
  createP(join(data, "<br>"));
}

function fileSelected(file){
  createP(file.name + " " + file.size + " " + file.type);


  if(file.type == "text"){
    createP(file.data);
  }else{
    createP("I need a text file.");
  }


}

function setup(){
  noCanvas();

  createFileInput(fileSelected);

  var button = select("#loadfile");
  button.mousePressed(loadFile);

  // createP(join(txt, "<br>"));
}
