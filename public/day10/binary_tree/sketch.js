var node;
var tree;
var input;
var submit;
var output;

function setup(){


  tree = new Tree(new Node());
  tree.insertValue(10);
  tree.insertValue(5);
  tree.insertValue(15);
  tree.insertValue(7);
  tree.insertValue(2);
  tree.insertValue(9);
  tree.insertValue(31);
  tree.traversal();

  output = select('#output');

  input = select('#txtInput');
  submitInsert = select('#submit');
  submitInsert.mousePressed(insert);

  inputSearch = select('#txtSearch');
  submitSearch = select('#search');
  submitSearch.mousePressed(search);

  inputDelete = select('#txtDelete');
  submitDelete = select('#deleteNum');
  submitDelete.mousePressed(deleteNum);

}

function insert(){
  var inputVal = parseInt(input.value());
  tree.insertValue(inputVal);
  inputVal = "";
  input.html('');
  drawingUpdate();
}

function search(){
  var inputVal = parseInt(inputSearch.value());
  var result = tree.searchNode(inputVal);
  inputVal = "";
  inputSearch.html('');
  drawingUpdate();
  if(result){
    output.html('Found!');
  }else{
    output.html('Not Found');
  }

}

function deleteNum(){
  var inputVal = parseInt(inputDelete.value());
  tree.root.removeValue(inputVal);
  inputVal = "";
  inputDelete.html('');
  drawingUpdate();
}


function keyPressed() {

  if (keyCode === RETURN) {
    drawingUpdate();
  }
}

function drawingUpdate(){
  createCanvas(600, 400);
  background(51);
  tree.traversal();
}
