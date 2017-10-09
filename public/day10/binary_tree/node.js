function Node(val, x, y){
  this.value = val;
  this.left = null;
  this.right = null;

  //drawing
  this.x = x;
  this.y = y;

}

Node.prototype.search = function(val){
  if(this.value === val){

    return this.value;
  }
  if(this.left != null && val < this.value){
    return this.left.search(val);
  }

  if(this.right != null && val > this.value){
    return this.right.search(val);
  }

}

var firstTimeLeft = true;
var firstTimeRight = true;

Node.prototype.addValue = function(node){
  if(this.value > node.value){
    if(this.left == null){

      // this.left = node;
      // this.left.x = this.x - 70;
      // this.left.y = this.y + 30;
      this.left = node;
      if(firstTimeLeft){

        this.left.x = this.x - 100;
        this.left.y = this.y + 30;
        firstTimeLeft = false;
      }else{

        this.left.x = this.x - 50;
        this.left.y = this.y + 30;
      }


    }else{
      this.left.addValue(node);

    }

  }else if(this.value < node.value){
    if(this.right == null){
      // this.right = node;
      // this.right.x = this.x + 70;
      // this.right.y = this.y + 30;
      this.right = node;
      if(firstTimeRight){

        this.right.x = this.x + 100;
        this.right.y = this.y + 30;
        firstTimeRight = false;

      }else{
        this.right.x = this.x + 50;
        this.right.y = this.y + 30;
        
      }



    }else{
      this.right.addValue(node);
    }
  }

}

Node.prototype.visit = function(parent){
  if(this.left != null){
    this.left.visit(this);
  }


  fill(255);
  stroke(255);
  line(parent.x, parent.y, this.x, this.y);
  text(this.value, this.x, this.y - 3);

  if(this.right != null){
    this.right.visit(this);
  }

}

//remove
Node.prototype.removeValue = function(val, parent){
  if(this.value === val){


    if(this.left == null && this.right == null){
      if(parent.right){
        parent.right = null;
      }else if(parent.left){
        parent.left = null;
      }


    }else if(this.left != null && this.right != null){
      //Deleting a node with two children: call the node to be deleted D. Do not delete D.
      // Instead, choose either its in-order predecessor node or its in-order successor node as replacement node E (s. figure).
      // Copy the user values of E to D.[note 2] If E does not have a child simply remove E from its previous parent G.
      // If E has a child, say F, it is a right child. Replace E with F at E's parent.
      var theMostLeft = this.right.searchTheLeft();
      this.value = theMostLeft.value;

      theMostLeft.removeValue(theMostLeft.value);


    }else if(this.left != null){
      this.left.value = this.left.value;
      this.left.removeValue(this.left.value);
    }else if(this.right != null){

      this.value = this.right.value;
      this.right.removeValue(this.right.value, this);
    }


  }

  else if(this.left && this.left.value === val){
    //Deleting a node with no children: simply remove the node from the tree.
    if(this.left.left == null && this.left.right == null){
      this.left = null;
    }else if(this.left.left != null && this.left.right != null){
      //Deleting a node with two children: call the node to be deleted D. Do not delete D.
      // Instead, choose either its in-order predecessor node or its in-order successor node as replacement node E (s. figure).
      // Copy the user values of E to D.[note 2] If E does not have a child simply remove E from its previous parent G.
      // If E has a child, say F, it is a right child. Replace E with F at E's parent.
      var theMostLeft = this.left.right.searchTheLeft();
      this.left.value = theMostLeft.value;
      theMostLeft.removeValue(theMostLeft.value);
    }else if(this.left.left != null){
      this.left.value = this.left.left.value;
      this.left.left.removeValue(this.left.left.value);
    }else if(this.left.right != null){
      this.left.value = this.left.right.value();
      this.left.right.removeValue(this.left.right.value);
    }


  }else if(this.right && this.right.value === val){

    if(this.right.left == null && this.right.right == null){
      this.right = null;
    }else if(this.right.left != null && this.right.right != null){
      //Deleting a node with two children: call the node to be deleted D. Do not delete D.
      // Instead, choose either its in-order predecessor node or its in-order successor node as replacement node E (s. figure).
      // Copy the user values of E to D.[note 2] If E does not have a child simply remove E from its previous parent G.
      // If E has a child, say F, it is a right child. Replace E with F at E's parent.
      var theMostLeft = this.right.right.searchTheLeft();
      this.right.value = theMostLeft.value;
      theMostLeft.removeValue(theMostLeft.value);
    }else if(this.right.left != null){
      this.right.value = this.right.left.value;
      this.right.left.removeValue(this.right.left.value);
    }else if(this.right.right != null){
      this.right.value = this.right.right.value;
      this.right.right.removeValue(this.right.right.value);
    }




  }



  if(this.left != null && val < this.value){
    return this.left.removeValue(val);
  }

  if(this.right != null && val > this.value){
    return this.right.removeValue(val);
  }

}




Node.prototype.searchTheLeft = function(){

  if(this.left != null){
    return this.left.searchTheLeft(val);
  }else{
    return this;
  }


}
