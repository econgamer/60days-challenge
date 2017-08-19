function Tree(n){
  this.root = null;
}


Tree.prototype.insertValue = function(val){
  var node = new Node(val);

  if(this.root == null){
    this.root = node;

    //drawing
    this.root.x = width + 200;
    this.root.y = 100;


  }else{
    this.root.addValue(node);
  }
}

//Traversal
Tree.prototype.traversal = function(){
  this.root.visit(this);
}

//search
Tree.prototype.searchNode = function(val){
  return this.root.search(val);
}

Tree.prototype.deleteNode = function(val){
  this.root.removeValue(val);
}
