class AVLNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1; // height of node
    }
}

class AVLTree {
    constructor(a){
        this.tree = a;
    }
    treepie(root){

    }
     settle(root){
    
        
       

     

      


     }


    delete(v, root){
        
        if( root.value == v){
           this.settle(root);                    
        }
        else if(root.value  > v){
            root.left = this.delete(v, root.left);
        }else if(root.value < v){
            root.right = this.delete(v, root.right);
        }
        return root;
    }
    
    
    
    // Get height of a node
    height(node) {
        return node ? node.height : 0;
    }

    // Get balance factor
    getBalance(node) {
        return  node ? (node.left?.height ?? 0) - (node.right?.height ?? 0) : 0;
    }

    // Right rotation
    rightRotate(y) {
       
        let x = y.left;
        let T2 = x.right;

        // Perform rotation
        x.right = y;
        y.left = T2;

        // Update heights
        y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;
        x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;

        // Return new root
        return x;
    }

    // // Left rotation
    leftRotate(x) {
       
           let y = x.right;
            let t2 = y.left;
           //rotate
            y.left = x;
            x.right = t2;
            // Update heights
        y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;
        x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;
        return y;

    }
    setAgain(node, set){
        let value = set.value;
         if(!node) return node;
       if(node.value > value){
       node.left = this.insert(node.left, value);
       }
       else if(node.value < value){
       node.right = this.insert(node.right, value);
       }
       else{
        return node;
       }
       node.height = 1 + Math.max(this.height(node.left), this.height(node.right));
           

      
      return this.rotation(node, value);
    }

    // Insert a value
    insert(node, value) {
        if(!node) return new AVLNode(value);
       if(node.value > value){
       node.left = this.insert(node.left, value);
       }
       else if(node.value < value){
       node.right = this.insert(node.right, value);
       }
       else{
        return node;
       }
       node.height = 1 + Math.max(this.height(node.left), this.height(node.right));
           

      
      return this.rotation(node, value);

    }

    rotation(node, value){
        let balance  =  this.getBalance(node);
       // balance =  node.balance;
         
      let r = null;
            
        //for ll rotation
        if (balance < -1 && value > node.right?.value) {
          
            node = this.leftRotate(node);
        }
        //rr rotation
        if(balance > 1 && value < node.left?.value){
            node = this.rightRotate(node);
        }
        //rl rotation
        if(balance < -1 && value < node.right?.value){
           
          node.right = this.rightRotate(node.right);
            node = this.leftRotate(node);
        }
        //lr rotation
        if(balance > 1 && value > node.left?.value){
           node.left = this.leftRotate(node.left);
            node = this.rightRotate(node);
        }
       balance = this.getBalance(node);
   
       if(balance > 1){
         node = this.rotation(node, -Infinity);
       }else if(balance < -1){
          node = this.rotation(node, Infinity);
       }
       return  node;
    }
    


    // Inorder traversal
    inorder(node) {
        if (node) {
            this.inorder(node.left);
            console.log(node.value);
            this.inorder(node.right);
        }
    }

    //post order

    postorder(node) {
        if (node) {
            this.postorder(node.right);
            console.log(node);
            this.postorder(node.left);
        }
    }
}


let tree = new AVLTree(null);
let root = null;

[10,20,30,40,50,60,70].forEach(val => {
    root = tree.insert(root, val);
});
 console.log(root);
console.log(tree.delete(40, root));

 //tree.postorder(root);

