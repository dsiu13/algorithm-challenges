//Tree Node Example
function Node(val){
  this.value = val;
  this.left = null;
  this.right = null;
}

//Create a Constructor
function BinarySearchTree(){
  this.root = null;
}

// Smaller Values are placed Left, Larger Values go Right.
BinarySearchTree.prototype.push = function(val){
   var root = this.root;

   if(!root){
      this.root = new Node(val);
      return;
   }

   var currentNode = root;
   var nextNode = new Node(val);

   while(currentNode){
      if(val < currentNode.value){
          if(!currentNode.left){
             currentNode.left = nextNode;
             break;
          }
          else{
             currentNode = currentNode.left;
        }
     }
     else{
         if(!currentNode.right){
            currentNode.right = nextNode;
            break;
         }
         else{
            currentNode = currentNode.right;
         }
     }
  }

};

var bst = new BinarySearchTree();
bst.push(3);
bst.push(2);
bst.push(4);
bst.push(1);
bst.push(5);
